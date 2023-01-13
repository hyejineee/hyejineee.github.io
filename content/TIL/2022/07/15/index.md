---
title: '20220715 TIL'
path: blog/TIL/2022-07-15
tags: [TIL]
cover: './TIL.png'
date: 2022-07-15
excerpt: 2022년 7월 15일 TIL
---

## Facts.

- 프로그래머스 124 나라의 숫자, 기능 개발 문제를 풀었습니다.
- 본격적으로 타입스크립트를 기존의 js로된 프로젝트에 적용하는 실습을 진행했습니다. 컴포넌트의 props의 타입을 지정하는 방법과 graphql과 타입스크립트를 같이 사용하는 방법을 학습했습니다.
- 게시판 포폴 타입스크립트 변환을 완료했습니다.
- 게시판 포폴 댓글 추가, 조회 기능을 구현했습니다. → api통신만

## Feelings.

- 불금이라 다들 일찍 가네요. 나도…! 가고 싶지만 그래도 8시까지는 있을 겁니다.
- 수업을 시작한 이후로 제일 어려웠던 수업인 것 같습니다. 그래도 잘 소화했습니다. 굿
- 타입스크립트에 대해서 많은 것을 배울 수 있었습니다. 특히 유틸리티 타입 신세계👏🏻👏🏻👏🏻👏🏻
- 이전에 작업했던 컴포넌트들의 props타입을 만들고 적용하려니 귀찮습니다. 컴포넌트를 너무 많이 쪼개놨나 싶습니다. 그래도 다 변환하고 적용했습니다. 굿
- 다시 타입스크립트를 적용하면서 이전에 작업한 내역을 보니 컴포넌트를 어디까지 쪼개야 할지 항상 의문입니다.
- 오늘은 점심으로 국밥 먹었습니다. 간만에 든든한거 먹어서 좋습니다.굿
- 삭제 기능도 구현할까 싶은데 귀찮아서 TIL쓰고 집에 갈겁니다. 집에 갈 생각하니 기분이 좋습니다.
- 항상 맞은 편 유리 너머로 보이는 산이 무슨 산인지 궁금합니다. 느낌상 북한산인데 강 건너 산이 저렇게 잘 보이나 싶습니다.

## Findings.

