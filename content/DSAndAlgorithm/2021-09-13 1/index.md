---
title: '[문제풀이] 부족한 금액 계산하기 '
path: blog/daily-calculate-insufficient-amount
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2021-09-13
excerpt: 프로그래머스 - 부족한 금액 계산하기
draft: false
---

## 부족한 금액 계산하기

- [부족한 금액 계산하기 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/82612)

### 1. 이해

- 놀이기구를 n 번째 이용한다면 원래 요금의 n 배를 받는다.
- 놀이기구를 count 번 타면 현재 있는 돈에서 얼마가 모자라는지 구하기
- 돈이 모자라지 않는다면 0을 리턴한다.

### 2. 계획

1. 1에서 count까지 price를 곱한 값을 모두 더한다.
2. 현재 가져온 돈이 1번에서 구한 값보다 크면 0을 리턴한다.
3. 현재 가져온 돈보다 1번에서 구한 값이 크다면 1번에서 구한 값 - 현재 있는 돈을 계산한 값을 구한다.

### 3. 실행

```kotlin
    fun calculateInsufficientAmount(price: Int, money: Int, count: Int): Long =
        (1..count)
            .fold(0L) { acc, it -> acc + (price * it) }
            .let { if (money > it) 0L else it - money }
```

### 4. 회고

- kotlin 범위 함수를 사용하는 예시를 알았습니다.
- kotlin 범위 함수에 대해서 적용하고 정리하는 시간을 가져야겠습니다.
