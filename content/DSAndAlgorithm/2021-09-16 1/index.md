---
title: '[문제풀이] 직업군 추천하기 '
path: blog/daily-job-recommendation
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2021-09-16
excerpt: 프로그래머스 - 직업군 추천하기
draft: false
---

## 직업군 추천하기

- [직업군 추천하기 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/84325)

### 1. 이해

- (개발자가 사용하는 언어의 선호도 \* 직업군의 언어점수)의 총합이 가장 높은 직업군을 구해야합니다.

  - 총합이 같은 직업군이 여러 개일 경우, 이름이 사전 순으로 빠른 직업군을 출력합니다.

- 직업군과 해당 직업군에서 각 언어에 대한 점수를 부여한 테이블이 주어집니다.
- 개발자가 선호하는 언어와 선호 점수가 각각 languages, preference 배열로 주어집니다.

  - languages[i]언어의 선호 점수는 preference[i]입니다.

- 각 언어의 점수는 table[i]에 있는 정보의 사이즈 - 해당 언어의 인덱스입니다.

### 2. 계획

1. 테이블을 알파벳 순으로 정렬합니다.
2. 테이블을 탐색하면서 문제에서 요구하는 값을 구합니다.
   - fold를 사용하여 직업군의 언어 점수 정보에서 해당 언어의 점수 \* 선호점수를 곱한 것을 더해갑니다.
   - 직업군별 점수로 데이터를 가공합니다.
3. 직업군별 점수 리스트에서 점수가 제일 높은 값의 직업군을 리턴합니다.

### 3. 실행

```kotlin
fun jobRecommendation(table: Array<String>, languages: Array<String>, preference: IntArray): String =
    table.sorted().map {
        val info = it.split(" ")

        val t = languages.foldIndexed(0) { index, acc, s ->
            acc + ((info.indexOf(s).let { n -> if (n > 0) info.size - n else 0 }) * preference[index])
        }

        info[0] to t
    }.maxBy { it.second }?.first ?: ""

```

### 4. 회고

- level1문제라 쉽게 풀 수 있었습니다.
- 배열이 여러 개 있을 경우 혼란이 오는 것 같습니다. 허둥지둥하지 말고 차근차근 조건을 정리하는 자세가 필요합니다.
