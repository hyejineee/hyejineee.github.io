---
title: "[문제풀이] 모의고사 "
path: blog/daily-programmers-fake-test
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2022-02-13
excerpt: 프로그래머스 - 모의고사 
draft: false
---


## 모의고사 
* [모의고사 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/42840)

### 0. 목표 
### 구하고자 하는 것은 무엇인가?

- 수포자1,2,3명이 있을 때 문제를 가장 많이 맞힌 사람이 누구인지 구해야 합니다.

### 1. 이해

- 각 수포자들이 문제의 정답을 찍는 방식이 있습니다.
    - 1번 수포자의 찍는 방식 : 1,2,3,4,5
    - 2번 수포자의 찍는 방식 : 2,1,2,3,2,4,2,5
    - 3번 수포자의 찍는 방식 : 3,3,1,1,2,2,4,4,5,5
- 문제의 정답 배열이 주어집니다.
- 가장 많이 맞힌 사람이 여러 명일 수 있습니다.
    - 여럿일 경우, 사람 번호를 오름차순으로 정렬해서 반환해야 합니다.

### 2.계획

1. 수포자 1,2,3의 찍는 방식을 각각 배열에 저장합니다.
2. 수포자 1,2,3의 점수를 기록하는 map을 초기화 합니다.
3. 정답 배열을 순회하면서 수포자1,2,3의 정답과 같은지 확인하고 같다면 점수를 1씩 추가합니다.
4. 가장 많이 맞힌 개수를 구하고 점수 Map을 가장 많이 맞힌 개수로 filtering합니다.
5. 필터링한 값을 오름차순으로 정렬하여 반환합니다.

### 3. 실행

```kotlin
fun solution(answers: IntArray): IntArray {
        val supo1 = arrayOf(1, 2, 3, 4, 5)
        val supo2 = arrayOf(2, 1, 2, 3, 2, 4, 2, 5)
        val supo3 = arrayOf(3, 3, 1, 1, 2, 2, 4, 4, 5, 5)
        
        val score = mutableMapOf(1 to 0, 2 to 0, 3 to 0)
        
        answers.forEachIndexed{ index, i -> 
            if(i == supo1[index%supo1.size]){
                score[1] = score[1]?.plus(1)?:0
            }
            if(i == supo2[index%supo2.size]){
                score[2] = score[2]?.plus(1)?:0
            }
            if(i == supo3[index%supo3.size]){
                score[3] = score[3]?.plus(1)?:0
            }
           
        }
        
        val max = score.maxBy { it.value }?.value?:-1
        return score.filter { it.value == max }.toSortedMap().map { it.key }.toIntArray()
    }
```

### 4. 회고

- 레벨1이라 쉽게 풀 수 있었습니다.