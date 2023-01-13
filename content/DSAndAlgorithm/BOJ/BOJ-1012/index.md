---
title: '[문제풀이] 유기농 배추 '
path: blog/daily-BOJ-1012
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2021-10-27
excerpt: 백준 - 유기농 배추
draft: false
---

## 유기농 배추

- [유기농 배추 - 백준](https://www.acmicpc.net/problem/1012)

### 0. 목표

**구하고자 하는 것은 무엇인가?**

- 밭에 필요한 최소의 배추흰지렁이의 마리 수를 구해야합니다.

### 1. 이해

- 배추흰지렁이는 인접한 배추까지 보호합니다.
  - 인접한 배추 : 배추흰지렁이가 있는 배추로부터 상,하,좌,우에 있는 배추
- 밭에 배추가 심어져 있으면 1, 그렇지 않으면 0으로 표시합니다.
- 주어지는 것 1: 테스트 케이스의 수
- 주어지는 것 2: 각 테스트 케이스마다 배추 밭의 가로길이m, 세로길이n, 배추가 심어져 있는 위치의 개수k
- 주어지는 것 3: k수 만큼 배추가 심어져 있는 위치 x,y

### 2. 계획

- 빝의 크기와 같은 2차원 boolean배열을 만듭니다.
- 배추가 심어져 있는 위치를 cabbagePositions에 저장합니다.

1. 2차원 배열을 순회합니다.
2. 방문한 적이 있는 곳은 넘어갑니다.
3. 방문하지 않았다면 해당 위치에 배추가 있는지 확인하고 bfs를 실행합니다.
   1. 방문이 필요한 곳에 처음 위치를 추가합니다.
   2. 방문이 필요한 목록에서 위치를 하나 꺼내옵니다.
   3. 해당 위치가 배추가 심어져 있는 곳이고, 방문한 적이 없다면 방문을 표시합니다.
   4. 방문한 배추의 인접한 위치를 방문이 필요한 목록에 추가합니다.
   5. 방문한 배추의 목록이 하나라도 있다면 1, 없다면 0을 리턴합니다.
4. 순회하면서 bfs의 실행결과를 흰지렁이의 개수에 추가해줍니다.
5. 순회를 마치면 흰지렁이의 개수를 출력합니다.

### 3. 실행

```kotlin
    fun main() {
        with(BufferedReader(InputStreamReader(System.`in`))) {
            val bw = BufferedWriter(OutputStreamWriter(System.out))

            val tc = readLine().toInt()

            (1..tc).forEach {
                val (m, n, k) = readLine().split(" ").map { it.toInt() }

                val farm = MutableList(n) {
                    MutableList(m) { false }
                }

                val cabbagePositions = mutableListOf<Pair<Int, Int>>()

                (1..k).forEach {
                    val (x, y) = readLine().split(" ").map { it.toInt() }
                    cabbagePositions.add(Pair(y, x))
                }

                var earthWormCount = 0

                for (i in 0 until n) {
                    for (j in 0 until m) {
                        if (farm[i][j]) continue

                        if (Pair(i, j) in cabbagePositions)
                            earthWormCount += bfs(i, j, farm, cabbagePositions)
                    }
                }
                println(earthWormCount)

            }

            bw.flush()
            bw.close()
        }
    }

    private fun bfs(
        startY: Int,
        startX: Int,
        farm: MutableList<MutableList<Boolean>>,
        cabbagePositions: MutableList<Pair<Int, Int>>
    ): Int {
        val needVisit = LinkedList<Pair<Int, Int>>()
        val visited = LinkedList<Pair<Int, Int>>()

        needVisit.add(Pair(startY, startX))

        while (needVisit.isNotEmpty()) {
            val pop = needVisit.poll()


            if (pop in cabbagePositions && !farm[pop.first][pop.second] && pop !in visited) {
                farm[pop.first][pop.second] = true
                visited.add(pop)

                val nextPosition = listOf(
                    Pair(pop.first - 1, pop.second),
                    Pair(pop.first + 1, pop.second),
                    Pair(pop.first, pop.second - 1),
                    Pair(pop.first, pop.second + 1),
                ).forEach {
                    if(it.first < farm.size && it.second < farm[0].size)
                        needVisit.add(it)
                }
            }
        }

        return if (visited.size > 0) 1 else 0
    }
```

### 4. 회고

- x,y좌표가 배열의 인덱스와 헷갈려서 시간이 좀 걸린 것 같습니다.
- 그래도 bfs를 통해 쉽게 풀 수 있었습니다.
