---
title: "[문제풀이] 단속 카메라 "
path: blog/daily-programmers-speed-camera
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2022-02-12
excerpt: 프로그래머스 - 단속 카메라 
draft: false
---


## 단속 카메라 
* [단속 카메라 - 프로그래머스](https://programmers.co.kr/learn/courses/30/lessons/42884)

### 구하고자 하는 것은 무엇인가?

- 모든 차량이 단속 카메라를 한 번은 만나도록 카메라를 설치할 때 설치해야 하는 카메라의 최솟값을 구해야 합니다.

### 1. 이해

- routes는 차량의 이동경로 정보를 나타냅니다.
    - routes의 각 행은 [고속도로에 진입한 지점, 고속도로에서 나간 지점] 정보로 이루어져 있습니다.
- 진입/ 진출 지점에 카메라가 설치되어 있어도 카메라를 만난것으로 간주합니다.

### 2.계획

1. 차량의 이동 정보를 고속도로에서 나간 지점의 오름차순으로 정렬합니다.
2. 차량이 나가는 지점에 카메라를 설치합니다.
3. 다음 차량의 이동 구간에 카메라가 있는 지 확인합니다. 
    1. 있다면 해당 차량의 번호를 check합니다.
    2. 없다면 해당 지점에는 카메라가 없기 때문에 새로 설치합니다.
4. 2~3번의 내용을 모든 차가 check될 때까지 반복합니다.
5. 설치한 카메라의 수를 리턴합니다.

### 3. 실행

```python
def solution(routes):
    routes.sort(key = lambda x:x[1])
    answer = 0
    index = 0
    check = [0 for i in range(0,len(routes))]
    
    while not all(check):
     
        answer+=1
        
        for i in range(index, len(routes)):
            if routes[index][1] not in range(routes[i][0],routes[i][1]+1):
                index = i
                break
            else:
                check[i] = 1
               
    return answer
```

### 4. 회고

- 이번에도 코틀린이 없어 파이썬으로 풀었습니다.
- 자바스크립트 보다는 파이썬이 나은 것 같습니다.
