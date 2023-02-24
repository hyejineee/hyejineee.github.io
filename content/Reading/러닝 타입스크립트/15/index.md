---
title: '[러닝 타입스크립트] 15. 타입 운영'
path: blog/reading/learning-typescript-15
tags: [Reading]
cover: './cover.png'
date: 2023-02-23
excerpt: 읽고 또 읽어야지 라는 생각으로 빠르게 읽는 러닝 타입스크립트
---

* 타입 운영을 사용해야 하는 경우 향후 코드를 읽어야 하는 모든 개발자를 위해 가능한 한 최소한으로 사용하도록 노력할 것

* 매핑된 타입
	* 다른 타입의 속성을 기반으로 새로운 타입을 생성하는 구문을 제공함. -> 하나의 타입에서 다른 타입으로 매핑
	* 다른 타입에 대해 작동하고 멤버에서 제한자를 추가하거나 제거할 수 있을 때 유용하게 사용됨.

	```ts
	type Animals = "alligator" | "baboon" | "cat"
	type AnimalCounts = {
		[k in Animals] : number
	}

	{
		alligator : number;
		baboon : number;
		cat : number;
	}
	```

	* 매핑된 타입 멤버 값은 동일한 키 아래에서 원래 타입의 해당 멤버 값을 참조할 수 있다. 

	```ts
	interface BirdVariants{
		dove : string
		eagle : boolean
	}

	type NullableBirdVariants = {
		[K in keyof BirdVariants] : BirdVariants[K] | null
	}
	```

	* 매핑된 타입은 객체 타입의 메서드와 속성 구문을 구분하지 않는다. -> 매핑된 타입에서는 모두 속성 구문 타입으로 표현됨.
	* 제한자 변경

	```ts
	// 제한자 추가 - readonly또는 ?를 추가할 수 있음.
	interface Environmentalist{
		area : string;
		name : string;
	}

	type ReadonlyEnvironmentalist = {
		readonly [K in keyof Environmentalist] : Environmentalist[K]
	}
	->
	{
		readonly area : string;
		readonly name : string;
	}

	// 제한자 제거 - 제한자 앞에 -를 추가
	interface ReadonlyEnvironmentalist{
		readonly area : string;
		readonly name : string;
	}

	type WritableEnvironmentalist = {
		-readonly [K in keyof Environmentalist] : Environmentalist[K]
	}
	->
	{
		area : string;
		name : string;
	}
	```

	* 제네릭 매핑된 타입
		* 제네릭 매칭된 타입으로 수행되는 일부 작업은 매우 유용하므로 타입스크립트는 제네릭 매핑된 타입을 즉시 사용할 수 있는 유틸리티 타입을 제공함.
		
	```ts
	type MakeReadonly<T> = {
		readonly [K in keyof T] : T[K];
	}

	interface Species{
		genus : string;
		name : string;
	}

	type ReadonlySpecies = MakeReadonly<Species>
	->
	{	
		readonly genus : string;
		readonly name : string;
	}
	```


* 조건부 타입 
	* 타입스크립트의 타입 시스템은 논리 프로그래밍 언어의 한 예 
	* 타입 시스템은 이전 타입에 대한 논리적인 검사를 바탕으로 새로운 구성을 생성한다.
	* 조건부 타입 개념은 기존 타입을 바탕으로 두 가지 가능한 타입 중 하나로 확인되는 타입

	```ts
	Type1 extends Type2 ? TrueType : FalseType 
	```

	* 조건부 타입에서 논리적 검사는 항상 extends의 왼쪽 타입이 오른족 타입이 되는지 또는 할당 가능한지 여부에 있다. 
	-> Type1번이 Type2에 할당이 가능한가? 
	* 제네릭 조건부 타입

	```ts
	type CallableSetting<T> = T extends () => any ? T : () => T
	type GetNumberSetting = CallbableSetting<()=>number> // () => number[]
	type StringSetting = CallableSetting<string> // () => string
	```


