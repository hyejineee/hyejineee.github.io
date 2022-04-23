---
title: "[문제풀이] 키로거 "
path: blog/daily-BOJ-5397
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-10-04
excerpt: 백준 - 키로거
draft: false
---


## 키로거
* [키로거  - 백준](https://www.acmicpc.net/problem/5397)

### 0. 목표 
**구하고자 하는 것은 무엇인가?**
- 강산이가 비밀번호 창에서 입력한 키가 주어졌을 때, 강산이의 비밀번호를 알아내야 합니다.

### 1. 이해 

- 강산이가 입력한 순서대로 길이가 L인 문자열이 주어집니다.
- 입력된 글자가 
- '-'인 경우 백스페이스 : 앞에 글자가 존재한다면 그 글자를 지웁니다. 
- '<'또는 '>'일 경우 화살표 : 커서의 위치를 왼쪽 또는 오른쪽으로 한칸 이동시킵니다.
- 나머지 문자는 비밀번호의 일부입니다. 


### 2. 계획


- 커서를 기준으로 오른쪽, 왼쪽 스택을 사용합니다. 
- 강산이가 입력한 문자열을 순회합니다. 
- '-'가 나온 경우 왼쪽 스택에서 요소를 pop합니다. 
- '>'가 나온 경우 오른쪽 스택에서 요소를 pop하여 왼쪽으로 push합니다. 
- '<'가 나온 경우 왼쪽 스택에서 요소를 pop하여 오른쪽으로 push합니다. 
- 왼쪽, 오른쪽에 있는 값으로 문자열을 만들어 리턴합니다. 
    - 오른쪽으로 들어가 있는 경우 역순으로 들어가있기 때문에 reverse해줍니다.

### 3. 실행
```kotlin

    fun main() {

        with(BufferedReader(InputStreamReader(System.`in`))) {
            val testCase = readLine().toInt()

            for (i in 0 until testCase) {
                val s = readLine()
                println(keyLogger(s))
            }
        }
    }

    fun keyLogger(s: String): String {

        val left = Stack<Char>()
        val right = Stack<Char>()

        for (c in s) {
            when (c) {
                '-' -> {
                    if (left.isEmpty()) continue
                    left.pop()
                }
                '<' -> {
                    if (left.isEmpty()) continue
                    right.push(left.pop())
                }
                '>' -> {
                    if (right.isEmpty()) continue
                    left.push(right.pop())
                }
                else -> {
                    left.push(c)
                }
            }
        }

        return left.joinToString("").plus(right.reversed().joinToString(""))
    }


```

### 4. 회고 

* 풀이는 비슷했는데 나중에 오른쪽 스택을 뒤집어 주는 것을 놓쳤습니다. 
