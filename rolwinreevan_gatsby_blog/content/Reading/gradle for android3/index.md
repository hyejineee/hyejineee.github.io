---
title: "안드로이드를 위한 gradle 4장, 5장 정리 "
path: blog/Reading/gradle-for-android3
tags: [Android, Reading]
cover:  "./gradle.png"
date: 2021-07-21
excerpt: 안드로이드를 위한 Gradle(한빛 미디어) 4장, 5장을 정리합니다. 
draft : false
---

## chapter4.외부 라이브러리 추가

* gradle에서 외부 참조는 `build.gradle` 파일에 설정한다.
    * 프로젝트의 build.gradle : 빌드 스크립트 구동을 위한 클래스 패스를 지정한다.
    * 모듈의 build.gradle : 소스 코드에서 참조하는 외부 라이브러리를 지정한다. 
        * dependencies 블록에 외부 라이브러리 지정.

