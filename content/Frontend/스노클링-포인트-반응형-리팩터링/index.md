---
title: '미디어 쿼리 ctrl +c,v 없애기'
path: blog/frontend/util-function-for-responsive-css
tags: [Frontend]
cover: './cover.png'
date: 2023-03-04
excerpt: css composition을 사용해서 재사용할 수 있는 미디어 쿼리 스타일을 만들자.
---


드디어 미루고 미뤘던 반응형 메서드 관련 포스팅을 쓰네요. 사실 우선순위가 낮은 태스크라 미뤄두고 있었는데 이제는 청산하려고 합니다.
또 최근에 반응형 관련해서 변경 사항이 있었기 때문에 그 상황을 생각해 보면서 글을 써보려고 합니다. 

## 문제

댕더 팀프로젝트에서는 반응형을 구현한 경험이 없어서 새로운 팀프로젝트에서는 반응형을 공부할겸 구현하기로 결정했습니다. 
현업에서 1년동안 일했던 동기의 도움을 받아 반응형을 구현하는 방법에 대해서 배우게 되었습니다. 다음 코드는 반응형을 지원하기 위해 사용해왔던 미디어 쿼리 부분입니다. 

```ts

export const NormalSelect = styled(Select)`
    @media (min-width: ${B.BigTablet}px) and (max-width: ${B.NoteBook - 1}px) {
      height: 1rem !important;
      font-size: ${B.NoteBookFontSizeMicro}rem!important;
      line-height: 1rem !important;
    }
    @media (min-width: ${B.SmallTablet}px) and (max-width: ${B.BigTablet - 1}px) {
      height: 1.2rem !important;
      font-size: ${B.BigTabletFontSizeMicro}rem!important;
      line-height: 1.2rem !important;
    }
    @media (min-width: ${B.Mobile}px) and (max-width: ${B.SmallTablet - 1}px) {
      height: 1.5rem !important;
      font-size: ${B.SmallTabletFontSizeMicro}rem!important;
      line-height: 1.5rem !important;
    }
    @media (max-width: ${B.Mobile - 1}px) {
      height: 2rem !important;
      font-size: ${B.MobileFontSizeMicro}rem!important;
      line-height: 2rem !important;
    }
  }
`;

```

에... 이런 코드를 다른 반응형이 필요한 스타일에 복사, 붙여넣기를 통해서 가져오고 변경이 필요한 부분만 조금씩 수정해가며 사용하고 있었습니다. 한 번에 뭉쳐있는 코드 조각을 복사해오고 필요 없는 미디어 쿼리 부분은 지워가면 작업을 했습니다. 도대체 이게 뭐 하는 짓이지... 

조금 사용해보니 재사용할 수 있는 css 스타일 조각을 만드는 것이 절실하게 필요했습니다. 

* 복사를 하기 위해 미디어 쿼리 부분이 있는 파일을 찾아 다녀야 했습니다. 
* 만약 여기서 브레이크 포인트가 변경된다면 그거슨 재앙...

> 이건 끔찍한 발상이다. 복사해서 붙여 넣은 중복코드는 유지보수를 어렵게 하고 버그를 만들어 낸다.   
> - 루비로 배우는 객체지향 디자인 26p

변경점 투성이인 코드가 프로젝트 여기저기에 뿌려지는 것을 막아야 했습니다.

실제로 이 코드를 리팩터링하고 반응형 분기를 3개로 축소하고 브레이크 포인트를 변경 하자는 결정사항이 생겼습니다. 만약 미디어 쿼리 부분을 메서드로 만들지 않고 복붙한 미디어 쿼리가 여기저기 사용되고 있었다면..... 생각만 해도 아찔합니다. 



<p align="center"> 
<img src="./1.jpeg">
</p>


## 해결

먼저, 어떤 것이 정확하게 어떤 역할을 하는 함수가 필요한지 생각했습니다. input으로 정의한 스타일을 넘겨주면 미디어 쿼리 + 정의한 스타일 형태로 output을 내보내는 함수가 필요했습니다. 

이 함수를 구현하기 위해서 emotion에 공식 문서를 뒤적 거리다 composition 파트를 발견하게 되었습니다. 

> Composition is one of the most powerful and useful patterns in Emotion. You can compose styles together by interpolating value returned from css in another style block.  
> 
> [Emotion – Composition](https://emotion.sh/docs/composition)

composition은 두 개 이상의 스타일 객체를 결합하여 새로운 객체를 생성하는 하는 것을 지원하는 패턴입니다. 

composition을 사용해서 개발자가 정의한 스타일을 넘겨주면 그 스타일을 미디어 쿼리로 감싸서 새로운 스타일을 내보내는 함수를 쉽게 만들 수 있었습니다. 

미디어 쿼리 스타일을 반환하는 함수를 생성함으로써 더 이상 수고스럽게 미디어 쿼리가 있는 스타일을 복사하러 찾지 않아도 되고, 브레이크 포인트 변경 시 모든 스타일 파일을 찾지 않아도 되게 되었습니다. 굿

```ts

export const setLargeDisplayStyle = (style: SerializedStyles) => css`
  @media (min-width: 1200px) {
    ${style}
  }
`;

export const setMiddleDisplayStyle = (style: SerializedStyles) => css`
  @media (min-width: 576px) and (max-width: 1199px) {
    ${style}
  }
`;

export const setSmallDisplayStyle = (style: SerializedStyles) => css`
  @media (max-width: 575px) {
    ${style}
  }
`;

```

```ts
// 사용 

// 리팩터링 전 
export const NormalSelect = styled(Select)`
    @media (min-width: ${B.BigTablet}px) and (max-width: ${B.NoteBook - 1}px) {
      height: 1rem !important;
      font-size: ${B.NoteBookFontSizeMicro}rem!important;
      line-height: 1rem !important;
    }
`; 

// 리팩터링 후 
export const NormalSelect = styled(Select)`
    ${setLargeDisplayStyle(css`
        height: 1.2rem !important;
        font-size: ${B.BigTabletFontSizeMicro}rem!important;
        line-height: 1.2rem !important;
    `)}
`; 
```

<p align="center"> 
<img src="./2.jpeg">
</p>








