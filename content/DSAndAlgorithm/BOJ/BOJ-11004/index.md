---
title: '[문제풀이] k번째 수 '
path: blog/daily-BOJ-11004
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2021-10-11
excerpt: 백준 - k번째 수
draft: false
---

## k번째 수

- [k번째 수 - 백준](https://www.acmicpc.net/problem/11004)

### 0. 목표

**구하고자 하는 것은 무엇인가?**

- 주어진 수열 A를 정렬하고 k번째에 있는 수를 구합니다.

### 1. 이해

- 수열이 주어집니다.
- 앞에서부터 k번째에 있는 수를 구합니다.
  - k번째 수의 인덱스는 k-1입니다.

### 2. 계획

- 수를 정렬합니다.
- k-1번 인덱스에 있는 수를 구합니다.

### 3. 실행

```kotlin
    fun main() {
        with(BufferedReader(InputStreamReader(System.`in`))) {
            val bw = BufferedWriter(OutputStreamWriter(System.out))

            val (n, k) = readLine().split(" ").map { it.toInt() }
            bw.write("${readLine().split(" ").map { it.toInt() }.sorted()[k - 1]}")
            bw.flush()
            bw.close()
        }
    }
```

### 4. 회고

- 쉽게 풀 수 있었습니다.
