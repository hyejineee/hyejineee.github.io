---
title: "[문제풀이] JadenCase 문자열 만들기  "
path: blog/daily-janden-case-string
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-09-04
excerpt: 프로그래머스 - JadenCase 문자열 만들기
draft: false
---


## JadenCase 문자열 만들기 
* [JadenCase 문자열 만들기  - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/12951)

### 1. 이해 
- s는 알파벳과 공백문자로 이루어져 있다.
    * 공백 문자가 여러개일 수 있다.
- 첫 문자가 영문이 아닐때에는 이어지는 영문은 소문자로 쓴다.
    * 여러개의 공백 문자 뒤에 오는 문자는 소문자로 쓰지 않는다.

### 2. 계획

1. 주어진 string을 띄어쓰기 단위로 분리한다.
2. 분리한 단어의 첫 번째 글자가 영문이면 첫 글자를 대문자로 바꾸고 뒤에 있는 글자는 소문자로 바꿔준다.
3. 분리한 단어의 첫 번째 글자가 숫자이면 뒤에 있는 글자만 소문자로 바꿔준다. 



### 3. 실행
```kotlin

    fun makeStringOfJadenCase(s: String): String = s.split(" ").map {
        if (it.isBlank() || it.isEmpty()) return@map it

        if (it.first().isLetter()) {
            it.first().toUpperCase().plus(it.substring(1, it.length).toLowerCase())
        } else {
            it.first().plus(it.substring(1, it.length).toLowerCase())
        }
    }.joinToString(" ")

    //우수 답안

    class Solution {
        fun solution(s: String): String {
            return s.toLowerCase().split(" ").map {
                    it.capitalize()
                }.joinToString(" ")
        }
    }
```

### 4. 회고 

우수 답안 보니 어이가 없다. 저런 함수가 있었구나... kotlin에서 문자열 관련해서 자주 쓰이는 함수들을 정리해놓으면 좋을 것 같다. 