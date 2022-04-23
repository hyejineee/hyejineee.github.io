---
title: "[문제풀이] 가장 먼 노드 "
path: blog/daily-programmers-farthest-node
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2022-01-27
excerpt: 프로그래머스 - 가장 먼 노드 
draft: false
---


## 가장 먼 노드
### 구하고자 하는 것은 무엇인가?

- 1번 노드에서 가장 멀리 있는 노드의 개수를 구해야 합니다.

### 1. 이해

- 가장 멀리 떨어진 노드 = 최단 경로로 이동했을 때 간선의 개수가 가장 많은 노드
- 노드의 개수 n과 간선에 대한 정보 edge가 주어집니다.
- 간선에 대한 정보는 2차원 배열로 이루어져 있습니다.
- 2차원 배열의 각 행은 (a,b)형태이고 a노드와 b노드 사이에 간선이 있음을 나타냅니다.
- 간선은 양방향입니다.

### 2.계획

- 다익스트라 알고리즘을 사용하여 최단 경로를 구합니다.
1. 주어진 간선 정보를 사용하여 그래프를 초기화합니다. 
2. 1번 노드부터 각 노드까지의 거리를 기록하는 distances 배열을 초기화합니다.
3. 그래프에 대해서 다익스트라 알고리즘을 수행합니다. 
4. 다익스트라 알고리즘을 통해 구해진 거리중 max값을 구합니다.
5. distances배열의 원소 중에서 max값과 같은 원소의 개수를 구하고 리턴합니다.

### 3. 실행

```kotlin
fun farthestNode(n: Int, edge: Array<IntArray>): Int {
    val distances = Array(n) {
        if (it == 0) 0 else Int.MAX_VALUE
    }

    val graph = mutableMapOf<Int, MutableList<Int>>()

    edge.forEach {
        val (a, b) = it
        graph[a]?.add(b) ?: run { graph[a] = mutableListOf(b) }
        graph[b]?.add(a) ?: run { graph[b] = mutableListOf(a) }
    }

    calculateDistance(LinkedList<Pair<Int, Int>>().apply { add(Pair(1, 0)) }, distances, graph.toMap())

    val max = distances.max() ?: -1

    return distances.count { it == max }
}

private fun calculateDistance(
    needVisit: LinkedList<Pair<Int, Int>>,
    distances: Array<Int>,
    graph: Map<Int, MutableList<Int>>
) {

    if (needVisit.isEmpty()) {
        return
    }

    val (node, currentDistance) = needVisit.poll()

    graph[node]?.forEach {
        val newDistance = currentDistance + 1

        if (distances[it - 1] > newDistance) {
            distances[it - 1] = newDistance
            needVisit.add(Pair(it, newDistance))
        }
    }

    return calculateDistance(needVisit, distances, graph)
}
```

### 4. 회고

- 다익스트라 알고리즘을 복습할 수 있었습니다.
- 많이 변형되지 않은 문제라 쉽게 풀 수 있었습니다.