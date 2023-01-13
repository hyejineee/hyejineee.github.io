---
title: '[문제풀이] 블랙잭 '
path: blog/daily-BOJ-2798
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2021-10-04
excerpt: 백준 - 블랙잭
draft: false
---

## 블랙잭

- [블랙잭 - 백준](https://www.acmicpc.net/problem/2798)

### 1. 이해

- 규칙 : 카드의 합이 M을 넘지 않는 한도 내에서 카드의 합을 최대로 만들어야 합니다.
- N장의 카드와 한계 값 M이 주어집니다.
- N장의 카드 중에서 3장을 뽑아 최대한 M에 가까운 수를 만들어야 합니다.
- 전체 경우의 수는 n(n-1)(n-2) / 3!입니다.

### 2. 계획

- 전체 경우의 수가 많이 않기 때문에 완전 탐색으로 문제를 해결합니다.
- 3중 for문을 사용하여 각각의 경우의 수를 구하고 이전 max보다 큰 수일 경우 max변수 값에 대입합니다.
- 구해진 max값을 리턴합니다.

### 3. 실행

```kotlin

    fun main() {

        with(BufferedReader(InputStreamReader(System.`in`))) {
            val (n, m) = readLine().split(" ").map { it.toInt() }
            val cards = readLine().split(" ").map { it.toInt() }.toIntArray()

            println(blackJack(cards, m))
        }
    }

    fun blackJack(cards: IntArray, m: Int): Int {
        var max = 0
        for (i in cards.indices) {
            for (j in i + 1 until cards.size) {
                for (k in j + 1 until cards.size) {
                    val v = cards[i] + cards[j] + cards[k]
                    if (v in (max + 1)..m) {
                        max = v
                    }
                }
            }
        }
        return max
    }

```

### 4. 회고

- 경우의 수를 구하고 시간 복잡도를 어떻게 가져야 하는 지 결정하는 것을 배웠습니다.
- python은 1초에 천 만번 계산이 가능하다는 것을 알았습니다.
