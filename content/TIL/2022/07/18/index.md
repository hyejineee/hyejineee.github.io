---
title: '20220718 TIL'
path: blog/TIL/2022-07-18
tags: [TIL]
cover: './TIL.png'
date: 2022-07-18
excerpt: 2022년 7월 18일 TIL
---

## Facts.

- 프로그래머스 타겟넘버, 짝지어 제거하기 문제를 풀었습니다.
- 이벤트 버블링, target과 currentTarget의 차이에 대해서 배웠습니다.
- typeOf 와 instanceOf의 쓰임새에 대해 정리하게 되었습니다.
- 포트폴리오 댓글 삭제하기, 추가하기 기능을 완성했습니다.
- 과제 제출 완료

## Feelings.

- 점심에 마라탕 먹었습니다. 존맛.
- 금요일에 대충 찾아서 해결했던 에러에 대해서 자세히 알게 되었습니다. 굿
- 브라우저의 이벤트 감지 방식에 대해서 알게 되었습니다. 굿
- 타겟 넘버 문제를 풀면서 BFS, DFS를 복습했습니다. 이전에 자료구조와 알고리즘 공부한 코드를 봤는데 어케 기본 뼈대를 외웠는지… 다시 연습해서 해당 유형의 문제를 잘 풀수 있도록 해야겠습니다.
- ant 디자인 라이브러리에 대해서 알게 되었습니다. 굿

## Findings.

- typeOf와 instanceOf
  - typeOf는 피연산자의 타입을 나타내는 문자열을 반환합니다. 반환되는 값은 [MDN참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/typeof#%EC%84%A4%EB%AA%85)
  - instanceOf는 생성자의 `prototype` 속성이 객체의 프로토타입 체인 어딘가 존재하는지 판별합니다…
    - 에… 어렵습니다.. 나중에 프로토타입 공부할 때 자세히 봐야겠습니다. 일단 패스
- 이벤트 버블링 & 캡처링
  - [https://ko.javascript.info/bubbling-and-capturing](https://ko.javascript.info/bubbling-and-capturing)
  - [https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/](https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/)
  - 이벤트 버블링과 캡처링은 브라우저가 이벤트를 감지하는 방식입니다.
  - 이벤트 버블링은 중첩된 요소 중 안쪽에 있는 요소에서 이벤트가 발생하면 해당 요소의 부모 요소까지 이벤트가 전파되어 부모 요소의 이벤트 핸들러가 동작하게 되는 것입니다.
    - 브라우저는 이벤트가 발생했을 때 그 이벤트를 최상위 요소까지 전파시킵니다. 주로 document객체를 만날 때까지 전달되지만 몇몇 이벤트는 window객체까지 도달합니다.
    - 이 때 이벤트가 처음 발생한 가장 안쪽의 요소를 가리키는 것은 event.target입니다. 이벤트가 시작된 타깃 요소를 가리킵니다.
    - 이벤트가 전파되어 현재 핸들러가 실행중인 요소를 가리키는 것은 event.currentTarget입니다.
  - 이벤트 캡처링은 버블링과 반대되는 동작을 합니다. 버블링위 상위 요소로 이벤트를 전파하는 것이라며 캡처링은 하위 요소로 이벤트를 전파하는 것 입니다.
    - 캡처링을 관찰하기 위해서는 addEventListener() API에서 capture : true옵션을 설정해야 합니다.
  - 이벤트 위임
    - 이벤트 버블링과 캡처링은 이벤트 위임 패턴에서 사용됩니다.
    - 이벤트 위임은 하위 요소에 각각 이벤트를 붙이지 않고 상위요소에서 하위요소의 이벤트를 제어하는 방식입니다.
    - 이벤트 리스너를 다는 작업이 번거로울 때 번거로움을 해결하기 위해 이벤트 위임 패턴을 사용합니다.
    - 나중에 이벤트 위임 패턴을 사용하는 예시를 바닐라 자바스크립트로 연습해봐야 겠습니다.
    - 주로 다음과 같은 과정으로 사용됩니다.
      1. 컨테이너에 하나의 핸들러 할당
      2. 핸들러의 event.target을 사용해 이벤트가 발생한 요소의 위치 알아내기
      3. 원하는 요소에서 이벤트가 발생했다고 확인 → 이벤트 핸들링

## Future Action Plans.

- 이번 주는 과제와 블로그 포스팅 개수가 없는 만큼 밀린 작업들 처리하기
  - 포폴 디자인
  - 블로그 포스팅
