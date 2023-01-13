---
title: '[문제풀이] 섬 연결하기 '
path: blog/daily-programmers-link-island
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2022-02-10
excerpt: 프로그래머스 - 섬 연결하기
draft: false
---

## 섬 연결하기

- [섬 연결하기 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/42861)

### 구하고자 하는 것은 무엇인가?

- n개의 섬 사이에 다리를 최소의 비용으로 건설할 때 필요한 최소비용을 구해야 합니다.

### 1. 이해

- 섬의 개수(n)와 섬사이에 다리를 건설하는데 드는 비용(costs)가 주어집니다.
- costs는 [섬1, 섬2, 섬1과 섬2를 연결하는데 드는 비용] 형태로 주어집니다.
- 같은 연결은 두 번 주어지지 않습니다.
- 연결할 수 없는 섬은 주어지지 않습니다.

### 2.계획

- 크루스칼 알고리즘을 사용합니다.
- rank와 연결된 노드를 확인하기 위한 parent를 사용합니다.

1. costs를 비용을 기준으로 오름차순으로 정렬합니다.
2. costs를 순회하면서 가장 비용이 적은 섬들 부터 연결합니다.
   1. 두 섬이 같은 섬을 부모로 두고 있으면 연결하지 않습니다.
   2. 두 섬이 다른 섬을 부모로 두고 있으면 연결하고 비용을 추가합니다.

### 3. 실행

```kotlin
    fun solution(n: Int, costs: Array<IntArray>): Int {
        val rank = Array(n){0}
        val parent = Array(n){it}

        val sorted = costs.sortedBy{it[2]}
        var answer = 0

        sorted.forEach{ (n1, n2, c) ->
            val p1 = find(n1, parent)
            val p2 = find(n2, parent)

            if(p1 != p2){
                union(p1, p2, parent,rank)
                answer += c
            }

        }

        return answer
    }

    fun find(n:Int, parent:Array<Int>):Int{
        if(n != parent[n]){
            parent[n] = find(parent[n], parent)
        }
        return parent[n]!!
    }

    fun union(p1:Int, p2:Int, parent:Array<Int>, rank:Array<Int>){
        val r1 = rank[p1]
        val r2 = rank[p2]

        if(r1 < r2){
            parent[p1] = p2
        }else if(r1 > r2){
            parent[p2] = p1
        }else{
            rank[p2] = r2+1
            parent[p1] = p2
        }
    }
```

### 4. 회고

- 크루스칼 알고리즘으로 쉽게 풀 수 있었습니다.
