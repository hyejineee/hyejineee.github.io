---
title: '[문제풀이] 단어 변환 '
path: blog/daily-programmers-word-conversion
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2022-01-24
excerpt: 프로그래머스 - 단어 변환
draft: false
---

## 단어 변환

- [단어 변환 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/43163)

### 0. 목표

**구하고자 하는 것은 무엇인가?**

- begin에서 target으로 최소 몇 단계를 거쳐 begin을 target으로 변환할 수 있는지 구해야 합니다.

### 1. 이해

- 단어 변환에는 규칙이 있습니다.
  - 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
  - words에 있는 단어로만 변환할 수 있습니다.
- 변환할 수 없는 경우에는 0을 리턴합니다. → target 단어는 words에 포함되어 있어야 합니다.

### 2. 계획

1. begin을 현재 단어로 설정합니다.
2. words를 순회하면서 현재 단어와 한 개의 알파벳만 다른 단어를 찾습니다.
3. 찾은 단어를 방문 리스트에 넣습니다.
4. 찾은 단어를 현재 단어로 설정하고 2번 과정을 다시 수행합니다.
5. 현재 단어가 target이 될 때까지 위의 과정을 반복합니다.
6. target단어까지 도달했으면 변환 과정을 기록한 방문 리스트를 결과에 저장합니다.
7. 다른 후보군을 포함하는 방문 리스트를 만들기 위해 마지막에 넣은 단어를 방문 리스트에서 다시 뺍니다.

### 3. 실행

```kotlin
    fun wordConversion(begin: String, target: String, words: Array<String>): Int {
            if(target !in words) return 0

        val result = mutableListOf<List<String>>()
        dfs(begin, mutableListOf(), words, target, result)

        return result.minBy { it.size }?.size ?: 0
    }

    private fun dfs(
        start: String,
        visited: MutableList<String>,
        words: Array<String>,
        target: String,
        result: MutableList<List<String>>
    ) {

        if (start == target) {
            result.add(visited.toList())
            return
        }

        for (i in words.indices) {
            if (checkAvailable(start, words[i]) && words[i] !in visited) {
                visited.add(words[i])
                dfs(words[i], visited, words, target, result)
                visited.removeAt(visited.size - 1)
            }
        }
    }

    private fun checkAvailable(start: String, next: String): Boolean
     = BooleanArray(start.length) { start[it] == next[it] }.count { it } == start.length - 1
```

### 4. 회고

- dfs를 사용하여 쉽게 풀 수 있었습니다.
- 처음에 문제가 이해되지 않아 여러번 읽었습니다. 차분하게 문제를 읽는 자세를 길러야 겠습니다.
- dfs, bfs 형태를 복습했습니다.
- 백트래킹 형태를 복습했습니다.
