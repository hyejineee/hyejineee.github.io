---
title: "[문제풀이] 평범한 배낭 "
path: blog/daily-BOJ-12865
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-10-21
excerpt: 백준 - 평범한 배낭 
draft: false
---


## 평범한 배낭 
* [평범한 배낭 - 백준](https://www.acmicpc.net/problem/12865)

### 0. 목표 
**구하고자 하는 것은 무엇인가?**
- 배낭에 넣을 수 있는 최대 가치의 값을 구해야합니다. 

### 1. 이해 

- 여행에 필요한 n개의 물건이 있습니다.
- 물건은 무게w와 가치v를 가집니다.
- 최대 k만큼의 무게를 견딜 수 있는 배낭을 메고 갑니다.
- 주어지는 것 1: 물품의 수 n, 배낭이 버틸 수 있는 무게 k
  -  1<= n <= 100
  -  1<= k <= 100000
- 주어지는 것 2 : n개의 물건에 대한 정보 - 물건의 무게 w, 물건의 가치 v


### 2. 계획

- 동적 프로그래밍을 사용합니다. 
- 가치를 하나씩 적용한 결과를 입력해서 사용합니다.
- 모든 무게에 대하여 최대 가치를 저장합니다.
- dp[i][j] = 배낭에 넣은 물품의 무게 합이 j일 때 얻을 수 있는 최대 가치 
- 각 물품의 번호 i에 따라서 최대 가치 테이블 dp[i][j]를 갱신하여 문제를 해결합니다.

1. n개의 물건에 대하여 무게가 j일 때 얻을 수 있는 가치를 모두 0으로 초기화 합니다.
2. 물건의 무게와 가치를 입력받고 1에서 만든 2차원 배열을 순회합니다.
3. 순회하고 있는 무게가 입력받은 물건의 무게보다 작다면 이전에 구한 가치의 값을 그대로 적용합니다.
4. 순회하고 있는 무게가 입력받은 물건의 무게보다 같거나 크다면 이전에 구한 가치의 값과 순회하고 있는 무게 - 입력받은 무게에 해당하는 가치 + 입력받은 물건의 가치 중에서 높은 값을 갖는 값을 적용합니다. 
5. 마지막으로 가치가 구해진 무게를 출력합니다.

### 3. 실행
```kotlin
    fun main() {
        with(BufferedReader(InputStreamReader(System.`in`))) {
            val bw = BufferedWriter(OutputStreamWriter(System.out))

            val (n, k) = readLine().split(" ").map { it.toInt() }

            val dp = MutableList(n + 1) { MutableList(k + 1) { 0 } }

            (1..n).forEachIndexed { _, i ->
                val (w, v) = readLine().split(" ").map { it.toInt() }

                for (j in 1..k) {
                    if (j < w) {
                        dp[i][j] = dp[i - 1][j]
                    } else {
                        dp[i][j] = maxOf(dp[i - 1][j], dp[i - 1][j - w] + v)
                    }
                }
            }

            bw.write("${dp[n][k]}")

            bw.flush()
            bw.close()
        }
    }
```

### 4. 회고 

- 하나도 모르겠습니다...
- 문제마다 다릅니다.. 전략이란 없는 것 같습니다..
- 