- 타입스크립트와 리액트
  - 어제에 타입스크립트 기본 설정에 이어서 오늘 본격적으로 리액트에 타입스크립트를 적용했습니다.
  - 우리가 만드는 컴포넌트도 함수이기 때문에 매개 변수로 받는 props의 타입을 지정해줘야 합니다.
  - interface 키워드를 사용하여 타입을 만듭니다.
    ```jsx
    export interface IBoardWriteUIProps {
      handleChange: (
        label: string
      ) => (event: ChangeEvent<HTMLInputElement>) => void;
      handleClick: () => void;
      isActive: boolean;
      isEdit: boolean;
      defaultValue?: Pick<IQuery, 'fetchBoard'>;
    }
    ```
  - 프로퍼티에 ?을 붙여서 nullable하게 만들 수 있습니다.
    ```jsx
    interface IBoardWriteProps {
      isEdit: boolean; // 반드시 필요한 프로퍼티. NotNull
      data?: any; //있어도 되고 없어도 되는 프로퍼티. Nullable
    }
    ```
  - 타입스크립트에서 사실상 동적으로 객체에 프로퍼티를 추가하는 것은 불가능한 것 같습니다. 항상 타입을 정해주어야 합니다.
  - 함수 프로퍼티의 타입
    ```jsx
    handleChange: (
        label: string
      ) => (event: ChangeEvent<HTMLInputElement>) => void;
    ```
    - 리턴 값이 없으면 void, 있으면 해당 값의 타입을 입력합니다.
    - 이벤트 핸들러 함수의 경우 event 객체를 매개 변수로 사용하는데 이 event에도 타입을 지정해줘야 합니다. 각 타입은 리액트에서 제공합니다.([https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/#list-of-event-types](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forms_and_events/#list-of-event-types))
      ```jsx
      // handleChange 함수의 타입
      // 제네릭 부분에 change 이벤트가 발생하는 html태그를 입력
      (label: string) => (event: ChangeEvent<HTMLInputElement>) => void
      ```
      - 포폴 과제를 하는 중에 버튼 태그 객체를 사용해서 id값을 가져오려고 하는데 타입 에러가 났습니다. 검색해보니 다음과 같은 문제가 있었고 다음을 참고해 해결했습니다.
        - [https://velog.io/@e_juhee/TypeScript-EventType](https://velog.io/@e_juhee/TypeScript-EventType)
        - [https://stackoverflow.com/questions/28900077/why-is-event-target-not-element-in-typescript](https://stackoverflow.com/questions/28900077/why-is-event-target-not-element-in-typescript)
        - [https://nuhends.tistory.com/115](https://nuhends.tistory.com/115)
        - 이 문제는 event의 target이 HTMLInputElement를 확장하지 않아서 발생한 문제라고 합니다.
- 타입스크립트와 graphql

  - graphql-codegen을 사용하여 API통신시 사용하는 데이터의 타입을 자동으로 생성했습니다.
  - graphql-codegen을 사용하기 위해 cli와 우리는 타입스크립트에서 사용하기 때문에 @graphql-codegen/typescript를 설치해줍니다.
  - 모듈을 설치하고 codegen.yml 파일에 설정값을 입력합니다. 설정값은 다음과 같습니다.
    ```jsx
    schema: http://example.codebootcamp.co.kr/graphql
    generates:
      ./src/commons/types/generated/types.ts:
        plugins:
          - typescript
        config:
          typesPrefix: I
    ```
    - schema → 서버로 가서 서버에 있는 api?에 대한 타입을 모두 자동으로 만들어줌.
    - generates → 옵션 설정
      - generate된 타입들이 위치하는 파일의 경로
      - plugins
        - generated된 파일에서 사용되는 플러그인의 리스트
      - config
        - generate 할 때 옵션 → 예 :) prefix지정
  - 타입스크립트 유틸리티 타입

    - 기존에 정의된 타입에서 특정 프로퍼티만 뽑아서 또는 제외하고 새로운 타입을 만들 수 있다고 합니다.

      ```jsx
      interface IProfile {
        name: string;
        age: number;
        school: string;
        hobby?: string;
      }

      // Pick 타입 -> 프로퍼티 선택
      type IProfile2 = Pick<IProfile, 'name' | 'age'>

      // Omit 타입 -> 프로퍼티 제외
      type IProfile3 = Omit<IProfile, 'school'>

      // Partial 타입 -> 모든 프로퍼티를 Nullable
      type IProfile4 = Partial<IProfile>

      // Required 타입 -> 모든 프로퍼티를 notNull
      type IProfile5 = Required<IProfile>

      // Record타입 ??
      type zzz = 'aaa' | 'bbb' | 'ccc' //union 타입
      let apple: zzz
      apple = 'aaa'

      type IProfile6 = Record<zzz, IProfile> //키-벨류 쌍을 만들어 줄 때 사용.
      ```

    - type 과 interface의 차이

      - 선언병합 여부에 차이가 있다고 합니다.
      - interface는 선언병합이 가능하고, type은 선언 병합이 안된다고 합니다.

      ```jsx
      // 선언병합 예
      interface IProfile {
          name: string;
          age: number;
          school: string;
          hobby?: string;
        }

      interface IProfile{
      	candy : number
      }

      let profile : IProfile

      profile.[candy, age, number 다 가능]
      ```

    - useQuery와 useMutation에 제네릭을 사용해서 타입을 선언해 줄 수 있습니다.

      ```jsx
      useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>

      const [createBoard] = useMutation<
          Pick<IMutation, "createBoard">,
          IMutationCreateBoardArgs
        >(CREATE_BOARD);
      ```

## Future Action Plans.

- 주말은 놀기
- 과제 좀 하다 놀기
