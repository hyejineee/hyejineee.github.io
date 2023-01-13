---
title: '[문제풀이] 이진 변환 반복하기  '
path: blog/daily-repeat-binary-convert
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2021-09-10
excerpt: 프로그래머스 - 이진 변환 반복하기
draft: false
---

## 이진 변환 반복하기

- [이진 변환 반복하기 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/70129)

### 1. 이해

- 이진 변환 횟수와 제거된 0의 개수를 구해야합니다.
- 이진 변환 과정은 다음과 같습니다.
  1. x의 모든 0을 제거한다.
  2. x의 길이를 c라고 하면, x를 c를 이진법으로 표기한 문자열로 바꾼다.
  3. x의 길이가 1이 될 때까지 반복한다.

### 2. 계획

- 재귀를 사용합니다.
- x가 "1"일 경우 반복을 멈추고 반복한 횟수와 지워진 0의 갯수를 리턴합니다.
- x가 "1"이 아닐 경우
  - 0을 제거한 문자열의 길이를 이진법으로 변환하고
  - 현재 횟수에 1 더합니다.
  - 지원진 0의 갯수에 현재 x에 있는 0의 개수를 더해줍니다.

### 3. 실행

```kotlin
    fun convert(x: String, countOfConvert: Int, deleted: Int): IntArray = when {
        x == "1" -> intArrayOf(countOfConvert, deleted)
        else -> convert(
            Integer.toBinaryString(x.replace("0", "").length),
            countOfConvert + 1,
            deleted + x.count { it == '0' }
        )
    }
```

### 4. 회고

- 복서 정렬하기 문제보다 빨리 풀었습니다. 정렬이나 배열이 나오는 문제에 취약한 것 같습니다.
- kotlin에서 기본적으로 10진수를 2진수로 변환할 수 있는 메서드를 제공한다는 것을 알았습니다.
