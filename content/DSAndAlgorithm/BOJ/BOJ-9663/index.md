---
title: "[문제풀이] N-Queen "
path: blog/daily-BOJ-9663
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-11-04
excerpt: 백준 - N-Queen 
draft: false
---


## N-Queen 
* [N-Queen - 백준](https://www.acmicpc.net/problem/9663)

### 0. 목표 
**구하고자 하는 것은 무엇인가?**
- 퀸을 놓는 방법의 수를 구해야 합니다. 

### 1. 이해 

- 백트래킹 알고리즘 공부할 때 배운 n-queen 문제입니다.
- 퀸은 위, 아래, 대각선으로 이동할 수 있습니다.
- n * n개의 칸에 퀸들이 서로 공격할 수 없게 배치해야 합니다.

### 2. 계획
1. 퀸을 배치할 수 있는 경우에 대해서 dfs를 수행합니다.
2. 퀸을 배치할 수 있는 column의 값을 순회합니다. (0부터 n-1까지)
3. 해당 위치가 퀸을 배치할 수 있는 위치인지 확인합니다.
   - 이전에 배치되었던 퀸의 위치를 통해 배치 할 수 있는지 없는지 확인합니다.
4. 배치할 수 있으면 후보군에 해당 위치를 넣고 다음 위치에 대해 dfs를 수행합니다. 
5. 만약 해당 위치에 배치할 수 없다면 다른 위치를 찾고 그 어디에도 퀸을 배치할 수 없다면 후보군에서 시작이 되는 퀸의 위치를 제거합니다.


### 3. 실행
```kotlin
    fun main() {
        with(BufferedReader(InputStreamReader(System.`in`))) {
            val n = readLine().toInt()

            val result = mutableListOf<Int>()
            dfs(0, n, mutableListOf(), result)

            println(result.size / n)
        }
    }

    private fun dfs(currentRow:Int, n:Int, candidates:MutableList<Int>, result:MutableList<Int>){

        if(currentRow == n){
            result.addAll(candidates.toList())
            return
        }

        for(i in 0 until n){
            if(isAvailable(candidates, i)){
                candidates.add(i)
                dfs(currentRow+1, n, candidates, result)
                candidates.removeLast()
            }
        }

    }

    private fun isAvailable(candidates: MutableList<Int>, currentCol:Int): Boolean {
        val currentRow = candidates.size

        for(i in 0 until currentRow){
            if(candidates[i] == currentCol || abs(candidates[i]- currentCol) == (currentRow- i)){
                return false
            }
        }
        return true
    }
```

### 4. 회고 

- 이전에 문제를 여러번 풀어서 쉽게 풀 수 있었습니다.
