---
title: "20211028 TIL"
path: blog/TIL/20211028
tags: [TIL]
cover:  "./TIL.png"
date: 2021-10-28
excerpt:
draft: false
---

## Facts

* 안드로이드 도서 리뷰앱 구현 중 
  * 테스트 코드를 작성하면서 구현 중입니다.

* 패캠 the red: 슈퍼앱을 위한 확장성 높은 앱 아키텍처 구현을 수강했습니다.
  * 복잡한 플로우 만들기 -1 부분을 수강했습니다.

* 안드로이드 에어비앤비 강의를 수강했습니다.


  
## Feelings

* RIBs의 구조를 한 번 정리하는 것이 좋을 것 같습니다. 점점 복잡해지는 것 같습니다. 뭔가 패턴은 있는 것 같은데... 강의가 진행되는 플랫폼이 ios이다 보니 생소한 키워드들이 많은 것 같습니다. 이번 주말에 구조를 한 번 정리해야겠습니다.

* 안드로이드 에어비앤비 강의로 한 파트가 끝났습니다. 아직 구현해야할 것은 많지만 인강을 이렇게 열심히 본 적은 처음이라 뿌듯합니다.

## Findings

* InstantTaskRule 설정하고 TestCoroutineDispatcher도 설정 해줬는데 
  * Module with the Main dispatcher had failed to initialize. For tests Dispatchers.setMain from kotlinx-coroutines-test module can be used에러 발생 
  * 아래에 보니 Method getMainLooper in android.os.Looper not mocked. 문제도 발생 
  ```groovy
    testOptions{
        unitTests.returnDefaultValues = true
    }
  ```
  * 위에 추가해서 문제 해결
  * [참고](http://tools.android.com/tech-docs/unit-testing-support#TOC-Method-...-not-mocked.-)



## Future Action Plans















