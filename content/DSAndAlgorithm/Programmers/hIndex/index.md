---
title: "[문제풀이] H-index "
path: blog/daily-programmers-h-index
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2022-02-15
excerpt: 프로그래머스 - H-index 
draft: false
---


## H-index 
* [H-index - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/42747)
### 구하고자 하는 것은 무엇인가?

- 발표한 논문 n편 중, h번 이상 인용된 논문이 h편 이상이고, 나머지 논문이 h번 이하 인용되었을 때 h의 최댓값을 구해야 합니다.

### 1. 이해

- h번 이상 인용된 논문이 h개 이상이어야 합니다.
- 발표한 논문의 인용된 횟수가 적힌 citations가 주어집니다.
- h는 citation에 포함된 값이 아닐 수도 있습니다.

### 2.계획

1. h번 이상 인용된 논문의 개수를 카운트하기 위한 count map을 초기화합니다. count의 사이즈는 citation의 최대값입니다.
2. 1번부터 citation의 최대값까지 순회(i)하면서 i번 이상 인용된 논문의 개수를 기록합니다.
3. count에서 i번이상 인용된 논문이 i개 이상인 것을 찾고 key값을 리턴합니다. 

### 3. 실행

```kotlin
fun solution(citations: IntArray): Int {
    val count = mutableMapOf<Int, Int>()

    for(i in 1..(citations.maxBy{it}?:1)){
        count[i] = 0
    }

    for(i in 1 until count.size){
        count[i] = citations.count { it >= i }
    }

    return count.filter { it.key <=it.value }.keys.lastOrNull()?:0
}
```

### 4. 회고

- 지금까지 풀었던 문제 중에서 제일 이해를 못한 문제가 아닌 듯 싶습니다..
- 국어...