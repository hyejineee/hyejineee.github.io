---
title: '[문제풀이] 카펫 '
path: blog/daily-programmers-carpet
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2022-02-14
excerpt: 프로그래머스 - 카펫
draft: false
---

## 카펫

- [카펫 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/42842)

### 구하고자 하는 것은 무엇인가?

- 카펫의 노란색, 갈색의 개수가 있을 때 카펫의 가로, 세로 길이를 구해야합니다.

### 1. 이해

- 테두리는 1줄입니다.
- 카펫의 가로 길이는 세로 길이와 같거나, 세로길이보다 깁니다.
- 카펫의 전체의 넓이는 노란색 개수 + 갈색의 개수 입니다.

### 2.계획

1. 노란색과 갈색의 합의 약수를 구합니다. (구해진 약수들은 오름차순으로 정렬된 상태입니다.)
2. 약수 배열의 가운데에 인덱스에 있는 수를 임시 넓이로 정합니다.
3. 약수 배열이 홀수인 경우 약수 배열의 가운데에 있는 수를 배열로 만들어 리턴합니다.
4. 약수 배열이 짝수인 경우
   1. 가운데 인덱스 -1의 수를 임시 높이로 정합니다.
   2. 임시 넓이와 임시 높이로 카펫을 만드는 경우 브라운의 개수와 맞는지 확인합니다.
   3. 브라운 개수와 맞다면 임시넓이, 임시높이로 배열을 만들어 리턴합니다.
   4. 개수가 다르다면 임시 높이와 넓이의 인덱스를 각각 1씩 옮기고 b과정을 수행합니다.

### 3. 실행

```kotlin
fun solution(brown: Int, red: Int): IntArray {
    val aliquots = findAliquot(brown + red)
    var wIndex = aliquots.size /2

    return if(aliquots.size % 2 ==0){
        var hIndex = wIndex -1

        while ((aliquots[wIndex] *2) + ((aliquots[hIndex]-2)*2) != brown){
            wIndex +=1
            hIndex-=1
        }
        intArrayOf(aliquots[wIndex], aliquots[hIndex])
    }else{
        intArrayOf(aliquots[wIndex], aliquots[wIndex])
    }
}

fun findAliquot(num:Int):MutableList<Int>{
    val aliquots = mutableListOf<Int>()
    for(i in 1..num){
        if(num % i == 0){
            aliquots.add(i)
        }
    }
    return aliquots
}
```

### 4. 회고

- 브라운 1줄이라는 숨겨진 조건을 보지 못했서 생각보다 시간이 걸렸습니다.
