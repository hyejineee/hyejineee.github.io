---
title: "20210726 TIL"
path: blog/TIL/20210726
tags: [TIL]
cover:  "./TIL.png"
date: 2021-07-26
excerpt: 에어컨 언제와아ㅏㅏ
draft: false
---

## Facts
* 안드로이드 hilt를 공부했습니다. 
* notes app 로딩 상태 보여주기 기능을 만들었습니다. 


## Feelings
* 에어컨이 오늘 오기로 했는데 안왔습니다... 살려줘...😫😫😫
* 오랜만에 개인 프로젝트를 진행하니 재미있습니다. 
* 안드로이드 ui 테스트에서 kotest의 featureSpec을 사용하고 싶은데 espresso와 같이 사용할 수 있을까요...? 같이 사용해보려고 시도해봤지만 build에서부터 에러가 납니다...

## Findings
* 안드로이드 hilt
    * 추후에 프로젝트에 적용한 내용을 바탕으로 포스트를 발행합니다. 

* 로딩 상태 보여주기 테스트를 작성했습니다. 
    * 문제 : liveData의 true, false로 로딩 상태를 알려주는 데 테스트 시 라이브 데이터의 마지막 값만 관찰되어 값이 변경되는 내용을 테스트할 수가 없었습니다. 
    * 시도 : 데이터 베이스에서 note데이터를 가져오는 부분을 코루틴을 사용할 계획인데 코루틴의 await을 사용해서 테스트해볼까 싶습니다.
    * ref : [라이브 데이터에서 연속적인 두개의 테이터 테스트하기](https://medium.com/androiddevelopers/testing-two-consecutive-livedata-emissions-in-coroutines-5680b693cbf8)


## Future Action Plans

* 무엇이든 꾸준하게 하는 자세를 갖자.
* 내일은 드디어 에어컨 설치 
* kotlin object를 정리하고 포스팅합니다.
* android hilt를 정리하고 포스팅합니다. 
* 패스트 캠퍼스 : 자료구조, 알고리즘 강의를 듣습니다.

### 내일 모레 할 것.
* notes 프로젝트 (라인 앱 개발 챌린지 다시 만들기)
    * loading 상태를 표시하는 ui 만들기 
    * 데이터가 없을 경우 안내문 표시하시 (viewModel, ui까지 작업 진행하기)
    * 데이터 베이스에서 note 데이터 가져오기



