---
title: "[문제풀이] 바이러스 "
path: blog/daily-BOJ-2606
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-10-27
excerpt: 백준 - 바이러스 
draft: false
---


## 바이러스 
* [바이러스 - 백준](https://www.acmicpc.net/problem/2606)

### 0. 목표 
**구하고자 하는 것은 무엇인가?**
- 1번 컴퓨터를 통해 웜 바이러스에 걸리게 되는 컴퓨터의 수를 구해야합니다.


### 1. 이해 
- 한 컴퓨터가 웜 바이러스에 걸리면 그 컴퓨터와 네트워크 상에서 연결되어 있는 모든 컴퓨터는 웜 바이러스에 걸리게 됩니다.
- 주어지는 것 1: 컴퓨터의 개수 
- 주어지는 것 2: 연결되어 있는 컴퓨터 쌍 정보의 개수 
- 주어지는 것 3: 연결되어 있는 컴퓨터들에 대한 정보 (컴퓨터1 - 컴퓨터2)


### 2. 계획

- 간단하게 bfs를 사용합니다. 

1. 컴퓨터의 개수대로 그래프를 초기화 합니다. 
2. 컴퓨터 쌍의 정보를 입력 받으면서 그래프를 구성합니다. 
3. 1번 노드를 먼저 방문이 필요한 목록에 넣습니다. 
4. 방문이 필요한 목록에 데이터가 없어질 때까지 다음을 반복합니다.
   1. 방문이 필요한 목록에서 데이터를 하나 꺼내옵니다. 
   2. 꺼낸 데이터가 방문한 노드가 아니라면 방문한 노드 목록에 넣고 
   3. 해당 노드와 연결된 노드들을 방문이 필요한 목록에 넣습니다. 
5. 방문한 목록의 사이즈 -1를 출력합니다.


### 3. 실행
```kotlin
    fun main() {
        with(BufferedReader(InputStreamReader(System.`in`))) {
            val bw = BufferedWriter(OutputStreamWriter(System.out))

            val nodeCount = readLine().toInt()
            val c = readLine().toInt()

            val g = mutableMapOf<Int, MutableList<Int>>()

            (1..nodeCount).forEach {
                g[it] = mutableListOf()
            }

            (1..c).forEach {
                val (n1, n2) = readLine().split(" ").map { it.toInt() }
                g[n1]?.add(n2)
                g[n2]?.add(n1)
            }

            val needVisit = LinkedList<Int>()
            val visited = LinkedList<Int>()

            needVisit.add(1)

            while (needVisit.isNotEmpty()){
                val pop = needVisit.poll()

                if(pop !in visited){
                    visited.add(pop)
                    g[pop]?.forEach {
                        if(it !in visited){
                            needVisit.add(it)
                        }
                    }
                }
            }

            println(visited.size -1)

            bw.flush()
            bw.close()
        }
    }
```

### 4. 회고 
- 쉽게 풀 수 있었습니다.


