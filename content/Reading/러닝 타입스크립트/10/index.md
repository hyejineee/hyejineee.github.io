---
title: '[러닝 타입스크립트] 10. 제네릭'
path: blog/reading/learning-typescript-10
tags: [Reading]
cover: './cover.png'
date: 2023-02-17
excerpt: 읽고 또 읽어야지 라는 생각으로 빠르게 읽는 러닝 타입스크립트
---

 * 제네릭 
	* 타입을 마치 함수의 파라미터처럼 사용하는 것을 의미
	* 함수 또는 클래스 등 구현체의 내부에서 사용할 데이터의 타입을 외부에서 지정하는 기법
	* 타입스크립트는 제네릭 타입 매개변수를 원하는 수만큼 선언할 수 있다.
		* 타입 매개변수는 구조체(클래스, 인터페이스 등등)의 각 인스턴스에 대해 타입 인수라고 하는 서로 다른 타입을 함께 제공할 수 있지만, 타입 인수가 제공된 인스턴스 내에서는 일관성을 유지한다.

* 제네릭 함수, 인터 페이스, 클래스
	* 거의 비슷한 방식으로 사용됨.
	* 다중 함수 타입 매개변수 
		* 여러 개의 타입 매개변수를 설정할 수 있음 -> <K,U, V...>
		* 함수가 여러 개의 타입 매개변수를 선언하면 해당 함수에 대한 호출은 명시적으로 제네릭 타입을 모두 선언하지 않거나 모두 선언해야 한다. 
	* 선언 방법 

	```ts
	// 제네릭 함수 방법1 - 함수 선언식 사용
	function identity<T>(input : T){
		return input
	}

	// 제네릭 함수 방법2 - 화살표 함수 사용 
	// .tsx 파일에서 jsx 구분과 충돌하므로 일부 제한이 있음. tsconfig 따로 설정해야 함.
	const identify = <T>(input : T) => input

	// 제네릭 인터페이스 
	interface Node<T>{
		next ?: Node<T>;
		value : T
	}

	// 제네릭 클래스 
	class Secret<K, V>{
		key : K;
		value : V;

		constructor(key : K, value : V){
			this.key = key;
			this.value = value;
		}
	}
	```	
	
* 명시적 제네릭 타입 인수 
	* 기본값이 unknown으로 설정되는 것을 피하기 위해 타입 스크립트에 해당 타입 인수가 무엇인지 명시적으로 알려줘야 함.
	* 제네릭 인터페이스는 사용법에서 인터페이스의 타입 인수를 유추할 수 있음.
	* 제네릭 클래스는 함수 생성자에 전달된 매개변수의 타입으로부터 타입 인수를 유추할 수 있다면 타입스크립트는 유추된 타입을 사용한다. 

	```ts
	function logWrapper<T>(callback : (input : T)=>void){
		return (input : T) => {
			console.log(input)
			callback(input)
		}
	}

	// 명시적으로 타입을 표현해준 곳이 없어서 (input : unknown) => void 로 유추됨.
	logWrapper((input) => { console.log(input.length)})
	```
	
* 제네릭 클래스 
	* 확장 : extends 키워드를 사용해서 확장
	* 인터페이스 구현 : implement 키워드를 사용해서 구현
	* 상위 타입에 넘긴 타입 인수를 신경써서 개발해야 함.
	* 메서드 제네릭 
		* 클래스 메서드는 클래스 인스턴스와 별개로 자체 제네릭 타입을 선언할 수 있음.
	* 정적 클래스 제네릭
		* 클래스의 정적(static) 멤버는 인스턴스 멤버와 구별되고 클래스의 특정 인스턴스와 연결되지 않음 
			* 때문에 정적 멤버가 클래스 내부에 있는 정적 멤버가 아닌 멤버를 참조할 수 없음.

* 제네릭 타입 별칭

```ts
type Result<T> = FailureResult | SuccessfulResult<T>

interface FailureResult{
	error : Error;
	succeeded : false;
}

interface SuccessfulResult<T>{
	data : T;
	succeeded : true;
}

function handleResult(result : Result<string>){
	if(result.succeeded){
		// result는 SuccessfulResult<string>으로 타입이 좁혀짐
	} else {
		// result는 FailureResult로 타입이 좁혀짐
}
```

* 기본값 
	* 함수의 기본값 설정 하듯이 사용. 모든 기본 타입 매개변수는 기본 함수 매개변수처럼 선언 옥록의 제일 마지막에 와야 한다.

* 제한된 제네릭 타입
	* 타입스크립트는 매개변수가 타입을 확장해야 한다고 선언할 수 있으며 별칭 타입에만 혀용되는 작업.
	* extends 키워드를 배치하고 그 뒤에 이를 제한할 타입을 배치

	```ts
	interface WithLength{
		length : number;
	}

	// length 속성이 있는 타입만 받을 수 있도록 제한
	function logWithLength<T extends WithLength>(input : T){
		console.log(`Length : ${input.length}`)
		return input
	}
	```

* Promise 
	* 값을 resolve하려는 promise를 만들려면 Promise의 타입 인수를 명시적으로 선언해야 한다.
	* 타입 스크립트는 명시적 제네릭 타입 인수가 없다면 기본적으로 매개변수 타입을 unknown으로 가정한다.

	```ts
	// 타입 : Promise<unknown>
	const resolveUnknown = new Promise((resolve)=>{
		setTimeout(()=>resolve('done'), 1000);
	})

	// 타입 : Promise<number>
	const resolveUnknown = new Promise<string>((resolve)=>{
		setTimeout(()=>resolve('done'), 1000);
	})
	```