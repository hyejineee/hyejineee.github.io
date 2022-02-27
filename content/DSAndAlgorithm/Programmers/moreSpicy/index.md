---
title: "[문제풀이] 더 맵게 "
path: blog/daily-programmers-more-spicy
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2022-02-16
excerpt: 프로그래머스 - 더 맵게 
draft: false
---


### 구하고자 하는 것은 무엇인가?

- 모든 음식이 원하는 스코빌 지수 k 이상으로 만들기 위해 섞어야 하는 최소 횟수를 구해야 합니다.

### 1. 이해

- 음식의 스코빌 지수 배열이 주어집니다. (scoville)
- 원하는 스코빌 지수 k가 주어집니다.
- 낮은 음식의 스코빌 지수를 높이는 방법은 가장 낮은 스코빌 음식 2개를 섞어 새로운 음식을 만드는 것입니다.
    - 새로운 음식의 스코빌 지수 = 가장 낮은 스코빌 지수 + (2번째 낮은 스코빌 지수 *2)
- 모든 음식의 스코빌 지수를 k이상으로 만들 수 없는 경우에 -1을 리턴합니다.

### 2.계획

- 힙 자료구조를 사용하여 문제를 풉니다.
1. 스코빌 지수 배열을 힙으로 만듭니다.
2. 힙에서 가장 낮은 스코빌 지수를 pop합니다.
3. pop한 스코빌 지수가 k보다 크거나 같다면 바로 count의 값을 리턴합니다.
4. pop한 스코빌 지수가 k보다 작다면 다음 스코빌 지수를 pop하고 새로운 음식을 만들어 스코빌 지수를 높입니다.
5. 새로운 스코빌 지수를 다시 스코빌 지수 힙에 넣고 count를 1증가합니다.
6. 스코빌 지수 배열의 크기가 2이하가 될때까지 반복합니다.
7. 모든 스코빌 지수를 k이상으로 만들 수 있는 경우와 그렇지 않는 경우를 나누어 리턴합니다.

### 3. 실행

```python
import heapq

def solution(scoville, K):
    
    heapq.heapify(scoville)
    count = 0
    
    while len(scoville) > 1:
        n1 = heapq.heappop(scoville)
        
        if n1 >= K : 
            break
        
        n2 = heapq.heappop(scoville)
        new = n1 + (n2*2)
        
        heapq.heappush(scoville, new)
        count +=1
        
    if heapq.heappop(scoville) < K : 
        return -1
    else :
        return count
```

### 4. 회고

- 힙을 사용해서 쉽게 풀 수 있었습니다.
- 혼자 힘으로 예외 케이스를 찾고 문제를 해결했습니다.