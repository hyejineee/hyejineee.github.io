---
title: '[문제풀이] 이중 우선순위 큐 '
path: blog/daily-programmers-double-priority-queue
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2022-02-21
excerpt: 프로그래머스 - 이중 우선순위 큐
draft: false
---

## 이중 우선순위 큐

[프로그래머스 - 이중 우선순위 큐](https://programmers.co.kr/learn/courses/30/lessons/42628)

### 구하고자 하는 것은 무엇인가?

- 이중 우선순위 큐가 할 연산이 주어질 때, 모든 연산을 처리한 후 큐가 비어있으면 [0,0], 비어있지 않으면 [최댓값, 최솟값]을 리턴하는 함수를 구현해야 합니다.

### 1. 이해

- 이중 우선순위 큐가 수행할 수 있는 연산은 다음과 같습니다.
  - I 숫자 : 큐에 주어진 숫자를 삽입합니다.
  - D 1 : 큐에서 최댓값을 삭제합니다.
  - D -1: 큐에서 최솟값을 삭제합니다.
- 빈 큐에 데이터를 삭제하라는 연산이 주어질 경우, 해당 연산은 무시합니다.

### 2.계획

1. 연산이 적용될 큐를 생성합니다.
2. 연산이 I일 경우 큐에 데이터를 넣습니다.
3. 연산이 D일 경우에 먼저 큐가 비어있는지 확인합니다. 비어있다면 해당 연산을 무시합니다.
4. 큐가 비어있지 않을 경우 큐를 정렬합니다.
5. D 1일 경우 pollLast()를 D-1일 경우 pollFirst()를 사용하여 최대/ 최소값을 삭제합니다.
6. 큐에서 최대값과 최소값을 찾아 리턴합니다.

### 3. 실행

```kotlin
fun solution(operations: Array<String>): IntArray {
        val queue = LinkedList<Int>()

        for (i in operations) {
            val (op, data) = i.split(" ")

            if(op == "I"){
                queue.add(data.toInt())
                continue
            }

            if(queue.isEmpty()) continue

            queue.sort()

            if(data.toInt() == 1) queue.pollLast() else queue.pollFirst()

        }

        return intArrayOf(queue.maxBy { it }?:0, queue.minBy { it }?:0)
    }
```

### 4. 회고

- 레벨3이라 겁먹었는데 쉽게 풀 수 있었습니다.
- 다른 사람들의 풀이를 보니 접근을 좀 다르게 했어야 했나 싶습니다.
