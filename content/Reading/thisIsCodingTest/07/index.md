---
title: '이것이 코딩테스트다 - 이진탐색'
path: blog/Reading/this-is_coding-test_07
tags: [DSAndAlgorithm, Reading]
cover: './cover.png'
date: 2022-04-13
excerpt: 코테 스터디 - 이진탐색
draft: false
---

## Chapter06.이진탐색

### 이진탐색

- 배열의 내부가 이미 정렬되어 있는 상태임을 가정
- 탐색 범위를 절반씩 좁혀가며 데이터를 탐색
- 찾으려는 데이터와 중간점 위치에 있는 데이터를 반복적으로 비교해서 원하는 데이터를 찾음.
- 원소의 개수가 절반씩 줄어들어 O(logN)의 시간 복잡도를 갖는다.
- 데이터 탐색 법위가 2000만을 넘어가면 이진 탐색으로 문제에 접근

```kotlin
    fun binarySearch(){
        val arr = intArrayOf(1,3,5,7,9,11,13,15)
        val target = 7
        var start = 0
        var end = arr.size -1

        while (start<=end){
            val mid = (start + end) / 2

            if(arr[mid] == target){
                println("index of target is $mid")
                break
            }

            if(arr[mid] > target){
                end = mid -1
            }else{
                start = mid +1
            }
        }
    }
```

### 트리 자료구조

- 데이터베이스는 내부적으로 대용량 데이터 처리에 적합한 트리 자료구조를 이용하여 항상 데이터가 정렬되어 있다.
- 데이터베이스에서 탐색은 이진 탐색과 유사한 방법을 이용해 탐색을 항상 빠르게 수행하도록 설계되어 있음 -> 데이터가 많아도 탐색하는 속도가 빠르다.
- 트리 자료구조 특징
  - 트리는 부모 노드와 자식 노드의 관계로 표현한다.
  - 트리의 최상단 노드를 루트 노드라고 한다.
  - 트리의 최하단 모드를 단말 노드라고 한다.
  - 트리에서 일부를 떼어내도 트리 구조이며 이를 서브 트리라 한다.
  - 트리는 파일 시스템과 같이 계층적이고 정렬된 데이터를 다루기에 적합하다.

### 이진 탐색 트리

👉🏻 [트리에 대한 자세한 포스팅](https://hyejineee.github.io/blog/ds-tree)

- 이진 탐색이 동작할 수 있도록 고안된, 효율적인 탐색이 가능한 자료구조
- 이진 탐색 트리의 특징
  - 부모 노드보다 왼쪽 자식 노드가 작다.
  - 부모 노드보다 오른쪽 자식 노드가 크다.
- 데이터의 개수가 1000만 개를 넘어가거나 탐색 범위의 크기가 1000억 이상이라면 이진 탐색 알고리즘을 고려해 볼 것.

### 예제

- 부품 찾기

```kotlin
    fun findPart(storePart: IntArray, customerPart: IntArray): String {
        storePart.sort()
        return customerPart.map { if (searchPart(storePart, it)) "yes" else "no" }.joinToString(" ")
    }

    private fun searchPart(part: IntArray, target: Int): Boolean {
        var start = 0
        var end = part.size - 1

        while (start <= end) {
            val mid = (start + end) / 2

            if (part[mid] == target) return true
            if (part[mid] > target) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        }
        return false
    }
```

- 떡볶이 떡 만들기

```kotlin
    fun makeRiceCake(n: Int, m: Int, highs: IntArray): Int {
        var start = 0
        var end = highs.max() ?: 0

        while (start <= end) {
            val mid = (start + end) / 2

            val target = highs.fold(0) { acc, i ->
                if (mid >= i) acc else acc.plus(i - mid)
            }

            if (target == m) return mid

            if (target > m) {
                start = mid + 1
            } else {
                end = mid - 1
            }
        }
        return 0
    }
```
