---
title: "[문제풀이] 네트워크 "
path: blog/daily-programmers-network
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2022-01-21
excerpt: 프로그래머스 - 네트워크
draft: false
---


## 네트워크
* [네트워크- 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/43162)

### 0. 목표 
**구하고자 하는 것은 무엇인가?**
- 컴퓨터끼리 연결된 네트워크의 개수를 구해야 합니다.

### 1. 이해 
- a와 b컴퓨터가 연결되어 있고 c컴퓨터가 연결되어 있을 경우 a-b-c는 같은 네트워크에 있다.
- 컴퓨터의 개수 n, 컴퓨터의 연결 정보 computers가 주어진다.
- 각 컴퓨터는 0 ~n-1로 표현한다.
- i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]는 1로 표현할 수 있다.
- computers[i][i]는 항상 1이다.


### 2. 계획

- union-find를 사용하여 연결되어 있는 컴퓨터 집합을 찾고 집합의 개수를 리턴한다.
1. 정점과 간선 정보를 초기화한다.
2. union-find 알고리즘에 필요한 parents, ranks를 초기화한다.
3. 정점을 순회한다.
4. 집합에 포함되지 않은 정점인 경우 어떤 집합에 속하는지 union-find를 사용하여 찾는다.
5. parents의 값으로 grouping하고 size를 리턴한다.


### 3. 실행
```kotlin
    fun network(n: Int, computers: Array<IntArray>): Int {

        val visited = BooleanArray(n) { false }

        val network = mutableMapOf<Int, MutableList<Int>>()

        computers.forEachIndexed { i, v ->
            for (j in i + 1 until v.size) {
                if (computers[i][j] == 1) {
                    network[i]?.add(j)?: run { network[i] = mutableListOf(j) }
                }
            }
        }

        var count = 0

        for (i in 0 until n) {
            if (visited[i]) continue

            val needVisit = LinkedList<Int>()
            needVisit.add(i)

            count ++

            while (needVisit.isNotEmpty()) {
                val pop = needVisit.pop()
                visited[pop] = true

                network[pop]?.forEach {
                    needVisit.add(it)
                }
            }
        }

        return count
    }
```

### 4. 회고 
- 다른 사람의 풀이를 보니 그냥 dfs로 풀 수 있다는 것을 알게 되었다. 복잡하게 생각하여 코드가 길어져 버렸다.
- 알고리즘을 단계적으로 생각해보자.

