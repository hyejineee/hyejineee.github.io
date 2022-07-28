---
title: "20220728 TIL"
path: blog/TIL/2022-07-28
tags: [TIL]
cover: "./TIL.png"
date: 2022-07-28
excerpt: 2022년 7월 28일 TIL
---

## Facts.

- 프로그래머스 메뉴 리뉴얼 문제풀이 포스팅을 업로드했습니다.
- 리액트에서 apollo-upload-client를 사용하여 서버로 이미지를 업로드하는 방법을 배웠습니다.

## Feelings.

- 구내염이 점점 확장하고 있는 느낌입니다.. 왜 커지는 거야…ㅠ
- 점점 수업시간에 배운 내용을 기억하는 양이 적어지고 있는 느낌입니다. 이번주에 수업시간에 많이 졸아서 그러는 것 같습니다. 많이 잠 자고 싶습니다. 이번주 토욜에 학원에 나와서 작업하려고 했는데 그냥 집에서 편하게 해야겠습니다.
- 배운 내용들을 적용하는 것이 점점 복잡해지고 있는 것 같습니다. 오늘은 내일 시험을 대비해서 그동안 했던 내용들을 한 번 훑어보고 정리하는 시간을 가져야겠습니다.

## Findings.

- input 속성
    - input 태그의 type이 file 일 때 multiple 속성을 사용할 수 있습니다. multiple 속성은 다중 파일 업로드를 가능하게 합니다.
    - accept 속성을 통해서 받을 파일의 포맷을 제한할 수 있습니다.
- apollo-upload-client
    - apollo-client는 기본적으로 텍스트에 대해서만 동작한다고 합니다. 파일을 업로드 하기 위해서는 파일 업로드를 위한 모듈을 추가해 주어야 합니다.
    - 또한 upload 모듈을 사용하기 위해서 기존에 있던 apollo-client설정을 변경해야 합니다.
        
        ```jsx
        yarn add apollo-upload-client 
        yarn add -D @types/apollo-upload-client
        
        import { createUploadLink } from "apollo-upload-client";
        
        const uploadLink = createUploadLink({
            uri: "http://backend08.codebootcamp.co.kr/graphql",
          });
        
        const client = new ApolloClient({
          link: ApolloLink.from([uploadLink]),
          cache: new InMemoryCache(),
        });
        ```
        
- useRef
    - [https://ko.reactjs.org/docs/hooks-reference.html#useref](https://ko.reactjs.org/docs/hooks-reference.html#useref)
    - [https://ko.reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables](https://ko.reactjs.org/docs/hooks-faq.html#is-there-something-like-instance-variables)
    - [https://react.vlpt.us/basic/10-useRef.html](https://react.vlpt.us/basic/10-useRef.html)
    - 컴포넌트에서 특정 HTML요소를 선택하는 상황에서 주로 사용되는 훅입니다.
        - 특정 HTML요소를 선택해서 하는 일은 다음과 같습니다.
        - 특정 엘리먼트의 크기를 가져오기, 스크롤바 위치를 가져오기, 포커스를 설정하기 등등
    - useRef를 사용하여 Ref객체를 만들고, 컨트롤하고자 하는 요소의 ref속성에 useRef를 사용해 만든 값을 설정해줍니다.
        
        ```jsx
        const fileRef = useRef<HTMLInputElement>(null)
        
        return (
        	<>
        			<input ref={fileRef} type='file' />
        	</>
        )
        
        fileRef.current -> input 요소를 가져옴
        ```
        
    - 만드 Ref객체의 current를 사용해서 우리가 원하는 요소를 가져와 사용할 수 있습니다.
    - useRef는 매번 렌더링을 할 때 동일한 ref객체를 제공합니다. → 리렌더링 되어도 변하지 않는 값을 useRef를 사용해서 관리할 수 있을 것 같습니다.
    - 리액트 공식 문서를 보니 useRef()를 사용하여 클래스에서 프로퍼티를 사용하는 것 처럼 사용할 수 있다고 합니다.

## Future Action Plans.

- 집에가서 운동!
- 내일 시험 준비