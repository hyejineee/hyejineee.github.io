---
title: "[문제풀이] 스택수열 "
path: blog/daily-BOJ-1874
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-10-04
excerpt: 백준 - 스택수열
draft: false
---


## 스택수열
* [스택수열  - 백준](https://www.acmicpc.net/problem/1874)


### 1. 이해 

- 1부터 n까지의 수를 스택에 넣었다가 뽑아서 수열을 만듭니다. 
- 스택에 push 하는 순서는 오름차순이어야 합니다. 
- 임의의 수열이 주어졌을 때 수열을 스택으로 만들 수 있는지를 구합니다.
- 스택으로 수열을 만들 수 있다면 어떤 순서로 만들 수 있는지를 알아냅니다.
- push 연산은 +, pop연산은 -로 표현합니다. 


### 2. 계획

0. 주어진 수열의 첫 번째 수를 가져옵니다.
1. count가 첫 번째 수와 같은 때까지 스택에 수를 push 하면서 (+)를 기록합니다. push 하면서 count를 1씩 증가합니다.
2. 스택에 들어간 마지막 수와 첫 번째 수가 같은지 비교합니다.
3. 같다면 스택에서 pop하고 (-)를 기록합니다.
4. 기록한 내용을 리턴합니다.

### 3. 실행
```kotlin

    fun main() {

        with(BufferedReader(InputStreamReader(System.`in`))) {
            val c = readLine().toInt()

            val p = (0 until c).map {
                readLine().toInt()
            }.toIntArray()

            stackProgression(p).map {
                println(it)
            }
        }
    }

    fun stackProgression(p: IntArray): MutableList<String> {

        val pCopy = p.toMutableList()
        val r = mutableListOf<String>()
        val s = Stack<Int>()
        var i = 1

        while (pCopy.isNotEmpty()) {
            
            while (i <= pCopy.first()) {
                s.push(i)
                i++
                r.add("+")
            }

            if (s.peek() == pCopy.first()) {
                s.pop()
                r.add("-")
                pCopy.removeAt(0)
            } else {
                return mutableListOf("NO")
            }
        }
        return r
    }

```

### 4. 회고 

* 내가 생각한 알고리즘의 단계를 명확하게 해야겠습니다.
