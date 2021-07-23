---
title: "안드로이드를 위한 gradle 6장, 7장 정리 "
path: blog/Reading/gradle-for-android4
tags: [Android, Reading]
cover:  "./gradle.png"
date: 2021-07-22
excerpt: 안드로이드를 위한 Gradle(한빛 미디어) 6장, 7장을 정리합니다. 
draft : false
---

## chapter6.테스트 

### 로컬 유닛 테스트 
* 로컬 유닛 테스트 코드 실행 시 필요한 라이브러리는 모듈 build.gradle에 정의한다. 
* `testImplementation`을 사용하여 테스트에 필요한 항목 추가.
* 로컬 유닛 테스트에 의해 호출되는 gradle task
    * :app:mockableAndroidJar
        * 안드로이드에서 제공하는 android.jar 파일을 mock 인터페이스로 컴파일한다.
        * 로컬 유닛 테스트가 동작하려면 안드로이드 코드에 대한 mock 인터페이스가 필요하다. 

    * :app:compileDebugUnitTestSources 
        * 디버그 모드로 로컬 유닛 테스트 코드를 컴파일한다.
        * 릴리즈 모드로 코드를 컴파일하는 경우 compileReleaseUnitTestSource 태스크가 실행된다.

* 로컬 유닛 테스트 제약사항
    * 안드로이드 기기가 아닌 pc에서 실행되기 때문에 많은 제약이 있다.
    * API가 mockableAndroidJar 태스트로 모든 안드로이드 클래스의 mock 인터페이스가 생성되지 않기 때문에 문제 발생.
        * 모듈 build.gradle에 다음과 같은 내용 추가 
        ```grooby
            android{
                ...
                testOptions{
                    unitTests.returnDefaultValues = true
                }
            }
        ```
        * 또는 mocking하는 라이브러리 사용.

### 안드로이드 테스트 
* 안드로이드 구성요소와 유틸리티 클래스와 같은 일반 클래스를 모두 테스트할 수 있다.
* 안드로이드 테스트에 의해 호출되는 gradle task
    * :app:compileDebugAndroidTestSource 태스트가 실행된다.


## chapter7. 빌드 변형 

* 안드로이드 gradle의 목표 : 단일 소스 코드로 목적에 맞는 다양한 APK를 생성하는 것.
* 빌드 변형 = 빌드 타입 + 제품 특성 
    * 어떤 모듈에 두 가지 빌드 타입과 세 가지 제품의 특성이 존재한다면 전체 빌드 변형은 6가지

### 빌드 타입

* 빌드 타입에는 `디버그`와  `릴리즈`가 있다.
    * 디버그 :
        * 개발 시 사용함
        * 안드로이드 sdk에서 제공하는 디버그 키로 서명한다.
        * 디버깅에 필요한 내용들을 포함한다.
    * 릴리즈 : 
        * 외부 배포시에 사용한다.
        * 기본적으로 서명하지 않음. -> 별도로 키의 종류, 키스토어, 등의 서명 정보를 지정해야 한다.

* `android`블록 내부에 `buildTypes`블록에 빌드 타입을 추가하거나 기존 디버그, 릴리즈 빌드의 동작을 재정의할 수 있다.

* assemble 태스크를 통해 APK/ AAR 파일을 빌드한다.

### 앱 서명 첨부하기

* 릴리즈 빌드할 떄는 앱 서명에 관한 정보를 직접 지정해야한다.
* `android`블록 내부에 `signingConfigs`내용을 입력한다.
* buildTypes 블록에서 앞에서 정의한 signingConfigs를 참조하기 때문에 signingConfigs는 buildTypes보다 먼저 정의되어야 한다.
* 실무에서는 보안 이슈로 `storePassword`, `keyAlias`,`keyPassword`는 서버의 환경 변수에 별도로 지정한다. 

### 제품 특성 

* 제품 특성은 리소스를 교체하거나 특정 기능을 활성화 또는 비활성화할 수 있다.
* 같은 제품의 범위 내에서 적용할 것.

* 제품 특성 생성
    * android 블록 내부에 `productFlavor`블록을 추가한다.
    ```groovy
        android{
            ...
            productFlavors{
                demo{
                    ...
                }

                full{

                }

            }
        }
    ```
* 안드로이드 스튜디오에서 추가된 제품 특성 확인 -> Build Variants로 확인.
* 제품 특성으로 특정 기능을 활성화 또는 비활성화할 수 있다.
    * 모듈 build.gradle에서 BuildConfigField를 사용
    * 변수가 자동으로 생성되어 소스코드에서 참조할 수 있다.
    ```groovy
        ...
        productFlavors{
            full{
                // buildConfigField "type", "variable name", "value"
                buildConfigField "boolean", "SHOW_CURRENT_TIME", "true"
            }

        }
    ```
