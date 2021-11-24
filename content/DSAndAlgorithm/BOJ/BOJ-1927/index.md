---
title: "[문제풀이] 최소 힙 "
path: blog/daily-BOJ-1927
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-10-20
excerpt: 백준 - 최소 힙 
draft: false
---


## 최소 힙 
* [최소 힙   - 백준](https://www.acmicpc.net/problem/1927)

### 0. 목표 
**구하고자 하는 것은 무엇인가?**
- 주어진 연산을 수행하는 프로그램을 작성한다.

### 1. 이해 

- 연산 1. 배열에 자연수 x를 넣는다.
- 연산 2. 배열에서 가장 작은 값을 출력하고, 그 값을 배열에서 제거한다.
- 주어지는 값 1 : 수행되는 연산의 갯수 
- 주어지는 값 2 : 수행되는 연산의 종류
  - 0이면 배열에서 가장 작은 값을 출력하고 그 값을 배열에서 제거한다.
  - 0이 아닌 자연수일 경우 배열에 값을 넣는다.

### 2. 계획
- 입력을 받으면서 연산을 수행한다.
- PriorityQueue<Int>()를 사용한다.

### 3. 실행
```kotlin
    fun main() {
        with(BufferedReader(InputStreamReader(System.`in`))) {
            val bw = BufferedWriter(OutputStreamWriter(System.out))

            val n = readLine().toInt()

            var list = PriorityQueue<Int>()

            (0 until n).forEach{
                val oper = readLine().toInt()

                when(oper){
                    0-> {
                        if(list.isEmpty()) {
                            bw.write("0\n")
                        }else{
                            bw.write("${list.poll()}\n")
                        }
                    }
                    else ->{
                        list.add(oper)
                    }
                }
            }

            bw.flush()
            bw.close()
        }
    }
```

### 4. 회고 

- 기본 api를 사용하여 쉽게 풀 수 있었습니다. 
- 생성자에 reverseOrder()를 넣어 최대 힙으로도 사용할 수 있는 것을 알게 되었습니다.

