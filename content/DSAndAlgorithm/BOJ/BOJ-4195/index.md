---
title: '[문제풀이] 친구 네트워크 '
path: blog/daily-BOJ-4195
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2021-10-04
excerpt: 백준 - 친구 네트워크
draft: false
---

## 친구 네트워크

- [친구 네트워크 - 백준](https://www.acmicpc.net/problem/4195)

### 0. 목표

**구하고자 하는 것은 무엇인가?**

- 현재 친구 네트워크에 몇 명이 있는지 구하는 문제입니다.

### 1. 이해

- 친구 관계가 생긴 순서대로 친구 관계가 주어집니다.
- 친구 관계는 1:1입니다.
- 친구 관계의 수는 100,000을 넘지 않습니다.
- 일반적인 계산(?) 단순 알고리즘으로 풀면 100,000^2의 양을 계산해야할 것 같습니다.
- 효과적인 알고리즘이 필요합니다.

### 2. 계획

- 합집합을 찾을 때 사용하는 union-find 알고리즘을 사용합니다.

### 3. 실행

```kotlin
    fun main() {
        with(BufferedReader(InputStreamReader(System.`in`))) {
            val bw = BufferedWriter(OutputStreamWriter(System.out))

            val testCase = readLine().toInt()

            for (i in 0 until testCase) {
                val c = readLine().toInt()

                val network = (0 until c).map {
                    readLine().split(" ")
                }

                val v = network.flatten().toSet()

                val parent = mutableMapOf<String, String>()
                val rank = mutableMapOf<String, Int>()

                v.forEach {
                    parent[it] = it
                    rank[it] = 1
                }

                network.forEach {
                    union(it[0], it[1], parent, rank)
                    bw.write("${rank[find(it.first(), parent)]!!}\n")
                }
            }

            bw.flush()
            bw.close()
        }
    }

    fun find(node: String, parent: MutableMap<String, String>): String {
        if (parent[node] != node) {
            parent[node] = find(parent[node] ?: node, parent)
        }
        return parent[node] ?: node
    }

    fun union(node1: String, node2: String, parent: MutableMap<String, String>, rank: MutableMap<String, Int>) {
        val p1 = find(node1, parent)
        val p2 = find(node2, parent)

        if (p1 != p2) {
            parent[p2] = p1
            rank[p1] = rank[p1]!!.plus(rank[p2]!!)
        }
    }

```

### 4. 회고

- 주어진 시간 내에 풀지 못하여 풀이를 보고 문제를 풀었습니다.
- union-find를 알고, 구현할 줄 알았으나 응용하지 못했습니다.
- 앞으로 합집합에 관련된 문제가 나오면 union-find를 사용할 수 있는지 확인해봐야겠습니다.
