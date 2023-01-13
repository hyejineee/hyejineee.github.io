---
title: '20220706 TIL'
path: blog/TIL/2022-07-06
tags: [TIL]
cover: './TIL.png'
date: 2022-07-06
excerpt: 2022년 7월 6일 TIL
---

## Facts.

- 프로그래머스 체육복, 모의고사, k번째 수 문제를 풀었습니다.
- http 통신 형태 - rest, grapql에 대해서 배웠습니다.
- jsx를 복습했습니다.
- 과제 제출 완료

## Feelings.

- 과제를 빨리 끝내서 기분이가 좋습니다.
- jsx강의를 다시 봤습니다. 이전에 봤을 때 그냥 넘겼던 것 같은데… 아주 중요하고 좋은 내용이었습니다. 역시 굿
- 새로운 graphql에 대해 알게 되었습니다. 사이드 프로젝트때 백엔드로 써먹으면 좋을 것 같습니다.

## Findings.

- axios를 사용해서 rest api 통신하는 방법과 graphql로 통신하는 방법을 배웠습니다.
  - REST(Representation State Transfer)
    - 주로 사용하는 api형태입니다. 로이 필딩의 논문에서 웹의 장점을 최대한 활용할 수 있는 아키텍처로서 소개되었습니다. ([참고](https://meetup.toast.com/posts/92))
    - url 주소와 같은 형태를 갖고 있습니다. uri를 사용하여 자원을 명시하고 HTTP 메소드를 통해서 자원에 대한 CRUD를 적용합니다. ([참고](https://khj93.tistory.com/entry/%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC-REST-API%EB%9E%80-REST-RESTful%EC%9D%B4%EB%9E%80))
    - 백엔드 개발자가 개발하것에 따라 다르지만 보통 관련된 데이터를 한 번에 보냅니다. (게시글의 제목, 내용, 작성자, 생성일 등등)
    - 필요한 데이터만 가져오기 위해서는 백엔드 개발자에게 따로 API개발을 요청해야 합니다.
  - GraphQL
    - 페이스북이 필요에 의해 만들었습니다.
    - 일반적으로 함수와 같은 형태입니다.
    - API를 위한 쿼리 언어로 클라이언트에게 요청한 만큼의 데이터를 제공하는 데 우선순위를 둡니다. ([참고](https://www.redhat.com/ko/topics/api/what-is-graphql))
    - 백엔드 개발자에게 요청할 필요없이 클라이언트 개발자가 임의로 가져오고 싶은 데이터를 선택해서 가져올 수 있습니다.
    - query(조회), mutation(명령)을 통해서 자원에 대한 CRUD를 적용합니다.
- 블로그 포스팅을 위해 코드숨 강의를 다시 수강했습니다. 자바스크립트로 createElement를 만드는 과정을 통해서 jsx가 어떻게 동작하는지 알게 되었습니다.

## Future Action Plans.

- 리액트 포스팅….
- graphql 서버 구성하는 방법 공부
