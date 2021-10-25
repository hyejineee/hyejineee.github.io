---
title: "[문제풀이] 기타리스트 "
path: blog/daily-BOJ-1495
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-10-20
excerpt: 백준 - 기타리스트 
draft: false
---


## 기타리스트 
* [기타리스트 - 백준](https://www.acmicpc.net/problem/1495)

### 0. 목표 
**구하고자 하는 것은 무엇인가?**
- 마지막 곡을 연주할 수 있는 볼륨 중 최댓값을 구합니다. 

### 1. 이해 
- n개의 연주할 곡이 있습니다.
- 공연이 시작하기 전에 각각의 곡이 시작하기 전에 바꿀 수 있는 볼륨의 리스트(v)가 있습니다.
  - v[i]는 i번째 곡을 연주하기 전에 바꿀 수 있는 볼륨을 의미합니다.
  - 리스트에 적힌 차이로만 볼륨을 바꿀 수 있습니다. 
    - 현재 볼륨이 p이고 지금 i번째 곡을 연주하기 전이라면, i번 곡은 p+v[i] 나 p-v[i]로 연주해야 합니다.
    - 볼륨은 0보다 작거나 m값보다 클 수 없습니다. 
- 주어지는 것 1: 곡의 개수 n, 시작 볼륨s, 연주할 수 있는 볼륨의 최댓값 m
- 주어지는 것 2: 각 곡을 시작하기 전에 줄 수 있는 볼륨의 차이 


### 2. 계획

- 모든 볼륨에 대해서 연주할 수 있는지 여부를 계산합니다.
- dp[i][j+1] = i 번째 노래일 때 j 크기의 볼륨으로 연주 가능한지

0. 시작 볼륨을 dp[0][s]에 입력합니다.
1. 곡의 개수 + 1만큼 반복합니다.
2. 곡에 해당하는 볼륨gap을 가져옵니다. 
3. 각 곡에 대하여 연주할 수 있는 볼륨들을 일일히 구합니다.
   1. 이전 곡의 볼륨의 값이 true였다면, 그 볼륨을 기준으로 현재 볼륨gap을 더하고 빼서 가능한 볼륨을 구합니다. 
   

### 3. 실행
```kotlin
    fun main() {
        with(BufferedReader(InputStreamReader(System.`in`))) {
            val bw = BufferedWriter(OutputStreamWriter(System.out))

            val (n,s,m) = readLine().split(" ").map { it.toInt() }
            val volumeGap = readLine().split(" ").map { it.toInt() }

            val dp = MutableList(n+1){
                MutableList(m+1){false}
            }

            dp[0][s] = true

            for(i in 1..n){
                val volume = volumeGap[i-1]

                for(j in 0..m){
                    if(!dp[i-1][j]) continue

                    if(j-volume >=0){
                        dp[i][j-volume] = true
                    }
                    if(j + volume <=m){
                        dp[i][j+volume] = true
                    }
                }
            }

            var result = -1

            for(i in m downTo 0){
                if(dp[n][i]){
                    result = i
                    break
                }
            }

            bw.write(result.toString())
            
            bw.flush()
            bw.close()
        }
    }
   
```

### 4. 회고 
