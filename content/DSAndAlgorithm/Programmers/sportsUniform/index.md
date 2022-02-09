---
title: "[문제풀이] 체육복 "
path: blog/daily-programmers-immigration
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2022-02-08
excerpt: 프로그래머스 - 체육복 
draft: false
---


## 체육복 
* [체육복 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/42862)

### 구하고자 하는 것은 무엇인가?

- 체육복을 도난당한 학생이 있고 여벌의 체육복을 가진 학생이 있을 때, 체육 수업을 들을 수 있는 학생의 최대값을 구해야합니다.

### 1. 이해

- 학생이 n명있고, 도난 당한 학생의 번호 배열 lost와 여벌의 옷을 갖고 있는 학생의 번호 배열 reserve가 주어집니다.
- 여벌의 체육복을 갖고 있는 학생도 도난을 당할 수 있습니다. 그런 경우 여벌의 체육복을 갖고 있는 학생은 다른 학생에게 체육복을 빌려줄 수 없습니다.
- 여벌의 체육복을 가진 학생은 바로 앞번호나 뒷번호 학생에게만 빌려줄 수 있습니다.

### 2.계획

1. 각각 lost배열과 reserve배열에서 두 배열의 교집합이 되는 요소를 제거하고 정렬합니다.
2. 체육복을 잃어버린 학생의 배열의 순회하면서 체육복을 빌릴 수 있는지 확인합니다.
    1. 앞번호 친구에게 빌릴 수 있는 경우 여벌의 체육복이 있는 학생 배열에서 해당 번호를 삭제합니다.
    2. 뒷번호 친구에게 빌릴 수 있는 경우 여벌의 체육복이 있는 학생 배열에서 해당 번호를 삭제합니다.
    3. 수업을 들을 수 있는 친구의 수(count)를 1증가합니다.

### 3. 실행

```kotlin
fun solution(n: Int, lost: IntArray, reserve: IntArray): Int {
    
        val leftover = reserve.filter{ it !in lost}.sorted().toMutableList()
        val leftLost = lost.filter{it !in reserve}.sorted()
        
        var count = n - leftLost.size
        
        leftLost.forEach{
            if(it -1 in leftover){
                leftover.remove(it-1)
                count++
            }else if(it+1 in leftover){
                leftover.remove(it+1)
                count++
            }
        }
      
        return count
    }
```

### 4. 회고

- 외부 ide를 사용하지 않고 문제를 풀었습니다. 디버깅이 힘들어서 문제 푸는데 시간이 걸렸습니다.
- 외부 ide에서 쉽게 사용하는 메소드를 사용하려고 하니 철자가 틀리거나 메소드명이 생각이 잘 안나서 버벅이면서 문제를 풀었습니다. 기본적인 메소드들은 외우는 것이 좋을 것 같습니다.