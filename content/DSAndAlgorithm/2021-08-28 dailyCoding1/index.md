---
title: '[문제풀이] 두 개 뽑아서 더하기'
path: blog/daily-coding-take-two-and-add
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2021-08-28
excerpt: 프로그래머스 - 두 개 뽑아서 더하기
draft: false
---

## 두 개 뽑아 만들기

- [두 개 뽑아 만들기 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/68644?language=kotlin)

### 1. 이해

- numbers가 주어진다.
- 자료구조 set을 사용하여 중복되어 만들어 지는 값을 제거한다.
- 각 요소를 순회하면서 더한다.
- 이전에 더한 값은 또 계산할 필요가 없다.

### 2. 계획

1. numbers를 순회한다.
2. numbers의 현재 인덱스 +1에서 시작하여 numbers의 사이즈만큼 순회한다.
3. 1의 값과 2의 값을 더해서 set에 넣는다.
4. 정렬해서 반환한다.

### 3. 실행

```kotlin
    fun takeTwoAndAdd(numbers: IntArray): IntArray =
        numbers.foldIndexed(mutableSetOf<Int>()) { index, acc, i ->
            for (j in index + 1 until numbers.size) {
                acc.add(i + numbers[j])
            }
            acc
        }.sorted().toIntArray()
```

### 4. 회고

처음에는 변수를 사용하여 문제를 풀고 이후에 fold를 사용하여 더 간단한 형태로 리팩토링 했습니다.
