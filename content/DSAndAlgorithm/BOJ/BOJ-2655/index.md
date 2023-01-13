---
title: '[문제풀이] 가장 높은 탑 쌓기 '
path: blog/daily-BOJ-2655
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2021-10-25
excerpt: 백준 - 가장 높은 탑 쌓기
draft: false
---

## 가장 높은 탑 쌓기

- [가장 높은 탑 쌓기 - 백준](https://www.acmicpc.net/problem/2655)

### 0. 목표

**구하고자 하는 것은 무엇인가?**

- 조건을 만족하면서 가장 높은 탑을 쌓을 수 있을때 벽돌의 개수와 벽돌의 번호를 구합니다.

### 1. 이해

- 조건
  1. 벽돌은 회전시킬 수 없다.
  2. 밑면의 넓이가 같은 벽돌은 없으며, 또한 무게가 같은 벽돌도 없다.
  3. 벽돌들의 높이는 같을 수 있다.
  4. 탑을 쌓을 때 밑면이 좁은 벽돌 위에 밑면이 넓은 벽돌은 놓을 수 없다.
  5. 무게가 무거운 벽돌을 무게가 가벼운 벽돌위에 놓을 수 없다.
- 주어지는 것 1: 벽돌의 개수
- 주어지는 것 2: 각 벽돌에 관한 정보 - 벽돌의 밑면의 넓이, 벽돌의 높이, 벽돌의 무게

### 2. 계획

- 입력받은 벽돌을 무게가 가벼운 순으로 정렬합니다.
- dp[i] = 인덱스가 i인 벽돌을 가장 아래에 두었을 때 최대 높이

1. 벽돌을 하나씩 순회합니다.
2. 이전에 있는 벽돌과 밑면의 넓이를 비교해 탑을 쌓을 수 있는지 확인합니다.
3. 현재 벽돌의 밑면의 넓이가 이전 벽돌의 넓이보다 넓다면 현재 벽돌을 아래에 두었을 때 최대높이를 구합니다.
   - 이전에 있는 벽돌의 높이 + 현재 벽돌의 높이
4. 벽돌을 다시 역으로 추적하면서 제일 높은 탑을 쌓는데 어떤 벽돌이 사용되었는지 구합니다.
5.

### 3. 실행

```kotlin
    fun main() {
        with(BufferedReader(InputStreamReader(System.`in`))) {
            val bw = BufferedWriter(OutputStreamWriter(System.out))

            val n = readLine().toInt()

            val bricks =  mutableListOf(mutableListOf(0,0,0,0))
            val dp = MutableList(n+1){0}

            (1 .. n).forEach { index ->
                val (width,h,weight) = readLine().split(" ").map { it.toInt() }

                bricks.add(mutableListOf(index, width,h, weight))
            }


            bricks.sortWith(compareBy{it[3]})


            for(i in 1..n ){
                val currentBrick = bricks[i]
                for(j in 0 until i){
                    if(currentBrick[1] > bricks[j][1]){
                        dp[i] = maxOf(dp[i], dp[j] + currentBrick[2])
                    }
                }
            }

            var max = dp.maxOrNull() ?:-1
            var index = n
            val result = mutableListOf<Int>()

            while(index !=0){
                if(max == dp[index]){
                    result.add(bricks[index][0])
                    max -= bricks[index][2]
                }
                index -=1
            }

            result.reverse()

            println(result.size)
            result.forEach {
                println(it)
            }
            bw.flush()
            bw.close()
        }
    }
```

### 4. 회고
