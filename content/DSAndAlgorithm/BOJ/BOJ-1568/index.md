---
title: '[문제풀이] 새 '
path: blog/daily-BOJ-1568
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2021-10-12
excerpt: 백준 - 새
draft: false
---

## 새

- [새 - 백준](https://www.acmicpc.net/problem/1568)

### 0. 목표

**구하고자 하는 것은 무엇인가?**

- 모든 새가 날아가는 데 걸린 시간을 구합니다.

### 1. 이해

- 새들은 오름차순으로 순차적으로 노래합니다.
- 어떤 숫자 k를 노래할 때 k마리의 새가 나무에서 날아갑니다.
- 현재 나무에 앉아있는 새의 수가 지금 불러야 하는 수보다 적을 때 1부터 다시 노래를 부릅니다.
- 하나의 수를 노래하는 데 걸리는 시간은 1초입니다.

### 2. 계획

- 남아있는 새가 없을 때까지 아래 과정을 반복합니다.
- 남아있는 새의 수가 불러야 하는 수보다 같거나 크다면
  - 남아있는 새의 수에서 부른 수 만큼 뺍니다.
  - 시간을 카운트하는 count변수를 1증가시킵니다.
  - 불러야 하는 수를 저장하는 sing을 1증가시킵니다.
- 남아있는 새의 수가 불러야 하는 수보다 적다면
  - sing을 1로 설정하고 반복합니다.

### 3. 실행

```kotlin
    fun main() {

        with(BufferedReader(InputStreamReader(System.`in`))) {
            val bw = BufferedWriter(OutputStreamWriter(System.out))

            val n = readLine().toInt()

            var remained = n
            var count = 0

            var sing = 1
            while (remained > 0) {
                if (remained >= sing) {
                    remained -= sing
                    count++
                    sing++
                } else {
                    sing = 1
                }
            }

            bw.write("$count")

            bw.flush()
            bw.close()
        }
    }

```

### 4. 회고

- 쉽게 풀 수 있었습니다.
