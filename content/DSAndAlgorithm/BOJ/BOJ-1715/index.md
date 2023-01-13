---
title: '[문제풀이] 카드 정렬하기 '
path: blog/daily-BOJ-1715
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2021-10-20
excerpt: 백준 - 카드 정렬하기
draft: false
---

## 카드 정렬하기

- [카드 정렬하기- 백준](https://www.acmicpc.net/problem/1715)

### 0. 목표

**구하고자 하는 것은 무엇인가?**

- n개의 숫자 카드 묶음이 주어질 때 최소한 몇 번의 크기 비교가 필요한지 구합니다.

### 1. 이해

- 두 묶음의 정렬된 숫자 카드가 주어집니다.
- 두 묶음의 a와 b가 주어졌을 때, a,b묶음을 합치려면 a+b번 만큼의 비교가 필요합니다.
- 주어지는 것 1: 묶음의 개수
- 주어지는 것 2: 각 묶음의 크기

### 2. 계획

1. 크기가 작은 묶음부터 합쳐나갑니다. 입력받은 묶음의 크기들을 최소 힙에 넣습니다.
2. 크기가 작은 두 개의 묶음을 뽑아서 더해줍니다.
3. 더해진 값을 지금까지 계산해온 값을 저장하는 result에 더해줍니다.
4. 2에서 더해진 묶음은 새로운 카드 묶음이 됨으로 다시 최소 힙에 넣습니다.

### 3. 실행

```kotlin
    fun main() {
        with(BufferedReader(InputStreamReader(System.`in`))) {
            val bw = BufferedWriter(OutputStreamWriter(System.out))

            val n = readLine().toInt()

            var list = PriorityQueue<Int>()

            (0 until n).forEach{
                list.add(readLine().toInt())
            }

            var result =0
            while (list.size > 1){
                val b1 = if(list.isNotEmpty()) list.poll() else 0
                val b2 = if(list.isNotEmpty()) list.poll() else 0

                result += b1 + b2
                list.add(b1+b2)
            }

            bw.write("${result}")

            bw.flush()
            bw.close()
        }
    }
```

### 4. 회고

- 크기가 다른 새로운 카드 묶음이 생기는 것에 신경 쓰지 못한 것 같습니다. 계산량에만 집중해서 어떻게 처리해야 할지 몰랐던 것 같습니다.
