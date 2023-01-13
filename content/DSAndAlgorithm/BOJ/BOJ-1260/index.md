---
title: '[문제풀이] DFS와 BFS '
path: blog/daily-BOJ-1260
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2021-10-26
excerpt: 백준 - DFS와 BFS
draft: false
---

## DFS와 BFS

- [DFS와 BFS - 백준](https://www.acmicpc.net/problem/1260)

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
            val (n, m, v) = readLine().split(" ").map { it.toInt() }

            val g = mutableMapOf<Int, MutableList<Int>>()

            (1 .. n).forEach {
                g[it] = mutableListOf()
            }

            (0 until m).forEach {
                val (v1, v2) = readLine().split(" ").map { it.toInt() }
                g[v1]?.add(v2)
                g[v2]?.add(v1)
            }

            (1 .. n).forEach {
                g[it]?.sort()
            }

            println(dfs(v,g).joinToString(" "))
            println(bfs(v,g).joinToString(" "))


            bw.flush()
            bw.close()
        }
    }

    private fun dfs(startNode : Int, g:MutableMap<Int, MutableList<Int>>): LinkedList<Int> {
        val visited = LinkedList<Int>()
        val needVisited = Stack<Int>()

        needVisited.push(startNode)

        while (needVisited.isNotEmpty()){
            val pop = needVisited.pop()

            if(pop !in visited){
                visited.add(pop)

                g[pop]?.reversed()?.forEach {
                    if(it !in visited){
                        needVisited.push(it)
                    }
                }
            }
        }
        return visited
    }

    private fun bfs(startNode: Int, g:MutableMap<Int, MutableList<Int>>): LinkedList<Int> {
        val visited = LinkedList<Int>()
        val needVisited = LinkedList<Int>()

        needVisited.push(startNode)

        while (needVisited.isNotEmpty()){
            val pop = needVisited.poll()

            if(pop !in visited){
                visited.add(pop)

                g[pop]?.forEach {
                    if(it !in visited){
                        needVisited.add(it)
                    }
                }
            }
        }
        return visited
    }
```

### 4. 회고

- 평소에 dfs,bfs에 대한 복습을 하여서 쉽게 풀 수 있었습니다.
