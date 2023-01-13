---
title: '[문제풀이] 여행경로 '
path: blog/daily-programmers-travel-route
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2022-01-26
excerpt: 프로그래머스 - 여행경로
draft: false
---

## 여행경로

- [여행경로 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/43164)

### 0. 목표

### 구하고자 하는 것은 무엇인가?

- 모든 항공권을 사용하여 방문할 수 있는 경로를 구해야 합니다.

### 1. 이해

- 항상 ICN에서 출발합니다.
- 항공권 정보가 담긴 2차원 배열 ticket가 주어집니다.
- tickets의 각 행 [a, b]는 a 공항에서 b 공항으로 가는 항공권이 있다는 의미입니다.
- 주어진 항공권은 모두 사용해야 합니다.
- 만일 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 return 합니다.

### 2. 계획

1. tickets정보를 통해서 연결할 수 있는 공항 정보를 나타내는 그래프를 만듭니다.
2. dfs를 통해 그래프를 탐색합니다.
3. 탐색시 departure-destination 항공권이 아직 방문하지 않은 항공권이라면 check를 하고 destination에 대해서 dfs를 수행합니다.

### 3. 실행

```kotlin
    fun travelRoute(tickets: Array<Array<String>>): Array<String> {

        val graph = mutableMapOf<String, MutableList<String>>()
        val check = Array(tickets.size) { false }
        val result = mutableListOf<List<String>>()

        tickets.forEach { it ->
            val (s, e) = it
            graph[s]?.add(e) ?: run { graph[s] = mutableListOf(e) }
        }

        dfs("ICN", mutableListOf("ICN"), graph, result, check, tickets)
        result.sortBy { it.joinToString("") }

        return result.first().toTypedArray()
    }

    private fun dfs(
        departure: String,
        visited: MutableList<String>,
        g: MutableMap<String, MutableList<String>>,
        result: MutableList<List<String>>,
        check: Array<Boolean>,
        tickets: Array<Array<String>>
    ) {

        if (check.all { it }) {
            result.add(visited.toList())
            return
        }

        g[departure]?.forEach {

            val ticketIndex = findTicketIndex(tickets, arrayOf(departure, it), check)

            if(ticketIndex == -1) return@forEach

            val newCheck = check.copyOf()
            newCheck[ticketIndex] = true

            visited.add(it)
            dfs(it, visited, g, result, newCheck, tickets)
            visited.removeAt(visited.size - 1)
        }
    }

    private fun findTicketIndex(tickets: Array<Array<String>>, ticket: Array<String>, check: Array<Boolean>): Int {
        for (i in tickets.indices) {
            if (tickets[i].contentEquals(ticket) && check[i].not()) {
                return i
            }
        }
        return -1
    }
```

### 4. 회고

- 저번에 풀었던 문제와 비슷해서 쉽게 풀 수 있었습니다.
- 알파벳 순으로 경로를 찾는 부분에서 더 적은 계산으로 찾을 수 있을 것 같습니다.
