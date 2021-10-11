---
title: "20210716 TIL"
path: blog/TIL/20210716
tags: [TIL]
cover:  "./tilbanner.jpg"
date: 2021-07-16
excerpt: 재귀용법을 사용하는 코딩 테스트 문제를 풀었습니다.
---

## Facts

- 패스트 캠퍼스 자료구조 & 알고리즘 강의를 수강했습니다.
    - 재귀용법을 사용하는 문제를 풀었습니다. 

## Feelings

* 오랜만에 문제를 풀어서 그런지 재귀를 적용하는 것에 문제가 있어서 그런지 문제를 빨리빨리 풀지 못해서 답답합니다. 더워서 미칠 것 같은 것도 한 몫 하는 것 같습니다. 
* 너무 더워요....

## Findings

* [피보나치 수열](https://www.acmicpc.net/problem/1003) : 재귀 풀이 말고 다른 풀이 방법을 배웠습니다.
```kotlin 
fun fibonacci(n: Int): IntArray {
    var numberOf0 = 0
    var numberOf1 = 0

    fun fibo(n: Int): Int {
        when (n) {
            0 -> {
                numberOf0++
                return 0
            }
            1 -> {
                numberOf1++
                return 1
            }
            else -> fibo(n - 1) + fibo(n - 2)
        }
        return 0
    }

    fibo(3)

    return intArrayOf(numberOf0, numberOf1)
}
```

* [z문제](https://www.acmicpc.net/problem/1074) 
    * 리팩토링이 필요한 것 같습니다.

``` kotlin 
fun z(n: Long, r: Int, c: Int): Int {
    return findOrder(
        (2.0.pow(n.toDouble()) * 2.0.pow(n.toDouble())).toInt(),
        r,
        c,
        0
    )
}

fun findOrder(n: Int, r: Int, c: Int, start: Int): Int {

    println(n)

    val array = arrayOf(
        intArrayOf(0, 1),
        intArrayOf(2, 3)
    ).map {
        it.map {
            it + start
        }
    }

    val length = (sqrt(n.toDouble()) - 1).toInt()

    val where = when {
        r in 0..length / 2 && c in 0..length / 2 -> 0
        r in 0..length / 2 && c in (length / 2) + 1..length -> 1
        r in (length / 2) + 1..length && c in 0..length / 2 -> 2
        r in (length / 2) + 1..length && c in (length / 2) + 1..length -> 3
        else -> 0
    }
    println("r : $r, c: $c where : $where, start : $start, length : $length")

    if (n == 4) {
        return array[r][c]
    } else {
        val row = if ((r - sqrt((n / 4).toDouble())).roundToInt() >= 0) {
            (r - sqrt((n / 4).toDouble())).roundToInt()
        } else {
            r
        }
        val col = if ((c - sqrt((n / 4).toDouble())).roundToInt() >= 0) {
            (c - sqrt((n / 4).toDouble())).roundToInt()
        } else {
            c
        }
        return findOrder(
            n / 4,
            row,
            col,
            n / 4 * where + start
        )
    }

}
```

* [0만들기](https://www.acmicpc.net/problem/7490)

```kotlin 

fun make0(n: Int): List<String> {
    val operators = mutableListOf<List<Char>>()
    makeOperators(emptyList(), n - 1, operators)

    val result = mutableListOf<String>()
    val numbers = Array(n) {
        it + 1
    }

    operators.forEach {
        var formula = ""
        for (i in 0 until n - 1) {
            formula += numbers[i].toString() + it[i]
        }

        formula += numbers.last()

        if (calculate(formula.replace(" ", "")) == 0) {
            result.add(formula)
        }
    }
    return result.sorted().toList()
}

fun calculate(formula: String): Int {

    val opers = formula.filter { it == '+' || it == '-' }
    val numbers = formula.split("+", "-")

    var result = numbers.first().toInt()

    opers.forEachIndexed { index, c ->
        when (c) {
            '+' -> result += numbers[index + 1].toInt()
            else -> result -= numbers[index + 1].toInt()
        }
    }
    return result
}

fun makeOperators(operator: List<Char>, size: Int, operators: MutableList<List<Char>>) {

    if (operator.size == size) {
        operators.add(operator)
        return
    } else {
        val spaceTemp = operator.toMutableList().apply {
            add(' ')
        }
        makeOperators(spaceTemp, size, operators)

        val plusTemp = operator.toMutableList().apply {
            add('+')
        }
        makeOperators(plusTemp, size, operators)

        val minusTemp = operator.toMutableList().apply {
            add('-')
        }
        makeOperators(minusTemp, size, operators)
    }
}
```

## Future Action Plans

* 고급 정렬 알고리즘 문제풀이 강의를 봅니다.
* 안드로이드 테스트에 대해서 공부합니다.

