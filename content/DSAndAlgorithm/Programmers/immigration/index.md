---
title: "[문제풀이] 입국심사 "
path: blog/daily-programmers-immigration
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2022-02-07
excerpt: 프로그래머스 - 입국심사 
draft: false
---


## 입국심사 
* [입국심사 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/43238)

### 구하고자 하는 것은 무엇인가?

- 모든 사람이 심사를 받는데 걸리는 시간의 최솟값

### 1. 이해

- 처음에 모든 심사대는 비어있습니다.
- 한 심사대에 한 명만 들어갈 수 있습니다.
- 비어있는 심사대에 들어갈 수도 있고, 더 빨리 끝날 수 있는 심사대를 기다렸다가 들어갈 수 있습니다.
- 사람의 수n, 각 심사대의 걸리는 시간 times가 주어집니다.

### 2.계획

- 이분 탐색을 사용하여 걸리는 시간을 탐색합니다.
1. start를 1, end를 times의 최댓값 * 사람의 수로 초기화합니다.
2. start가 end와 같거나 크지 않을 때까지 반복문을 돕니다.
3. mid 값을 구합니다. mid 값은 주어진 시간을 의미합니다.
4. 주어진 시간 동안 몇 명의 사람을 처리할 수 있는지 구합니다.
5. 처리할 수 있는 사람의 수에 따라 시간을 변경하여 다음 반복문을 수행합니다.
    - 처리할 수 있는 사람의 수가 주어진 사람의 수보다 많다면 end의 값을 mid -1로 설정합니다.
    - 처리할 수 있는 사람의 수가 주어진 사람의 수보다 적다면 start의 값을 mid +1로 설정합니다.
6. 처리할 수 있는 사람의 수와 주어진 사람의 수가 같으면 mid 값을 리턴합니다.

### 3. 실행

```kotlin
fun immigration(n:Int, times:IntArray):Long{

    var start:Long = 1
    var end:Long = ((times.maxBy { it } ?: 0).toLong() * n)
    var answer:Long = end

    while(start <=end){
        val mid:Long = (start + end) /2

        val doneCount = times.fold(0L){ acc, i ->
            acc.plus((mid/i))
        }

        println("start:$start, mid:$mid, end:$end, doneCount:$doneCount, answer:$answer")

        if(doneCount >= n){
            answer = min(answer, mid)
            end = mid -1
        }else{
            start = mid + 1
        }
    }

    return answer
}
```

### 4. 회고

- 이분 탐색의 기초에 대해서 배우게 되었습니다.
- 이분 탐색 문제를 푸는데 감이 오는 것 같습니다.