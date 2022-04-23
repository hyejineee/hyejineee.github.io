---
title: "[문제풀이] 베스트셀러 "
path: blog/daily-BOJ-1302
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-10-12
excerpt: 백준 - 베스트셀러 
draft: false
---


## 베스트셀러 
* [베스트셀러   - 백준](https://www.acmicpc.net/problem/1302)

### 0. 목표 
**구하고자 하는 것은 무엇인가?**
- 하루동안 팔린 책 중에서 가장 많이 팔린 책의 이름을 구합니다.

### 1. 이해 

- 가장 많이 팔린 책이 여러개일 경우 사전 순으로 출력합니다.


### 2. 계획

- 입력받은 책의 제목을 map에 넣습니다. 
- 같은 제목이 나올 때 마다 map의 value를 1씩 증가합니다.
- map을 이름 순으로 정렬하고 제일 높은 값을 가진 책의 제목을 출력합니다.

### 3. 실행
```kotlin
    fun main() {
        with(BufferedReader(InputStreamReader(System.`in`))) {
            val bw = BufferedWriter(OutputStreamWriter(System.out))

            val n = readLine().toInt()

            val record = mutableMapOf<String, Int>()
            (0 until n).forEach {
                val title = readLine()
                record[title] = record[title]?.plus(1) ?: 1
            }

            bw.write("${record.toSortedMap().maxByOrNull { it.value }?.key}")

            bw.flush()
            bw.close()
        }
    }
```

### 4. 회고 

- 쉽게 풀 수 있었습니다.

