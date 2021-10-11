---
title: "[문제풀이] 수 정렬하기2 "
path: blog/daily-BOJ-2751
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-10-11
excerpt: 백준 - 수 정렬하기2
draft: false
---


## 수 정렬하기2
* [수 정렬하기2  - 백준](https://www.acmicpc.net/problem/2751)

### 0. 목표 
**구하고자 하는 것은 무엇인가?**
- 주어진 수를 정렬하여 출력합니다.

### 1. 이해 
- 첫째 줄에 수의 개수가 주어집니다. 
- 둘째 줄부터 수가 주어집니다. 
- 수의 범위는 -1,000,000 <= n <= 1,000,000입니다. 


### 2. 계획

- 음수를 받는 배열, 양수를 받는 배열 2개를 준비합니다. 
- 입력된 수가 음수인지, 양수인지 판단하여 각각 배열에 넣습니다. 
- 음수 배열은 reverse하고 뒤에 양수 배열을 붙입니다. 
- 순차대로 출력합니다.

### 3. 실행
```kotlin
    fun main() {
        with(BufferedReader(InputStreamReader(System.`in`))) {
            val bw = BufferedWriter(OutputStreamWriter(System.out))

            val negativeArr = MutableList<Int?>(1000001) { null }
            val positiveArr = MutableList<Int?>(1000001) { null }


            for (i in 0 until readLine().toInt()) {
                val n = readLine().toInt()

                if (n < 0) {
                    if (negativeArr[abs(n)] != null) continue
                    negativeArr[abs(n)] = n
                } else {
                    if (positiveArr[abs(n)] != null) continue
                    positiveArr[abs(n)] = n
                }
            }


            val printed = negativeArr.reversed().plus(positiveArr).filterNotNull()

            printed.forEach {
                bw.write("$it\n")
            }

            bw.flush()
            bw.close()
        }
    }

```

### 4. 회고 

- 저번 문제 풀이에서 배운 계수 정렬 방법을 사용했습니다. 여러번 푸니 응용력이 높아진 것 같습니다. 

