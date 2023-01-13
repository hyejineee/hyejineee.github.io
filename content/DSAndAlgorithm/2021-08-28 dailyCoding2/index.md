---
title: '[문제풀이] 실패율'
path: blog/daily-coding-failure-late
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2021-08-28
excerpt: 프로그래머스 - 실패율
draft: false
---

## 실패율

- [실패율 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/42889)

### 1. 이해

- 실패율 : 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어의 수
- n = 전체 스테이지의 개수
- stages = 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열
  - stage번호의 개수를 카운트 == 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수
  - 스테이지에 도달한 플레이어의 수 == 현재 스테이지 번호보다 높은 경우
- 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 리턴

### 2. 계획

1. 주어진 스테이지를 하나씩 순회한다.
2. 해당 스테이지에 있는 플레이어의 수와 스테이지에 있거나 스테이지를 지나간 플레이어의 수를 구해서 실패율을 구한다.
3. 스테이지 번호와 실패율을 저장한다.
4. 실패율을 기준으로 내림차순으로 정렬한다.
5. 스테이지 번호를 int배열로 반환한다.

### 3. 실행

```kotlin
    fun failureLate(n: Int, stages: IntArray): IntArray =
        (1..n).map { currentStage: Int ->
            val failureLate = (stages.count { it == currentStage }.toFloat() / stages.count { currentStage <= it })
            Pair(currentStage, if (failureLate.isNaN()) 0.0F else failureLate)
        }.sortedByDescending { it.second }
            .map { it.first }
            .toIntArray()
```

### 4. 회고

엣지 케이스를 찾는데 어려움이 있었습니다. 문제를 풀기 전에 엣지 케이스가 무엇이 있을지 생각해보는 습관을 기르면 좋을 것 같습니다.
