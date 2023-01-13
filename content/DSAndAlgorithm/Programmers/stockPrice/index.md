---
title: '[문제풀이] 주식가격 '
path: blog/daily-programmers-stock-price
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2022-03-24
excerpt: 프로그래머스 - 주식가격
draft: false
---

## 주식가격

- [주식가격 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/42584)

### 구하고자 하는 것은 무엇인가?

- 주식 가격이 떨어지지 않는 기간의 초를 구해야 합니다.

### 1. 이해

- 초 단위로 기록한 주식의 가격이 prices로 주어집니다.
- 예시의 해석은 다음과 같습니다.
  - 예 : prices[1,2,3,2,2] , return [4,3,1,1,0]
  - 1초 시점의 1은 5초까지 가격을 유지합니다. ⇒ 4
  - 2초 시점의 2는 5초까지 가격을 유지합니다. ⇒ 3
  - 3초 시점의 3은 4초까지 가격을 유지합니다. ⇒ 1
  - 4초 시점의 2는 5초까지 가격을 유지합니다. ⇒1
  - 5초 시점의 2는 5초까지 가격을 유지합니다. ⇒ 0

### 2.계획

1. 각 가격을 초와 함께 묶어서 초기화합니다.
2. prices의 길이만큼 돌면서 주가의 시작 시점과 주식이 끝까지 유지되는 시점을 구합니다.
3. 주식이 끝까지 유지되는 시점에서 시작 시점을 뺀 값을 배열에 저장합니다.
4. 배열을 리턴합니다.

### 3. 실행

```kotlin
fun stockPrice(prices:IntArray): IntArray {

    val ps = prices.mapIndexed { index, i -> intArrayOf(index +1, i)  }

    return IntArray(prices.size){ i ->
        val (s, p) = ps[i]
        val (es, _) = ps.subList(i, prices.size).takeWhile { it[1] >= p }.last()

        (if(es == prices.size)es else es +1) - s
    }
}
```

### 4. 회고

- 풀 수 있는 언어에 kotlin이 없어서 풀이가 통과되는지 알 수 없어 아쉽습니다.
- 파이썬으로 찾아서 풀기에는 시간이....
