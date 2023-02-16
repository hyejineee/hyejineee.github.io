---
title: '[러닝 타입스크립트] 06. 배열'
path: blog/reading/learning-typescript-06
tags: [Reading]
cover: './cover.png'
date: 2023-02-15
excerpt: 읽고 또 읽어야지 라는 생각으로 빠르게 읽는 러닝 타입스크립트
---

* 타입 스크립트의 배열 
	* 자바스크립트의 배열보다 제한을 많이 둠. -> 초기 배열에 어떤 데이터 타입이 있는지 기억하고, 배열이 해당 데이터 타입에서만 작동하도록 제안한다.
	* 자바스크립트에서조차도 배열의 길이보다 큰 인덱스로 배열 요소에 접근하면 undefined를 리턴함. -> 오류 표시 x -> 타입 스크립트에서도 마찬가지

	* 선언 방법
	```js
	// 일반 타입 - number 타입의 요소만 갖는 배열 
	const arr : number[];
	// union 타입 배열 - number 또는 string 타입의 요소를 갖는 배열 
	const arr : (string | number)[]
	// 함수 타입 배열 
	const arr : (()=> string)[]
	// 2차원 배열 
	const arr : number[][]
	```
* 튜플 
	* 고정된 크기의 배열
	* 코틀린에서 튜플 사용하는거랑 비슷
	```js
	let touple : [number,string]
	```
	* 타입스크립트에서 튜플 타입은 가변 길이의 배열 타입보다 더 구체적으로 처리됨 -> 가변 길이의 배열 타입은 튜플에 할당할 수 없음.

	* 타입스크립트는 생성된 배열을 튜플이 아닌 가변 길이의 배열로 취급 -> 명시적 튜플 타입과 const 어설션으로 구체적으로 튜플 타입이어야 함을 나타낼 수 있음.
	
	* 명시적 튜플 타입 
		* 타입 애너테이션을 사용해서 튜플 타입임을 명시적으로 표현할 수 있음
	```js
	function test(input : string) : [string, numer] {
		return [input[0], input.length]
	}
	```

	* const 어설션 
		* as const 연산자 
		* const 어설션은 타입스크립트에 타입을 유추할 때 읽기 전용이 가능한 값 형식을 사용하도록 지시