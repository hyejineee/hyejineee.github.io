---
title: "20211130 TIL"
path: blog/TIL/20211124
tags: [TIL]
cover:  "./TIL.png"
date: 2021-11-30
excerpt: 11월 마지막 TIL!
draft: false
---

## Facts

* 패스트 캠퍼스 강의 수강
  * 미세먼지 앱
  * 저작권 무료 이미지 검색기 

* 안드로이드 compose memo앱 프로젝트 시작
  * Github action을 사용하여 CI/CD 구축 
  * 화면 기획

## Feelings

* compose 사이드 프로젝트를 시작했습니다. 그동안 헷갈렸던 git과 관련된 내용을 정리하고 git-flow에 대해서 학습했습니다. 체계적인 커밋 메세지를 위해 커밋 메세지 작성 규칙에 대해서도 학습했습니다. 사이드 프로젝트라 해서 마구잡이로 개발하는 것이 아니라 실제 회사에서 일하는 것 처럼 작업하고 싶습니다.

* DI(의존성 주입)라이브러리로 hilt를 사용하려고 했는데 build가 되지 않는 문제가 발생하여 시간을 꽤 많이 허비했습니다. kotlin 버전이 1.5.31일 때 kapt에서 에러가 발생하여 앱을 빌드할 수 없었습니다. 구글의 hilt 코드랩을 다운받아 확인하였지만 역시 같은 문제가 발생하였습니다. Hilt의 버전과는 상관없이 에러가 발생하고 kapt를 사용하지 않는 경우 정상적으로 빌드되는 것을 확인한 결과 kapt와 kotlin의 버전 때문에 에러가 발생하는 것으로 확신했습니다. compose가 kotlin 버전에 종속적이기 때문에 kotlin 버전과 compose버전으로 조정하면서 확인해본 결과 kotlin 버전이 1.5.30, compose 버전이 1.0.3일 경우에는 kapt에서 에러가 발생하지 않고 빌드가 정상적으로 되는 것을 확인할 수 있었습니다. 근본적인 해결책이 아닌 것 같지만 그래도 문제를 해결할 수 있는 방법을 찾아 기분이 좋습니다. 
  
## Findings

* kapt가 kotlin 버전 1.5.31에서 문제가 발생합니다. 
* git-flow
* git fetch와 pull의 차이점 

## Future Action Plans
* 나는 부지런한 사람입니다.


















