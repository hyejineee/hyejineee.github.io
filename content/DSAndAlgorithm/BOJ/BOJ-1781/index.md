---
title: "[문제풀이] 컵라면 "
path: blog/daily-BOJ-1781
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-11-03
excerpt: 백준 - 컵라면 
draft: false
---


## 컵라면 
* [컵라면 - 백준](https://www.acmicpc.net/problem/1781)

### 0. 목표 
**구하고자 하는 것은 무엇인가?**
- 문제를 풀어 받을 수 있는 쵀대 컵라면의 수를 구해야합니다.

### 1. 이해 

- 문제, 데드라인, 문제를 풀었을 때 얻을 수 있는 라면의 수가 주어집니다.
- 문제를 푸는데 단위 시간 1이 걸립니다.
- 주어지는 것 1: n개의 문제 
- 주어지는 것 2 : n개의 줄에 걸쳐 문제의 데드라인과 컵라면의 수가 주어집니다.

### 2. 계획
1. 데드라인과 컵라면을 입력받고 데드라인 기준으로 오름차순이 되게 정렬합니다.
2. 문제에 대한 정보를 순회하면서 최소힙에 컵라면의 수를 넣습니다.
3. 데드라인이 힙의 사이즈보다 작을 경우 데드라인을 초과한 것이기 때문에 최소 힙에서 데이터를 뺍니다.
4. 최소힙에 있는 원소의 합을 출력합니다.

### 3. 실행
```kotlin
    fun main() {

        with(BufferedReader(InputStreamReader(System.`in`))) {
            val n = readLine().toInt()

            val problems = (1..n).map { index ->
                val (deadLine, cupRamen) = readLine().split(" ").map { it.toInt() }
                Pair(deadLine, cupRamen)
            }.sortedWith(compareBy { it.first })

            val minHeap = PriorityQueue<Int>()

            for ((deadLine, cupRamen) in problems){
                minHeap.add(cupRamen)

                if(deadLine < minHeap.size){
                    minHeap.poll()
                }
            }

            println(minHeap.sum())

        }
    }
```

### 4. 회고 

- 오랜만에 문제풀이 포스팅을 하는 것 같습니다. 
- 정렬만 해서 될 것 같은데 다시 한번 시도해 봐야겠습니다.
