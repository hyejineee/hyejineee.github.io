---
title: '[문제풀이] 프렌즈4블록 '
path: blog/daily-algorithm-221028-2
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2022-10-28
excerpt: 프로그래머스 -프렌즈4블록
---

[프로그래머스 - 프렌즈 4블록](https://school.programmers.co.kr/learn/courses/30/lessons/17679)

### 구하고자 하는 것은 무엇인가?

- 게임판에서 사라지는 블록의 개수를 구해야 합니다.

### 1. 이해

- 게임판에서 블록이 2x2로 형태로 4개가 붙어 있을 경우 해당 블록 4개는 게임판에서 사라집니다.
- 블록이 지워진 후에는 위에 있는 블록이 아래로 내려오면서 빈 공간을 채웁니다.
- 지워지는 블록이 없어질 때까지 위 과정을 반복합니다.

### 2.계획

- 과정을 쉽게 하기 위해 테두리를 감싸도록 게임판을 초기화합니다.
- 게임판을 순회하면서 원소가 2X2 형태로 붙어있는 그룹에 속해 있는지 확인합니다.
  - 그룹에 속해있을 경우 지워야 하는 목록에 해당 좌표를 넣고, count에 1을 더해줍니다.
- 게임판 순회가 끝났으면 지워야 하는 목록을 순회하면서 해당 좌표의 원소를 빈 값으로 만듭니다.
- 다시 게임판을 순회하면서 빈 공간을 채우는 작업을 합니다.
- 게임판에서 지워지는 블록이 없어질 때까지 위 과정을 반복합니다.

### 3. 실행

```jsx
const solution = (m, n, board) => {
  const b = board.map(e => e.split(''))
  b.forEach(e => {
    e.unshift('#')
    e.push('#')
  })

  b.unshift(Array(n + 2).fill('#'))
  b.push(Array(n + 2).fill('#'))

  let count = 0

  while (!isFinish(b, m, n)) {
    const deleted = []

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (checkBlock(i, j, b)) {
          deleted.push([i, j])
          count++
        }
      }
    }

    deleted.forEach(([i, j]) => {
      b[i][j] = '#'
    })

    // 사라진 블럭들 내리는 작업
    for (let j = 1; j <= n; j++) {
      for (let i = m; i >= 1; i--) {
        if (b[i][j] !== '#') continue

        for (let k = i - 1; k >= 1; k--) {
          if (b[k][j] !== '#') {
            b[i][j] = b[k][j]
            b[k][j] = '#'
            break
          }
        }
      }
    }
  }

  return count
}

const isFinish = (board, m, n) => {
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (board[i][j] === '#') continue
      if (checkBlock(i, j, board)) return false
    }
  }

  return true
}

const checkBlock = (i, j, board) => {
  if (board[i][j] === '#') return false
  //1번 방향
  if (
    [board[i][j], board[i][j - 1], board[i - 1][j - 1], board[i - 1][j]].every(
      e => e === board[i][j]
    )
  )
    return true

  //2번 방향
  if (
    [board[i][j], board[i][j + 1], board[i - 1][j + 1], board[i - 1][j]].every(
      e => e === board[i][j]
    )
  )
    return true

  //3번 방향
  if (
    [board[i][j], board[i][j - 1], board[i + 1][j - 1], board[i + 1][j]].every(
      e => e === board[i][j]
    )
  )
    return true

  //4번 방향
  if (
    [board[i][j], board[i][j + 1], board[i + 1][j + 1], board[i + 1][j]].every(
      e => e === board[i][j]
    )
  )
    return true

  return false
}
```

### 4. 회고

- 빈 공간을 채우는 작업에서 많이 버벅 거렸습니다. 그래도 이전 보다 구현력이 좋아진 것 같습니다.
