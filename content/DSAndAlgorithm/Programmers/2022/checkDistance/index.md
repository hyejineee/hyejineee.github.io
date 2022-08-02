---
title: "[문제풀이] 거리두기 확인하기 "
path: blog/daily-algorithm-check-distance
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2022-07-25
excerpt: 프로그래머스 - 거리두기 확인하기
---

### 구하고자 하는 것은 무엇인가?

- 각 대기실의 응시자들의 거리두기 여부를 구해야 합니다.

### 1. 이해

- 대기실은 5개이며, 각 대기실은 5*5크기 입니다.
- 각 응시자들은 거리두기를 위하여 맨해튼 거리가 2이하인 거리에 앉으면 안됩니다.
    - 단 응시자들 사이에 파티션으로 막혀 있을 경우 앉을 수 있습니다.
    - 맨해튼 거리
        - 두 테이블 T1, T2가 행렬 (r1, c1), (r2, c2)에 각각 위치하고 있다면, T1, T2 사이의 맨해튼 거리는 |r1 - r2| + |c1 - c2| 입니다.
- 각 대기실에서
    - P는 응시자가 앉아 있는 자리를 의미합니다.
    - O는 빈 테이블을 의미합니다.
    - X는 파티션을 의미합니다.
- 각 대기실마다 거리두리를 잘 지키고 있으면 1, 한 명이라도 지키지 않고 있으면 0을 반환합니다.

### 2.계획

- 각 대기실을 순회하면서 응시자가 앉아 있는 자리면 주위에 다른 응시자가 있는지 너비우선탐색을 사용하여 확인합니다.
1. 대기실을 순회합니다. 해당 자리가 응시자가 앉아 있는 자리일 경우 너비우선탐색을 시작합니다. 
2. 해당 자리를 시작으로 상, 하, 좌, 우로 이동하면서 거리를 더해가면서 이동합니다. 
3. 이동하다가 다른 응시자를 만날 경우 해당 응시자와의 거리가 2이하일 경우 탐색을 멈추고 0을 리턴합니다.

### 3. 실행

```jsx
const solution = (places) => {
  return places.map((p) => check(p.map((e) => e.split(""))));
};

const check = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === "X" || arr[i][j] === "O") continue;
      if (!bfs(arr, [i, j])) return 0;
    }
  }
  return 1;
};

const bfs = (arr, start) => {
  const distance = arr.map((e) => e.map((_) => 0));
  const checkArr = arr.map((e) => e.map((_) => false));
  const needVisit = [];

  needVisit.push(start);

  const dx = [0, 0, -1, +1];
  const dy = [-1, +1, 0, 0];

  while (needVisit.length !== 0) {

    const [px, py] = needVisit.shift();
      
    if (
      arr[px][py] === "P" &&
      !checkArr[px][py] &&
      distance[px][py] !== 0 &&
      distance[px][py] <= 2
    )
      return false;

    checkArr[px][py] = true;

    for (let i = 0; i < 4; i++) {
      const nx = px + dx[i];
      const ny = py + dy[i];

      if (nx < 0 || nx > 4) continue;
      if (ny < 0 || ny > 4) continue;
      if (arr[nx][ny] === "X") continue;
      if (checkArr[nx][ny]) continue;

      needVisit.push([nx, ny]);
      distance[nx][ny] = distance[px][py] + 1;
    }
  }

  return true;
};
```

### 4. 회고

- 6,9,31번 문제만 통과하지 못해서 좌절하고 있었는데 pop을 shift로 바꾸니까 통과되었습니다. bfs가 아니라 dfs로 탐색해서 통과하지 못했었습니다.