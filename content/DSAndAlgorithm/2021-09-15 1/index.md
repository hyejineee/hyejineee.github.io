---
title: '[문제풀이] 알파벳 '
path: blog/daily-alphabet
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2021-09-15
excerpt: 백준 - 알파벳
draft: false
---

## 알파벳

- [알파벳 - 백준](https://www.acmicpc.net/problem/1987)

### 1. 이해

- 말이 최대 몇 칸을 이동할 수 있는지 구하시오.
- 세로 r, 가로 c 사이즈의 보드가 있습니다.
- 보드의 칸 하나에 알파벳이 적혀있습니다.
- 좌측 상단 칸에 말이 놓여 있습니다. 보드[0][0]
- 말은 상, 하, 좌, 우 로 이동할 수 있습니다.
- 이동한 칸에 적혀있는 알파벳은 지금까지 지나온 모든 칸에 적혀있는 알파벳과 달라야 합니다.

### 2. 계획

- nQueen 풀이와 비슷하게 문제를 풉니다.
- 이동할 수 있는 경우의 수(상, 하, 좌, 우)에 대해서 dfs탐색을 합니다.

### 3. 실행

```kotlin
    fun alphabet(r: Int, c: Int, board: Array<String>): Int {
        val result = mutableListOf<String>()
        dfs(board, mutableListOf(board[0][0]), 0, 0, result)
        return result.maxOf { it.length }
    }

    fun dfs(
        board: Array<String>,
        currentCandidate: MutableList<Char>,
        currentRow: Int,
        currentCol: Int,
        result: MutableList<String>
    ) {



        val coordinate = listOf(
            intArrayOf(-1, 0),
            intArrayOf(1, 0),
            intArrayOf(0, -1),
            intArrayOf(0, 1),
        )

        for (i in coordinate) {

            val x = currentRow + i[0]
            val y = currentCol + i[1]

            if (x !in board.indices || y !in 0 until board[0].length) continue

            if (board[x][y] !in currentCandidate) {
                currentCandidate.add(board[x][y])
                dfs(board, currentCandidate, x, y, result)

                if (currentCandidate.isNotEmpty()) currentCandidate.removeLast()
            }
        }
    }
```

### 4. 회고

- 처음에 답을 출력을 안해놓고 왜 틀린지 몰라서 시간을 많이 허비했습니다.
- 풀이는 맞는 것 같으나 시간 초과가 발생합니다.ㅠㅠ
- 강의를 보고 다시 풀이해야겠습니다.
- bfs와 dfs를 다시 복습하고 while문으로도 작성할 수 있도록 연습해야겠습니다.
