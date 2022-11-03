---
title: "[문제풀이] 파일명 정렬"
path: blog/daily-algorithm-221103-2
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2022-11-03
excerpt: 프로그래머스 - 파일명 정렬
---

[프로그래머스 - 파일명 정렬](https://school.programmers.co.kr/learn/courses/30/lessons/17686)

### 구하고자 하는 것은 무엇인가?

- 단순한 문자 코드 순이 아닌, 파일명에 포함된 숫자를 반영하여 정렬할 수 있도록 해야합니다.

### 1. 이해

- 파일명은 영문 대소문자, 숫자, 공백, 마침표, 빼기 부호로 이루어져 있습니다.
- 파일명은 크게 HEAE, NUMBER, TAIL로 이루어져 있습니다.
    - HEAD  : 숫자가 아닌 문자로 이루어져 있습니다. 최소 1글자 이상입니다.
    - NUMBER : 1~5글자 입니다. 앞에 0이 붙을 수 있습니다.
    - TAIL : 나머지 부분입니다. 숫자가 있을 수도 있고, 없을 수도 있습니다.
- 정렬 기준은 다음과 같습니다.
    1. HEAD를 기준으로 사전순으로 정렬합니다. 대소문자는 구분하지 않습니다.
    2. HEAD가 같을 경우 NUMBER 부분의 수로 정렬합니다. 앞의 0은 무시합니다.(012 == 12)
    3. HEAD와 NUMBER가 같을 경우 입력 순서를 유지하여 정렬합니다.

### 2.계획

- 파일명을 NUMBER 부분을 기준으로 HEAD와 NUMBER를 나눕니다.
- 나눈 데이터를 통해 정렬합니다.

### 3. 실행

```jsx
const solution = (files) => {
  return files
    .map((file, i) => [
      i,
      file.split(/[0-9]{1,}/g)[0].toLowerCase(),
      Number(file.match(/[0-9]{1,}/g)[0]),
    ])
    .sort((a, b) => {
      if (a[1] > b[1]) return 1;
      if (a[1] < b[1]) return -1;

      if (a[2] > b[2]) return 1;
      if (a[2] < b[2]) return -1;
    })
    .map(([i]) => files[i]);
};
```

### 4. 회고

- 정규식 굿