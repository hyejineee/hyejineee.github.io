---
title: '[자바스크립트] 템플릿 리터럴'
path: blog/frontend/javascript/template-literals
tags: [Frontend]
cover: './cover.png'
date: 2022-07-28
excerpt: 템플릿 리터럴에 대한 간단한 지식
---

## **Template literals**

템플릿 리터럴은 내장된 표현식을 허용하는 문자열 리터럴입니다. 표현식을 사용하여 문자열을 연결하고 새로운 문자열을 생성하여 문자열 생성의 복잡도를 줄입니다.

이전의 자바스크립트에서 변수와 문자열을 합쳐 새로운 문자열을 만들기 위해서는 ‘+’를 사용해야 했습니다.

```jsx
const newUrl = 'http://' + changedDomain() + '/' + image + '?width=' + mywidth()
```

자바스크립트의 템플릿 리터럴은 따옴표 대신에 백틱(`)을 사용합니다. 또한 문자열 안에 표현식을 사용하기 위해서 \${}로 표현식을 감싸서 사용해야 합니다. 위의 문자열을 템플릿 리터럴을 사용하여 표현하면 복잡도가 줄어든 것을 확인할 수 있습니다.

```jsx
const newUrl = `http://${changedDomain()}/${image}?width=${mywidth()}`
```

또한 문자열에서 줄바꿈을 사용하는 경우 이전에는 문자열 중간에 \n를 사용해야 했습니다. 하지만 템플릿 리터럴에서는 직관적으로 줄바꿈을 사용할 수 있습니다.

```jsx
// 템플릿 리터럴 이전
const str = 'hello \n' + 'word'

// 템플릿 리터럴
const str = `hello
word`
```

## Ref.

- [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)
- [https://poiemaweb.com/es6-template-literals](https://poiemaweb.com/es6-template-literals)
- [자바스크립트 코딩의 기술](http://www.yes24.com/Product/Goods/85019231)
