---
title: '[문제풀이] 신규 아이디 추천  '
path: blog/daily-recommendation-new-id
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2021-08-31
excerpt: 프로그래머스 - 신규 아이디 추천
draft: false
---

## 신규 아이디 추천

- [신규 아이디 추천 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/72410)

### 1. 이해

- 각 단계에서 요구하는 내용대로 구현하면 될듯하다.

### 2. 계획

1. 각각 단계를 구현하고 let을 사용하여 연결

### 3. 실행

```kotlin
    fun recommendationNewId(newId: String): String = newId
        .toLowerCase()
        .filter {
            it in '0'..'9' || it in charArrayOf('_', '-', '.') || it in 'a'..'z'
        }
        .let { step3(it) }
        .let { step4(it) }
        .let(step5)
        .let(step6)
        .let(step7)

    fun step3(id: String): String {
        val temp = id.replace("..", ".")
        if (!temp.contains("..")) {
            return temp
        }
        return step3(temp)
    }

    fun step4(id: String): String {
        var temp = if (id.first() == '.') id.drop(1) else id
        temp = if (temp.isNotEmpty() && temp.last() == '.') temp.dropLast(1) else temp

        if (temp.isEmpty() || (temp.first() != '.' && temp.last() != '.')) {
            return temp
        }

        return step4(temp)
    }

    val step5 = { id: String ->
        if (id.isBlank() || id.isEmpty()) "a" else id
    }

    val step6 = { id: String ->
        if (id.length > 15)
            step4(id.substring(0, 15))
        else
            id
    }

    val step7 = { id: String ->
        var temp = id
        while (temp.length < 3) {
            temp = temp.plus(id.last())
        }
        temp
    }


    // 우수 답안

    class Solution {
        fun solution(newId: String) = newId.toLowerCase()
            .filter { it.isLowerCase() || it.isDigit() || it == '-' || it == '_' || it == '.' }
            .replace("[.]*[.]".toRegex(), ".")
            .removePrefix(".").removeSuffix(".")
            .let { if (it.isEmpty()) "a" else it }
            .let { if (it.length > 15) it.substring(0 until 15) else it }.removeSuffix(".")
            .let {
                if (it.length <= 2)
                    StringBuilder(it).run {
                        while (length < 3) append(it.last())
                        toString()
                    }
                else it }
    }

```

### 4. 회고

정규식을 잘 활용할 수 있으면 좋을 것 같습니다. 우수 답안에서 사용된 정규식을 공부해야겠습니다. 또 코틀린 범위 함수를 사용하는 데 있어서 정확하게 사용하지 못한다는 느낌을 받았습니다.
코틀린 범위 함수에 대해서 공부해야겠습니다.
