---
title: "[문제풀이] DFS와 BFS "
path: blog/daily-BOJ-1260
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-10-26
excerpt: 백준 - DFS와 BFS 
draft: false
---


## DFS와 BFS 
* [DFS와 BFS - 백준](https://www.acmicpc.net/problem/1260)

### 0. 목표 
**구하고자 하는 것은 무엇인가?**
- 주어진 그래프를 DFS와 BFS로 탐색한 결과를 구해야합니다.

### 1. 이해 
- 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문합니다.
- 정점 번호는 1부터 n까지 입니다. 
- 주어지는 것 1: 정점의 개수n, 간선의 개수 m, 탐색을 시작할 정점의 번호 v
- 주어지는 것 2: 연결된 노드들의 정보 v1 v2


### 2. 계획
- dfs,bfs 알고리즘을 그대로 사용합니다.
- 정점이 모두 연결된 경우도 있기 때문에 needVisit에 정점을 넣을 때 해당 정점이 visited에 없는지 확인해야합니다.
- 입력 받은 값으로 그래프를 만듭니다. 

### 3. 실행
```kotlin
    fun main() {
        with(BufferedReader(InputStreamReader(System.`in`))) {
            val bw = BufferedWriter(OutputStreamWriter(System.out))

            val (n, m) = readLine().split(" ").map { it.toInt() }

            val nodes = mutableMapOf<Int, MutableList<Int>>()
            val inDegree = MutableList(n+1){0}

            val heap = PriorityQueue<Int>()

            (1 .. n).forEach {
                nodes[it] = mutableListOf()
            }

            (0 until m).forEach {
                val (a,b) = readLine().split(" ").map { it.toInt() }
                nodes[a]?.add(b)
                inDegree[b]+=1
            }

            for( i in 1 until inDegree.size){
                if(inDegree[i] ==0) heap.add(i)
            }

            val result = mutableListOf<Int>()

            while (heap.isNotEmpty()){

                val pop = heap.poll()
                result.add(pop)

                nodes[pop]?.forEach {
                    inDegree[it] -=1
                    if(inDegree[it] ==0){
                        heap.add(it)
                    }
                }
            }

            bw.write("${result.joinToString(" ")}")


            bw.flush()
            bw.close()
        }
    }
```

### 4. 회고 

- 평소에 dfs,bfs에 대한 복습을 하여서 쉽게 풀 수 있었습니다.