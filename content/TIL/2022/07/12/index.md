---
title: "20220712 TIL"
path: blog/TIL/2022-07-12
tags: [TIL]
cover: "./TIL.png"
date: 2022-07-12
excerpt: 2022년 7월 12일 TIL
---

## Facts.

- 프로그래머스 신규 아이디 추천, 로또의 최고 순위와 최저 순위, 신고 결과 받기 문제를 풀었습니다.
- useState의 내부 동작에 대해서 배웠습니다.
- graphql의 refetch와 refetching-queries에 대해서 배웠습니다.

## Feelings.

- 집에 가고 싶습니다. 오늘 늦게 가려고 했는데 그냥 일찍 가야겠습니다.
- useState의 내부 동작에 대해서 배웠습니다. 추가로 검색한 결과 클로저 내용이 나왔는데… 클로저에 대해서는 커링을 적용한 함수를 사용할 때 변수가 캡처된다 정도만 알고 있었는데 이번 기회에 확실하게 공부해야겠습니다.
- graphql의 refetch에 대해서 배웠습니다. 역시 이전에 쌩으로 통신한 것 보다 편리합니다. 페북 짱

## Findings.

- useState의 내부 동작
  - 리액트에서 컴포넌트는 state의 값이 바뀌게 되면 render함수를 동작시킵니다.
  - 버튼 active 실습에서 변경된 state의 값이 바로 반영되지 않아 active 타이밍이 늦는 문제가 발생했습니다. 문제의 발생 원인은 다음과 같습니다.
    - state의 값이 새로운 값이 되려면 리렌더링 되어야 하는데, js는 싱글 스레드로 돌아가기 때문에 현재 실행 중인 함수가 마무리 된 이후에 리렌터링이 진행하기 때문에 state 변경사항이 즉시 반영되지 않습니다.
  - 리액트 hook에서 클로저가 사용된다고 합니다.
  - 클로저
    - [https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures](https://developer.mozilla.org/ko/docs/Web/JavaScript/Closures)
    - 함수와 함수가 선언된 어휘적 환경(렉시컬 스코프)의 조합입니다. (롸..?)
      - 실행 컨텍스트에 대해서 빠른 시일내에 정리 해야겠습니다…
    - 자신이 사용하는 변수를 기억하고 어딘가에 저장해두는 특성입니다.
    - 참고 : [https://poiemaweb.com/js-closure](https://poiemaweb.com/js-closure)
    - 클로저가 가장 유용하게 사용되는 상황은 현재 상태를 기억하고 변경된 최신 상태를 유지할 때라고 합니다.
- graphql refetch

  - graphql에서 refetch를 하는 방법은 두 가지가 있습니다.

    1. useQuery에서 반환하는 refetch 함수 사용 ([https://www.apollographql.com/docs/react/data/queries/#refetching](https://www.apollographql.com/docs/react/data/queries/#refetching))

       ```jsx
       const { loading, error, data, refetch } = useQuery(GET_DOG_PHOTO, {
         variables: { breed },
       })
       ```

    2. useMutaion의 인자로 refetchingQueries 전달 ([https://www.apollographql.com/docs/react/data/mutations/#refetching-queries](https://www.apollographql.com/docs/react/data/mutations/#refetching-queries))

       - mutation후에 mutation이 적용된 데이터를 가져오려면 mutation의 옵션에 `refetchQueries` 배열을 포함시켜 refetch 할 수 있다.

       ```jsx
       // Refetches two queries after mutation completes
       const [addTodo, { data, loading, error }] = useMutation(ADD_TODO, {
         refetchQueries: [
           { query: GET_POST }, // DocumentNode object parsed with gql
           "GetComments", // Query name
         ],
       })
       ```

## Future Action Plans.

- 자바스크립트 실행 컨텍스트 정리하기
- 예외처리 정리하기
- git 정리하기
