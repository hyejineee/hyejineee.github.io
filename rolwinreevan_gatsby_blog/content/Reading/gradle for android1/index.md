---
title: "안드로이드를 위한 gradle : 1장 - 2장"
path: blog/Reading/gradle-for-android
tags: [Android, Reading]
cover:  "./gradle.png"
date: 2021-07-20
excerpt: 안드로이드를 위한 Gradle(한빛 미디어) 1장 - 2장을 정리하면서 안드로이드 gradle의 기초에 대해 학습합니다. 
draft : false
---

## chapter1. 안드로이드 스튜디오와 Gradle

### Gradle 
* 범용 빌드 도구. 범용 언어를 모두 지원.
* 다른 언어로 개발하더라도 빌드 스크립트를 처음부터 다시 작성할 필요없이 재사용할 수 있다. 
* 주요 특징 
    * Polyglot Build(폴리글랏 빌드) :
        * gradle에서는 각 언어를 플러그인으로 구별한다.
    * 도구 통합 :
        * 여러 가지 도구와 함께 사용 가능.
    * 외부 라이브러리 관리 자동화 : 
        * 개발자가 외부 라이브러리를 관리하지 않아도 된다. 
        * 외부 저장소의 위치와 라이브러리 그룹, 이름, 버전 등을 지정해준면 알아서 다운로드하고 빌드에 포함시킨다.
    * 고성능 빌드 :
        * gradle은 점진적인 빌드, 빌드 캐싱, 병렬 빌드 기능을 지원하여 고성능 빌드를 추구한다.

### 안드로이드를 위한 gradle
* 안드로이드에서 빌드란? 
    * 간단하게 말하면 JAR,AAR, APK 파일을 만드는 방법

* 안드로이드를 위한 gradle특징 
    * 코드와 리소스를 재활용하기 쉽게 한다.
    * 다양한 변형을 만들 수 있고 앱의 특성에 따라 단일 소스에서 여러 APK를 만들 수 있게 한다.
    * 빌드 절차를 쉽게 설정하고 확장하고 커스터마이즈할 수 있게 한다.
    * IDE와의 밀접한 통합을 추구한다.

## chapter2. 첫 Gradle 프로젝트 생성하기 
 
* 프로젝트 build.gradle과 모듈 build.gradle의 차이점 학습
### 안드로이드 앱을 위한 gradle구성요소
1. app 모듈
    * 안드로이드 스튜디오에서 생성된 프로젝트는 기본적으로 멀티 프로젝트 구조.
    * 1개 이상의 모듈 포함. 최초 생성된 모듈 이름 = app
2. manifast 폴더 
    * 프로젝트의 메타 정보를 담고있는 파일 
    * 모듈별로 AndroidManifest.xml을 포함.
    * 모듈은 독립적으로 APK를 생성할 수 있다.
3. 소스코드 폴더 
    * 소스 코드와 테스트 코드를 포함.
4. Gradle Scripts
    * 프로젝트 build.gradle 
        * 전체 프로젝트를 빌드하기 위한 안드로이드 gradle 플러그인 
        * 버전을 기입하고 다운로드할 수 있는 저장소를 기술한다.
    * 모듈 build.gradle 
        * 각 모듈에 필요한 빌드 정보를 기술한다.
    * proquard 
        * 역 컴파일 방지 도구 
    * gradle.properties (gradle 속성파일)
        * 버전 정보와 같은 간단한 설정 정보를 포함
        * 이 파일에 지정한 변수는 build.gradle에서 참조할 수 있다.
    * settings.gradle
        * 빌드에 포함된 모듈의 목록
        ```grooby
        include ':app', ':abc'
        ```
    * local.properties 
        * 안드로이드 sdk의 경로를 기술

### 프로젝트 build.gradle
* 빌드 스크립트를 구동하는 부분과 다수의 모듈이 존재할 때 전체 모듈에 공통으로 적용하는 부분을 기술한다.
* 프로젝트 build.gradle의 구성 
    * buildscript 부분 
        *  빌드 스크립트를 구동하는 부분.
        * 외부 저장소와 의존성 부분을 지정.
        * 의존성 부분에 안드로이드 Gradle 플러그인 버전을 기술한다.
    * 전체 프로젝트에서 공통으로 사용할 수 있는 task 지정 부분
        * 기본적으로 clean 태스크가 추가됨

### 모듈 build.gradle
* 각 모듈에서 필됴한 빌드 설정을 지정할 수 있다.
* 모듈 build.gradle의 구성 
    * 모듈의 플러그인 설정 부분
        * 안드로이드 앱 모듈일 경우 'com.android.application'지정
        * 안드로이드 라이브러리 모듈일 경우 'com.android.library'지정 
        * 필요한 경우 여러 플러그인 지정 가능. 위의 경우는 동시에 지정 불가.

        ```grooby
        apply plugin: 'com.android.application'
        ```
    * `android`부분 
        * AndroidManifest.xml의 설정값을 재지정할 수 있다.
        * gradle파일에서 지정하는 값이 xml에서 지정하는 설정값 보다 우선순위가 높다.
    * `android`블록 내부의 `buildType`부분
        * 빌드 타입에 따라 다른 동작을 지정할 수 있다.
        * 안드로이들 빌드 타입은 기본적으로 'debug'와 'release'가 있다.
        ```grooby
        android{
            ...
            buildType{
                release{
                    ...
                }
            }
        }
        ```
    * `dependencies`의존성 부분
        * 모듈을 빌드할 때 포함하는 라이브러리 설정.


