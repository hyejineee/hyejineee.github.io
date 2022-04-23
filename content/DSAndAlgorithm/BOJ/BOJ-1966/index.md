---
title: "[문제풀이] 프린터큐 "
path: blog/daily-BOJ-1966
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-10-04
excerpt: 백준 - 프린터큐
draft: false
---


## 프린터큐
* [프린터큐  - 백준](https://www.acmicpc.net/problem/1966)

### 0. 목표 
**구하고자 하는 것은 무엇인가?**
- 궁금한 문서가 몇 번째로 출력되는지 구해야합니다. 


### 1. 이해 

- 프린터는 문서의 중요도를 확인합니다.
- 프린터는 현재 문서의 중요도가 나머지 뒤에 있는 문서들의 중요도보다 높은 경우 출력합니다. 
    - 나머지 뒤에 있는 문서 중에 중요도가 현재 문서보다 높은 것이 있다면, 현재 문서를 출력하지 않고 다시 프린터 큐 뒤로 보냅니다. 
- 몇 번째로 인쇄되었는지 궁금한 문서의 인덱스가 주어집니다. 

### 2. 계획

- 궁금한 문서가 출력될 때까지 다음 과정을 반복합니다. 
    1. 프린터 큐의 맨 앞에 있는 문서를 가져옵니다. 
    2. 프린터에 남아있는 문서들 중에 중요도가 더 높은 문서가 있다면 출력하지 않고 다시 프린트 큐로 넣습니다.
    3. 중요도가 더 높은 문서가 없다면 프린터를 출력하고 카운트를 1증가합니다. 
- 궁금한 문서가 출력되었다면 카운트의 값을 리턴합니다.

### 3. 실행
```kotlin

    fun main() {

        with(BufferedReader(InputStreamReader(System.`in`))) {
            val testCase = readLine().toInt()

            for (i in 0 until testCase) {
                val (c, doc) = readLine().split(" ").map { it.toInt() }
                val p = readLine().split(" ").map { it.toInt() }.toIntArray()
                println(printerQueue(c, doc, p))
            }
        }
    }

    fun printerQueue(count: Int, doc: Int, priority: IntArray): Int {

        val q = LinkedList<Pair<Int, Int>>()

        (0 until count).forEach {
            q.add(Pair(priority[it], it))
        }
        
        var c = 0

        while (true) {
            val d = q.removeFirst()

            if ((q.count { it.first > d.first }) > 0) {
                q.add(d)
            } else {
                c++
                if (d.second == doc) {
                    return c
                }
            }
        }
    }


```

### 4. 회고 

* 여러번 풀었던 문제를 큰 장애물 없이 풀었던 것 같습니다.
