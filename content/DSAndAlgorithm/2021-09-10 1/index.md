---
title: "[문제풀이] 복서 정렬하기  "
path: blog/daily-sort-boxer
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-09-10
excerpt: 프로그래머스 - 복서 정렬하기
draft: false
---


## 복서 정렬하기 
* [피보나치수  - 복서 정렬하기](https://programmers.co.kr/learn/courses/30/lessons/85002)


### 1. 이해 
- 주어진 기준으로 정렬된 복서 번호를 구해야합니다. 
- 복서의 번호는 weight배열의 인덱스 +1이 복서의 번호입니다.
- 정렬 기준은 다음과 같습니다.
    - 승률이 높은 복서가 순서대로 
    - 승률이 같은 경우 자신의 몸무게보다 높은 복서를 이긴 횟수가 많은 순서대로 
    - 위의 횟수가 같은 경우 몸무게가 무거운 순서대로 
    - 몸무게가 같을 경우 복서의 번호가 낮은 순서대로 
- head2head 배열은 복서의 전적을 기록한 배열입니다. -> 문제 사이트 설명 참고 


### 2. 계획

- 복서의 정보르 만듭니다. 정보는 복서의 번호, 몸무게, 승률, 자신보다 무거운 상대를 이긴 횟수를 포함합니다. 
- 매개변수로 주어진 배열을 순회하면서 위의 정보를 구합니다. 
- 복서 정보를 주어진 기준에 따라 정렬합니다. 
- 정렬된 복서 정보에서 복서의 번호만 가져와 리턴해줍니다. 

### 3. 실행
```kotlin
    data class BoxerInfo(
        val boxerNumber: Int,
        val weight: Int,
        val winningRate: Double,
        val numberOfWinsHeavier: Int
    ) : Comparable<BoxerInfo> {

        override fun compareTo(other: BoxerInfo): Int = when {
            winningRate != other.winningRate -> if (other.winningRate > winningRate) 1 else -1
            numberOfWinsHeavier != other.numberOfWinsHeavier -> other.numberOfWinsHeavier - numberOfWinsHeavier
            weight != other.weight -> other.weight - weight
            else -> boxerNumber - other.boxerNumber
        }
    }

    fun sortBoxer(weights: IntArray, head2head: Array<String>): IntArray = Array(weights.size) { index ->
        val winningRate =
            head2head[index].count { it == 'W' }.toDouble() / head2head[index].count { it == 'W' || it == 'N' }
        val numberOfWinsHeavier =
            head2head[index].filterIndexed { index2, c -> c == 'W' && weights[index2] > weights[index] }.count()

        BoxerInfo(index, weights[index], winningRate, numberOfWinsHeavier)
    }
        .sorted()
        .map {
            println(it)
            it.boxerNumber + 1
        }
        .toIntArray()

        
    //우수답안 
    class Solution {
    fun solution(weights: IntArray, head2head: Array<String>): IntArray {
        val listOfWin = head2head.map {
            it.indices.filter { index -> it[index] == 'W' }
        }
        val countOfFight = head2head.map {
            it.filter { c -> c != 'N' }.count()
        }
        val countOfWinOverWeight = listOfWin.mapIndexed { index, it ->
            it.filter { weights[index] < weights[it] }.count()
        }
        return weights.indices
            .sortedByDescending { weights[it] }
            .sortedByDescending { countOfWinOverWeight[it] }
            .sortedByDescending { listOfWin[it].count() / Math.max(countOfFight[it], 1).toDouble() }
            .map { it + 1 }
            .toIntArray()
    }
}



```

### 4. 회고 

* 정렬이 동작하는 방식에 대해서 제대로 알고 있지 않다는 것을 깨달았습니다. 
* compare 하는 부분에서 a-b 하는 부분은 매일 헷갈렸는데 이번 기회에 제대로 정리해놓아야겠습니다.
* level1에 있는 문제라 금방 풀 수 있을 줄 알았는데 그렇지 못해서 아쉽습니다. 
* kotlin Comparable<T>, comparator<T>의 차이에 대해서 정리해야겠습니다.

