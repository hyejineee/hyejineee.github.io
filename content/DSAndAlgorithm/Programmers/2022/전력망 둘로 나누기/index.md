---
title: "[문제풀이] 전력망 둘로 나누기 "
path: blog/daily-algorithm-221106-1
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2022-11-06
excerpt: 프로그래머스 - 전력망 둘로 나누기
---

[프로그래머스 - 전력망 둘로 나누기](https://school.programmers.co.kr/learn/courses/30/lessons/86971)

### 구하고자 하는 것은 무엇인가?

- 연결된 송전탑들 중 전선을 하나 끊어서 최대한 비슷한 송전탑을 가진 2개의 전력망을 만들었을 때 두 전력망의 송전탑 개수의 차이를 구해야 합니다.

### 1. 이해

- n개의 송전탑이 트리 형태로 연결되어 있습니다.
- 연결 정보가 주어집니다. 연결 방향에 대한 내용은 없습니다.

### 2.계획

- 1~n까지 각 i송전탑이 트리의 root인 경우를 가정하고 트리를 구성합니다.
- i가 트리의 루트 노드일 경우 각 노드의 부모 노드를 구합니다.
- 각 노드의 부모 노드 정보를 갖고 1부터 n까지 노드를 순회하면서 전선을 끊었을 때 각각 몇 개의 송전탑을 갖게 되는지 구합니다.
- 위에서 구한 값의 최소값을 리턴합니다.

### 3. 실행

```kotlin
const solution = (n, wires) => {
  const graph = {};

  wires.forEach(([n1, n2]) => {
    graph[n1] ? graph[n1].push(n2) : (graph[n1] = [n2]);
    graph[n2] ? graph[n2].push(n1) : (graph[n2] = [n1]);
  });

  let min = n;
  for (let i = 1; i <= n; i++) {
    const visited = Array.from({ length: n + 1 }, () => false);
    const parent = Array.from({ length: n + 1 }, (_, i) => i);

    findParent(graph, visited, parent, i);

    for (let j = 1; j <= n; j++) {
      if (i === j) continue;
      const child = findChild(parent, j, i);
      min = Math.min(min, Math.abs(child + 1 - (n - (child + 1))));
    }
  }

  return min;
};

const findParent = (graph, visited, parent, node) => {
  visited[node] = true;
  for (let n of graph[node]) {
    if (visited[n]) continue;
    parent[n] = node;
    findParent(graph, visited, parent, n);
  }
};

const findChild = (tree, node, root) => {
  const treeArr = Object.entries(tree);
  if (node === root) return treeArr.length - 1;

  let count = 0;

  const find = (n) => {
    const child = treeArr.filter(([k, v]) => v === n);

    if (child.length <= 0) return;
    if (n === root) return;

    child.forEach(([k, v]) => {
      count++;
      find(Number(k));
    });
  };
  find(node);
  return count;
};
```

```kotlin
import kotlin.math.*

fun 전력망_둘로_나누기(n: Int, wires: Array<IntArray>): Int {
    val graph = mutableMapOf<Int, MutableList<Int>>()

    wires.forEach {
        val (n1, n2) = it
        graph[n1]?.add(n2) ?: run {
            graph[n1] = mutableListOf(n2)
        }

        graph[n2]?.add(n1) ?: run {
            graph[n2] = mutableListOf(n1)
        }
    }

    var min = n
    for(i in 1..n){
        val visited = BooleanArray(n+1){false}
        val parent = mutableMapOf<Int, Int>()

        for(p in 1..n){
            parent[p] = p
        }

        findParent(graph, visited, parent, i)

        for(j in 1..n){
            if(i == j) continue
            val child = findChild(parent, j,i)
            min = min(min, abs(child +1 - (n -(child +1))))
        }
    }
    return min
}

fun findParent(
    graph: MutableMap<Int, MutableList<Int>>,
    visited: BooleanArray,
    parent: MutableMap<Int, Int>,
    node: Int
) {
    visited[node] = true

    for (n in graph[node]!!) {
        if (visited[n]) continue
        parent[n] = node
        findParent(graph, visited, parent, n)
    }
}

fun findChild(tree: MutableMap<Int, Int>, node: Int, root: Int): Int {
    if (node == root) return tree.size - 1

    var count = 0

    fun find (n : Int){
        val child = tree.filterValues { it == n }
        if(child.isEmpty()) return
        if(n == root) return

        child.forEach { k, v ->
            count++
            find(k)
        }
    }

    find((node))
    return count
}
```

### 4. 회고

- 처음에 루트를 하나의 노드로 고정해서 문제를 풀려고 해서 시간이 오래 걸렸습니다.
- union-find 알고리즘을 사용해서 최상위 루트 하나를 찾고 트리를 구성하여 답을 구했더니 몇 개의 테스트에서 통과되지 못했습니다.
- 완전탐색 키워드에서 힌트를 얻어서 각 노드가 루트 노드인 경우를 적용했더니 테스트를 통과할 수 있었습니다.