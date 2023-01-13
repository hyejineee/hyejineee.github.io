---
title: '[문제풀이] 연속 부분 수열 합의 개수 '
path: blog/daily-algorithm-221103-3
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2022-11-03
excerpt: 프로그래머스 -연속 부분 수열 합의 개수
---

[프로그래머스 - 연속 부분 수열 합의 개수](https://school.programmers.co.kr/learn/courses/30/lessons/131701)

### 구하고자 하는 것은 무엇인가?

- 원형 수열의 연속하는 부분 수열의 합으로 만들 수 있는 수의 개수를 구해야 합니다.

### 1. 이해

- 원형 수열은 처음과 끝이 연결된 형태의 수열을 말합니다.
- 최대 길이가 배열의 길이인 연속 부분 수열을 만들 수 있습니다.

### 2.계획

- 1부터 배열의 길이 만큼 순회하면서 부분 수열을 구합니다.
  - 길이가 i인 부분 수열의 합을 구하고 앞에 있는 요소를 다시 배열의 뒤로 보냅니다.
  - 다시 head 부분이 앞으로 오면 부분 수열의 합을 구하는 과정을 멈추고 i를 1 증가시켜 다음 부분 수열을 구합니다.

### 3. 실행

```jsx
const solution = elements => {
  const arr = elements.map((e, i) => ({ head: i === 0, e: e }))
  const result = new Set()

  for (let i = 1; i <= elements.length; i++) {
    while (true) {
      let sum = 0
      for (let j = 0; j < i; j++) {
        sum += arr[j].e
      }
      result.add(sum)
      arr.push(arr.shift())
      if (arr[0].head) break
    }
  }

  return result.size
}
```

### 4. 회고

- head를 표시하기 위해 객체를 사용했는데 객체를 사용하는 사실을 까먹고 삽질했습니다. 어떤 자료구조를 사용하는지 주의 깊게 생각하면서 로직을 짜야겠습니다.
