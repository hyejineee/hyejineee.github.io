---
title: "20210822 TIL"
path: blog/TIL/20210822
tags: [TIL]
cover:  "./TIL.png"
date: 2021-08-22
excerpt: 안드로이드 클린 아키텍처 TODO 만들기 
draft: false
---

## Facts

* 패스트 캠퍼스 안드로이드 강의를 수강했습니다.
    * 클린 아키텍처 TODO 상세 화면 - 삭제 기능을 구현했습니다. 


## Feelings

* kotest로 TDD를 진행하고 있는데 강의 junit을 기반으로 하고 있어 가끔 동작이 헷갈릴 때가 있습니다. viewModel을 하나의 테스트에서 사용하고 정리해줘야 하는데 kotest에는 koinTestRule을 적용할 수 없어 수동으로 만들어줘야 했습니다.  첫 번째로 생각한 방법은 context()에서 startKoin()을 하고 context() scope가 끝날 때 stopKoin()으로 정리를 해주는 것이였는데 왜인지 stopKoin()이 제대로 동작하지 않는 것 같았습니다. 두 번째로 생각한 방법은 매 테스트 마다 viewModel을 새로이 주입 받는 것이었습니다. 일단은 동작은 성공적으로 작동했습니다. 하지만 이렇게 해도 되는지 리소스 사용에 있어서 낭비를 하고 있는 것은 아닌지 의심스럽습니다. 

## Findings

* koin에서 get()를 사용하면 함수 안에서도 의존성 주입을 받을 수 있습니다.


## Future Action Plans

* 입원 준비
* 도메인 주도 설계 읽기 







