---
title: "[자바스크립트] Import & Export"
path: blog/frontend/javascript/import-export
tags: [Frontend]
cover: "./thumb.png"
date: 2022-07-11
excerpt: 자바스크립트에서 사용사는 import& export와 모듈 시스템에 대해서 살짝 공부한 내용을 정리합니다.
---

## Import & Export는 무엇인가요?

Import, Export는 자바스크립트에서 모듈을 가져오고 내보낼 때 사용하는 키워드입니다. 자바스크립트에서 모듈은 단지 하나의 파일, 스크립트를 나타냅니다.

import, export는 단어의 뜻에서 유추해 볼 수 있듯이 모듈을 내보내고 가져올 수 있는 기능을 제공하는 키워드입니다.

import는 다른 모듈에서 내보낸 함수, 객체, 원시 값을 가져올 때 사용합니다. 반대로 export는 현재 모듈에서 함수, 객체, 원시 값을 내보낼 때 사용합니다.

다른 모듈에서 export를 통해 내보내진 값만 import를 사용하여 가져올 수 있습니다.

## Import & Export는 왜 사용할까요?

한 번에 많은 양의 정보를 받아들이는 것은 힘든 일입니다. 우리는 실생활에서 많은 양의 정보를 효율적으로 받아들이기 위해서 정보를 작은 덩어리로 쪼개고 그룹화합니다.

우리가 하나의 파일에서 코드를 여러 모듈로 분리하여 사용하는 이유도 이와 비슷합니다. 한곳에 있는 많은 양의 코드는 우리가 일을 하는데 비효율적으로 만듭니다. 하나의 복잡한 코드를 비슷한 관심사를 가진 그룹으로 분리하면 코드를 관리하고 유지 보수하는데 더 효율적이게 만듭니다.

import& export를 사용하는 자바스크립트만의 이유는 없을까요?

초창기 자바스크립트에는 모듈 시스템이란 것이 없었습니다. 모듈을 사용하기 전에는 함수 밖에서 정의된 변수는 바로 전역 스코프를 갖게 되었습니다. 자바스크립트 코드들은 물리적으로 다른 파일에 저장되었지만 동작은 모두 하나의 파일에 있는 것처럼 동작했습니다. 그래서 함수나 변수가 이미 존재하는지 알기 어려웠고 실수로 중복된 함수나 변수를 만들어 원치 않는 결과를 만들어 내기도 했습니다.

자바스크립트 언어로 점점할 수 있는 일들이 많아지자 모듈 시스템을 도입하기 위한 많은 시도가 생겼습니다. 그중 가장 최근으로 ES6에서 클라이언트 사이드(브라우저)에서 사용될 수 있는 모듈 시스템이 추가되었습니다.

모듈 시스템의 추가로 모듈 안에서 정의된 함수 밖에 있는 변수들은 전역 스코프가 아닌 모듈 스코프라는 것으로 나눠질 수 있게 되었습니다. 우리는 함수나 변수가 중복되는 것이 없는지 일일이 추적하는 작업에서 해방되었고 원치 않는 결과를 만들어 낼 경우도 많이 줄게 되었습니다.

## Import & Export를 사용하는 방법

모듈은 가져오고 내보내는 방법에는 거의 비슷하지만 CommonJS,AMD 등 라이브러리에 따라 다릅니다. 이 글에서는 ES6에서 사용하는 방법만 소개하려고 합니다.

먼저 모듈의 기본 값으로 내보내는 방법은 export default 키워드를 사용합니다. export default는 하나의 모듈에서 한 번만 사용할 수 있습니다.

```jsx
// module.js
export default function DDD(){...}
```

하나의 모듈에서 여러 개의 값을 내보내려면 export 키워드만 사용합니다.

```jsx
//modules.js
export const value1 = ""
export const value2 = ""
```

여러 개의 값을 내보내는 문법도 존재하지만 저는 주로 위의 문법을 사용하기 때문에 다른 설명은 skip하겠습니다. 궁금하신 분들은 [MDN - export](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/export), [MDN - modules](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules) 를 참고하시면 좋을 것 같습니다.

반대로 이번에는 export된 값을 가져옵니다. 값을 가져오기 위해서는 import 키워드를 사용합니다. import에도 기본값을 가져오는 문법과 여러 개의 값을 가져오는 방식이 조금 다릅니다.

```jsx
// 기본으로 export된 값 가져오기
import DDD from "./module.js"

// 여러개로 export된 값 가져오기
import { value1, value2 } from "./modules.js"
```

모듈의 default를 가져오는 방법에 대해서 다른 방법도 있지만 역시 제가 많이 사용하는 문법만 소개해 드리도록 하겠습니다. 다른 방법이 궁금하신 분은 위에 언급한 MDN 문서를 참고하시면 좋을 것 같습니다.

추가로 내보내진 export 값들이 어떻게 관리되는지도 정리하고 싶지만 다른 블로그 포스트로 분리하는 것이 좋을 것 같아 export& import를 사용하는 방법은 여기서 정리를 마치도록 하겠습니다.

- 내보내진 export는 어디로 가는가?

### 적용해보기

