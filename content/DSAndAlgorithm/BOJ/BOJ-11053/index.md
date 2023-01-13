---
title: '[문제풀이] 가장 긴 증가하는 부분 수열 '
path: blog/daily-BOJ-11053
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2021-10-21
excerpt: 백준 - 가장 긴 증가하는 부분 수열
draft: false
---

## 가장 긴 증가하는 부분 수열

- [가장 긴 증가하는 부분 수열 - 백준](https://www.acmicpc.net/problem/11053)

### 0. 목표

**구하고자 하는 것은 무엇인가?**

- 가장 긴 증가하는 부분 수열의 길이를 구합니다.

### 1. 이해

- 수열의 크기 n이 주어집니다.
- 수열이 주어집니다.
- 부분 수열은 증가하는 부분 수열입니다.

### 2. 계획

- 동적 프로그래밍을 사용합니다.
- 수열을 순회하면서 더 큰 경우에 값을 갱신합니다.
- dp[i] = array[i]를 마지막 원소로 갖는 부분 수열의 최대 길이입니다.

1. 최대 길이를 저장할 배열을 선언합니다.
2. 수열을 입력 받습니다.
3. 수열을 순회합니다.
   1. 0부터 지금까지 순회한 것 만큼 돌면서 현재의 값보다 작은 값이 있으면 최대 길이를 저장하는 배열의 갑을 갱신합니다.
      - 현재 값보다 작은 값이 있으면 작은 값에 해당하는 최대 길이 +1한 값과 현재 값의 최대 길이를 비교하여 높은 값을 현재 값의 최대 길이로 갱신합니다.

### 3. 실행

```kotlin
    fun main() {
        with(BufferedReader(InputStreamReader(System.`in`))) {
            val bw = BufferedWriter(OutputStreamWriter(System.out))

            val n = readLine().toInt()

            val dp = MutableList(n){1}
            val arr = readLine().split(" ").map { it.toInt() }.toList()

            for( i in arr.indices){
                for(j in 0 .. i){
                    if(arr[j] < arr[i]){
                        dp[i] = maxOf(dp[i], dp[j] +1)
                    }
                }
            }


            bw.write("${dp.maxOrNull()}")

            bw.flush()
            bw.close()
        }
    }
```

### 4. 회고

- 동적 프로그래밍 마지막 문제까지 풀었습니다. 갈 길이 멉니다..
- 어떻게 기록할 것인지 고민하는 것이 중요한 것 같습니다.
- 점화식 감도 안 옵니다... 어떻게 이렇게 세울 수 있지...
