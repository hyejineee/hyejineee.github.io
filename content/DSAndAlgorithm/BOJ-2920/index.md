---
title: "[문제풀이] 음계 "
path: blog/daily-BOJ-2920
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-10-04
excerpt: 백준 - 음계
draft: false
---


## 음계
* [음계  - 백준](https://www.acmicpc.net/problem/2920)


### 1. 이해 

- 음을 숫자로 표현한다.
- 1~8까지 차례대로 = ascending 
- 8~1까지 차례대로 = descending 
- 섞여 있으면 = mixed


### 2. 계획

- 각 음별 차이가 1이면 ascending 이나 descending 입니다. 
    - 시작이 1이면 ascending 입니다.
    - 시작이 8이면 descending 입니다.
- 각 음별 차이가 1이상이면 mixed입니다. 


### 3. 실행
```kotlin

    fun main() {

        with(BufferedReader(InputStreamReader(System.`in`))) {
            val numbers = readLine().split(" ").map { it.toInt() }.toIntArray()
            println(scale(numbers))
        }
    }

    fun scale(numbers: IntArray): String {
        for (i in 1 until numbers.size) {
            if (abs(numbers[i - 1] - numbers[i]) != 1) {
                return "mixed"
            }
        }
        return if (numbers.first() == 1) "ascending" else "descending"
    }

```

### 4. 회고 

- 두 번째 문제를 푸는 건데 저번 보다 잘 푼것 같습니다. 