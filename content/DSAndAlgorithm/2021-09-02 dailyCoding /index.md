---
title: "[문제풀이] 문자열 압축  "
path: blog/daily-string-compression
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-09-02
excerpt: 프로그래머스 - 문자열 압축
draft: false
---


## 문자열 압축
* [문자열 압축 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/60057)

### 1. 이해 
- s의 길이는 1이상 1000이하이다. 
    * 최대 500자를 압축할 수 있다. 
- 문자열을 처음부터 n개의 단위로 자를 수 있다.
    * ababacdcd를 2개의 단위로 자를 경우 : ab ab ac dc d로 잘린다.


### 2. 계획

1. 1부터 주어진 문자열의 길이/2까지 순회한다.
2. 문자열을 해당 단위로 압축한다. 

* 압축하기 
1. 문자열의 0번째 인덱스부터 압축 대상이 되는 문자열을 구한다.
2. 압축 대상이 되는 문자열과 현재 인덱스에 있는 문자열이 같은지 비교한다.
    * 같으면 카운트를 +1하고 다음 인덱스로 이동해서 문자열을 비교한다.
    * 다르면 카운트와 압축 대상이 되는 문자열을 합쳐 압축하고 현재 인덱스의 문자열을 압축 대상으로 바꾼다. 
3. 위의 과정을 반복한다.
4. 제일 긴 길이를 가진 문자열의 사이즈를 반환한다.



### 3. 실행
```kotlin

    fun stringCompression(s: String): Int = (1..s.length / 2).map {
        compressionBy(it, s, s.substring(0, it))
    }.minByOrNull { it } ?: 1


    fun compressionBy(
        compressionSize: Int, s: String, target: String, count: Int = 0, compressed: String = "", index: Int = 0,
    ): Int {

        if (index >= s.length) {
            return compressed.plus(if (count > 1) "${count}${target}" else target).length
        }

        val endIndex = if (index + compressionSize >= s.length) s.length else index + compressionSize
        val currentWord = s.substring(index, endIndex)

        return if (target == currentWord) {
            compressionBy(compressionSize, s, target, count + 1, compressed, index + compressionSize)
        } else {
            val new = compressed.plus(if (count > 1) "${count}${target}" else target)
            compressionBy(compressionSize, s, currentWord, 1, new, index + compressionSize)
        }
    }

```

### 4. 회고 

압축이 되는 경우가 애매해서 좀 해맸던 것 같습니다. 단순히 문제가 제시한 대로 앞에서 자르면 되는 문제였는데 중간에 ababacdcd의 경우 2aba2cd로 압축되는 경우를 생각하고 문제를 풀어서 어려웠던 것 같습니다. 