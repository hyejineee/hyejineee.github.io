---
title: "[문제풀이] 행렬의 곱셈  "
path: blog/daily-matrix-multiplication
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-09-07
excerpt: 프로그래머스 - 행렬의 곱셈
draft: false
---


## 행렬의 곱셈
* [행렬의 곱셈  - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/129491)

### 1. 이해 
- [행렬의 곱셈](https://ko.wikipedia.org/wiki/%ED%96%89%EB%A0%AC_%EA%B3%B1%EC%85%88)

### 2. 계획

1. 배열2를 회전한다.
2. 각 자리를 곱하고 더한다.



### 3. 실행
```kotlin

   fun matrixMultiplication(arr1: Array<IntArray>, arr2: Array<IntArray>): Array<IntArray> {
        val rotatedArr2 = rotate(arr2)

        return Array(arr1.size) { i ->
            IntArray(rotatedArr2.size) { j ->
                var sum = 0
                for (k in arr1[i].indices) {
                    sum += arr1[i][k] * rotatedArr2[j][k]
                }
                sum
            }
        }
    }

    fun rotate(arr: Array<IntArray>): Array<IntArray> {
        val new = MutableList(arr[0].size) {
            MutableList(arr.size) { 0 }
        }

        for (i in arr.indices) {
            for (j in arr[i].indices) {
                new[j][i] = arr[i][j]
            }
        }
        return new.map { it.toIntArray() }.toTypedArray()
    }

    //우수답안
    class Solution {
        fun solution(arr1: Array<IntArray>, arr2: Array<IntArray>): Array<IntArray> =Array<IntArray>(arr1.size) {
                eachRow ->
                IntArray(arr2[0].size) {
                    eachColumn ->
                    var secondArrayRow = 0
                    arr1[eachRow].fold(0) {
                        acc, i ->
                        acc + i * arr2[secondArrayRow++][eachColumn]
                    }
                }
            }
    }
```

### 4. 회고 

* 배열을 뒤집어서 생각하는 문제 유형에 약한 것 같다.
* 기초 수학 지식이 부족함을 또 느낀다. 
