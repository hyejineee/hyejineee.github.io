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
