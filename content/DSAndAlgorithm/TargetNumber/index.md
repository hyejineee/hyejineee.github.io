---
title: '[문제풀이] 타겟 넘버'
path: blog/ds-target-number
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2021-08-27
excerpt: 프로그래머스 - 타겟 넘버
draft: true
---

## 트리 순회

- [타겟 넘버](https://programmers.co.kr/learn/courses/30/lessons/43165?language=kotlin)

### 1. 이해

- 주어진 수들(numbers)을 더하거나 빼서 타겟 넘버를 만듭니다.
- 주어지는 수의 개수는 2개 이상 20개 이하 입니다.
  - 더하거나 빼서 만들 수 있는 수들을 최소 4개 최대 2^20 개 입니다.
- 연산자의 개수는 주어진 수의 개수와 동일합니다.
- 하나의 수에 대해 2가지 경우의 수가 있습니다.
  - 더하기
  - 뺴기

### 2. 계획

1. 하나의 수에 대해 더하기와 빼기를 수행합니다.
2. numbers의 인덱스를 하나씩 늘려 가면서 1번의 과정을 적용합니다.
3. 1,2번의 과정을 거친 결과가 타겟 넘버와 같은 경우 카운트합니다.
4. 카운트한 값을 리턴합니다.

### 3. 실행

```kotlin

    fun targetNumber(numbers: IntArray, target: Int): Int {

        var result = 0
        fun sum(sum: Int, level: Int) {
            if (level == numbers.size) {
                if (sum == target) {
                    result += 1
                    return
                }
            }

            if (level < numbers.size) {
                sum(sum + numbers[level], level + 1)
                sum(sum - numbers[level], level + 1)
            }
        }

        sum(numbers[0], level = 1)
        sum(-numbers[0], level = 1)

        return result
    }

// 우수 답안

class Solution {
    fun solution(numbers: IntArray, target: Int): Int {
        return numbers.fold(listOf(0)) { list, i ->
            list.run {
                map { it + i } + map { it - i }
            }
        }.count { it == target }
    }
}

```

### 4. 회고

프로그래머스의 bfs, dfs 카테고리에 있는 문제를 선택해서 풀었는데 bfs와 dfs에 너무 집착한 것 같습니다. 그래프가 필요 없는 문제임에도 불구하고 그래프에 집착해서 이상한 자료구조를 만들려고 했습니다.
그래프에 대해 집착을 버리고 문제를 푸니 쉽게 해결되었습니다. 문제 풀이에 특정 알고리즘을 집착하는 자세를 버려야겠습니다.