* 타입 분산
	* 참고 : [TS 📘 타입스크립트 - 조건부 타입 완벽 이해하기](https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%A1%B0%EA%B1%B4%EB%B6%80-%ED%83%80%EC%9E%85-%EC%99%84%EB%B2%BD-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)
	* 조건부 타입은 유니언에 분산된다. 
	* 결과 타입은 각 구성 요소(유니언 타입 안의 타입)에 조건부 타입을 적용하는 유니언이 됨을 의미하다. 
	* 유니온으로 묶인 타입 하나하나 마다 조건부 타입 검사를 하고 그 결과값들을 묶어 다시 유니온으로 반환하는 것

	```ts
	type ArrayifyUnlessString<T> = T extends string ? T : T[]
	type HalfArrayified = ArrayifyUnlessString<string | number>

	// HalfArrayified의 타입
	(string extends string ? string :string[]) | (number extends string ? string : number[])
	->
	string | number[]
	```

	* 유추된 타입 
		* extends 절에 타입에 대한 infer 키워드와 새 이름을 배치하면 조건부 타입이 true인 경우 새로운 타입을 사용할 수 있음을 의미
	* 매핑된 조건부 타입

	```ts
	type MakeAllMembersFunctions<T> = {
		[K in keyof K] : T[K] extends (...args : any[]) => any ? T[K] | ()=>T[K]
	}

	type MemberFunction = MakeAllMemberFunctions<{
		alreadyFunction : ()=>string;
		notYetFunction : number;
	}>
	-> 
	{
		alreadyFunction : ()=>string;
		notYetFunction : ()=>number
	}
	```


* never 
	* never와 bottom 타입 : 가능한 값을 가질 수 없고 접근할 수 없음을 의미
	* 교차 타입(&)에 있는 never는 교차 타입을 never로 만든다.
	* 유니언 타입(|)에 있는 never는 무시된다. 
	* 분산 조건부 타입에서 never 타입으로 분산되었을 경우 이 타입은 제외한다. 

	```ts
	type Never<T> = T extends number ? T : never
	type T2 = Never<number | string | object> // number타입
	```

	* 객체의 키 필터링 하기 
		* 유니언에서 never는 무시된다.
		* 매핑된 타입은 타입의 멤버를 매핑할 수 있다. 
		* 조건부 타입은 조건이 충족되는 경우 타입을 never로 변환하는 데 사용할 수 있다. 

	```ts
	type OnlyStringProperties<T> = {
		[K in keyof T]: T[K] extends string ? K : never
	}[keyof T]

	interface AllEventData{
		participants : string[];
		location : string;
		name : string;
		year : number;
	}

	type OnlyStringEventData = OnlyStringProperties<AllEventData> // "location" | "name"
	```

* 템플릿 리터럴 타입
	* 문자열 타입이 패턴에 맞는지를 나타내는 타입스크립트 구문
	* 조합을 나타내야 할 때 쉽게 만들  수 있음.
	* 타입스크립트는 템플릿 리터럴 타입이 string, number, bigint, boolean, null, undefined와 같은 모든 원시 타입 또는 그 조합을 포함하도록 허용함.(symbol 제외)

	```ts
	type Brightness = "dark" | "light"
	type Color = "blue" | "red"

	type BrightnessAndColor = '${Brightness}-${Color}'
	-> 
	"dark-red" | "light-red" | "dark-blue" | "light-blue"
	```
	* 키 매핑
	```ts
	interface DataEntry<T>{
		key : T;
		value : string;
	}

	type DataKey = "location" | "name" | "year"

	type DataEntryGetters = {
		[K in DataKey as 'get${Capitalise<K>}'] : ()=>DataEntry<K>
	}
	->
	{
		getLocation : ()=>DataEntry<"location">;
		getName : ()=>DataEntry<"name">;
		getYear : ()=>DataEntry<"year">;
	}
	```