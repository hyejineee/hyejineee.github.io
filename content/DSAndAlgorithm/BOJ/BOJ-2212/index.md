---
title: "[문제풀이] 센서 "
path: blog/daily-BOJ-2212
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-11-03
excerpt: 백준 - 센서 
draft: false
---


## 센서 
* [센서 - 백준](https://www.acmicpc.net/problem/2212)

### 0. 목표 
**구하고자 하는 것은 무엇인가?**
- 최대 k개의 집중국의 수신 가능 영역의 길이의 합의 최솟값을 구해야 합니다.

### 1. 이해 

- 고속도록에 n개의 센서가 있습니다. 
- n개의 센서가 적어도 하나의 집중국과 통신해야 합니다.
- 고속도로는 평면상의 직선으로 표시되고 센서의 좌표는 정수 하나로 표현됩니다.
- 주어진는 것 1: 센서의 개수 n
- 주어지는 것 2: 집중국의 개수 k
- 주어지는 것 3: 센서의 좌표 


### 2. 계획

1. 센서를 오름차순으로 정렬하고 센서들 사이의 거리를 구합니다.
2. 센서 사이의 거리를 내림차순으로 정렬합니다.
3. 센서 사의의 거리를 순회하면서 k개 만큼 묶어줍니다. (거리를 0으로 만듭니다.)
4. 전체 거리의 합을 출력합니다.


### 3. 실행
```kotlin
    fun main() {

        with(BufferedReader(InputStreamReader(System.`in`))) {
            val n = readLine().toInt()
            val k = readLine().toInt()

            if(k >=n) {
                println(0)
                return
            }

            val sensors = readLine().split(" ").map { it.toInt() }

            val sortedSensor = sensors.sorted()
            val distances = (1 until n).map {
                sortedSensor[it] - sortedSensor[it-1]
            }

            val sortedDistances = distances.sortedDescending().toMutableList()

            for( i in 0 until  k-1){
                sortedDistances[i] = 0
            }

            println(sortedDistances.sum())

        }
    }
```

### 4. 회고 

- 
