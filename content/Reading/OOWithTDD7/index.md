---
title: "[테스트 주도 개발로 배우는 객체지향 설계와 실천] 20장 테스트에 귀 기울이기"
path: blog/Reading/OO-design-and-practice-learning-with-tdd7
tags: [Reading,OO]
cover:  "./cover.png"
date: 2021-05-10
excerpt: 테스트 주도 개발로 배우는 객체지향 설계와 실천 20장 내용 정리 
draft : false
---

## 20장 테스트에 귀 기울이기

* 코드에 추가하고 싶은 일부 기능에 대한 테스트 작성의 어려움 => 설계를 개선해야 한다.
* 테스트 주도 
  * 기능과 성능처럼 겉으로 드러나는 품질 속성( 클래스의 결합도와 응집력, 명시적이거나 감춰진 의존성, 효과적인 정보 은닉)을 검증하는 활동
  * 객체를 손쉽게 테스트하게 해주는 품질 요소가 코드를 변화에 반응성 있게 만들어 준다.
  * 코드를 유지 보수 가능한 상태로 유지하는 품질 속성에 관한 작업
  * 설계에 관한 신속한 피드백 
  * 테스트하기 어려운 기능 -> 왜 테스트하기 어려운가?

### 테스트 악취

1. 테스트 자체가 제대로 작성되지 않은 경우 : 테스트가 불분명하거나 불안정하게 작성된 경우
2. 세트스에서 대상 코드가 문제라고 강조되는 경우 : 테스트하기 어려운 경우

* 테스트 이름이 그 테스트 케이스가 의도하는 바를 명확히 설명하지 못하며 다른 테스트 케이스와의 차이점도 드러내지 못하는 경우
* 테스트 케이스 하나로 여러 기능을 테스트하는 경우
* 테스트 구조가 서로 달라서 코드를 읽는 사람이 테스트를 쭉 훑어 보는 것만으로는 테스트 의도를 이해할 수 없음.
* 테스트를 준비하고 예외 처리를 하는 코드가 너무 많아서 핵심 로직이 파묻힘
* 리터럴 값(매직넘버)를 사용하지만 해당 값의 정체가 명확하지 않는 테스트 

### 대체할 수 없는 객체에 목 객체 적용

* 전역 구조인 객체에 목 객체 적용 => 예시 : 자바 날짜 라이브러리 
  * 전역 객체를 사용하는 객체가 생성되는 방법을 제어 => clock
* 전역 값을 사용해 캡슐화를 우회함으로써 컴포넌트 호출자로부터 의존성을 감출 수 있지만 그렇게 한다로 해서 의존성이 사라지지는 않으며, 단지 의존성에 접급할 수 없게 될 뿐이다(267p) = 암시적 의존성도 여전히 의존성이다.

### 구상 클래스에 대한 목 객체 적용

* 인터페이스 분리 원칙 : 클라이언트가 사용하지 않는 인터페이스에 의존하게 해서는 안된다.
* 그러나 예외 상황일때는 이 방법을 사용하기도 함
  * 상호 작용 테스트에 대한 접근법 : 인터페이스가 아니라 구상 클래스를 대항으로 목 객체를 적용
* 클래스의 내부 기능을 재정의 해서는 안 된다.(273p)
  * 현재 구현의 유별난 부분에서 테스트가 묶여버림
  * 가시적인 메서드만 재정의해야 한다.

### 값에 목 객체 적용

* 값 객체에 목 객체를 적용할 필요가 없는 이유
  1. 값은 불변적이다.
  2. 해당 타입의 인터페이스를 구현하는 클래스를 대상으로 의미 있는 이름을 생각해낼 수 없다.
* 값 객체의 인스턴스를 생성하기 어려워 목 객체를 적용하고 싶을 경우 -> 빌더를 작성하는 방법 고려

### 비대한 생성자

* 생성자의 인자 목록이 길고 다루기 어려운 경우 
  * 인자 목록으로부터 도출할 수 있는 암시적 구조가 있는지 확인
    *  -> 특정 개념을 나타내는 일부 인자를 묶어 새로운 객체로 대체할 수 있음
    *  암시적인 컴포넌트를 뽑아낼 경우 2가지 조건 살펴보기
       1. 해당 클래스에서 늘 함께 사용되는 수명이 같은 인자가 있는가
       2. 1번 조건에 일치하는 부분에 어울리는 이름은 무엇인가? ( 276p. 조건이 일치하는 부분을 찾고 나면 해당 개념을 설명하는 더 나은 이름을 알아내는 좀 더 어려운 일이 남는다. )
  * 객체에 역할이 너무 많아서 객체 자체의 규모가 너무 크다는 의미 
    * 역할을 분리 
  * 모든 인자가 객체 이웃의 유형에서 의존성이 아닌 경우
    * 알림과 조정 객체는 기본 값을 설정할 수 있고 나중에 재설정이 가능하다.

### 너무 많은 예상 구문

* 테스트에 예상 구문이 너무 많으면 중요한 것이 무엇이고 실제로 무엇을 테스트하는지 파악하기 어렵다,

### 테스트 악취에 귀 기울이기의 이점 (281p ~)

1. 지식의 초점이 특정 객체에 맞춰진다.
   * 테스트 악취의 일부는 컴포넌트 간에 새어 나가는 지식과 관련있다.
   * 지식을 특정 객체에 국한할 수 있다면 해당 객체의 구현은 그것을 둘러싼 콘텍스트에 독립성을 유지할 수 있다.
2. 뭔가가 명시적이라면 거기에 이름을 부여할 수 있다.
   * 구상 클래스를 대상으로 목 객체를 적용하는 것을 좋아하지 않는 한 가지 이유는 여러 객체 간의 관계는 물론 객체 자체에도 이름을 부여하길 좋아하기 때문이다.
3. 이름이 더 많다는 것은 도메인 정보가 더 많다는 의미다.
   * 객체가 어떻게 상호 작용하는지 강조할 경우 구현보다 좀 더 도메인 측면에서 정의된 타입과 역할을 갖게 된다.
   * 자그마한 추상화가 많이 되어 있기 때문
4. 데이터 대신 행위를 전달하라.
   * '묻지 말고 말하라'를 꾸준히 적용하다 보면 스택을 통해 값을 꺼내는 대신 시스템에 행위를 전달하는(콜백 현태로) 경향을 보이는 코딩 스타일이 만들어짐. 
   * 좀 더 정확한 인터페이스는 더 나은 정보 은닉과 더운 명확한 추상화를 가능하게 한다.

* 테스트와 코드를 깔씀하게 유지하는 것 -> 도메인을 이해하고 새로운 요구 사항으로 말미암아 설계를 변경해야 하는 경우에 대처하지 못하는 위험을 줄이는 데 도움이 됨.
* 가독성 있고 유연한 테스트를 작성하는 데 노력을 기울임으로써 테스트하는 코드의 내부 품질에 관한 피드백을 좀 더 얻을 수 있다.
* 이해하기 어려운 테스트 
  * 1000줄 이상의 단위 테스트
  * 많은 픽스처 생성
  * 너무 많은 준비과정 