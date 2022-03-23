---
title: "이것이 코딩테스트다."
path: blog/Reading/this-is_coding-test_05
tags: [OO, Reading]
cover:  "./cover.png"
date: 2022-03-23
excerpt: 코테 스터디 - chapter05.DFS/BFS
draft : false
---

## Chapter04. DFS/BFS
[👉🏻 더 자세한 포스팅 보러가기](https://hyejineee.github.io/blog/graph-search-algorithm1)
### 탐색 알고리즘 DFS/BFS

- **탐색**
  - 많은 양의 데이터 중에서 원하는 데이터를 찾는 과정
  - 그래프, 트리 등의 자료구조 안에서 탐색을 하는 문제를 자주 다룸.

  
> TIP 프로그래밍에서 그래프를 표현하는 방법 
> 1. 인접 행렬 : 2차원 배열로 그래프의 연결 관계를 표현하는 방식 
> 2. 인접 리스트 : 리스트로 그래프의 연결관계를 표현하는 방식 

- **DFS**
  - 깊이 운선 탐색
  - 그래프에서 깊은 부분을 우선적으로 탐색하는 알고리즘.
  - 동작 과정
    1. 탐색 시작 노드를 스택에 삽입하고 방문 처리를 한다.
    2. 스택의 최상단 노드에 방문하지 않은 인접 노드가 없으면 스택에서 최상단 노드를 꺼낸다.
    3. 2번의 과정을 더 이상 수행할 수 없을 때까지 반복한다.
  - 시간 복잡도 : 데이터 개수가 N개인 경우 O(n)의 시간이 소요됨.

- **BFS**
  - 너비 우선 탐색
  - 가까운 노드부터 탐색하는 알고리즘 
  - 동작 과정 
    1. 탐색 시작 노드를 큐에 삽입하고 방문 처리를 한다.
    2. 큐에서 노드를 꺼내 해당 노드의 인접 노드 중에서 방문하지 않은 노드를 모두 큐에 삽입하고 방문 처리를 한다.
    3. 2번의 과정을 더 이상 수행할 수 없을 때까지 반복한다.
  - 시간 복잡도 : O(n)의 시간이 소요됨.

### 예제 
**음료수 얼려먹기**
```kotlin
    fun freezeDrinks(board: Array<IntArray>): Int {
        val n = board.size
        val m = board[0].size

        val available = Array(n) { i ->
            BooleanArray(m) { j ->
                board[i][j] != 0
            }
        }

        var count = 0
        for (i in 0 until n) {
            for (j in 0 until m) {
                if(dfs(i,j,available)){
                    count++
                }
            }
        }
        return count
    }

    private fun dfs(i: Int, j: Int, available: Array<BooleanArray>): Boolean {
        val n = available.size
        val m = available[0].size

        if (((i in 0 until n ) && (j in 0 until m)).not()) return false

        if (available[i][j].not()) {
            available[i][j] = true

            dfs(i - 1, j, available)
            dfs(i + 1, j , available)
            dfs(i, j - 1, available)
            dfs(i, j+1, available)
            return true
        }
        return false
    }
```


**미로탈출**
```kotlin
    fun mazeEscape(n:Int, m:Int, maze:Array<IntArray>):Int{

        val dx = intArrayOf(1,0,-1,0)
        val dy = intArrayOf(0,1,0,-1)

        val needVisit = Stack<IntArray>()
        needVisit.add(intArrayOf(0,0,1))

        while (needVisit.isNotEmpty()){
           
            val (y,x, count) = needVisit.pop()

            for(i in 0..3) {
                val nx = x + dx[i]
                val ny = y + dy[i]

                if((ny in 0 until n && nx in 0 until m).not()) continue
                if(maze[ny][nx] == 0 ) continue

                if(maze[ny][nx] ==1){
                    maze[ny][nx] = count+1
                    needVisit.add(intArrayOf(ny,nx, count+1))
                }
            }
        }

        return maze[n-1][m-1]
    }
```
