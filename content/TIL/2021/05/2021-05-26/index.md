---
title: "20210526 TIL"
path: blog/TIL/20210525
tags: [TIL]
cover:  "./tilbanner.jpg"
date: 2021-05-26
excerpt: 린 ux 스터디를 참여했습니다. 
---

## Facts

* 해쉬를 코틀린으로 구현했습니다.
  * 충돌을 해결하기 위한 방법으로 chaining기법을 사용하여 구현했습니다.

* 린 ux 7,8장을 읽었습니다.
* 린 ux 스터디를 참여했습니다. 

## Feelings

* 오전 시간에 어제 일자의 TIL을 작성했습니다. 오전 시간에 어제 일자의 TIL을 작성하니 어제 내용을 복습할 수 있어서 좋은 것 같습니다. 또 오전 시간이 낭비되지 않아서 좋습니다.  
* 스터디를 또 하나 끝내게 되어 뿌듯합니다. 지금까지 했던 스터디들을 정리하는 시간을 갖으면 더 좋을 것 같습니다. 
* 스터디를 통해서 좋은 가르침을 받았습니다. 할 줄 모르면 쓸모가 없다 라는 내용이었는데 자극이 많이 되었던 것 같습니다.

## Findings

* kotlin 문법
  * kotlin String의 isEmpty()와 isBlank()의 차이점 : 
    * isEmpty() : 문자를 포함하고 있지 않으면 true를 리턴한다. ( "".isEmpty() -> true리턴 )
    * isBlank() : 공백을 포함하고 있거나 empty일 경우 true를 리턴한다. ( "".isBlack() -> true리턴, " ".isBlank() -> true리턴 )
  * kotlin data class
    * 참고 
      * [kotlin - data class](https://kotlinlang.org/docs/data-classes.html)
      * kotlin in action 4.3
      * [권태환님 블로그](https://thdev.tech/kotlin/2020/09/15/kotlin_effective_02/)
    * 사용하는 이유 : 
      * 데이터를 보관하는 클래스인 경우 사용
      * 어떤 클래스가 데이터를 저장하는 역할만을 수행한다면 toString, equals, hashCode를 반드시 오버라이드해야 한다. -> 코틀린 컴파일러는 이런 메소드를 기계적으로 생성하는 작업을 보이지 않는 곳에서 해준다.
      * 필수 코드로 인한 잡음 없이 소스코드를 깔끔하게 유지할 수 있다. 
    * equals()와 hashCode()에 대해서는 다른 글로 정리

## Future Action Plans

- 안드로이드 개발 좀 해라...
- 자꾸 딴 생각하지 않게 정신을 똑띠 차려야겠습니다.