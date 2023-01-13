---
title: '[문제풀이] 상호 평가 '
path: blog/daily-mutual-evaluation
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2021-09-14
excerpt: 프로그래머스 - 상호 평가
draft: false
---

## 상호 평가

- [상호 평가 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/83201)

### 1. 이해

- 각 학생들이 받은 점수의 평균을 구하여 전체 학생의 학점 구하기
- scores[i][j]의 값은 i 학생이 j 학생을 평가한 점수입니다.
- 자기 자신을 평가한 점수가 유일한 최고, 최저점일 경우 제외하고 평균을 구합니다.

### 2. 계획

1. i번 학생이 자신이 평가한 점수를 포함하여 다른 학생으로부터 받은 점수를 모두 구합니다.
2. 자신의 점수가 유일한 최고, 최저점일 경우 제외합니다.
3. 2번 과정을 거친 자신의 점수들의 평균을 구하고 학점을 구합니다.

### 3. 실행

```kotlin
    fun mutualEvaluation(scores: Array<IntArray>): String = Array(scores.size) { i ->
        val myScore = (scores.indices).fold(mutableListOf<Int>()) { acc, j ->
            acc.add(scores[j][i])
            acc
        }

        if (myScore.filter { it == scores[i][i] }.size <= 1 && (scores[i][i] == myScore.max() || scores[i][i] == myScore.min())) {
            myScore.removeAt(i)
        }

        (myScore.sum() / myScore.size.toDouble()).let {
            when {
                it >= 90 -> "A"
                it >= 80 -> "B"
                it >= 70 -> "C"
                it >= 50 -> "D"
                else -> "F"
            }
        }
    }.joinToString("")
```

### 4. 회고

- 가볍게 풀기 좋았습니다.
