---
title: '[문제풀이] 피보나치수  '
path: blog/daily-fibonacci
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2021-09-07
excerpt: 프로그래머스 - 피보나치수
draft: false
---

## 피보나치수

- [피보나치수 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/12945)

### 1. 이해

- n은 1이상 100000이하인 자연수다.

  - 일반적인 피보나치로 계산할 경우 결과값이 엄청 커짐

- 123456으로 나눈 나머지를 구해야한다.
  - 123456으로 나눈 나머지를 결과값으로 한다.
  - f(n) = (f(n-1) + f(n-2)) % 1234567

### 2. 계획

### 3. 실행

```kotlin
    fun fibonacci(n: Int): Int {
        val f = MutableList(n + 1) { 0 }

        for (i in 0..n) {
            f[i] = when (i) {
                0 -> 0
                1 -> 1
                else -> {
                    (f[i - 1] + f[i - 2]) % 1234567
                }
            }
        }

        return f[n]
    }

    //우수답안

    class Solution {
        fun solution(n: Int): Int = if(n == 1 || n == 2) 1 else fib(n, 1, 1)
        tailrec fun fib(n: Int, a: Int, b: Int): Int = if(n == 1) a else fib(n - 1, b % 1234567, (a + b) % 1234567)
    }

```

### 4. 회고

- 수학적 사고를 잘 못하는 것 같다. 수학을 포기한것이 좀 후회된다.
- 문제를 풀면서 많이 답답함을 느낀다. 이렇게 푸는게 맞는건지... 문제 풀이 연습을 이렇게 하는게 맞는건지...
