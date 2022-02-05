---
title: "[문제풀이] 정수 삼각형 "
path: blog/daily-programmers-integer-triangle
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2022-02-05
excerpt: 프로그래머스 - 정수 삼각형 
draft: false
---


## 정수 삼각형 
* [정수 삼각형 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/43105)

### 0. 목표 
### 구하고자 하는 것은 무엇인가?

- 주어진 삼각형의 꼭대기에서 바닥까지 이어지는 경로 중, 거쳐간 숫자의 합의 최댓값을 구해야 합니다.

### 1. 이해

- 삼각형으로 2차원 배열이 주어집니다.
- 아래로 이동할 때는 대각선으로 이동할 수 있습니다.

### 2.계획

- 2차원 dp를 사용합니다.
- dp[i][j]는 꼭대기에서 i층까지 거쳐온 값의 합입니다.
1. dp를 [1][1]부터 삼각형의 값이 들어가도록 초기화합니다.
2. 2차원 배열을 돌면서 dp의 값을 업데이트 합니다. 
    - dp의 값을 업데이트 할 때 왼쪽 대각선의 값 + 현재 값 과 위의 값 + 현재 값 중에서 큰 값을 현재 dp의 값으로 설정합니다.

5. dp의 마지막 행에서 제일 큰 값을 리턴합니다.

### 3. 실행

```kotlin
fun integerTriangle(triangle: Array<IntArray>): Int {

    val dp = Array(triangle.size + 1) { i ->
        IntArray(triangle.size + 1) { j ->
            if (i == 0) {
                0
            } else if (j == 0) {
                0
            } else {
                triangle[i - 1][j - 1]
            }
        }
    }

    for(i in 2 until dp.size){
        for(j in 1 .. i){
            dp[i][j] = maxOf(dp[i-1][j-1] + dp[i][j], dp[i-1][j] + dp[i][j])
        }
    }

    return dp.last().maxBy { it }?:-1
}
```

### 4. 회고

- 이전에 비슷한 문제를 백준에서 풀었던 것 같습니다. 쉽게 문제를 풀 수 있었습니다.
- 코틀린으로는 금방 문제를 풀었지만 자바로 코드를 바꾸는데서 애를 먹었습니다.


