---
title: '20220727 TIL'
path: blog/TIL/2022-07-27
tags: [TIL]
cover: './TIL.png'
date: 2022-07-27
excerpt: 2022년 7월 27일 TIL
---

## Facts.

- 프로그래머스 거리두기 확인하기 문제 풀이 완료
- CORS에 대해서 배웠습니다.
- apollo-server를 사용하여 API를 만드는 실습과 firebase 실습을 했습니다.
- 밀린 TIL을 다 썼습니다.
- 은행 및 약국에 볼일이 있었는데 점심시간에 다 해결했습니다.

## Feelings.

- 할 일이 왜 이렇게 밀리는 건지… 이번주에는 토욜에도 나와서 부지런히 일을 쳐내야겠습니다.
- 점심시간에 약국에 가서 알보칠 샀습니다… 어제보다 더 커져서 엄청 아픕니다ㅠㅠ 집에 가면 면봉으로 제대로 지져서 없애버릴 겁니다.
- 수업시간에 정신이 혼미해서 잘 못 듣는 바람에 과제하는데 시간이 좀 걸렸습니다. 진짜 12시간동안 잠만 잤으면 좋겠습니다.
- 아침에 프로그래머스 거리두기 확인하기 문제 6,9,31테케까지 통과했습니다!!!! pop()을 사용해서 탐색하고 있었는데 pop()을 shift()로 바꾸니 통과되었습니다. bfs, dfs의 차이를 제대로 모르고 있었던 것 같습니다. 문제 풀이 포스팅하면서 그 차이를 제대로 정리해야겠습니다.
- 오랜만에 백엔드 작업하니 재미있네요ㅎ 항상 깔짝 거렸는데 이번에도 깔짝ㅎ

## Findings.

- CORS (Cross-Origin Resource Sharing, 교차 출처 리소스 공유)
  - [https://developer.mozilla.org/ko/docs/Web/HTTP/CORS](https://developer.mozilla.org/ko/docs/Web/HTTP/CORS)
    ![](./whoRead.png)
  - HTTP 헤더를 사용하여, 한 출처(도메인?)에서 실행 중인 웹 애플리케이션이 다른 출처의 자원에 접근할 수 있는 권한을 부여하도록 브라우저에 알려주는 체제입니다.
  - 웹 애플리케이션은 자신의 도메인과 동일한 리소스만 불러올 수 있으며, 다른 도메인의 리소스를 불러오려면 그 도메인에서 올바른 CORS 헤더를 포함한 응답을 반환해야 합니다.
  - 출처를 도메인으로 이해했는데 이렇게 이해해도 되는지 모르겠습니다.
    ![](./cors.png)
  - 보안상의 이유로 브라우저는 스크립트에서 시작한 교차 출처 HTTP요청을 제한합니다. 기본 값은 허용안함으로 되어있습니다.
  - CORS는 브라우저 한정 옵션입니다. 앱, 백엔드에서 리소스 요청 시 CORS 옵션이 강제되지 않습니다.
  - CORS를 우회하기 위해서는 백엔드로 요청하여 크로스 도메인의 리소스 접근해야 합니다.
- graphql apollo-server
  - typeDef : playground의 docs 같은 것. api의 인자 타입과 리턴 타입을 지정
    - type 키워드 : 리턴타입을 만들때 사용하는 키워드
    - input 키워드 : 매개변수의 타입을 만들때 사용하는 키워드 → 여러가지 매개변수를 묶어서 받을 때 사용!
    - type Query : query api에 대한 매개변수 타입, 반환타입 지정
    - type Mutation : mutation api에 대한 매개변수 타입, 반환타입 지정
  - resolvers : 실제 api가 처리해야 하는 작업을 수행하는 곳. Query와 Mutation이 있습니다.
  ```jsx
  // DOCS
  const typeDefs = gql`
    # 리턴 타입을 만들 때 type 사용. 매개변수의 타입을 만들 때 input사용
    # input CreateBoardInput - input할 때 데이터 타입
    # type CreateBoardInput {}
    # input CreateBoardInput {}

    input CreateBoardInput {
      writer: String
      title: String
      contents: String
    }

    type Board {
      number: Int
      writer: String
      title: String
      contents: String
    }

    type Query {
      fetchBoards: [Board]
    }

    type Mutation {
      createBoard(createBoardInput: CreateBoardInput): String
    }
  `

  // API
  const resolvers = {
    Query: {
      fetchBoards: async () => {
        const result = await Board.find()
        return result
      },
    },
    Mutation: {
      // 기본적으로 4개의 인자를 받음
      // parent - 상위 요청 가능?? 백엔드 api에서 백엔드를 호출할 때 받는 인자.
      // args - 요청인자. 브라우저에서 백엔드api를 호출할 때 받는 인자.
      // context - 헤더 정보
      // info - api 간략한 정보

      createBoard: async (parent: any, args: any, context: any, info: any) => {
        await Board.insert({ ...args.createBoardInput })

        // insert, create, update, delete
        // 첫번째 인자 - 조건, 두번째 인자 - 변경내용
        Board.update({ number: 3 }, { writer: '영희' })

        return '게시물 등록에 성공했습니다!'
      },
    },
  }

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    // cors : ['naver.com'] -> 배열에 허용할 도메인을 설정
    cors: true, //CORS 허용
  })
  ```

## Future Action Plans.

- 프로그래머스 문제풀이 포스팅
