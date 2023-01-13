---
title: '20220708 TIL'
path: blog/TIL/2022-07-08
tags: [TIL]
cover: './TIL.png'
date: 2022-07-08
excerpt: 2022년 7월 8일 TIL
---

## Facts.

- 프로그래머스 음양 더하기, 없는 숫자 더하기, 크레인 인형 뽑기 문제를 풀었습니다.
- 리액트 라우팅에 대해서 배웠습니다.
- import& export 포스팅 초안을 작성했습니다.

## Feelings.

- 프로그래머스 크레인 인형 뽑기 문제를 풀었습니다. 예전에 처음 문제를 풀 때 꽤 해맨것 같았는데 적당한 시간안에 풀었습니다. 쥐똥만큼 이여도 알고리즘 문제 해결 실력이 향상한 것 같아 기분이 좋습니다.
- 리액트 라우팅에 대해서 배웠습니다. 원래 이렇게 동작했던 건지 next.js 프레임워크를 사용해서 라우팅이 이렇게 된 건지 공부할 필요가 있다고 느꼈습니다.
- 후… 블로그… 하나 하나가 헤비한데… 일주일 안에 써야 할 주제가 너무 많은 것 같습니다…. Import & Export만 해도 쓸게 겁나 많은데….

## Findings.

- 라우팅

  - router 객체는 페이지 이동과 관련된 객체입니다.
    - 옆에 동기분께 router관련된 질문을 하셨는데 이렇게 대답했으면 더 좋을 것 같다는 생각이 듭니다.
  - next에서 제공하는 Router객체에 대해서 알게 되었습니다. next에서 제공하는 useRouter훅을 통해 router객체에 접근할 수 있습니다.
  - next에서 정적 라우팅은 page의 폴더 구조를 통해 이루어집니다.
  - next에서 동적 라우팅은 page의 폴더 구조에 대괄호를 사용한 폴더를 통해 이루어집니다.
    ```jsx
    boards / [id]
    ```
  - 동적 라우팅을 통해 url에 전달된 데이터는 router객체의 query를 통해 얻을 수 있습니다.
  - 테스트한 결과 url 뒤에 ?를 사용해서 쿼리한 데이터도 query에 들어가는 것을 알게 되었습니다.
  - 추가 학습

    - push와 replace의 차이
      - push는 말 그대로 새로운 url을 스택에 푸시합니다.
      - replace는 url스택에 맨 위에 있는 값을 말 그대로 replace합니다.
    - pathName과 asPath의 차이
      - 참고 : [https://nextjs.org/docs/api-reference/next/router](https://nextjs.org/docs/api-reference/next/router)
      - pathName은 쿼리를 제외한 현재 페이지의 url를 나타낸다.
      - asPath는 쿼리를 포함한 현제 페이지의 url을 나타낸다.
    - 리액트 라우터와 next 라우터 차이

      - 참고 : [https://velog.io/@moony_moon/React-Next-Router-vs-React-Router](https://velog.io/@moony_moon/React-Next-Router-vs-React-Router)
      - 리액트와 next의 차이가 가장 크게 나타나는 부분이 router라고 한다.
      - next에서 라우트 방식이 리액트보다 상대적으로 쉽다고 한다.
      - 리액트에서는 Router 컴포넌트를 사용하여 어떤 경로가 있는지 일일히 등록해줘야 한다. (아마도..?

        ```jsx
        //react routing
        import {BrowseRouter as Router, Switch, Route} from 'react-router-dom'

        export default function App(){
        <Router> //일단 라우팅 되는 부분을 감싸준다
              <Switch> //Switch는 안에있는 여러가지 Router중에서 조건에 만족하는 첫번째 Router를 불러온다.
              	<Route exact path = "/taewoongmoon"/ >
              	<Route exact path = "/" /> // 이렇게 / 하나만 쓰면 index.js 메인페이지를 불러온다.
                <Route exact path = "/iwanttogohome" />
              	<Route exact path = "" />

              </Switch>
        </Router>
        ```

      - next에서는 폴더 구조에 따라 경로를 router.push(경로)해주면 된다.

- useQuery
  - 공식 문서 : [https://www.apollographql.com/docs/react/data/queries](https://www.apollographql.com/docs/react/data/queries)
  - graphql의 query를 사용하기 위해 apollo client에서 제공하는 리액트 훅
  - 리액트 컴포넌트가 mount, render될 때 apollo client가 자동으로 실행한다.
    - 컴포넌트가 렌더링되면 useQuery는 UI를 렌더링하는 데 사용할 수 있는 loading, error, data 속성이 포함된 객체를 리턴한다.
    - loading false는 error가 아니다.
    - 자동 실행하는 useQuery말고 특정 시점에 실행하는 useQuery를 사용하고 싶으면 useLazyQuery를 사용해라. → useMutation처럼 실행할 수 있는 쿼리 함수를 반환한다.
  - useQuery가 컴포넌트 레더링시 자동으로 실행되기 때문에 컴포넌트 렌더링이 끝났음에도 불구하고 아직 쿼리 데이터가 도착하지 않을 수 있다. → graphql 공식 문서에는 isLoading 사용을 권장하고 있다. 또는 useLazyQuery를 사용할 것.

## Future Action Plans.

- 주말은 끝내주게 쉬기
