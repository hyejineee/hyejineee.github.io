---
title: '20210717 TIL'
path: blog/TIL/20210717
tags: [TIL]
cover: './tilbanner.jpg'
date: 2021-07-17
excerpt: 기본 정렬 알고리즘을 사용하는 코딩 테스트 문제를 풀었습니다.
---

## Facts

- 패스트 캠퍼스 자료구조 & 알고리즘 강의를 수강했습니다.
  - 기본 정렬 알고리즘을 사용하는 문제를 풀었습니다.

## Feelings

- 이전에는 IDE에서 테스트 코드만 돌리고 끝냈었는데 백준에 풀이를 제출하기 시작했습니다. 시간 초과, 메모리 초과와 같이 조건에 걸리는 풀이가 몇 개 있어서 어떻게 하면 조건을 통과할 수 있을까 생각하면서 다시 문제를 풀었습니다.
- 제출을 목적으로 문제를 푸니 문제를 풀면서 생각하지 못했던 것들을 알 수 있게 되었습니다.

## Findings

- [수 정렬하기2](https://www.acmicpc.net/problem/2751)
  - 문제를 제출했는데 통과를 못해서 다시 봤더니 조건에 음수값을 사용할 수 있었습니다.
  - 문제를 풀 때 조건을 잘 살펴봐야겠습니다.

```kotlin
fun main(args: Array<String>) {
    with(BufferedReader(InputStreamReader(System.`in`))) {
        val n = readLine().toInt()

        val positiveArray = MutableList<Pair<Int, Boolean>?>(1000001) { null }

        val negativeArray = MutableList<Pair<Int, Boolean>?>(1000001) { null }

        for (i in 0 until n) {
            val index = readLine().toInt()
            if (index < 0) {
                negativeArray[abs(index)] = (index to true)
            } else {
                positiveArray[index] = (index to true)
            }

        }

        println(
            negativeArray.filter { it?.second ?: false }.reversed().joinToString("") { it?.first.toString() + '\n' } +
                    positiveArray.filter { it?.second ?: false }.joinToString("") { it?.first.toString() + '\n' }
        )
    }
}
```

- [k번째 수](https://www.acmicpc.net/problem/11004)
  - 그냥 sorted()만 사용했을 때 시간 초과로 통과하지 못했었는데 asSequence()를 사용하니 통과할 수 있었습니다. asSequence()에 대해 정리해야겠습니다.
  - [kotlin - asSequence()]()

```kotlin
fun main(args: Array<String>) {
    with(BufferedReader(InputStreamReader(System.`in`))) {
        val (n, k) = readLine().split(" ").map { it.toInt() }
        val array =
            readLine().split(" ").asSequence()
                .map { it.toInt() }
                .sorted()
                .filterIndexed { index, _ -> index == k - 1 }

        println(array.first())
    }
}

```

## Future Action Plans

- 기본 정렬 알고리즘들을 정리해야 할 것 같습니다.
- 안드로이드 테스트....
- kotlin - asSequence에 대해 공부해야겠습니다.
- 자료구조 & 알고리즘 : 기본 탐색 유형 코테 문제 풀이 강의를 들어야 합니다.
