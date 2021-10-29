---
title: "[문제풀이] 해킹 "
path: blog/daily-BOJ-10282
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-10-28
excerpt: 백준 - 해킹 
draft: false
---


## 해킹 
* [해킹 - 백준](https://www.acmicpc.net/problem/10282)

### 0. 목표 
**구하고자 하는 것은 무엇인가?**
- 총 감염되는 컴퓨터의 수와 마지막 컴퓨터가 감염되기까지 걸리는 시간을 구해야 합니다. 


### 1. 이해 
- a가 b를 의존하고 있는 경우, b 감염시 일정 시간 후에 a가 감염됩니다.
- 주어지는 것 1: 테스트 케이스의 개수
- 주어지는 것 2: 컴퓨터의 개수n, 의존 관계의 개수d, 해킹당한 컴퓨터의 번호c 
- 주어지는 것 3: d개의 줄에 컴퓨터a, a컴퓨터가 의존하는 컴퓨터b, 컴퓨터b가 감염된 후 a컴퓨터가 감염되기까지 걸리는 시간s 


### 2. 계획

- 다익스트라 알고리즘을 사용하여 문제를 해결합니다.
- 다익스트라 알고리즘
  1. needVisit에서 데이터를 pop합니다.
  2. pop한 노드와 연결된 노드들을 가져옵니다. 
  3. 업데이트 되는 거리를 계산합니다. (pop한 노드의 간선 비용 + 연결된 노드의 간선 비용)
  4. 거리 배열에 있는 값보다 업데이트 되는 거리의 값이 작다면
  5. 거리 배열에 있는 값을 업데이트 되는 값으로 설정합니다.
  6. 업데이트된 노드는 needVisit에 추가합니다.

1. 입력받은 컴퓨터의 개수 정보로 사용될 그래프와 시간 저장 배열을 초기화합니다.
2. 의존 관계를 입력 받으면서 그래프를 만들어줍니다.
3. 시간 저장 배열에서 해킹당한 컴퓨터에 해당하는 노드를 0으로 설정하고 다익스트라 알고리즘을 수행합니다.
4. 시간 저장 배열에서 업데이트된 값의 개수를 가져옵니다. 
5. 시간 저장 배열에서 업데이트된 값 중 제일 큰 값을 가져옵니다.
6. 4번과 5번의 값을 출력합니다.

### 3. 실행.

```kotlin
    fun main() {

        with(BufferedReader(InputStreamReader(System.`in`))) {
            val bw = BufferedWriter(OutputStreamWriter(System.out))

            val tc = readLine().toInt()

            (1..tc).forEach {
                val (n,d,c) = readLine().split(" ").map { it.toInt() }

                val g = mutableMapOf<Int, MutableList<List<Int>>>()
                val distances = mutableMapOf<Int, Int>()

                (1..n).forEach {
                    g[it] = mutableListOf()
                    distances[it] = Int.MAX_VALUE
                }

                (1..d).forEach{
                    val (a,b,s) = readLine().split(" ").map { it.toInt() }
                    g[b]?.add(listOf(a,s))
                }

                distances[c] = 0
                dijkstra(c, g, distances)

                val count = distances.count { it.value in 0 until Int.MAX_VALUE }
                val time = distances.values.filter { it < Int.MAX_VALUE }.maxOrNull()?:-1

                println("$count $time")

            }

        }
    }

    private fun dijkstra(startComputer : Int, g:MutableMap<Int, MutableList<List<Int>>>, distances:MutableMap<Int,Int>){

        val needVisit = PriorityQueue<List<Int>>(compareBy{it[1]})
        needVisit.add(listOf(startComputer, 0))


        while (needVisit.isNotEmpty()){
            val (node, distance) = needVisit.poll()

            g[node]?.forEach { (n, v) ->
                val newDistance = v + distance

                if(newDistance < (distances[n]?:0)){
                    distances[n] = newDistance
                    needVisit.add(listOf(n,newDistance))
                }
            }
        }
    }
```

### 4. 회고 

- 이전에 정리했던 다익스트라 알고리즘 내용을 보고 쉽게 풀 수 있었습니다.
  