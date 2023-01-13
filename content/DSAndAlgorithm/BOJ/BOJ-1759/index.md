---
title: '[문제풀이] 암호 만들기 '
path: blog/daily-BOJ-1759
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2021-11-04
excerpt: 백준 - 암호 만들기
draft: false
---

## 암호 만들기

- [암호 만들기 - 백준](https://www.acmicpc.net/problem/1759)

### 0. 목표

**구하고자 하는 것은 무엇인가?**

- 사전식으로 가능성 있는 암호를 모두 구해야 합니다.

### 1. 이해

- l개의 암호를 만들 수 있습니다.
- 암호는 알파벳 소문자로 구성되며, 최소 한 개의 모음과 두 개의 자음으로 구성되어 있습니다.
- 암호를 이루는 알파벳이 암호에서 증가하는 순서로 배열되어 있습니다.
- 암호를 이루는 알파벳의 종류는 c가지 있습니다.
- 주어지는 것 1: 암호의 길이l, 암호를 이루는 알파벳의 수 c
- 주어지는 것 2: 암호에 사용되는 알파벳들

### 2. 계획

1. 입력받은 c개의 알파벳을 오름차순으로 정렬합니다.
2. 앞에서 부터 c-l까지 각 알파벳에 대해 bfs를 진행합니다.
3. needVisit에 시작하는 알파벳 데이터를 넣습니다.
4. needvisit에서 데이터 (단어)를 꺼냅니다.
5. 꺼낸 단어의 길이가 l이라면 단어에 1개 이상의 모음, 2개 이상의 자음이 있는지 확인하고 있을 경우 결과값에 저장합니다.
6. 길이가 l보다 짧다면 다음으로 붙일 수 있는 단어에 대해서 가능한지 확인합니다.
7. 붙일 수 있는 단어라면 needVisit에 알맞게 가공하여 넣습니다.
8. needVisit이 비워질 때까지 4~7번 과정을 반복합니다.
9. 각 시작 알파벳에 대해 bfs를 모두 수행했다면 결과를 출력합니다.

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

- 혼자 힘으로 풀었습니다!!!!뿌듯합니다.
- 메모리 초과 때문에 애를 먹었는데 subList()를 사용하여 문자를 만드는 경우를 줄여 해결하였습니다.
