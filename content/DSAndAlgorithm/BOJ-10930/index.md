---
title: "[문제풀이] sha-256 "
path: blog/daily-BOJ-10930
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-10-04
excerpt: 백준 - sha256
draft: false
---


## sha256
* [sha256  - 백준](https://www.acmicpc.net/status?user_id=hhj481651&problem_id=10930&from_mine=1)

### 0. 목표 
**구하고자 하는 것은 무엇인가?**
- 주어진 문자열의 sha-256해시값을 구합니다. 

### 1. 이해 


### 2. 계획

- 제공되는 MessageDigest를 사용합니다. 

### 3. 실행
```kotlin
    fun main() {
        with(BufferedReader(InputStreamReader(System.`in`))) {
            val s = readLine()
            println(sha256(s))
        }
    }

    fun sha256(s: String) =
        MessageDigest.getInstance("SHA-256")
            .apply {
                update(s.toByteArray())
            }
            .digest()
            .joinToString("") {
                "%02x".format(it)
            }

```

### 4. 회고 

