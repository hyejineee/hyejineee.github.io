---
title: "[문제풀이] 우주신과의 교감 "
path: blog/daily-BOJ-1774
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-10-29
excerpt: 백준 - 우주신과의 교감 
draft: false
---


## 우주신과의 교감 
* [우주신과의 교감 - 백준](https://www.acmicpc.net/problem/1774)

### 0. 목표 
**구하고자 하는 것은 무엇인가?**
- 새로 만들어야 할 최소 정신적 통로들의 길이의 합을 구해야 합니다.


### 1. 이해 

- 연결되지 않은 우주신이 있습니다.
- 모든 우주 신을 연결해 줘야 합니다.
- 주어지는 것 1: 우주신의 개수n, 이미 연결된 통로의 개수m
- 주어지는 것 2: n개의 줄에 걸쳐 우주신의 좌표x,y
- 주어지는 것 3: m개의 줄에 걸쳐 연결된 우주신n1과 n2


### 2. 계획
- 모든 우주 신을 연결하는 최소 경로를 찾아야 하기 때문에 최소 신장 트리를 구하는 크루스칼 알고리즘을 사용합니다.
- 우주신 사이의 길이를 구하는 방법 : 값이 intger범위를 넘어갈 수 있기 때문에 type을 신경써야 합니다.
```kotlin
    private fun getCoast(a: God, b: God): Double {
        val v1:Long= (a.x - b.x).toLong()
        val v2:Long = (a.y - b.y).toLong()

        return sqrt( ((v1*v1).toDouble() + (v2*v2)))
    }
```

0. 크루스칼 알고리즘에 사용될 parent, rank배열을 초기화해줍니다.
1. 주어진 모든 우주신 사이의 거리를 구해 edges에 저장합니다. (거리, 출발 우주신, 도착 우주신)
2. 연결된 우주신에 대해서 union작업을 합니다.
3. edges를 거리의 길이가 낮은 순으로 정렬합니다.
4. 정렬된 edges를 순회하면서 연결될 수 있는지 없는지 find작업을 통해 확인합니다.
5. 연결될 수 있다면 두 우주 신을 연결하고, 두 우주신 사이의 길이를 result에 더해줍니다.
6. result를 출력합니다.


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