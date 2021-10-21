---
title: "[문제풀이] 01타일 "
path: blog/daily-BOJ-1904
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-10-21
excerpt: 백준 - 01타일 
draft: false
---


## 01타일 
* [01타일 - 백준](https://www.acmicpc.net/problem/1904)

### 0. 목표 
**구하고자 하는 것은 무엇인가?**
- 1, 00 타일로 크기가 n인 2진 수열을 몇 개 만들수 있는지를 구합니다.

### 1. 이해 

- 타일에는 1, 00 두 종류의 타일이 있습니다.
- 00타일은 분리할 수 없습니다.
- 길이가 n인 모든 이진 수열의 개수를 15746으로 나눈 나머지 값을 출력합니다. 
- 주어지는 것 1: n의 값
  - n은 1보다 크거나 같고 1,000,000 보다 작거나 같습니다. 


### 2. 계획

- 동적 프로그래밍을 사용합니다. 
  
1. 결과를 기록할 리스트를 만듭니다. 리스트의 i번째 인덱스의 값은 길이가 i인 이진 수열의 개수입니다. 
   - 1부터 시작하기 때문에 사이즈를 1000001인 리스트로 만듭니다.
2. 경우의 수가 작게 나오는 값을 설정합니다.
   - dp[1] = 1
   - dp[2] = 2

3. 3부터 n까지 dp[i]의 값을 구합니다. 
   - dp[i] = (dp[i-1] + dp[i-2]) % 15746
4. dp[n]에 해당하는 값을 출력합니다.

### 3. 실행
```kotlin
    fun main() {
        with(BufferedReader(InputStreamReader(System.`in`))) {
            val bw = BufferedWriter(OutputStreamWriter(System.out))

            val n = readLine().toInt()

            val dp = MutableList(1000001){0}
            dp[1] = 1
            dp[2] = 2

            for(i in 3 .. n){
                dp[i] = (dp[i-1] + dp[i-2]) % 15746
            }

            bw.write("${dp[n]}")

            bw.flush()
            bw.close()
        }
    }
```

### 4. 회고 

- 동적 프로그래밍 개념에 대해 배웠습니다. 따로 정리해야겠습니다. 
- 동적 프로그래밍 문제를 풀 때 작은 경우들을 먼저 계산하고 구해진 수들이 어떤 규칙을 갖고 있는지 파악하는 것이 중요합니다. 
- 처음에 백트래킹 방식으로 문제를 풀었는데 시간 초과가 나왔습니다. 그래도 덕분에 백트래킹을 복습할 수 있었습니다. 

