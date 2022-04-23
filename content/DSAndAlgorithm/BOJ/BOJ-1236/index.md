---
title: "[문제풀이] 성 지키기 "
path: blog/daily-BOJ-1302
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-10-12
excerpt: 백준 - 성 지키기 
draft: false
---


## 성 지키기 
* [성 지키기   - 백준](https://www.acmicpc.net/problem/1236)

### 0. 목표 
**구하고자 하는 것은 무엇인가?**
- 성을 지키기 위해 필요한 경비원의 최솟값을 구합니다.

### 1. 이해 

- 모든 행과 열에 경비원이 있어야 합니다.
- 성의 크기와 경비원의 위치 정보가 주어집니다. (.은 빈칸, X는 경비원이 있는 칸)


### 2. 계획

- 성을 가로 방향, 세로 방향으로 각각 빈곳이 얼마나 있는지 체크합니다.
- 빈곳이 많은 쪽의 수를 리턴합니다.

### 3. 실행
```kotlin
    fun main() {
        with(BufferedReader(InputStreamReader(System.`in`))) {
            val bw = BufferedWriter(OutputStreamWriter(System.out))

            val (n, m) = readLine().split(" ").map { it.toInt() }

            val c = MutableList(n) {
                readLine().toCharArray()
            }

            val r = MutableList(m) { i ->
                MutableList(n) { j ->
                    c[j][i]
                }
            }

            bw.write("${maxOf(c.filter { 'X' !in it }.count(), r.filter { 'X' !in it }.count())}")
            bw.flush()
            bw.close()
        }
    }
```

### 4. 회고 

- 쉽게 풀 수 있었습니다.

