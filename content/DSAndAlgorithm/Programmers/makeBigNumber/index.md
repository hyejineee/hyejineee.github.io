---
title: '[문제풀이] 큰 수 만들기 '
path: blog/daily-programmers-make-big-number
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2022-02-09
excerpt: 프로그래머스 - 큰 수 만들기
draft: false
---

## 큰 수 만들기

- [큰 수 만들기 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/42883)

### 구하고자 하는 것은 무엇인가?

- 어떤 숫자에서 k개의 수를 제거했을 때 얻을 수 있는 수 중의 최대값을 구해야 합니다.

### 1. 이해

- 어떤 숫자 number는 문자열 형태로 주어집니다.
- 숫자의 순서를 지켜야합니다. → 숫자의 자리수를 옮길 수 없습니다.

### 2.계획

- 숫자를 만들 수 있는 후보 수들 중에서 가장 큰 값을 찾으면서 수를 만듭니다.

1.  number.size - k의 숫자를 만들 수 있는 후보의 수를 찾습니다.
    - 숫자의 순서를 변경할 수 없기 때문에 number.size - k길이 만큼 배열을 갖을 수 있는 인덱스의 요소까지 후보 수 입니다.
2.  후보 수 중 가장 큰 값을 찾아 결과값에 저장합니다.
3.  가장 큰 값의 인덱스의 다음 인덱스 부터 다시 남은 자리수를 만들 수 있는 후보 수를 찾습니다.
4.  2번의 과정을 반복합니다.
5.  3번과 4번을 반복하면서 제일 큰 수를 만듭니다.

### 3. 실행

```kotlin
fun makeBigNumber(number: String, k: Int): String {

    val toNumber = number.map { Character.getNumericValue(it) }
    val result = mutableListOf<Int>()
    var startIndex = 0

    for (i in number.length - k downTo 1) {
        val available = toNumber.subList(startIndex, number.length - i + 1)

        var max = toNumber[startIndex]
        var maxIndex = startIndex

        for(j in startIndex .. number.length -i){
            if(max < toNumber[j]){
                max = toNumber[j]
                maxIndex = j
            }
        }

        result.add(max)
        startIndex = maxIndex +1
    }

    return result.subList(0, number.length - k).joinToString("")
}
```

### 4. 회고

- 배열 인덱스로 범위를 지정해서 찾는 문제에 약한 것 같습니다.
- 시간을 정해놓고 풀었음에도 많이 시간을 소비했습니다. 풀겠다 싶은 문제들은 미련이 남아서 계속 질질 끄는 것 같습니다.
