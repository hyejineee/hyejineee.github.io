---
title: "[문제풀이] 숨바꼭질 "
path: blog/daily-BOJ-1697
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-10-26
excerpt: 백준 - 숨바꼭질 
draft: false
---


## 숨바꼭질 
* [숨바꼭질 - 백준](https://www.acmicpc.net/problem/1697)

### 0. 목표 
**구하고자 하는 것은 무엇인가?**
- 수빈이가 동생을 찾는 가장 빠른 시간을 구합니다. 


### 1. 이해 
- 수빈이는 걷거나 순간이동 할 수 있습니다. 
- 수빈이의 위치가 x일 때,
  - 걷기 : 1초마다 x-1,x+1로 이동할 수 있습니다.
  - 순간이동 : 1초마다 x*2로 이동할 수 있습니다. 
- 주어지는 것 : 수빈이의 위치 n, 동생의 위치 k


### 2. 계획

- 걸었을 때 갈 수 있는 위치, 순간이동으로 갈 수 있는 위치를 모두 확인합니다.
- 방문하고 있는 위치의 레벨이 해당 위치까지 걸리는 시간입니다. 
- 해당 위치까지 걸리는 시간을 arr에 기록합니다.
  
1. needVisit에 처음 수빈이의 위치를 넣습니다.
2. needVisit가 비어질 때까지 다음 과정을 반복합니다.
   1. needVisit에서 값을 하나 꺼냅니다. 
   2. 꺼낸 값이 동생의 위치와 같다면 arr[꺼낸 값]으로 걸리는 시간을 리턴합니다.
   3. 동생의 위치와 같지 않다면 갈 수 있는 위치를 needVisit에 넣습니다. 


### 3. 실행
```kotlin
    fun main() {
        with(BufferedReader(InputStreamReader(System.`in`))) {
            val bw = BufferedWriter(OutputStreamWriter(System.out))

            val (n, k) = readLine().split(" ").map { it.toInt() }

            val arr = MutableList(100001){0}

            val needVisit = LinkedList<Int>()

            needVisit.push(n)

            while (needVisit.isNotEmpty()){
                val pop = needVisit.pollFirst()

                if(pop == k){
                    println(arr[pop])
                    break
                }

                for (i in listOf(pop+1, pop-1, pop*2)){
                    if(i in 0 until 100001){
                        if(arr[i] == 0){
                            arr[i] = arr[pop] + 1
                            needVisit.add(i)
                        }
                    }
                }
            }


            bw.flush()
            bw.close()
        }
    }
```

### 4. 회고 

- 기본 문제는 잘 푸었는데 역시 응용이 약한 것 같습니다. 응용력을 어떻게 길러야 할까요...