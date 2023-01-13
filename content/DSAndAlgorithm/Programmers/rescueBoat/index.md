---
title: '[문제풀이] 구명보트 '
path: blog/daily-programmers-rescue-boat
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2022-02-11
excerpt: 프로그래머스 - 구명보트
draft: false
---

## 구명보트

- [구명보트 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/42885)

### 구하고자 하는 것은 무엇인가?

- 무게 제한과 인원 제한이 있는 구명보트로 모든 사람을 구조하기 위해 필요한 구명보트의 최솟값을 구해야 합니다.

### 1. 이해

- 구명보트에 2사람만 탈 수 있습니다.
- 구명 보트의 무게제한이 있습니다. (limit)
- 사람들의 무게 정보가 주어집니다.(people)
- 모든 사람들 구출할 수 없는 경우는 주어지지 않습니다.

### 2.계획

- 구명보트에 두 사람을 태울 수 있는지 한 사람만 태울 수 있는지 판단해서 구명보트를 준비해야합니다.

1. 사람의 무게를 가벼운 순으로 정렬합니다.
2. 맨 앞(start)과 맨 뒤(end) 사람부터 보트에 태웁니다.
   1. 둘의 합이 limit을 넘지 않는다면 start를 1증가합니다.
3. end를 1 감소합니다.
4. 모든 사람이 구조될 때까지 2,3번을 반복합니다.

### 3. 실행

```jsx
function solution(people, limit) {
  people.sort((a, b) => a - b)
  let start = 0
  let end = people.length - 1
  let count = 0

  while (start <= end) {
    count++

    if (people[start] + people[end] <= limit) {
      start += 1
    }
    end -= 1
  }

  return count
}
```

### 4. 회고

- 자바스크립트에서 sort가 유니코드로 정렬되는 사실을 모르고 문제가 안 풀려 시간을 허비했습니다.
