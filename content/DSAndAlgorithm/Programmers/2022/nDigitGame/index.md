---
title: "[문제풀이] n진법 게임 "
path: blog/daily-algorithm-221028-1
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2022-10-28
excerpt: 프로그래머스 - n진법 게임
---

[프로그래머스 - n진법 게임]("https://school.programmers.co.kr/learn/courses/30/lessons/17687)
### 구하고자 하는 것은 무엇인가?

- 주어진 규칙과 같이 게임을 할 때 튜브가 말해야 하는 숫자 t개를 구해야 합니다.

### 1. 이해

- 모든 사람이 둥글게 앉아서 숫자를 하나씩 말하는 게임입니다.
- 10 이상의 숫자부터 한 자리씩 끊어서 말합니다.
- 이 게임에 2~16진법을 적용해서 게임을 진행합니다.
- 진법 n, 미리 구할 숫자의 갯수 t, 게임에 참가하는 인원m, 튜브의 순서 p가 주어집니다.

### 2.계획

- 다가오는 숫자의 n진법 수를 구해서 한 자리씩 끊어 배열에 넣습니다.
- 배열의 크기가 사람의 수 이상이 되면 배열을 순회하면서 튜브 차례에 해당하는 값을 결과 배열에 넣습니다.
- 결과 배열이 t와 같아질 때까지 반복합니다.

### 3. 실행

```jsx
const solution = (n, t, m, p) => {
  const arr = [];
  const result = [];

  let e = 0;
  while (result.length < t) {
    arr.push(...e.toString(n).split("").flat());
    e++;

    if (arr.length >= m) {
      for (let i = 0; i < m; i++) {
        const pop = arr.shift();
        if (i % m === p - 1) {
          result.push(pop);
        }
      }
    }
  }

  return result.join("").toUpperCase();
};
```

### 4. 회고

- 오랜만에 알고리즘 문제 풀이 포스팅을 쓰니까 어색합니다…ㅎ
- 처음에 숫자의 범위가 1000까지 인 것으로 오해하고 문제를 풀어서 삽질을 했습니다. 다행히 빠른 시간 안에 깨달아서 문제를 금방 풀 수 있었습니다. 지문과 조건을 제대로 읽고 문제를 풀어야겠습니다.