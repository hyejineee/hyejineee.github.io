---
title: "[문제풀이] 중량제한 "
path: blog/daily-BOJ-1939
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-10-12
excerpt: 백준 - 중량제한 
draft: false
---


## 중량제한 
* [중량제한   - 백준](https://www.acmicpc.net/problem/1939)

### 0. 목표 
**구하고자 하는 것은 무엇인가?**
- 한 번의 이동에서 옮길 수 있는 물품들의 중량의 최댓값을 구합니다.

### 1. 이해 

- 각각의 다리에는 중량 제한이 있습니다.
- 중량 제한을 초과하면 다리는 무너집니다.
- 서로 같은 두 섬 사이에 여러 다리가 있을 수 있습니다. 

- 첫 번째 입력 : 섬의 수 n, m개의 다리 정보
- 두 번째 입력 ~ m : 섬1, 섬2, 섬1과 섬2를 연결하는 다리의 중량 제한w
- 마지막 입력 : 공장이 위치해 있는 섬1의 번호, 공장이 위치해 있는 섬2의 번호



### 2. 계획

- 최대 중량 제한 값과 최소 중량 제한 값을 구합니다.
- 중간 중량 값을 구합니다.
- 증간 중량 값으로 섬을 이동할 수 있는지 확인합니다.
    - 이동할 수 있으면 결과값을 중간 중량 값으로 바꾸고, 최소 중량 값을 중간 중량 값 + 1로 설정합니다.
    - 이동할 수 없으면 최대 중량 값을 중간 중량 값 -1로 설정합니다.
- 최소 중량 값이 최대 중량 값보다 적거나 같은면 위의 과정을 반복합니다.


### 3. 실행
```kotlin
    fun main() {

        with(BufferedReader(InputStreamReader(System.`in`))) {
            val bw = BufferedWriter(OutputStreamWriter(System.out))

            val (n, m) = readLine().split(" ").map { it.toInt() }
            val g = mutableMapOf<Int, MutableList<List<Int>>>()

            var start = 1000000000
            var end = 1

            (0 until m).map {
                val (node1, node2, w) = readLine().split(" ").map { it.toInt() }
                g[node1]?.add(listOf(node2, w)) ?: kotlin.run { g[node1] = mutableListOf(listOf(node2, w)) }
                g[node2]?.add(listOf(node1, w)) ?: kotlin.run { g[node2] = mutableListOf(listOf(node1, w)) }
                start = min(start, w)
                end = max(end, w)
            }

            val (startNode, endNode) = readLine().split(" ").map { it.toInt() }
            var result = 0

            while (start <= end) {
                val mid = (start + end) / 2
                if (bfs(mid, g, startNode, endNode, n)) {
                    result = mid
                    start = mid + 1
                } else {
                    end = mid - 1
                }
            }

            bw.write("$result")


            bw.flush()
            bw.close()
        }
    }

    fun bfs(limitW: Int, g: MutableMap<Int, MutableList<List<Int>>>, startNode: Int, endNode: Int, n: Int): Boolean {

        val visited = MutableList(n + 1) { false }
        val needVisited = LinkedList<Int>()
        needVisited.push(startNode)

        while (needVisited.isNotEmpty()) {
            val pop = needVisited.pop()

            g[pop]?.forEach { (n2, w) ->
                if (!visited[n2] && w >= limitW) {
                    visited[n2] = true
                    needVisited.add(n2)
                }
            }
        }

        return visited[endNode]
    }
```

### 4. 회고 

- 어려운 문제라 해설 강의를 보면서 문제를 풀었습니다.
- 이분 탐색이 적용되는 문제의 유형에 대해서 알 것 같습니다. 
    - 어떤 것의 최대값을 찾는 문제에 많이 사용되는 것 같습니다. 
    - 어떤 것의 최솟값을 찾는 문제에도 사용되는지 궁금합니다.
- bfs를 응용하여 쉽게 노드까지 연결되었는지 여부를 알 수 있는 알고리즘을 알게 되었습니다.

