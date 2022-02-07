---
title: "[문제풀이] 등굣길 "
path: blog/daily-programmers-way-to-shcool
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2022-02-06
excerpt: 프로그래머스 - 등굣길 
draft: false
---


## 등굣길 
* [등굣길 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/42898)

### 구하고자 하는 것은 무엇인가?

- 물이 잠긴 지역을 피해 집에서 학교까지 갈 수 있는 최단경로의 개수를 1,000,000,007로 나눈 나머지를 구해야합니다.

### 1. 이해

- m *n 크기의 격자모양으로 집에서 학교까지 가는 길을 나타냅니다.
- 집은 (1,1)에 위치하고 학교는(m,n)에 위치합니다.
- 물이 잠긴 지역을 나타내는 puddles가 주어집니다.
- puddles의 각 행은 (x,y)로 물이 잠긴 지역의 좌표를 나타냅니다.
- 이동은 아래쪽과 오른쪽으로만 할 수 있습니다.

### 2.계획

- dp[i][j] = 집에서 출발하여 [i][j]까지 오는 경로의 수의 최대값 입니다.
1. 집의 위치가 1, 물이 잠긴 지역은 -1로 나타내는 dp 배열을 초기화합니다.
2. 반복문을 2번 돌면서 현재(i,j)까지 올 수 있는 최단경로의 경우의 수를 갱신합니다.
    1. 현재위치가 집의 위치 이거나 잠긴 지역일 경우 경우의 수 계산을 건너뜁니다.
    2. 현재위치의 위쪽의 경우의 수와 왼쪽의 경우의 수를 더하고 1,000,000,007로 나눈 나머지값을 dp에 저장합니다.
    3. 위쪽 또는 왼쪽이 잠긴 지역일 경우 0을 더해줍니다.
3. dp의 [n][m]을 리턴합니다.

### 3. 실행

```kotlin
fun wayToSchool(m: Int, n: Int, puddles: Array<IntArray>): Int {
    val dp = Array(n + 1) { i ->
        IntArray(m + 1) { j ->
            if (i == 1&& j == 1) {
                1
            } else {
                0
            }
        }
    }
    
    puddles.forEach { (j, i) ->
        dp[i][j] = -1
    }
    
    for (i in 1..n) {
        for (j in 1..m) {
            if (dp[i][j] == -1 || dp[i][j] == 1 ) continue

            val a = if (dp[i - 1][j] == -1) 0 else dp[i - 1][j]
            val b = if (dp[i][j - 1] == -1) 0 else dp[i][j - 1]

            dp[i][j] = (a+b)%1000000007
        }
    }

    return dp[n][m]
}
```

### 4. 회고

- 이전에 풀었던 문제와 비슷해서 쉽게 풀 수 있었습니다.
- 예전에 동적 프로그래밍을 집중해서 반복적으로 푼 경험이 있었는데 도움이 된 것 같습니다.