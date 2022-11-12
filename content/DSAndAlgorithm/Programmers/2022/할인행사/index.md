---
title: "[문제풀이] 할인행사"
path: blog/daily-algorithm-221104-2
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2022-11-04
excerpt: 프로그래머스 -할인행사
---

[프로그래머스 - 할인행사](https://school.programmers.co.kr/learn/courses/30/lessons/131127)

### 구하고자 하는 것은 무엇인가?

- 회원 등록시 원하는 제품을 모두 할인 받을 수 있는 회원 등록 날짜의 총 일수를 구해야 합니다.

### 1. 이해

- 제품과 수량이 할인하는 날짜와 10일 연속으로 일치하는 경우에 맞춰서 회원 등록을 하려고 합니다.
- 할인하는 제품은 하루에 하나씩만 구매할 수 있습니다.
- 원하는 제품은 최대 10개까지 주어집니다. want.length ≤ 10
- 할인하는 제품은 최대 100000개 입니다. discount ≤100000

### 2.계획

- 먼저 원하는 제품과 수량을 map 자료구조로 표현합니다.
- 할이하는 제품 배열을 순회하면서 원하는 제품을 모두 할인 받을 수 있는지 검사합니다.

### 3. 실행

```jsx
// javascript
const solution = (want, number, discount) => {
  const map = new Map();

  want.forEach((e, i) => {
    map[e] = number[i];
  });

  let count = 0; // 조건에 맞는 회원 등록이 가능한 일수 
  for (let i = 0; i <= discount.length - 10; i++) {
		// 원하는 제품과 수량 map 복사
    const copyMap = Object.assign({}, map);

		// 10일 동안 할인하는 제품이 원하는 제품에 있으면 해당 수량 하나씩 차감
    for (let j = 0; j < 10; j++) {
      copyMap[discount[i + j]]--;
    }

		// 원하는 제품 모두 구매가 가능하면 count에 1추가
    if (Object.values(copyMap).every((e) => e === 0)) count++;
  }

  return count;
};
```

```kotlin
// kotlin
fun 할인행사(want : Array<String>, number : IntArray, discount : Array<String>): Int {
    val map = mutableMapOf<String, Int>()

    want.forEachIndexed { index, s ->
        map[s] = number[index]
    }

    var count = 0
    for(i in 0..discount.size -10){
        val copy = map.toMutableMap()
        for(j in 0 until 10 ){
            copy[discount[i+j]] = copy[discount[i+j]]?.minus(1)?:-1
        }

        if(copy.all { it.value === 0 }) count++
    }
    return count
}
```

### 4. 회고

- 오래만에 코틀린으로 문제를 풀어봤습니다. 코틀린은 자료구조 선언이나 사용하는게 js보다 번거로운 것 같습니다. 하지만 for문 사용하는 거나 범위 지정하는 것은 js보다 훨씬 편한 것 같습니다.