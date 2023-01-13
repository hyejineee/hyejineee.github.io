---
title: '[문제풀이] 두 큐 합 같게 만들기 '
path: blog/daily-algorithm-221104-1
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2022-11-04
excerpt: 프로그래머스 -두 큐 합 같게 만들기
---

[프로그래머스 - 두 큐 합 같게 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/118667)

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

````kotlin
import kotlin.math.*

fun 전력망_둘로_나누기(n: Int, wires: Array<IntArray>): Int {
    val graph = mutableMapOf<Int, MutableList<Int>>()
### 구하고자 하는 것은 무엇인가?

- 두 큐의 원소의 합이 같아지게 만들때 필요한 작업의 최소 횟수를 구해야 합니다.

### 1. 이해

- pop, insert 묶음이 하나의 작업 단위입니다.
- 처음에 길이가 같은 두 큐가 주어집니다.
- 큐1과 큐1의 원소의 최대값은 10^9입니다.
- 두 큐의 원소 합을 같게 만들 수 없는 경우 -1을 리턴합니다.

### 2.계획

- 모든 큐의 원소들의 합을 구하고 2로 나누어 절반 값을 구합니다.
- 큐가 2로 나누어 떨어지지 않는다면 -1을 리턴합니다.
- 큐1, 큐2 둘 중 하나에라도 절반 값보다 큰 값을 포함하면 -1을 리턴합니다.
- 두 큐의 합이 같아질 때까지 과정을 반복합니다.
    - 큐의 합이 큰쪽에서 작으로쪽으로 원소를 이동시키면서 작업의 횟수를 1씩 증가시킵니다.
    - 각 큐의 상태가 원래 상태로 돌아오면 -1을 리턴합니다.(?)

### 3. 실행

```jsx
const solution = (queue1, queue2) => {
  const total = sum(queue1) + sum(queue2);

  if (total % 2 !== 0) return -1;

  const half = Number(total / 2);

  if (queue1.some((e) => e > half) || queue2.some((e) => e > half)) return -1;

  let count = 0;
  let sum1 = sum(queue1);
  let sum2 = sum(queue2);

  const merge = [...queue1, ...queue2, ...queue1, ...queue2];
  let s1 = 0,
    s2 = queue1.length;

  while (sum1 !== half) {
    if (s2 > merge.length) return -1;

    if (sum1 > sum2) {
      const p1 = merge[s1];

      sum1 -= p1;
      sum2 += p1;

      s1++;
    } else {
      const p2 = merge[s2];

      sum1 += p2;
      sum2 -= p2;

      s2++;
    }

    count++;
  }

  return count;
};

const sum = (arr) => {
  return arr.reduce((acc, cur) => acc + cur, 0);
};
````

```kotlin
fun 두_큐_합_같게_만들기(queue1: IntArray, queue2: IntArray): Int {
    val total:Long = sum(queue1) + sum(queue2)
    val half : Long = total /2

    if (total % 2 != 0.toLong()) return -1;
    if(queue1.any { it >half } || queue2.any { it > half }) return -1

    var count = 0
    var sum1:Long = sum(queue1)
    var sum2:Long = sum(queue2)

    val merge = queue1 + queue2 + queue1 + queue2
    var s1 = 0
    var s2 = queue1.size

    while (sum1 != half){
        if(s2 > merge.size || s1 > merge.size) return -1

        if(sum1 > sum2){
            val p = merge[s1].toLong()

            sum1 -= p
            sum2 += p
            s1++
        }else{
            val p = merge[s2].toLong()

            sum1 += p
            sum2 -= p
            s2++
        }
        count ++
    }
    return count
}

fun sum(arr : IntArray) : Long = arr.fold(0.toLong()) { acc, cur -> acc + cur }
```

### 4. 회고

- 질문 답변 게시판의 힌트를 보고 겨우 풀 수 있었습니다.
- 초반에 풀이 방향을 잘 잡았는데 shift(), pop()하는 부분에서 시간 초과 문제가 발생했습니다. 질문 게시판에 올라온 힌트를 보고 두 큐를 하나의 배열로 합치고 인덱스로 큐를 회전(?)하는 것처럼 구현했는데 11, 28번에서만 시간초과가 발생했습니다.
- 마지막에 반복문 안에 있는 조건을 추가 하고 테스트에 통과할 수 있었습니다.
- 코틀린에서는 자료형 때문에 같은 알고리즘임에도 불구하고 테스트를 통과할 수 없었습니다. 자료형 타입을 모두 Long 타입으로 명시하고, 원래 sum을 코틀린에서 제공하는 메소드로 사용했는데 다시 Long타입을 반환할 수 있는 메소드를 만들어 사용하니 테스트에 통과할 수 있었습니다.
