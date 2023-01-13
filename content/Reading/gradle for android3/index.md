---
title: '안드로이드를 위한 gradle 4장, 5장 정리 '
path: blog/Reading/gradle-for-android3
tags: [Android, Reading]
cover: './gradle.png'
date: 2021-07-21
excerpt: 안드로이드를 위한 Gradle(한빛 미디어) 4장, 5장을 정리합니다.
draft: false
---

## chapter4.외부 라이브러리 추가

- gradle에서 외부 참조는 `build.gradle` 파일에 설정한다.
  - 프로젝트의 build.gradle : 빌드 스크립트 구동을 위한 클래스 패스를 지정한다.
  - 모듈의 build.gradle : 소스 코드에서 참조하는 외부 라이브러리를 지정한다.

### dependencies 블록에 외부 라이브러리 지정.

- 로컬 라이브러리 모듈 추가 :
  - settings.gradle 파일에 include된 라이브러리의 이름과 일치해야한다.
  - 앱을 빌드할 때 빌드 시스템은 라이브러리 모듈을 컴파일하고 컴파일된 콘텐츠를 APK에 패키징한다.
  - 라이브러리 모듈의 경로는 프로젝트 루트 폴더부터 상대적인 경로를 기술한다. 콜론(:)으로 모듈의 계층을 구분한다.
  ```
  implementation project(":mylibrary")
  ```
- 로컬 바이너리 파일 추가 :

  - 디렉터리 내에 있는 jar파일에 대해 종속성을 선언한다.

  ```
      //libs에 있는 전체 jar파일에 대해 종속성 선언
      implementation fileTree(dir: 'libs', include: ['*.jar'])

      // 개별 jar파일에 대해 종속성 선언
      implementation files('libs/foo.jar', 'libs/bar.jar')
  ```

- 원격 바이너리 파일 추가 (외부 라이브러리 추가)

  ```
  implementation 'com.example.android:app-magic:12.3'

  ```

- 계측 테스트와 로컬 테스트 종속 항목 추가하기

  ```
      //로컬 테스트 종속 항목 추가
      testImplementation 'junit:junit:4.12'

      //계측 테스트 종속 항목 추가
      androidTestImplementation 'com.android.support.test.espresso:espresso-core:3.0.2'
  ```

## chapter5. 멀티 프로젝트 활용

- 멀티 프로젝트는 하위 폴더에 여러 모듈을 추가할 수 있다.
- 멀피 프로젝트 구성이 유리한 점 : UI를 구성하는 애플리케이션 모듈과 주요 기능 로직을 구성하는 라이브러리 모듈을 구별하여 개발할 수 있다.
  - 안드로이드 라이브러리 모듈은 `com.android.library` 플러그인을 필요로 하고 빌드 결과로는 AAR파일이 생성된다.

### AAR

- 안드로이드 라이브러리는 구조적으로 안드로이드 앱 모듈과 동일하다.
- 기기에서 실행되는 APK로 컴파일되는 대신 안드로이드 앱 모듈의 종속 항목으로 사용할 수 있는 AAR로 컴파일된다.
- AAR에는 안드로이드 리소스 및 매니페스트 파일이 포함될 수 있다.
- AAR 파일은 앱 모듈의 c/c++에서 사용할 c/c++라이브러리를 포함할 수 있다.
- 라이브러리 모듈을 사용하는 경우
  - 액티비티, 서비스, UI레이아웃 등 일부 구성요소를 동일하게 사용하는 여러 앱을 빌드하는 경우
  - 여러 APK변형에 포함되는 앱을 빌드하며 두 버전에서 모두 동일한 핵심 구성요소가 필요한 경우

### 로컬 저장소 만들기

- 다수의 라이브러리 모듈을 포함해야 하는 경우 -> 일일히 libs폴더에 복사해서 사용하면 버전 관리에 문제가 있다.
- 로컬 저장소를 만들어서 관리한다.

- gradle에서 로컬 저장소를 만드는 방법

  - mavenLocal()메서드 사용.
  - 프로젝트 build.gradle에 mavenLocal()메서드 추가
    - mavenLocal() 메서드를 사용할 경우 \$USER_HOME/.m2/repository를 기본 로컬 저장소로 사용한다.
  - 프로젝트 하위에 로컬 저장소를 둘 경우

    1. 프로젝트 홈 폴더를 환경 변수에 등록
       - ORG_GRADLE_PROJECT\_\_PROJECT_HOME
       - gradle 스크립트에서 \$PROJECT_HOME으로 참조할 수 있음.
    2. 프로젝트 build.gradle변경
       ```
       repositories{
           jcenter()
           maven{
               url "file://($PROJECT_HOME)/mavenRepository"
           }
       }
       ```
    3. 라이브러리 모듈을 빌드한 결과를 로컬 저장소에 업로드할 수 있도록 `uploadArchives`블록 정의 (모듈의 build.gradle에 정의)

       ```
          apply plugin: 'maven'

          //업로드할 로컬 저장소의 url과 그룹 이름, 버전을 지정해야 한다.
          group = 'com.example.mymodule'
          version = '1.0

           // 모듈을 로컬 저장소에 업로드 하려면 uploadArchives 태스크를 실행해야 한다.
          uploadArchives{
              repositories{
                  mavenDeployer{
                      repository(url: "file://$PROJECT_HOME/mavenRepository")
                  }
              }

          }
       ```

## Ref.

- [android developer- 빌드 종속 항목 추가](https://developer.android.com/studio/build/dependencies?hl=ko#exclude_dependencies)
- [android developer - android 라이브러리 만들기](https://developer.android.com/studio/projects/android-library?hl=ko)
