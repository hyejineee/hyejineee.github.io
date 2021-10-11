---
title: "[문제풀이] 위클리 5주차 문제  "
path: blog/daily-weekly-5
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-09-01
excerpt: 프로그래머스 - 위클리 5주차 문제
draft: false
---


## 위클리 5주차 문제 
* [위클리 5주차 문제 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/84512)

### 1. 이해 
- 이전에 비슷한 형태의 문제가 있었던 것 같다.
    * [문제풀이 - 타겟넘버](https://hyejineee.github.io/blog/ds-target-number)
- 'A', 'E', 'I', 'O', 'U'만 사용할 수 있다.
    * 단어는 총 3905개 만들 수 있다. 
- 중위 순회 방법을 사용해서 문제를 풀 수 있을 것 같다.
    * [트리 순회](https://hyejineee.github.io/blog/ds-circuit-tree)

### 2. 계획

- 단어의 순번을 세는 count변수를 만든다. 
- 해당 단어를 찾을 시 true로 바뀌는 isFind변수를 만든다.
- 해당 단어의 순번을 저장하는 result 변수를 만든다.

1. 주어진 단어들을 중위 순회한다.
2. 찾고자 하는 단어를 찾으면 isFind변수를 true로 만든다.
3. result에 count의 값을 저장한다.
4. result 값을 리턴한다.



### 3. 실행
```kotlin
    var count = 1
    var isFind = false
    var result = 0

    fun weekly5(word: String): Int {
        val words = listOf('A', 'E', 'I', 'O', 'U')

        for (i in words) {
            if (isFind) break
            preOrder(1, i.toString(), word, words.toCharArray())
            count++
        }

        return result
    }

    fun preOrder(currentLevel: Int, word: String, targetWord: String, words: CharArray) {

        if (word == targetWord) {
            isFind = true
            result = count
            return
        }

        if (currentLevel == words.size) {
            return
        }

        words.forEach {
            count++
            preOrder(currentLevel + 1, word.plus(it), targetWord, words)
        }
    }

    //우수 답안 
    import kotlin.math.pow

    class Solution {
        fun solution(word: String): Int {
            val list = listOf('A', 'E', 'I', 'O', 'U')
            return word.mapIndexed { i, w ->
                getSum(5 - i) * list.indexOf(w)
            }.sum() + word.length
        }

        // 등비 급수 (S_n)
        private fun getSum(n: Int) = (((5.0).pow(n) - 1) / (5 - 1)).toInt()
    }

```

### 4. 회고 

저번에 풀었던 비슷한 문제를 생각하고 문제를 푸니 쉽게 풀렸습니다. 다른 사람이 푼 답안을 보니 등비 급수라는 개념을 사용한 풀이들이 많았습니다. 등비 급수에 대해서 살짝 공부해야겠습니다. 나중에 이런 비슷한 문제가 나왔을 경우 잘 쓰일 것 같습니다.