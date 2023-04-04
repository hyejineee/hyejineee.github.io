---
title: '[리액트 네이티브] react-native-vector-icons 관련 에러 해결'
path: blog/frontend/react-native-vector-icons-errors
tags: [Frontend]
cover: './cover.png'
date: 2023-03-27
excerpt: 이럴바엔...!
---


기존 이력서에 앱 개발 관련 이력을 추가했더니 리액트 네이티브를 사용하는 회사 몇 군데에 붙었습니다. 서류에 합격하고 이메일로 과제를 받게 되었는데 당시 다른 기업의 과제를 하고 있던 터라 크게 신경 쓰지 않고 어떤 과제인지만 확인습니다. 리액트 네이티브를 사용한 적은 없지만 과제 요구사항이 그렇게 어려운 내용이 아니라 좀 늦게 시작했는데... 웬걸... 제가 상상했던 크로스 플랫폼이랑 너무 달랐습니다.

<br/>

일단 크로스 플랫폼이기 때문에 하나의 코드로 두 개의 플랫폼을 지원할 수 있는 것은 당연하고 추가로 설치하는 패키지 또한 안드로이드 ios 각각 따로 처리할 필요 없이 알아서 처리할 것으로 예상했습니다. 또 들은 바로는 리액트를 할 줄 알면 리액트 네이티브도 금방 할 수 있다고 들었기 때문에 정말 금방 할 수 있을 줄 알았습니다. 

<br/>

과제의 요구사항은 bottom tabbar를 활용하는 것과 캘린더 컴포넌트를 라이브러리 없이 구현하는 것이었습니다. 

<br/>

## 난관 react-native-vector-icons 패키지 설치
요구사항에 bottom tab bar에 아이콘이 있어 icon 관련 패키지를 찾아보니 react-native-vector-icons를 많이 사용하고 있길래 해당 패키지를 사용하기로 결정했습니다. 
먼저 1차로 당황스러웠던 점은 패키지 설치 가이드에서 xcode, android를 나눠서 설명하고 있었다는 점... 왜 져... 크로스 플랫폼 아니였나여...

<br/>

![](./1.jpeg)

<br/>

그래도 하라는 대로 합니다. 먼저 xcode를 열어줍니다. 구매한 지 5년이 지난 맥북은 xcode 여는 것만으로도 힘겨워합니다. 맥부기 힘내 그다음 node_module의 react-native-vector-icons 모듈에 있는 Fonts를 복사해 프로젝트의 바로 아래에 복사 붙여 넣기를 해줍니다. 그리고 info.plist를 수정하고 Copy Bundle Resources에도 Fonts 폴더에서 사용하는 글꼴을 추가해 줍니다. 이럴 거면 ios 개발자, 안드로이드 개발자 따로 뽑아서 개발하는 게 더 빠르겠는데...? 라는 생각을 잠깐 합니다. xcode 자체도 처음 보는 상태에서 저런 것들을 찾으려니 시간이 오래 걸렸습니다. info.plist 수정도 xcode에서 텍스트로 한 번에 복붙하고 싶었는데 텍스트 모드로 변환하는 방법을 찾는 데 오래 걸려서 수정도 쉽지 않았습니다. 여튼 하라는 대로 다 하고 아이콘이 제대로 적용되었는지 확인하는데 ios에서는 폰트를 못 찾고 있었습니다.

<br/>

![](./2.jpeg)

<br/>

[이리저리 검색해서 찾아본 결과](https://github.com/oblador/react-native-vector-icons/issues/945#issuecomment-1255365833) Podfile이라는 파일에 `pod 'RNVectorIcons', :path => '../node_modules/react-native-vector-icons'`를 추가해서 문제를 해결했습니다. Podfile은 안드로이드에서 build.gradle 파일이 하는 역할과 비슷한 것 같습니다. android쪽 설정에서는 저런 방식으로 gradle 파일에 모듈을 추가하는데 왜 ios쪽 설정은 xcode 열고 파일 복사하고 하는 방식을 택했을까요...? 결국 동작하는 거는 저 방식인데??

<br/>

여튼 ios 관련 문제를 해결하고 안드로이드도 문서에서 시키는 대로 합니다. 안드로이드는 이전에 개발했던 경험이 있어서 그런지 쉽게 적용할 수 있었습니다. 

<br/>

styled components도 웹에서 사용하는 거랑 좀 달라서 당황스러웠던 적이 있었지만 그래도 여차저차 끝냈습니다. 외부 패키지를 사용하는 부분 말고는 크게 어려웠던 점은 없었던 것 같습니다. 과제를 제출하고 면접 스터디에 리액트 네이티브를 하던 분과 얘기를 나눠봤는데 flutter는 이렇게 나눠서 처리하는 일이 없다고 합니다... flutter도 배워보고 싶네요.

<br/>

👉🏻 [GitHub - hyejineee/burnfit-assignment](https://github.com/hyejineee/burnfit-assignment)




