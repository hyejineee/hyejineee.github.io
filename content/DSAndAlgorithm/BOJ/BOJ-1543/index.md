---
title: '[문제풀이] 문서 검색 '
path: blog/daily-BOJ-1543
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2021-10-12
excerpt: 백준 - 문서 검색
draft: false
---

## 문서 검색

- [문서 검색 - 백준](https://www.acmicpc.net/problem/1543)

### 0. 목표

**구하고자 하는 것은 무엇인가?**

- 어떤 단어가 문서에 총 몇번 등장하는 지 개수를 구합니다.

### 1. 이해

- 겹쳐진 단어는 카운트하지 않습니다.
- 문서와 단어는 알패벳 소문자와 공백으로 이루어져 있습니다.

### 2. 계획

- 문서를 잘라가면서 검사합니다.
- 문서의 시작이 단어로 시작되면 count에 1을 더하고 문서를 단어의 길이 만큼 앞에서 부터 자릅니다.
- 문서가 단어로 시작되지 않는다면 앞에 있는 글자 하나를 자릅니다.
- 문서의 길이가 단어의 길이보다 크커나 같을 때까지 반복합니다.

### 3. 실행

```kotlin
    fun main() {
        with(BufferedReader(InputStreamReader(System.`in`))) {
            val bw = BufferedWriter(OutputStreamWriter(System.out))

            var d = readLine()
            val w = readLine()

            var count = 0
            while (d.length >= w.length) {
                if (d.startsWith(w)) {
                    d = d.drop(w.length)
                    count++
                } else {
                    d = d.drop(1)
                }
            }

            bw.write("$count")

            bw.flush()
            bw.close()
        }
    }
```

### 4. 회고

- 쉽게 풀 수 있었습니다.
