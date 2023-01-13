---
title: '20220711 TIL'
path: blog/TIL/2022-07-11
tags: [TIL]
cover: './TIL.png'
date: 2022-07-11
excerpt: 2022년 7월 11일 TIL
---

## Facts.

- 프로그래머스 키패드 누르기, 숫자 문자열과 영단어 문제를 풀었습니다.
- container & presenter 패턴과 props에 대해서 배웠습니다.
- import & export 포스팅을 완료했습니다.
- 오늘자 과제 제출 완료!

## Feelings.

- 2주차 입니다. 새벽에 잠을 못자서 피곤합니다. 그래도 커피로 잘 버텼습니다.
- 새로운 pair분을 만났습니다. 첫 만남은 항상 어색합니다. 😽  파워 I는 힘듭니다.
- 그래도 질문한 내용에 대해 열심히 답변했습니다. 제 답변으로 얻는 것이 있으셔서 뿌듯합니다.
- import & export 포스팅을 완료했습니다. 포스팅 하면서 자바스크립트의 모듈 시스템에 대해서 자세히 알게 되어서 좋았습니다. 특히 웹브라우저에서 사용되는 일반 자바스크립트를 모듈로 사용하는 방법을 알게 된 것이 가장 큰 수확인 것 같습니다.
- 8시가 다 되어 가는데 빨리 집에 가고 싶습니다.

## Findings.

- container & presenter 패턴
  - 프로젝트 폴더 구조를 어떻게 구성할지에 관한 패턴입니다.
  - 기능을 담당하는 부분(container)와 화면을 담당하는 부분(presenter)로 소스코드를 나누어 관리합니다.
    → 관심사가 비슷한 코드끼리 나누어 관리하도록 합니다.
    → 가독성 및 유지 보수성이 향상됩니다.
- props
  - 부모 컴포넌트가 자식 컴포넌트에 전달하는 데이터입니다.
  - 개발자가 만든 컴포넌트에 속성 방식으로 props를 넘겨줍니다.
  - 넘겨진 props는 객체 형태로 자식 컴포넌트로 전달됩니다.
    ```jsx
    <MyComponent prop1={value1} prop2={value2} />
    ```
- 자바스크립트 문법
  - replace시 하나의 값만 repalce됩니다. 전체를 replace하고 싶으면 replaceAll()를 사용하거나 정규식을 사용해야 합니다.
  - 자바스크립트 정규식 클래스(RegExp) 사용시 두번째 인자로 태그값을 받습니다. (g 같은거 )
  - 정규식 참고 : [https://curryyou.tistory.com/234](https://curryyou.tistory.com/234)
  - optional-chaning
    - 코틀린의 safe call 연산자와 비슷한 기능을 합니다.
  - 조건부 렌더링, nullish-coalescing
    - 1 || 2 → 1이 참이면 1을 보여주고, 거짓이면 2를 보여줍니다. 기본 값을 보여줄 때 주로 사용합니다.
    - 1 && 2 → 1이 참이면 2를 보여줍니다.
    - 1 ?? 2 → 1이 nullish(null, undefined)면 2를 보여줍니다.

## Future Action Plans.

- 운동
