---
title: '[문제풀이] 도서관 '
path: blog/daily-BOJ-1461
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2021-11-03
excerpt: 백준 - 도서관
draft: false
---

## 도서관

- [도서관 - 백준](https://www.acmicpc.net/problem/1461)

### 0. 목표

**구하고자 하는 것은 무엇인가?**

- 모든 책을 제자리에 놓을 수 있는 최소 걸음의 수를 구해야 합니다.

### 1. 이해

- 좌표0에 모아져 있는 책들을 원래의 자리로 놓아야 합니다.
- 한 번에 m개의 책을 들 수 있습니다.
- 주어지는 것 1: 책의 개수n, 한 번에 들 수 있는 책의 개수m
- 주어지는 것 2: 책의 원래 좌표
  - 책의 위치는 0이 아니며, 절댓값이 10000보다 작거나 같은 정수이다.

### 2. 계획

1. 책의 원래 좌표 중에 제일 먼 책의 값을 기록합니다
2. 책의 좌표가 양수일 때, 음수일 때로 나누어 각각의 리스트에 절댓값이 큰 순으로 넣습니다.
3. 각각의 리스트를 순회하면서 m 만큼 들고 이동할 수 있는 걸음의 수를 footCount 값에 더합니다.
4. 왕복 계산이 필요함으로 footCount \*2를 해주고 모든 책을 다 제자리에 놓은 경우 다시 0으로 돌아오지 않아도 됨으로 제일 먼 책의 거리를 빼줍니다.

### 3. 실행

```kotlin
    fun main() {

        with(BufferedReader(InputStreamReader(System.`in`))) {
            val (n,m) = readLine().split(" ").map { it.toInt() }
            val bookPositions = readLine().split(" ").map { it.toInt() }

            val largest = bookPositions.maxOf { abs(it) }

            val positives = TreeSet<Int>(reverseOrder())
            val negative =  TreeSet<Int>()

            positives.addAll(bookPositions.filter { it > 0 })
            negative.addAll(bookPositions.filter { it < 0 })

            var footCount = 0
            while (positives.isNotEmpty()){
                for(i in 0 until m){
                    if(positives.isEmpty()) break
                    val pop = positives.pollFirst()
                    if( i == 0) footCount +=pop
                }
            }

            while (negative.isNotEmpty()){
                for(i in 0 until m){
                    if(negative.isEmpty()) break
                    val pop = negative.pollFirst()
                    if( i == 0) footCount += abs(pop)
                }
            }

            println(footCount*2 - largest)
        }
    }
```

### 4. 회고

- 쉽게 풀 수 있었습니다.
