---
title: "[문제풀이] 가장 큰 수 "
path: blog/daily-programmers-largest-number
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2022-02-15
excerpt: 프로그래머스 - 가장 큰 수 
draft: false
---


## 가장 큰 수 
* [가장 큰 수 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/42746)

### 구하고자 하는 것은 무엇인가?

- 0또는 양의 정수가 주어졌을 때, 정수를 이어 붙여 만들 수 있는 가장 큰 수를 구해야 합니다.

### 1. 이해

- 양의 정수 배열 numbers가 주어집니다. numbers의 원소는 0이상 1,000이하 입니다.
- 아스키코드 순서로 제일 큰 숫자가 앞에 와야 합니다.

### 2.계획

1. 정수 배열을 string으로 변환합니다. 
2. string으로 바뀐 정수를 정렬합니다.
    1. 앞에 있는 값과 뒤에 있는 값의 조합 (a + b, b+a)의 결과에 따라 정렬을 수행합니다.
3. 정렬된 배열을 joinToString을 사용하여 문자열로 바꿉니다.
4. 바꾼 문자열이 0으로 이루어져 있는 경우 0을, 그렇지 않은 경우 문자열 그대로 반환합니다.

### 3. 실행

```kotlin
fun solution(numbers: IntArray): String = numbers
    .map { it.toString() }
    .sortedWith(Comparator { o1, o2 ->
        (o2 + o1).compareTo(o1 + o2)
    })
    .joinToString("")
    .run {
        if(this.first() == '0') "0" else this
    }
}
```

### 4. 회고

- compare하는데 있어서 양수, 음수 헷갈렸는데 이번 기회에 정리된 것 같다. (o1 > o2일 경우 o1이 뒤로 이동)
  