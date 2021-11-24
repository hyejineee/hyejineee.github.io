---
title: "20210527 TIL"
path: blog/TIL/20210527
tags: [TIL]
cover:  "./tilbanner.jpg"
date: 2021-05-27
excerpt: 안드로이드에 jacoco설정하기
---

## Facts

* 클린 아키텍처 1장부터 6장까지 읽었습니다.
* 안드로이드 프로젝트에 jacoco를 설정했습니다. 

## Feelings

* 오늘은 운동을 하려고 했는데 못했습니다. 운동한지 좀 오래돼서 몸이 찌뿌둥한 것 같습니다.
* 당근에 백패킹 체어와 독서대를 올렸는데 이상한 사람들이 많습니다. 짜증
* 안드로이드 프로젝트에 jacoco를 성공적으로 설정해서 뿌듯합니다. 이제 차근차근 설정에 대해서 공부해야겠습니다. 
* 테스트 커버리지를 보니 처참합니다. 제 코드가 책으로 읽었던 테스트하기 어려운 코드임을 피부로 느끼게 되었습니다. 

## Findings

* 안드로이드 테스트 커버리지 측정 

  * 참고

    * [배민 jacoco설정](https://woowabros.github.io/experience/2020/02/02/jacoco-config-on-gradle-project.html)
      * 글에서 참고한 문서들을 위주로 봤습니다. 
    * [제이크님 블로그](https://jkroh.tistory.com/19)

  * 별도의 설정 없이 안드로이드 스튜디오에서 커버리지를 측정할 수 있다는 것을 알게 되었습니다. 

    * Run ''with coverage라는 버튼이 있습니다

  * jacoco를 사용하면 측정 리포트를 안드로이드 자체 커버리지 측정보다시각적으로 보기 좋은 것 같습니다. 

  * gradle에서 task를 정의해서 사용할 수 있다는 것을 배웠습니다. 그레이들 레시피를 열심히 읽어야겠습니다. 

  * 처음에 jacoco를 설정하고 그레이들 task를 실행시켰을때 kotest로 작성된 테스트에 대해서 커버리지가 측정되지 않는 문제가 발생했었는데 gradle.build 의 android의 testOptions에서 useJunitPlaform()을 추가해주니 커버리지가 정상적으로 측정 되었습니다. 

    ``` gr
    android {
    		...
        testOptions {
            unitTests.all {
                useJUnitPlatform()
            }
        }
    }
    ```

## Future Action Plans

- 테스트 커버리지를 참고하여 소스 코드를 수정해야겠습니다. 
- 조금 오래 걸리더라도 조급해하지 말고 차근차근 진행하는 자세를 길러야겠습니다.