---
title: '[문제풀이] 순위 '
path: blog/daily-programmers-ranking
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2022-01-28
excerpt: 프로그래머스 - 순위
draft: false
---

## 순위

- [순위 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/49191#qna)

### 구하고자 하는 것은 무엇인가?

- 몇개의 경기 결과를 분실한 상태에서 정확하게 순위를 매길 수 있는 선수의 수를 구해야합니다.

### 1. 이해

- 선수의 수 n과 경기 결과를 담은 results가 주어집니다.
- result는 2차원 배열입니다.
- result의 각 행 (a,b)의 의미는 a선수가 b선수를 이겼다는 의미입니다.

### 2.계획

- 플로이드-워셜 알고리즘을 사용합니다.

1. results를 바탕으로 선수의 승패를 기록하는 board를 만듭니다.
2. 플로이드 - 워셜 알고리즘을 수행하여 선수의 승패를 구합니다.
3. 자기 자신을 제외하고 승패가 모두 결정난 행의 개수를 구하여 리턴합니다.

### 3. 실행

```kotlin
fun ranking(n: Int, results: Array<IntArray>): Int {
    val board = Array(n) {CharArray(n){'x'} }

    results.forEach {
        val (a, b) = it
        board[a - 1][b - 1] = 'w'
        board[b - 1][a - 1] = 'l'
    }

    for (k in 0 until n) {
        for(i in 0 until n){
            for(j in 0 until n){
                if(board[i][k] == board[k][j] && board[i][k] != 'x'){
                    board[i][j] = board[i][k]
                }
            }
        }
    }
    return  board.filter { arr -> arr.count { it =='x'} ==1 }.size
}
```

### 4. 회고

- 플로이드 - 워셜 알고리즘에 대해 알게되었습니다.
- 스스로 생각해서 문제를 풀지 못해 아쉽습니다.
