---
title: '[러닝 타입스크립트] 03. 유니언과 리터럴'
path: blog/reading/learning-typescript-03
tags: [Reading]
cover: './cover.png'
date: 2023-02-13
excerpt: 읽고 또 읽어야지 라는 생각으로 빠르게 읽는 러닝 타입스크립트
---

* 유니온(union) : 값에 허용된 타입을 두 개 이상의 가능한 타입으로 확장하는 것 
```js
let data : string | undefined; 
```

	* union으로 묶여있는 모든 타입의 공통 속성에 대해서만 접근할 수 있다. 

```
let data : string |number 
data.toString() // 가능 
data.toUpperCase() //에러 
data.toFixed() //에러
```
* 내로잉(narrowing) : 값에 허용된 타입이 하나 이상의 가능한 타입이 되지 않도록 하는 것
	* 이전에 유추된 타입보다 더 구체적인 타입임을 코드에서 유추하는 것 
	* 타입 가드 : 타입을 좁히는데 사용할 수 있는 논리적 검사 
	* narrowing 방법
		* 값 할당 : 유니온 타입으로 선언 -> 값 할당 -> 할당된 값으로 타입이 좁혀짐.
		* 조건 검사 
		* typeof 연산자 사용 - 주로 많이 사용하는 형태!
* 리터럴 타입 : 특정 원시값
	* 동일한 원시 타입일지라도 서로 다른 리터럴 타입은 서로 할당할 수 없다.
```
let data : 'hello';
data = 'hi' // 에러 
data = 'hello' // 가능
```
* 엄격한 null 검사 
	* "strictNullChecks": true -> 모든 데이터 타입은 null, undefined를 할당 받을 수 없음(에러 발생). 유니온은 가능
```
// ts.config
"strictNullChecks": false,
```
	* if 구문을 통해서는 타입 추론이 되지만 &&, ? 연산자 사용은 타입 추론이 안됨. 
```
let data = Math.random() > 0.5 ? "hello" : uundefined;
if(data){
	data.toUpperCase() // string으로 추론됨.
}
data?.toUpperCase() // string으로 추론안됨. data의 타입은 string | undefined
```
* 타입 별칭 : 재사용하는 타입에 더 쉬운 이름을 할당할 수 있게 함.
	* 타입 별칭은 자바스크립트로 컴파일 되지 않는다. 
	* 순전히 타입 시스템에만 존재하므로 런타임 코드에서 참조할 수 없다. -> 순전히 개발 시에만 존재.