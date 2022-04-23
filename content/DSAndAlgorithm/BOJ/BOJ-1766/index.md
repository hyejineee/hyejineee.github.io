---
title: "[문제풀이] 문제집 "
path: blog/daily-BOJ-1766
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-10-20
excerpt: 백준 - 문제집 
draft: false
---


## 문제집 
* [문제집 - 백준](https://www.acmicpc.net/problem/1766)

### 0. 목표 
**구하고자 하는 것은 무엇인가?**
- 주어진 조건을 만족하면서 문제이 풀이 순서를 구합니다.

### 1. 이해 
- 1번부터 n번까지 난이도가 낮은 순으로 문제가 있는 문제집이 있습니다.
- 다음 조건으로 문제를 풀 순서를 정합니다. 
  - n개의 문제는 모두 풀어야 한다.
  - 먼저 푸는 것이 좋은 문제가 있는 문제는, 먼저 푸는 것이 좋은 문제를 반드시 먼저 풀어야 한다.
    - 선행 문제가 있는 문제면, 선행 문제 먼저 풀어야 한다,
  - 가능하면 쉬운 문제부터 풀어야 한다.   
- 주어진 것 1: 문제의 수(n)와 먼저 푸는 것이 좋은 문제에 대한 정보의 개수(m)
- 주어진 것 2: b의 선행 문제(a) 문제(b)


### 2. 계획
- 위상 정렬 알고리즘을 사용합니다.
  
1. 노드와 진입하는 노드별 간선 정보를 담는 자료구조를 초기화합니다. 
2. 진입하는 간선 정보중에 값이 0인 노드를 최소힙에 넣습니다.
3. 힙에서 맨 위의 값을 가져옵니다.(pop)
4. 결과에 pop한 값을 넣습니다, 
5. pop한 노드에 연결되어 있는 노드를 찾고 진입 간선의 수를 하나씩 없앱니다. 
   - 진입 간선의 수가 0이된 노드를 힙에 넣습니다.
6. 4,5번을 힙에 원소가 없을 때까지 반복합니다.

### 3. 실행
```kotlin
    fun main() {
        with(BufferedReader(InputStreamReader(System.`in`))) {
            val bw = BufferedWriter(OutputStreamWriter(System.out))

            val (n, m) = readLine().split(" ").map { it.toInt() }

            val nodes = mutableMapOf<Int, MutableList<Int>>()
            val inDegree = MutableList(n+1){0}

            val heap = PriorityQueue<Int>()

            (1 .. n).forEach {
                nodes[it] = mutableListOf()
            }

            (0 until m).forEach {
                val (a,b) = readLine().split(" ").map { it.toInt() }
                nodes[a]?.add(b)
                inDegree[b]+=1
            }

            for( i in 1 until inDegree.size){
                if(inDegree[i] ==0) heap.add(i)
            }

            val result = mutableListOf<Int>()

            while (heap.isNotEmpty()){

                val pop = heap.poll()
                result.add(pop)

                nodes[pop]?.forEach {
                    inDegree[it] -=1
                    if(inDegree[it] ==0){
                        heap.add(it)
                    }
                }
            }

            bw.write("${result.joinToString(" ")}")


            bw.flush()
            bw.close()
        }
    }
```

### 4. 회고 

- 지금까지 계획 부분을 너무 성의없이 작성한 것 같습니다. 다음 풀이부터는 단계별로 자세하게 설명하도록 해야겠습니다.
- [위상 정렬](https://hyejineee.github.io/blog/topological-sorting)에 대한 개념을 배웠습니다. 
