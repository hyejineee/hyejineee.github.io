---
title: '잘 못 커밋 된 파일 지우기'
path: blog/git-delete-commited-file
tags: [Git]
cover: './cover.png'
date: 2021-09-07
excerpt: 잘 못 커밋 된 파일 지우기
draft: false
---

알고리즘 문제를 풀고 커밋을 했는데 이상한 파일이 같이 커밋 되어 버렸다.
원래는 파일별로 분리하여 커밋 해야 하지만 알고리즘 문제풀이 같은 경우 항상 문제 푼 다음 바로 커밋 해서 특별히 파일을 나누어서 커밋 하지 않는다.
습관처럼 커밋하고 origin에 푸시 하려고 보니 다음과 같은 에러가 떴다.

```git
remote : error: GH001: Large files detected.
```

자세히 보니 이전에 커밋 했던 것들도 origin에 푸시가 안 되어있었다.
혼자 코딩 테스트 연습하는 repo라 무신경하게 git을 사용했더니 이런 사태가 발생했다.
용량이 큰 파일이 생겼었는데 모르고 커밋 해서 문제가 발생하게 되었다.

원인이 되는 파일을 찾고 다음과 같은 절차로 문제를 해결했다.

1. 문제가 되는 파일 삭제
2. git rm --cached [문제가 된 파일]
3. git commit --amend CHEAD
4. git push

이렇게 하니 다시 정상적으로 origin에 푸시를 할 수 있었다.

### Ref.

- https://docs.github.com/en/github/managing-large-files/working-with-large-files/removing-files-from-a-repositorys-history
