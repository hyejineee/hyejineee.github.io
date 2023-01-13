---
title: '[알고리즘] 플로이드-워셜 알고리즘'
path: blog/floyd-warshall
tags: [DSAndAlgorithm]
cover: './cover.png'
date: 2022-01-28
excerpt: 모든 지점에서 다른 모든 지점까지의 최단 경로 구하기
draft: false
---

## 플로이드 워셜 알고리즘

모든 지점에서 다른 모든 지점까지의 최단 경로를 모두 구하는 알고리즘.

### 다익스트라 , 플로이드 워셜 알고리즘 비교

- 다익스트라와 마찬가지로 단계별로 거쳐가는 노드를 기준으로 알고리즘 수행
  - but, 매 단계마다 방문하지 않는 노드 중에 최단 거리를 갖는 노드를 찾는 과정이 불필요합니다.
- 다익스트라는 1차원 배열에 최단거리를 저장하지만, 플로이드-워셜은 2차원 배열에 최단거리를 저장합니다.
- 다익스트라는 그리디 알고리즘에 속하지만, 플로이드는 DP알고리즘에 속합니다.
  - 플로이드는 3중 반복문을 돌면서 점화식에 맞춰 2차원 배열을 업데이트 합니다.
- 다익스트라와 다르게 음의 수를 갖는 간선도 사용할 수 있습니다.

### 알고리즘 수행

- 각 단계마다 특정한 노드 k를 거쳐가는 경우를 확인
  - a -> b로 가는 최단거리보다, a -> b -> k로 가는 최단거리가 더 짧은지 검사.

1. 2차원 배열 초기화
   - 각 노드의 인접 노드에 대한 간선 비용을 기록합니다.
   - 연결되어 있지 않은 경우 INF값으로 초기화합니다.
2. 3중 반복문을 사용하여 n번째 노드를 거쳐가는 경우 최단거리를 구합니다.

### 코드

```kotlin
    fun floyd(){

        val inf = 10000000
        val nodeCount = 5
        val graph = arrayOf(
            intArrayOf(3,4,7),
            intArrayOf(3,2,2),
            intArrayOf(2,1,5),
            intArrayOf(1,4,9),
            intArrayOf(4,5,2),
            intArrayOf(1,5,1)
        )


        val distances = Array(5+1){ i->
            IntArray(5+1){ j ->
                if(i==j) 0 else inf
            }
        }

        graph.forEach {
            val (a, b, cost) = it
            distances[a][b] = cost
            distances[b][a] = cost
        }

        for (k in 1..nodeCount){
            for(i in 1..nodeCount){
                for (j in 1..nodeCount){
                    distances[i][j] = min(distances[i][j],  distances[i][k] + distances[k][j])
                }
            }
        }
    }

```

### Ref.

- [이것이 코딩테스트다 - 31강 플로이드 워셜]https://www.youtube.com/watch?v=hw-SvAR3Zqg
- https://chanhuiseok.github.io/posts/algo-50/
