---
title: "[문제풀이] LCS "
path: blog/daily-BOJ-9251
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-10-20
excerpt: 백준 - LCS 
draft: false
---


## LCS 
* [LCS - 백준](https://www.acmicpc.net/problem/9251)

### 0. 목표 
**구하고자 하는 것은 무엇인가?**
- 두 수열이 주어졌을 때, 모두의 부분 수열이 되는 수열 중 가장 긴것의 길이를 구합니다.

### 1. 이해 
- 두 개의 알파벳 대문자로만 이루어진 수열이 주어집니다.
- 가장 긴 증가하는 부분 수열 문제와 비슷한 것 같습니다. 


### 2. 계획

- 작은 수열에 대해서 공통되는 부분 수열이 찾는지 보고 기록합니다.
- dp[i][j] = 길이가 i인 arr1의 수열과 arr2간의 최장 공통 부분 수열의 길이입니다.

1. arr1과 arr2를 순회하면서 공통이 되는 부분을 찾습니다. 
2. arrq[i],arr[j]값이 같은 부분은 dp[i-1][j-1]에 1을 더해서 값을 갱신시켜줍니다.
3. 같지 않은 경우 가로에 있는 값와 옆에 있는 값을 비교해서 큰 값을 설정합니다.
   

### 3. 실행
```kotlin
    fun main() {
        with(BufferedReader(InputStreamReader(System.`in`))) {
            val bw = BufferedWriter(OutputStreamWriter(System.out))

            val arr1 = readLine().toCharArray().toMutableList().apply { add(0, '0') }
            val arr2 = readLine().toCharArray().toMutableList().apply { add(0, '0') }

            val dp = MutableList(arr1.size){
                MutableList(arr2.size){0}
            }

            for(i in 1 until arr1.size){
                for (j in 1 until arr2.size){
                    if(arr1[i] == arr2[j]){
                        dp[i][j] = dp[i-1][j-1] + 1
                    }else{
                        dp[i][j] = maxOf(dp[i-1][j], dp[i][j-1])
                    }
                }
            }

            println(dp[arr1.size-1][arr2.size-1])

            bw.flush()
            bw.close()
        }
    }
```

### 4. 회고 

