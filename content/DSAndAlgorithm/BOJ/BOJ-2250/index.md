---
title: '[문제풀이] 트리의 높이와 너비 '
path: blog/daily-BOJ-2250
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2021-10-14
excerpt: 백준 - 트리의 높이와 너비
draft: false
---

## 트리의 높이와 너비

- [트리의 높이와 너비 - 백준](https://www.acmicpc.net/problem/2250)

### 0. 목표

**구하고자 하는 것은 무엇인가?**

- 조건에 맞게 그려진 트리의 각 레벨에서 가장 오른쪽에 위치한 노드의 열번호 - 가장 왼쪽에 위치한 노드의 열번호 +1한 너비가 가장 큰 수의 레벨과 너비의 값을 구합니다.

### 1. 이해

- 트리 그리는 방법 => 문제 참고
- 각 레벨의 너비 = 가장 오른쪽에 위치한 노드의 열 번호 - 가장 왼쪽에 위치한 노드의 열 번호 +1
- 중위 순회시 트리의 왼쪽 노드 부터 x축으로 차례대로 방문합니다.
- 입력 1 : 전체 노드의 수 n
- 입력 2 : 트리의 정보 (노드 왼쪽자식 오른쪽 자식), -1인경우 자식이 없음을 나타냅니다.

### 2. 계획

- 트리를 나타내는 맵을 초기화해줍니다.

  - 각 노드를 맵에 추가합니다.

- 입력을 받으면서 트리 정보를 맵에 입력해줍니다.
- 부모가 없는 노드를 찾아 root로 설정해줍니다.
- 중위 순회를 통해 root노드 부터 탐색합니다.
- 중위 순회시 열의 값을 colList의 해당 레벨에 저장합니다.
- colList를 오름차순으로 정렬하고 너비가 가장 큰 값을 찾아 출력합니다.

### 3. 실행

```kotlin
    class Node2250(val data: Int) {
        var parent: Int = -1
        var left: Int = -1
        var right: Int = -1
    }

    fun main() {

        with(BufferedReader(InputStreamReader(System.`in`))) {
            val bw = BufferedWriter(OutputStreamWriter(System.out))

            val n = readLine().toInt()

            val tree = mutableMapOf<Int, Node2250>()
            val colList = mutableMapOf<Int, MutableList<Int>>()

            (1..n).forEach {
                tree.put(it, Node2250(it))
            }

            (0 until n).forEach {
                val (data, l, r) = readLine().split(" ").map { it.toInt() }
                tree[data]?.apply {
                    if (l != -1) {
                        left = l
                        tree[l]?.parent = data
                    }

                    if (r != -1) {
                        right = r
                        tree[r]?.parent = data
                    }
                }
            }

            var root = 0
            for (i in tree) {
                if (i.value.parent == -1) {
                    root = i.value.data
                }
            }

            inOrderWithColumn(1, root, tree, colList)

            val k = colList.toSortedMap().maxByOrNull { it.value.last() - it.value.first() + 1 }?.key

            bw.write("$k ${(colList[k]?.last()!!) - colList[k]?.first()!! + 1}")

            bw.flush()
            bw.close()
        }
    }


    var col = 1

    fun inOrderWithColumn(
        level: Int,
        curNode: Int,
        tree: MutableMap<Int, Node2250>,
        colList: MutableMap<Int, MutableList<Int>>
    ) {

        val l = tree[curNode]?.left ?: -1
        val r = tree[curNode]?.right ?: -1

        if (l != -1)
            inOrderWithColumn(level + 1, l, tree, colList)

        colList[level]?.add(col) ?: run { colList[level] = mutableListOf(col) }
        col += 1

        if (r != -1)
            inOrderWithColumn(level + 1, r, tree, colList)
    }
```

### 4. 회고

- 혼자힘으로 거의 풀었는데 루트를 찾는 부분을 생각하지 못했습니다.
- 트리를 순회하는 문제에 대해서 자신감이 생기는 것 같습니다.
