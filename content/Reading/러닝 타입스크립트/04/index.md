---
title: '[러닝 타입스크립트] 04. 객체'
path: blog/reading/learning-typescript-04
tags: [Reading]
cover: './cover.png'
date: 2023-02-15
excerpt: 읽고 또 읽어야지 라는 생각으로 빠르게 읽는 러닝 타입스크립트
---

* 객체 리터럴 타입 : 각자의 타입이 있는 키와 값의 집합
	* 타입 별칭을 통해서 선언하는 방법 : 매개변수 타입이나 리턴값의 타입 선언할 때 사용하면 좋을 듯

	```ts
	// 선언 방법1 - 객체 리터럴로 선언
	let poetLater :{
		born : number;
		name : string;
	}

	// 선언방법 2 - 별칭 
	type Poet = {
		born : number;
		name : string;
	}
	```

* 구조적 타이핑
	* 객체가 어떤 속성들을 가지는지 -> 즉 구조를 기준으로 타입을 따진다.
	* 타입 스크립트의 타입은 집합 (어떤 조건에 따라 결정되는 요소의 모임)
	* 자바스크립트는 덕 타입인 반면 타입스크립트는 구조적으로 타입화한다
		* 구조적 타이핑은 정적 시스템이 타입을 검사하는 경우 
		* 덕 타이핑은 런타임에서 사용될 때까지 객체 타입을 검사하지 않는 것
	* 객체 타입은 필수 속성 이름과 해당 속성이 예상되는 타입을 모두 지정함. -> 객체 속성이 일치하지 않으면 타입스크립트는 타입 오류를 발생시킴
* 초과 속성 검사 
	* 객체가 선언될 때만 초과 속성이 있는지 검사한다. 
	* 객체 선언 이후에는 초과 속성 검사를 하지 않기 때문에 에러가 발생하지 않는다.

	```ts
	type Poet = {
		born : number;
		name : string;
	}	

	// 초과 속성 에러 발생 
	const extraProperty : Poet = {
		activity : 'walking',
		born : 1995,
		name : 'test'
	}

	// 초과 속성 에러 발생 안함.
	const extraProperty = {
		activity : 'walking',
		born : 1995,
		name : 'test'
	}

	const extraPropertyButOk : Poet = extraProperty
	```
	
* 속성의 중첩과 선택적 속성
	* 선택적 속성은 undefined이 포함된 유니온 속성과 다르다.
	* undefined 포함된 유니온 속성은 값이 undefined 일지라도 반드시 존재해야 한다. 
	
	```ts
	type Author = {
		firstName : string;
		lastName : string;
	}

	type Poem = {
		author? : Author; // 중첩 및 선택적 속성 
		title : string;
	}

	// 선택적 속성과 undfined를 포함한 union 차이
	// 1. 선택적 속성일 경우 
	const p1 = { title : "hello" } -> author가 없어도 에러 발생 안함.

	// 2. 선택적 속성이 아닌 Author | undefined 인 경우 
	const p2 = {title : 'hello' } -> author의 값이 없기 때문에 에러 발생
	```

* 객체 타입 내로잉 
	* 타입 검사기가 유니언 타입 값에 특정 속성이 포함된 경우에만 코드 영역을 실행할 수 있음을 알게 되며느 값의 타입을 해당 속성을 포함하는 구성 요소로만 좁힌다. 
	* 코드에서 객체의 형태를 확인하고 타입 내로잉이 객체에 적용된다. 
	* 객체의 타입 내로잉 
		* in 연산자를 사용 
			* 존재하지 않는 객체의 속성에 접근하려고 시도하면 타입 가드처럼 작동하는 방식으로 사용되더라도 타입 오류로 간주한다.
		```js
		if('속성명' in 객체 타입) {...}
		```

		* 판변된 유니언, 판별값
			* 판별된 유니언 : 객체의 속성이 객체의 형태를 나타내도록 함.
			* 판별값 : 객체의 타입을 나타내는 속성 
		```ts
		// type 속성으로 객체의 타입을 판별함.
		type PoemWIthPages = {
			name : string;
			pages : number;
			type : 'pages';
		}

		type PoemWithRhymes = {
			name : string;
			rhymes : boolean;
			type : 'rhymes';
		}
		```

* 교차 타입 
	* &를 사용해 여러 타입을 동시에 나타냄 -> 합집합
	* 복잡하게 사용할 경우 할당 가능성 오류 메시지가 길어짐.
	* 잘 못 사용할 경우 never 타입이 됨.
		* never 키워드와 never 타입은 프로그래밍 언어에서 bottom 또는 empty 타입을 뜻함.
		* 값을 가질 수 없고, 차마조할 수 없는 타입을 의미
	```ts
	type noPossible = number & string -> never 타입이 됨.	
	```