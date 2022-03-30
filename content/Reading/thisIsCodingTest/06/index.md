---
title: "이것이 코딩테스트다 - 정렬"
path: blog/Reading/this-is_coding-test_06
tags: [OO, Reading]
cover:  "./cover.png"
date: 2022-03-30
excerpt: 코테 스터디 - 정렬
draft : false
---

## Chapter06.정렬

### 정렬
- 데이터를 특정한 기준에 따라서 순서대로 나열하는 것
- 리스트를 뒤집는 연산은 O(n)의 복잡도를 갖는다.

### 선택 정렬 
- 가장 작은 데이터를 선택해 맨 앞에 있는 데이터와 바꾼다.
- 매번 가장 작은 것을 선택
- O(n^2)의 시간 복잡도를 갖는다.

```kotlin
    fun main (){
        val array = intArrayOf(7,5,9,0,3,1,6,3,4,8)
        
        for(i in array.indices){
            for (j in i+1 until array.size){
                if(array[i] > array[j]){
                    val temp = array[i]
                    array[i] = array[j]
                    array[j] = temp
                }
            }
        }

        println(array.toList())
    }
```

### 삽입 정렬 
- 데이터를 하나씩 확인하며, 각 데이터를 적절한 위치에 삽입
- 필요할 때만 위치를 바꾸므로 데이터가 거의 정렬 되어 있을 때 훨씬 효율적
- 첫 번째 데이터는 정렬되어 있다고 판단하기 때문에 두 번째 데이터부터 작업을 시작한다.
- O(n^2)의 복잡도를 갖지만 최선의 경우 O(n)의 복잡도를 가진다.
  
```kotlin
    fun main() {
        val array = intArrayOf(7, 5, 9, 0, 3, 1, 6, 3, 4, 8)

        for (i in 1 until array.size) {
            for (j in i downTo 1) {
                if(array[j] < array[j-1]){
                    val temp = array[j-1]
                    array[j-1] = array[j]
                    array[j] = temp
                }
            }
        }

        println(array.toList())
    }
```

### 퀵 정렬
- 기준 데이터를 설정하고 그 기준보다 큰 데이터와 작은 데이터의 위치를 바꿈
- 큰 숫자와 작은 숫자를 교환할 때, 교환하기 위한 기준을 `피벗(pivot)`이라고 표현
- 리스트에서 첫 번째 데이터를 피벗으로 정한다.
- 피벗을 설정하여 정렬을 수행한 이후에 피벗을 기준으로 왼쪽 리스트와 오른쪽 리스트 각각 다시 정렬을 수행한다.
- 현재 리스트의 개수가 1개인 경우 퀵 정렬이 끝남
- 평균 시간 복잡도는 O(NlogN), 최악의 경우 O(n^2)
- 이미 데이터가 정렬되어 있는 경우 느리게 동작

```kotlin
    private fun quickSort(array: IntArray, start: Int, end: Int) {
        if (start >= end) return

        val pivot = start
        var left = start + 1
        var right = end

        while (left <= right) {
            while (left <= end && array[left] <= array[pivot]) left++
            while (right > start && array[right] >= array[pivot]) right--

            if (left > right) {
                val temp = array[pivot]
                array[pivot] = array[right]
                array[right] = temp
            } else {
                val temp = array[left]
                array[left] = array[right]
                array[right] = temp
            }

            quickSort(array, start, right - 1)
            quickSort(array, right + 1, end)
        }
    }
```

### 계수 정렬 
- 특정한 조건이 부합할 때만 사용할 수 있지만 매우 빠른 정렬 알고리즘
- 최악의 경우에도 O(n+k)를 보장
- 데이터 크기 범위가 제한되어 정수 형태로 표현할 수 있을 때만 사용할 수 있다.
- 가장 큰 데이터와 가장 작은 데이터의 차이가 1,000,000을 넘지 않을 때 효과적으로 사용할 수 있다.
- 모든 범위를 담을 수 있는 크기의 리스트를 선언해야 하기 때문