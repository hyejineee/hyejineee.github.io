---
title: "[문제풀이] 크레인 인형뽑기 "
path: blog/daily-pick-up-the-doll
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-08-30
excerpt: 프로그래머스 - 크레인 인형뽑기 
draft: false
---


## 크레인 인형 뽑기 
* [크레인 인형뽑기 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/64061)

### 1. 이해 
- 사라진 인형의 개수 구하기
- 바구니에 같은 인형이 연속해서 들어가는 경우 -> 두 인형이 터지면서 바구니에서 사라진다.
- 바구니의 크기에는 제한이 없다.
- board의 [i][j]가 인형의 위치 
- 인형의 종류는 1~ 100까지 있다. 
    - 같은 수는 같은 종류의 인형이다.
- 0은 빈칸이다. 
- (moves의 원소 -1)은  뽑을 위치의 인덱스 
### 2. 계획

0. 0을 없앤 queueBoard를 만든다.
1. moves를 순회하면서 원소에 해당하는 위치로 이동한다.
    * 해당 위치에 있는 큐가 비어있는 큐일 경우 다음 위치로 이동한다.
2. 해당 위치에 있는 큐의 마지막 원소(인형)를 가져온다. (pollLast())
3. basket에 원소가 있을 경우 마지막에 들어간 원소를 peek()한다.
4. 2번의 인형과 3번의 인형이 같은 종류의 인형인 경우 바구니에서 인형을 pop하고 사라진 인형의 개수에 2개 추가한다.
5. 2번의 인형과 3번의 인형이 같은 종류의 인형이 아닌 경우 바구니에 2번 인형을 넣는다. 
6. 다음 위치로 이동한다.


### 3. 실행
```kotlin
    fun pickUpTheDollOfCrane(board: Array<IntArray>, moves: IntArray): Int {
        val queueBoard = List<LinkedList<Int>>(board.size) {
            LinkedList()
        }

        for (i in board.indices) {
            for (j in board[i].indices) {
                if (board[i][j] == 0) continue
                queueBoard[j].push(board[i][j])
            }
        }

        val basket = Stack<Int>()

        var popCount = 0

        for (i in moves) {

            if (queueBoard[i - 1].isEmpty()) continue

            val doll = queueBoard[i - 1].pollLast()
            val prevDoll = if (basket.isNotEmpty()) basket.peek() else -1

            if (doll == prevDoll) {
                basket.pop()
                popCount += 2
                continue
            }

            basket.push(doll)
        }
        return popCount
    }
```

### 4. 회고 

인형의 위치에 대해서 잘못 이해한 것 때문에 시간이 좀 걸렸습니다. 문제를 풀 때 제시한 내용을 정확하게 이해하는 자세가 필요합니다.