---
title: "[문제풀이] 알파벳 "
path: blog/daily-BOJ-1987
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-11-04
excerpt: 백준 - 알파벳 
draft: false
---


## 알파벳 
* [알파벳 - 백준](https://www.acmicpc.net/problem/1987)

### 0. 목표 
**구하고자 하는 것은 무엇인가?**
- 조건에 맞는 말이 지나갈 수 있는 최대 칸의 수를 구해야 합니다.

### 1. 이해 

- 세로 r칸, 가로c칸인 모양의 보드가 있습니다.
- 말은 상, 하, 좌, 우로 인전한 네 칸중 한 칸으로 이동할 수 있습니다.
- 새로 이동하는 칸에 적혀있는 알파벳은 지금까지 지나온 모든 칸에 적혀있는 알파벳과 달라야 합니다.

### 2. 계획

1. 말이 지나갈 수 있는 길에 대해서 bfs를 수행합니다.
2. 처음 말의 위치를 needVisit에 처음 칸의 알파벳과 함꼐 넣습니다.
3. needVisit에서 데이터를 pop한 후에 저장된 알파벳의 크기와 현재 result에 저장된 값을 비교하여 더 큰 값을 result에 설정합니다.
   - 말이 지나온 칸의 길이를 나타냅니다.
4. 인접한 칸에 대해서 말이 갈 수 있는 칸인지 확인합니다. 
5. 말이 지나갈 수 있는 칸이라면 needVisit에 칸의 위치와 지금까지 지나온 칸에 적혀있는 알파벳 + 다음 칸의 알파벳을 저장합니다.
6. needVisit이 비워질 때까지 3~ 5번 과정을 반복합니다.
7. result의 값을 출력합니다.


### 3. 실행
```kotlin
    fun main() {
        with(BufferedReader(InputStreamReader(System.`in`))) {
            val (r,c) = readLine().split(" ").map { it.toInt() }
            val board:List<String> = (0 until r).map { readLine() }
            println(bfs(board))

        }
    }

    private fun bfs(board:List<String>): Int {
        var result = 0

        val needVisit = mutableSetOf<Triple<Int, Int, String>>()
        needVisit.add(Triple(0,0,""+ board[0][0]))

        while (needVisit.isNotEmpty()){
            val (x,y, step) = needVisit.first().also { needVisit.remove(it) }
            result = maxOf(result, step.length)

            val xs = intArrayOf(-1,1,0,0)
            val ys = intArrayOf(0,0,-1,1)

            for(i in 0 until 4){
                val nextX = x + xs[i]
                val nextY = y + ys[i]

                if(nextX in board.indices && nextY in 0 until  board[0].length ){
                    if(board[nextX][nextY] !in step)
                        needVisit.add(Triple(nextX, nextY, step + board[nextX][nextY]))
                }

            }
        }
        return result
    }
```

### 4. 회고 

- 이전에 문제를 풀었을 때는 시간 초과로 풀지 못했었는데 강의에서 힌트를 얻고 bfs로 문제를 푸니 시간 안으로 해결할 수 있었습니다.
- 앞으로 반복적으로 풀면서 문제 유형을 익혀야겠습니다.
