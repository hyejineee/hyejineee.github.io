---
title: "[문제풀이] n개의 최소공배수  "
path: blog/daily-n-lcm
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-09-04
excerpt: 프로그래머스 - n개의 최소공배수
draft: false
---


## n개의 최소공배수 
* [n개의 최소공배수  - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/12953)

### 1. 이해 
- n개의 수들의 최소공배수를 찾아라.

### 2. 계획

1. n개의 수 중에서 제일 큰 값을 찾는다.
2. 1부터 제일 큰값을 곱하면서 곱한 값의 약수를 찾는다.
3. 주어진 수들이 2에서 찾은 약수에 포함되면 제일 큰 값과 곱한 i를 반환한다.
4. i의 값과 최대값을 곱한 값을 리턴한다.



### 3. 실행
```kotlin

    fun nLCM(arr: IntArray): Int {

        val max = arr.max() ?:0
        var i = 0

        while (true) {
            if (aliquot(max * i).containsAll(arr.asList())) {
                break
            }
            i++
        }

        return i * max
    }

    fun aliquot(num: Int): List<Int> {
        val aliquots = mutableListOf<Int>()
        var i = 1

        while (i * i <= num) {
            if (num % i == 0) {
                aliquots.add(i)
                aliquots.add(num / i)
            }
            i++
        }

        return aliquots.sorted()
    }

 
    class Solution {
        fun solution(arr: IntArray): Int {
            var answer = 1
            while(true) {
                var x = 0
                for(a in arr) x += answer%a
                if(x==0) return answer
                answer++
            }
            return answer
        }
    }


```

### 4. 회고 

while문을 사용할 수 밖에 없었나..?? 리팩토링을 잘 하지 못한 것 같아서 아쉽다. 우수 답안과 아이디어(?)는 비슷한 것 같은데... 구현에서 많이 차이가 났다.