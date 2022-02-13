---
title: "[문제풀이] 소수 찾기 "
path: blog/daily-programmers-find-prime-number
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2022-02-13
excerpt: 프로그래머스 - 소수 찾기 
draft: false
---


## 소수 찾기 
* [소수 찾기 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/42839)

### 0. 목표 
### 구하고자 하는 것은 무엇인가?

- 종이 조각으로 만들 수 있는 수 중에 소수가 몇개인지 구해야 합니다.

### 1. 이해

- 문자열 number가 주어집니다. 각 문자 하나는 수가 적힌 종이 하나를 의미합니다.
    - 예 : “17” → “1”, “7”
- 숫자는 0~9까지 숫자만으로 이루어져 있습니다.

### 2.계획

- 종이 조각으로 만들 수 있는 모든 수를 구하고 해당 수가 소수인지 판단합니다.
1. dfs를 사용하여 만들 수 있는 모든 수를 구합니다.
2. 만들 수 있는 모든 수의 배열 중에서 소수가 되는 수를 필터링 합니다.
3. 필터링된 배열의 사이즈를 리턴합니다.

### 3. 실행

```kotlin
fun solution(numbers: String): Int {
        val makeNumbers = mutableSetOf<Int>()

        numbers.toCharArray().forEach { n ->
            dfs(
                n.toString(),
                numbers.map { Character.getNumericValue(it) }.toMutableList().apply { this.remove(Character.getNumericValue(n)) },
                1,
                numbers.length,
                makeNumbers
            )
        }

        return makeNumbers.count { it.isPrime() }
    }
    
  private fun dfs(num: String, available: MutableList<Int>, curLevel: Int, level: Int, numbers: MutableSet<Int>) {
      if(num.toInt() > 1){
          numbers.add(num.toInt())
      }

      if (curLevel == level) {
          return
      }

      for (i in available) {
          val next = num.plus(i.toString())
          dfs(next, available.toMutableList().apply { remove(i) }, curLevel + 1, level, numbers)
      }
  }

  private fun Int.isPrime(): Boolean {
      var i =2
      while (i*i <= this){
          if(this%i == 0) return false
          i++
      }
      return true
  }
```

### 4. 회고

- dfs를 사용하여 쉽게 풀 수 있었습니다.
- 처음에는 제일 큰 값까지 모든 소수를 구하고 그 안에 포함되어 있는 지 확인하는 로직을  작성했는데 시간초과가 났습니다.
- Int의 확장함수를 사용하여 해당 숫자가 소수인지 아닌지 판단하는 함수를 만들었습니다.
- 확장함수에서는 this를 사용한다는 것을 알게 되었습니다.