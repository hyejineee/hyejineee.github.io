---
title: "[문제풀이] 거의 최단 경로 "
path: blog/daily-BOJ-5719
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-10-29
excerpt: 백준 - 거의 최단 경로 
draft: false
---


## 거의 최단 경로 
* [거의 최단 경로 - 백준](https://www.acmicpc.net/problem/5719)

### 0. 목표 
**구하고자 하는 것은 무엇인가?**
- 거의 최단 경로의 길이를 구해야 합니다.


### 1. 이해 

- 거의 최단 경로 : 최단 경로에 포함되지 않는 도로로만 이루어진 경로 중 가장 짧은 것 
- 주어지는 것 1: 장소의 수n, 도로의 수m
- 주어지는 것 2: 시작점s, 도착점d
- 주어지는 것 3: n개의 줄에 걸쳐 장소u -> 장소v , 두 장소 사이 도록의 길이p


### 2. 계획
- 최단 거리를 역 추적하여 포함되는 장소를 찾기 위해 장소로 들어오는 도로를 표시하는 그래프를 만들어 사용합니다.
- 제외될 경로를 기록하기 위해 path[출발장소][도착장소] 이차원 배열을 만들어 사용합니다. 


1. 최단거리를 구합니다. 
   - 다익스트라 알고리즘을 사용하여 출발 장소에서 도착 장소까지 최단 거리를 구합니다. 
   - 계산시간을 줄이기 위해 최단 거리 배열에 저장된 현재 노드의 값이 pop한 노드의 거리보다 작다면 계산을 패스합니다. 
   
2. 최단거리에 포함되는 경로를 구합니다.
   - dfs방식으로 도착 장소부터 출발 장소까지 최단 거리 경로에 포함되는 장소를 역추적합니다.
   - 계산 시간을 줄이기 위해 방문한 장소라면 계산을 패스합니다.
   - 제외될 경로를 기록하기 위해 path[현재 장소][이전 장소]를 true로 설정합니다.
   
3. 포함되는 경로를 제외하고 다시 최단 거리를 구합니다. 
   - 다시 다익스트라 알고리즘을 통해 최단 거리를 구합니다.
   - 이때 [방문한 장소][다음 방문할 장소]의 값이 true라면 계산을 패스합니다.


### 3. 실행.

```kotlin
    fun main() {

        with(BufferedReader(InputStreamReader(System.`in`))) {
            val bw = BufferedWriter(OutputStreamWriter(System.out))

            while (true){
                val (n, m) = readLine().split(" ").map { it.toInt() }

                if(n ==0) break

                val (s, d) = readLine().split(" ").map { it.toInt() }

                val g = mutableMapOf<Int, MutableList<List<Int>>>()
                val inG = mutableMapOf<Int, MutableList<List<Int>>>()
                val distances = mutableMapOf<Int, Int>()
                val dropped = MutableList(n){
                    MutableList(n){false}
                }


                (0 until n).forEach {
                    g[it] = mutableListOf()
                    inG[it] = mutableListOf()
                    distances[it] = Float.POSITIVE_INFINITY.toInt()
                }

                (0 until m).forEach {
                    val (u, v, p) = readLine().split(" ").map { it.toInt() }
                    g[u]?.add(listOf(v, p))
                    inG[v]?.add(listOf(u, p))
                }

                distances[s] = 0
                dijkstra(s, g, distances, dropped)

                trackingNode(s, d, distances, inG, dropped)
                distances.forEach {
                    distances[it.key] = Float.POSITIVE_INFINITY.toInt()
                }

                dijkstra(s,g,distances, dropped)
                println(if(distances[d]?.compareTo(Float.POSITIVE_INFINITY.toInt())==-1) distances[d] else -1)
            }
        }
    }

    private fun dijkstra(startNode: Int, g: MutableMap<Int, MutableList<List<Int>>>, distances: MutableMap<Int, Int>, dropped:List<List<Boolean>>) {
        val needVisit = PriorityQueue<List<Int>>(compareBy { it.last() })
        needVisit.add(listOf(startNode, 0))

        while (needVisit.isNotEmpty()) {
            val (currentNode, currentDistance) = needVisit.poll()

            if((distances[currentNode]?:-1) < currentDistance) continue

            g[currentNode]?.forEach { (n, v) ->
                val distance = v + currentDistance

                if (distance < (distances[n] ?: -1) && (dropped[currentNode][n].not())) {
                    distances[n] = distance
                    needVisit.add(listOf(n, distance))
                }
            }
        }
    }

    private fun trackingNode(
        s:Int,
        startNode: Int,
        distances: MutableMap<Int, Int>,
        inG: MutableMap<Int, MutableList<List<Int>>>,
        dropped: MutableList<MutableList<Boolean>>
    ) {
        val needVisit = Stack<List<Int>>()
        val visited = MutableList(inG.size){false}

        needVisit.add(listOf(startNode, distances[startNode] ?: -1))

        while (needVisit.isNotEmpty()) {
            val (currentNode, shortestDistance) = needVisit.pop()

            if(visited[currentNode]) continue
            visited[currentNode] = true

            inG[currentNode]?.forEach { (n, v) ->
                if (v + (distances[n] ?: 0) == shortestDistance) {
                    needVisit.add(listOf(n, distances[n]?:0))
                    dropped[n][currentNode] = true

                }
            }
        }
    }

```

### 4. 회고 

- 메모리 초과와 시간초과로 문제를 해결하는데 시간이 많이 소비되었습니다.ㅠㅠ
- 원래 리스트를 만들어서 제외될 경로를 기록했었는데 메모리 문제때문에 이차원 boolean배열로 수정했습니다.
- 시간 초과가 발생하여 다익스트라 알고리즘 부분과 최단 거리에 포함된 경로를 찾는 부분에 조건을 넣어 해결했습니다.
- 오랜 시간 고민하다가 문제를 푸니 뿌듯합니다.