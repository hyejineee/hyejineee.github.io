---
title: "[자료구조] 신장 트리, 최소 신장 트리"
path: blog/ds-spanning-tree
tags: [DSAndAlgorithm]
cover:  "./cover.png"
date: 2021-09-01
excerpt: 신장 트리와 최소 신장 트리
draft: false
---

## 신장 트리 (Spanning Tree) 

* 원래의 그래프의 모든 노드가 연결되어 있으면서 트리의 속성을 만족하는 그래프
* 신장 트리의 조건 
    1. 본래 그래프의 모든 노드를 포함해야 한다.
    2. 모든 노드가 서로 연결되어 있어야 한다.
    3. 트리의 속성을 만족시켜야 한다. (사이클이 존재해서는 안 된다.)
    <br><br>
    ![](./spanningTree.jpeg)

## 최소 신장 트리 (MST, Minimum Spanning Tree)

* 가능한 spanning tree 중에서 간선의 가중치의 합이 최소인 spanning tree
    <br><br>
    ![](./mst.jpeg)

* 최소 신장 트리 알고리즘 
    * 그래프에서 최소 신장 트리를 찾을 수 있는 알고리즘 
    * [크루스칼 알고리즘](https://hyejineee.github.io/blog/ds-mts-kruskal)
    * [프림 알고리즘](https://hyejineee.github.io/blog/ds-mts-prim)

