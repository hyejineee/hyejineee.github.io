---
title: '20230228 TIL'
path: blog/TIL/2023-02-28
tags: [TIL]
cover: './TIL.png'
date: 2023-02-28
excerpt: 기준을 두고 프로젝트 폴더 구조 결정하기
---

## Facts.

* 프로젝트 
	* 폰트 스타일 관련 작업을 진행했습니다. 
	* 다크 모드 / 라이트 모드 테마 설정 작업을 진행했습니다. 
* 인성면접 질문을 모두 정리했습니다.
* 기술면접 질문 알고리즘, 자료구조 파트를 정리했습니다. 
* 강원도로 출발

## Feelings.

* 리멤버 디자인 시스템 레포가 있길래 클론해서 봤습니다. 스토리북... 써보고 싶네요..
* 폴더 구조를 어떻게 만들지에 대해서 많은 도움이 된 것 같습니다. 
* leading 폴더 구조를 다음과 같이 하기로 결정했습니다. 저번에 토스 클린코드 영상에서 내가 원하는 로직을 빠르게 찾을 수 있는 코드가 클린 코드다.라는 내용을 있었는데 폴더 구조도 마찬가지라고 생각하기 때문에 다음과 같이 기준을 잡고 정했습니다. 
	* 폴더 구조를 정하는 기준 - 어떻게 하면 내가 원하는 파일을 빠르게 찾을 수 있을까?
	* 저는 이 질문에 대한 답으로 관심사 별로 폴더를 나누는 것이 좋다고 생각했습니다. 
	* 중간에 변경 사항들이 생기겠지만  최종으로 보여질 폴더 구조는 다음과 같습니다. 

	```js
	src
	┣ article
	┃ ┣ hooks
	┃ ┣ components
	┃ ┗ types
	┣ auth
	┃ ┣ hooks
	┃ ┣ components
	┃ ┗ types
	┣ comment
	┃ ┣ hooks
	┃ ┣ components
	┃ ┗ types
	┣ common
	┃ ┣ styles
	┃ ┣ hooks
	┃ ┣ components
	┃ ┗ types
	┣ profile
	┃ ┣ hooks
	┃ ┣ components
	┃ ┗ types
	┗ tag
	┃ ┣ hooks
	┃ ┣ components
	┃ ┗ types
	```

* 다크 모드 / 라이드 모드 설정에 관해서 emotion의 ThemeProvider를 사용해서 구현을 시작했습니다. 강원도 가야해서 다 끝내지는 못했습니다. 😅 목요일에 나머지 작업을 끝내고 프로젝트 일지 형식으로 포스팅 하려고 합니다. 


## Future Action Plans.

* 설악산 흘림골 등산하러 갑니다. ⛰️⛰️⛰️⛰️