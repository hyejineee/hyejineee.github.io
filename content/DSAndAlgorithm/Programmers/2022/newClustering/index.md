---
title: '[문제풀이] 뉴스 클러스터링 '
path: blog/daily-algorithm-news-clustering
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2022-07-21
excerpt: 프로그래머스 - 뉴스 클러스터링
---

### 구하고자 하는 것은 무엇인가?

- 입력으로 들어돈 두 문자열의 자카드 유사도를 구해야 합니다.

### 1. 이해

- 자카드 유사도
  - 두 집합의 교집합 크기를 두 집합의 합집합 크기로 나눈 값입니다.
  - 집합 A, 집합B가 모두 공집합일 경우 카자드 유사도는 1입니다.
  - 중복을 허용하는 다중집합에 대해서 확장할 수 있습니다.
- 문자열을 두 글자씩 끊어서 다중집합을 만듭니다.
- 공백, 특수문자, 숫자가 들어있는 경우 그 글자 쌍을 버립니다.
- 대, 소문자 차이를 무시합니다.
- 구한 자카드 유사도에 65536을 곱합 값을 리턴합니다.

### 2.계획

1. 문자열1, 2의 대문자를 모두 소문자로 치환하고 다중집합을 만듭니다.
   1. 문자열을 순환하면서 2개씩 쪼갭니다.
   2. 정규식을 사용해 영문자 이외의 문자가 들어가 있는지 검사합니다.
   3. 영문자만 있는 쪼갠 문자열을 다중집합에 추가합니다.
2. 1에서 구한 각 다중집합의 크기가 0이면 1 \* 65536을 리턴합니다.
3. 다중집합1을 순회하면서 다중집합에 2에 포함되는 요소를 교잡합의 개수로 카운트하고 다중집합2에서 해당 원소를 삭제합니다. 또한 합집합의 개수도 카운트합니다.
4. 다중집합2에 남은 원소의 개수를 합집합의 개수에 포함시킵니다.
5. 합집합의 개수가 0인경우 65536을 리턴하고, 1이상인 경우 교집합의 개수 / 합집합의 개수 \* 65536을 리턴합니다.

### 3. 실행

```jsx
const solution = (str1, str2) => {
  const c1 = chunk(str1.toLowerCase()).sort()
  const c2 = chunk(str2.toLowerCase()).sort()

  if (c1.length === 0 && c2.length === 0) return 1 * 65536

  let inter = 0
  let union = 0

  for (let i = 0; i < c1.length; i++) {
    if (c2.includes(c1[i])) {
      inter++
      delete c2[c2.indexOf(c1[i])]
    }
    union++
  }

  union += c2.filter(e => !!e).length

  return union === 0 ? 65536 : Math.floor((inter / union) * 65536)
}

const chunk = str => {
  const result = []

  for (let i = 0; i < str.length; i++) {
    const r = /[^a-z]/g
    const s = str.slice(i, i + 2)
    if (s.match(r)) continue

    if (s.length === 2) {
      result.push(s)
    }
  }
  return result
}

test(`뉴스 클러스터링`, () => {
  expect(solution('FRANCE', 'french')).toEqual(16384)
  expect(solution('handshake', 'shake hands')).toEqual(65536)
  expect(solution('aa1+aa2', 'AAAA12')).toEqual(43690)
  expect(solution('E=M*C^2', 'e=m*c^2')).toEqual(65536)
  expect(solution('abc', 'abbb')).toEqual(16384)
  expect(solution('di mi mi mi mi', 'di di di go')).toEqual(8192)
  expect(solution('BAAAA', 'AAA')).toEqual(32768)
})
```

### 4. 회고

- 배열에서 원소를 삭제할 때 delete 키워드를 사용한다는 것을 알게 되었습니다.
- 합집합과 교집합의 개수를 구하는 부분에서 해맸습니다. 결국 다른 사람이 설명한 풀이를 보고 구현했습니다. 어떻게 해야 문제 해결 능력이 올라갈까요ㅠㅠㅠ