처음에 자바스크립트 모듈에 대해서 배웠을 때 제일 먼저 든 궁금점이 노드가 아닌 일반 웹브라우저에서 사용되는 자바스크립트에도 모듈 시스템이 적용될 수 있으까? 였습니다. 먼저, 결론을 말하자면 es6에서 클라이언트 사이드 모듈 시스템을 지원하는 키워드를 제공하기 때문에 가능합니다.

저는 어떻게 모듈 시스템을 순수 자바스크립에 적용하는지 경험해 보기 위해 이전에 J[SX포스팅](https://hyejineee.github.io/blog/frontend/jsx)을 위해 연습했던 html, javascript 파일에 모듈 시스템을 적용해 보았습니다.

먼저 브라우저에서 사용하는 자바스크립트에 모듈 시스템을 적용하려면 html에 삽입하는 js 파일의 타입으로 module을 설정하여 브라우저가 해당 스크립트가 모듈이라는 것을 명시해 줘야 합니다. 명시 방법은 다음과 같습니다.

```jsx
<script src="./jsx.js" type="module"></script>
```

위의 작업 없이 모듈 시스템을 사용하려고 할 경우 다음과 같은 에러를 보실 수 있습니다.

```jsx
**Uncaught SyntaxError: Cannot use import statement outside a module**
```

이 작업을 거친 후에 각 자바스크립트 파일들은 독립적인 모듈 스코프를 갖게 됩니다. type= “module”이 어떻게 동작하는지에 대해서는 Ref에 있는 사이트를 참고하시면 좋을 것 같습니다.

모듈 시스템 적용으로 이전의 하나의 자바스크립트 파일로 있던 유사 컴포넌트들이 여러 개의 파일로 분리되었습니다. 각 관심사에 맞게 코드를 분리하여 가독성 및 유지 보수성을 높일 수 있었습니다.

```jsx
// 이전 자바스크립트 코드
const title = () => createElement("h1", null, "hello jsx!")
const item = data => createElement("li", null, data)

const listBox = datas => {
  const items = [...datas].map(v => item(v))
  return createElement("ul", null, ...items)
}

const fruitList = () => {
  const fruits = ["사과", "배", "딸기", "포도", "키위"]
  return listBox(fruits)
}

const animalList = () => {
  const animal = ["너구리", "염소", "호랑이", "사자", "기린"]
  return listBox(animal)
}

const coffeeList = () => {
  const coffee = ["아메리카노", "라떼", "돌체라떼", "바닐라라떼", "카푸치노"]
  return listBox(coffee)
}

const root = createElement(
  "div",
  null,
  title(),
  listBox(["item0", "item1", "item2", "item3", "item4"]),
  fruitsList(),
  animalList(),
  coffeeList()
)

document.getElementById("app").appendChild(root)
```

```jsx
// 모듈로 분리된 자바스크립트 createElement.js

export function createElement(tagName, props, ...children) {
  const element = document.createElement(tagName)

  Object.entries(props || {}).forEach(([key, value]) => {
    element[key.toLowerCase()] = value
  })

  children.forEach(child => {
    console.log(`${tagName}, typeOf : ${typeof child}`)
    if (child instanceof Node) {
      element.appendChild(child)
      return
    }

    element.appendChild(document.createTextNode(child))
  })

  console.log(element)
  return element
}
```

```jsx
// 분리된 자바스크립트 components.js

import { createElement } from "./createElement.js"

export const title = () => createElement("h1", null, "hello jsx!")
const item = data => createElement("li", null, data)

export const listBox = datas => {
  const items = [...datas].map(v => item(v))
  return createElement("ul", null, ...items)
}
```

```jsx
//분리된 자바스크립트 listComponents.js

import { listBox } from "./component.js"

export const fruitList = () => {
  const fruits = ["사과", "배", "딸기", "포도", "키위"]
  return listBox(fruits)
}

export const animalList = () => {
  const animal = ["너구리", "염소", "호랑이", "사자", "기린"]
  return listBox(animal)
}

export const coffeeList = () => {
  const coffee = ["아메리카노", "라떼", "돌체라떼", "바닐라라떼", "카푸치노"]
  return listBox(coffee)
}
```

```jsx
//분리된 자바스크립트 root.js

import { fruitList, animalList, coffeeList } from "./listComponent.js"
import { title, listBox } from "./component.js"
import { createElement } from "./createElement.js"

const root = createElement(
  "div",
  null,
  title(),
  listBox(["item0", "item1", "item2", "item3", "item4"]),
  fruitList(),
  animalList(),
  coffeeList()
)

document.getElementById("app").appendChild(root)
```

## Ref.

- [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/export](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/export)
- [https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules)
- [https://yeonfamily.tistory.com/9](https://yeonfamily.tistory.com/9)
- [https://ko.javascript.info/modules-intro](https://ko.javascript.info/modules-intro)
- [https://velog.io/@sae1013/일반스크립트와-모듈스크립트전역스코프와-모듈스코프](https://velog.io/@sae1013/%EC%9D%BC%EB%B0%98%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%99%80-%EB%AA%A8%EB%93%88%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%A0%84%EC%97%AD%EC%8A%A4%EC%BD%94%ED%94%84%EC%99%80-%EB%AA%A8%EB%93%88%EC%8A%A4%EC%BD%94%ED%94%84)
- [https://it-eldorado.tistory.com/92](https://it-eldorado.tistory.com/92)
