---
title: '20210808 TIL'
path: blog/TIL/20210808
tags: [TIL]
cover: './TIL.png'
date: 2021-08-08
excerpt: 팀원들과 함께하는 신나는 뽀모도로🍅
draft: false
---

## Facts

- 코틀린 동시성 프로그래밍 ~4,8장 읽기
- DDD 동아리 면접, 4시

## Feelings

- 동아일 면접을 보았습니다. 붙어서 협업할 기회가 생기면 좋을 것 같습니다.

- 뽀모도로 스터디(?)에 참여했습니다. 다른 사람과 함께 공부하니 집중력이 좋아지는 것 같습니다. 또 한 타임마다 할 일과 한 일을 적어서 작업의 효율이 좋아진 것 같습니다. 덕분에 오늘 코틀린 동시성 프로그래밍 2,3,4,8 장을 읽고, 책에서 나온 예제를 만들어볼 수 있었습니다.

## Findings

- 코틀린 동시성 프로그래밍

  - 프로세스, 스레드, 코루틴의 차이
  - 동시성이란 무엇인가?
  - 동시성과 병렬성의 차이
  - 동시성이 어려운 이유 : 레이스 컨디션, 원자성 위반, 교착상태, 라이브락

  - CoroutineDispatcher란 무엇인가?
  - async와 launch의 차이점은 무엇인가?
  - await() 와 join()의 차이점은 무엇인가? (내부 구현 차이 보기)
    - await
      - deferred 인터페이스에 속함.
      ```kotlin
          public suspend fun await(): T
      ```
    - join
      - job 인터페이스에 속함.
      ```kotlin
          public suspend fun join()public final override suspend fun join() {
              if (!joinInternal()) { // fast-path no wait
                  coroutineContext.ensureActive()
                  return // do not suspend
              }
              return joinSuspend() // slow-path wait
          }
      ```
  - ANR은 무엇이고 왜 발생하게 되는가?
  - 코틀린에서 비동기 함수를 표현하는 여러가지 방법

  - job과 deferrd의 공통점과 차이점? (예외처리는 어떻게 달라지는 가)
  - job과 deferrd의 생명 주기와 현재 상태 확인
  - start()와 join()의 차이
  - 코루틴 에러 핸들린 하는 2가지 방법
  - 코루틴 생명 주기 특징

  - 함수에서 일시 중단 함수를 만드는 방법
  - 일시 중단 함수 호출 주의사항
  - 일시 중단 함수 사용의 이점
  - 코루틴 컨텍스트란?
  - 임시 컨텍스트 스위치란 무엇인가?

* git log --pretty=short --graph
  - 브랜치 흐름 보기 좋다.
  - [커밋 히스토리 조회하기](https://git-scm.com/book/ko/v2/Git%EC%9D%98-%EA%B8%B0%EC%B4%88-%EC%BB%A4%EB%B0%8B-%ED%9E%88%EC%8A%A4%ED%86%A0%EB%A6%AC-%EC%A1%B0%ED%9A%8C%ED%95%98%EA%B8%B0)

## Future Action Plans

- 나만의 기지 만들기 - 지적 생산 기술
- 블로그 레포에 푸시하면 자동으로 배포되게 github action을 설정해야겠습니다.
