---
title: "[문제풀이] 입실 퇴실 "
path: blog/daily-in-out
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-09-13
excerpt: 프로그래머스 - 입실 퇴실
draft: false
---


## 입실 퇴실
* [입실 퇴실  - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/86048)


### 1. 이해 
- 각 사람별로 반드시 만난 사람이 몇 명인지 구하기 
- 두 번 이상 회의실에 들어온 사람은 없습니다.
- 정확한 입실 시간, 퇴실 시간이 없습니다. 
- 입실 퇴실이 동시에 이뤄지는 경우는 없습니다.


### 2. 계획

1. 입실과 퇴실 기록이 있는 배열을 따라 사람을 내보내고 들여보냅니다. 
2. 나간 사람이 있는지 확인하기 전에 입실한 사람들 각각 만난 사람을 기록합니다. 
    * 예 - 1,2,3번이 입실해있을 경우 각각 1번은 2,3번 2번은 1,3번, 3번은 1,2번을 만난것을 기록합니다.
3. 사람들이 모두 퇴실했으면 기록한 내용을 반환합니다. 


### 3. 실행
```kotlin
    fun inOut(enterOrder: IntArray, leaveOrder: IntArray): IntArray {
        val count = MutableList(enterOrder.size) { mutableSetOf<Int>() }

        val leave: Queue<Int> = LinkedList<Int>().apply {
            leaveOrder.forEach {
                this.add(it)
            }
        }

        val enter = mutableListOf<Int>()

        for (element in enterOrder) {
            enter.add(element)

            enter.forEach { i ->
                count[i - 1].addAll(enter.filter { it != i })
            }
            
            while (leave.isNotEmpty()) {
                if (leave.peek() !in enter) break

                val pop = leave.poll()
                enter.remove(pop)
            }
        }
        return count.map { it.size }.toIntArray()
    }
```

### 4. 회고 

* 처음에 풀이 방향을 완전 헛다리 짚었습니다. 그래서 많은 시간을 소비했습니다. 
* 다시 정신 차리고 문제 설명에 있는 방식으로 푸니 쉽게 해결되었습니다. 
* 문제를 보고 풀이 방향을 잘 생각해야겠습니다.

