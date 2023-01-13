---
title: '이것이 코딩테스트다.'
path: blog/Reading/this-is_coding-test_04
tags: [DSAndAlgorithm, Reading]
cover: './cover.png'
date: 2022-03-16
excerpt: 코테 스터디 - chapter04. 구현
draft: false
---

## Chapter04. 구현

### 아이디어를 코드로 바꾸는 구현

**피지컬로 승부하기**

- 구현이란?
  - 머릿속에 있는 알고리즘을 소스코드로 바꾸는 과정
  - 정답을 위해 프로그래밍 언어의 문법을 정확히 알고 있어야 하며, 문제의 요구사항에 어긋나지 않는 답은 코드를 실수 없이 작성해야 한다. ⇒ 피지컬
- 구현하기 어려운 문제의 유형
  - 알고리즘은 간단하네 코드가 지나칠 만큼 길어지는 문제
  - 특정 소수점 자리까지 출력해야 하는 문제
  - 파싱 문제
- 완전탐색, 시뮬레이션 모두 구현유형으로 묶어서 다루고 있다.
  - 완탐 : 모든 경우의 수를 주저 없이 다 계산하는 해결 방법
  - 시뮬레이션 : 문제에서 제시한 알고리즘을 한 단계씩 차례대로 직접 수행해야 하는 문제 유형

**구현 시 고려해야 할 것**

- 변수의 표현 범위 - 정적 타입 언어에서는 중요한 문제!
- 시간 복잡도 - 문제에서 주어진 시간 제한과 데이터의 개수를 확인한 뒤에 문제를 풀자
  - 예 : 제한 시간 1초, 데이터 100만개 → O(NlogN)의 시간 복자도를 갖는 알고리즘으로 문제를 해경해야 한다.

**구현 문제에 접근하는 방법**

- 보통 구현 문제는 사소한 입력 조건 등을 문제에서 명시, 문제의 길이가 김.

## 예제

### 상하좌우

- 앞으로 갈 곳의 인덱스를 확인하면서 i와 를 변경한다.

```kotlin
fun UDLR(n: Int, plan: String): IntArray {
        val board = Array(n +1) { IntArray(n + 1) { 0 } }

        var i = 1
        var j = 1
        val plans = plan.split(" ")

        for (p in plans) {
            if (p == "R") {
                if (j + 1 > n) continue
                j += 1
            }

            if (p == "U") {
                if (i - 1 < 1) continue
                i -= 1
            }

            if (p == "L") {
                if (j - 1 < 0) continue
                j -= 1
            }

            if (p == "D") {
                if (i + 1 > n) continue
                i += 1
            }
        }
        return intArrayOf(i, j)
    }
```

### 시각

- 경우의 수가 작기 때문에 완전 탐색으로 문제를 해결한다.

```kotlin
fun time(n: Int): Int {
    var count = 0
    for (i in 0..n) {
        for (j in 0 until 60) {
            for (k in 0 until 60) {
                if ("$i $j $k".contains("3")) count++
            }
        }
    }
    return count
}
```

### 왕실의 나이트

```kotlin
fun royalKnight(position: String): Int {

    val candidates = arrayOf(
        intArrayOf(2, -1),
        intArrayOf(2, 1),
        intArrayOf(-2, -1),
        intArrayOf(-2, 1),
        intArrayOf(-1, -2),
        intArrayOf(-1, 2),
        intArrayOf(1, -2),
        intArrayOf(1, 2),
    )

    val positions = position.toCharArray()
    val j = positions[0].toInt() - 96
    val i = Character.getNumericValue(positions[1])

    var count = 0
    candidates.forEach {
        val (ni, nj) = it
        if ((i + ni in 1..8) && (j + nj in 1..8)) count++
    }

    return count
}
```

### 게임 개발

```kotlin
fun gameDevelop(position: IntArray, dir: Int, map: Array<IntArray>): Int {

    val dx = intArrayOf(-1, 0, 1, 0)
    val dy = intArrayOf(0, 1, 0, -1)
    val n = map.size
    val m = map[0].size

    var (cx, cy) = position
    var cd = dir
    var count = 1
    var turnTime = 0

    val available = Array(map.size) { i ->
        BooleanArray(map[0].size) { j ->
            map[i][j] != 1
        }
    }

    available[cx][cy] = false

    while (true) {
        cd = turnLeft(cd)

        val nx = cx + dx[cd]
        val ny = cy + dy[cd]

        //다음 칸 = 갈 수 있는 곳
        if(nx in 0 until n && ny in 0 until m && available[nx][ny]){
            // 이동
            cx = nx
            cy = ny
            available[cx][cy] = false
            turnTime = 0
            count++
        }else{
            turnTime +=1
        }

        if(turnTime == 4){
            val nx = cx - dx[cd]
            val ny = cy - dy[cd]

            if(available[nx][ny]) {
                cx = nx
                cy = ny
            } else{
                break
            }

            turnTime = 0
        }
    }
    return count
}

// 0북,1동,2남,3서
private fun turnLeft(cd: Int): Int = when (cd) {
    0 -> 3
    else -> cd - 1
}
```
