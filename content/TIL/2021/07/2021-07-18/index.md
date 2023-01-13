---
title: '20210718 TIL'
path: blog/TIL/20210718
tags: [TIL]
cover: './TIL.png'
date: 2021-07-18
excerpt: 너무 덥다. 더워어ㅓ
---

## Facts

- kotlin asSequence에 대해 공부했습니다.
- 안드로이드 코드랩 : test-basic을 공부했습니다.

## Feelings

- 오늘도 너무 덥습니다. 에어컨 필요해...
- kotlin asSequence에 대해서 얼핏 알았었는데 이번 기회에 공식 문서와 kotlin in action을 참고하여 정리했습니다. 흐릿하게 알았던 것을 제대로 알게 되어서 좋습니다. 코딩 테스트 때 많이 써먹어야겠습니다.
- 안드로이드 고급 코드랩에 있는 test 부분을 보고 있습니다. 인강보다 코드랩 보면서 공부하는 게 더 재미있는 것 같습니다.

## Findings

- [kotlin-asSequences](https://hyejineee.github.io/blog/Kotlin/kotlin-Sequence) 을 정리한 글
- android codelab : test-basic

  - assertion은 테스트의 핵심이다.
    - 코드 또는 애플리케이션이 예상대로 작동 했는지 확인하는 코드
  - 계측 테스트
    - 안드로이드os, 프레임워크 위에서 실행되는 테스트
    - 언제 계측 테스트를 사용하는가?
      - 테스트 실행이 에뮬레이터 또는 실제 기기에서 반드시 실행되어야 할 경우
      - 또는 실제 기기에서 실행함으로 이점이 있는 경우
  - 테스트 구조 : BDD

    - given-when-then
      - given : 테스트에 필요한 객체와 앱 상태를 설정한다.
      - when : 테스팅할 객체에 실제 작업을 수행한다.
      - then : 작업을 수행 했을 때 작업이 실패했는지 성공했는지 확인한다.
    - [describe-context-it. 종립님 블로그 참고](https://johngrib.github.io/wiki/junit5-nested/)
      - 상황을 설명하기 보다는 테스트 대상을 주인공 삼아 행동을 더 섬세하게 설명하는 데에 적합하다.
      - describe : 설명할 테스트 대상을 명시
      - context : 테스트 대상이 놓인 상황을 설명
      - it : 테스트 대상의 행동을 설명

  - 테스트 주도 개발
    - 코드를 먼저 작성하는 대신 테스트를 먼저 작성하여 개발을 이끄는 방식
    - 일반적인 테스트 작성(red-green-refactoring) - 버그 테스트 작성 (red-green-refactoring)
  - AndroidX Test

    - AndroidX Test란 무엇인가?
      - 테스트용 라이브러리 모음. 테스트를 위한 application 및 activity와 같은 구성요소 버전을 제공하는 클래스와 메서드가 포함된다.
      - androidx test api는 로컬 테스트와 계측 테스트 모두에서 작동하도록 빌드 된다.
        - 로컬 테스트, 계측 테스트와 동일한 테스트 수행할 수 있음.
        - 다른 api를 학습할 필요 없음.
    - test에서 android application context가 필요할 경우
      - androidx test 라이브러리 사용
      - ApplicationProvider.getApplicationContext()
        - 계측 테스트인 경우 실제 application context제공
        - 로컬 테스트인 경우 시물레이션된 안드로이드 환경 제공

  - Robolectric
    - 시뮬레이션된 안드로이드 환경을 제공하는 라이브러리
  - test-runner
    - 테스트를 실행시키는 junit 컴포넌트. 테스트 러너가 없으면 테스트를 실행할 수 없다.
    - junit에서 기본적으로 default runner를 제공하지만 @RunWith()를 통해 기본 테스트 러너를 교체할 수 있다.

## Future Action Plans

- 내일은 쉽니다.
