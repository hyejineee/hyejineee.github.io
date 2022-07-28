---
title: "[문제풀이] 메뉴 리뉴얼 "
path: blog/daily-algorithm-menu-renewal
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2022-07-19
excerpt: 프로그래머스 - 메뉴 리뉴얼
---


## 메뉴 리뉴얼
* [메뉴 리뉴얼 - 프로그래머스](https://school.programmers.co.kr/learn/courses/30/lessons/72411)

### 구하고자 하는 것은 무엇인가?

- 기존에 각 손님들이 주문한 단품 메뉴를 코스요리 형태로 재구성해야 합니다.

### 1. 이해

- 코스 요리를 재구성 할 때 각 손님들이 주문할 때 가장 많이 함께 주문한 메뉴로 코스요를 구성해야 합니다.
- 코스요리를 구성하는 단품메뉴의 조건은 다음과 같습니다.
    - 최소 2가지 이상의 단품메뉴로 코스요리를 구성해야 합니다.
    - 코스요리에 포함되는 단품메뉴는 2명 이상의 손님으로 부터 주문된 단품메뉴여야 합니다.
- 각 손님들이 주문한 단품메뉴 정보 orders와 코스요리를 구성하는 단품메뉴의 개수 course가 주어집니다.
- 각 코스요리 메뉴의 구성을 문자열 형식으로 배열에 담아 사전 순으로 오름차순으로 정렬해야 합니다.

### 2.계획

1. 각 손님이 주문한 단품메뉴 리스트로 course의 개수에 맞는 조합을 만듭니다. 
    - 조합 만들기
        - 백트래킹을 사용합니다.
        - 오름차순으로 정렬된 코스요리를 만들어야 하기 때문에 각 손님이 주문한 단품메뉴 리스트를 오름차순으로 정렬합니다.
        - 단품메뉴 리스트를 순회하면서 조합 배열(temp)에 담습니다.
            - 이때 담겨져 있으면 다시 temp에 추가하지 않습니다.
        - 이 과정을 모든 단품 메뉴에 대해서 수행합니다.
        - 세트요리 구성이 끝나면 해당 세트요리가 몇 번 나왔는지 카운트합니다.
2. 최소 2번이상 주문되고 가장 많이 주문된 코스요리를 찾아야 하기 때문에 코스요리를 많이 카운트된 순서로 정렬합니다.
3. 정렬된 코스요리를 순회하면서 가장 많이 주문된 코스요리를 찾아 리스트에 담습니다.
4. 모은 코스요리를 정렬하여 반환합니다.

### 3. 실행

```jsx
const solution = (orders, course) => {
	const result = []; 

  for (let c of course) {
    const count = {};

    orders.forEach((e) =>
      combination(e.split("").sort(), 0, c, [], new Set(), count)
    );
    
    const countArr = Object.entries(count).sort((a, b) => b[1] - a[1]);

    let max = 2;
    const keys = new Set();
    for (let [k, v] of countArr) {
      if (max < v) {
        max = v;
        keys.add(k);
        continue;
      }

      if (max === v) {
        keys.add(k);
        continue;
      }
    }

    keys.forEach((e) => result.push(e));
  }

  return result.sort();
};

const combination = (arr, index, level, temp, isUsed, count) => {
  if (temp.length === level) {
    const set = [...temp].join("");
    count[set] ? count[set]++ : (count[set] = 1);
    return;
  }

  for (let i = index; i < arr.length; i++) {
    if (isUsed.has(arr[i])) continue;
    isUsed.add(arr[i]);
    temp.push(arr[i]);
    combination(arr, i, level, temp, isUsed, count);
    temp.pop();
    isUsed.delete(arr[i]);
  }
};
```

### 4. 회고

- 조합을 만들 때 중복되는 것을 생각 못하고 0부터 반복문을 돌아서 한참 해맸습니다.
- 예전에 풀었던 백준 백트래킹 문제들을 다시 풀어봐야 할 것 같습니다.