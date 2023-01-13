---
title: '20210725 TIL'
path: blog/TIL/20210725
tags: [TIL]
cover: './TIL.png'
date: 2021-07-25
excerpt: 내가 하고 싶은 거
draft: false
---

## Facts

- github page 블로그에 project 페이지를 만들었습니다.
- 메모 앱 안드로이드 프로젝트를 뜯어 고쳤습니다.

## Feelings

- 아무것도 안하고 싶습니다..

## Findings

- project tab 추가하기

  1. 헤더에 project탭 만들기 - blog의 코드를 가져와서 작업
  2. project에 해당하는 게시글만 가져올 수 있도록 md파일에 카테고리 추가 -> 필터로 project에 해당하는 글만 가져오기
  3. gatsby-node 수정 : 이전에는 blog와 tag path를 가진 글만 페이지 생성이 됨. -> project도 사용할 수 있도록 수정

- 안드로이드 ui 테스트 작성하기

  - [안드로이드 테스트 코드 ](https://github.com/android/android-test/blob/7e834ce37faf52f2a65a73b0a6d83ab148707cbb/testapps/ui_testapp/javatests/androidx/test/ui/app/AdapterViewTest.java)
  - [matcher에 대한 이해](https://codechacha.com/ko/android-test-espresso-matchers/)

  - 내가 궁금한거

    - onData는 어떻게 동작하는가?
    - 커스텀 메처는 어떻게 뷰?? 데이터를 찾는가?
    - 커스텀 메처는 어떻게 만드는가?

  - 개 뻘짓 했다. 리싸이클러뷰에는 ondata를 사용할 수 없다.

  - 그냥 onView로 쉽게 가자.

  - 패캠 안드로이드 클린아키텍처 과정 정리

  1. 클린 아키텍처 빌드업

     - 레이어 나누기
       - presnetation - viewController, viewmodel
       - domain : usecase, translater
       - data layer : repo, datastore, entity
     - DI 세팅

  2. 비즈니스 로직 테스트 작성
     - viewModel 테스트 작성 (테스트 작성을 위한 모듈 설정.)
       - 무엇을 테스트할 것인가?

## Future Action Plans

- 내일은 에어컨 설치
- 안드로이드 hilt 공부하고 프로젝트에 적용하기
