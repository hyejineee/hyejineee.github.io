---
title: "안드로이드를 위한 gradle 3장 : gradle task이해하기"
path: blog/Reading/gradle-for-android2
tags: [Android, Reading]
cover:  "./gradle.png"
date: 2021-07-20
excerpt: 안드로이드를 위한 Gradle(한빛 미디어) 3장을 정리하면서 gradle의 task에 대해 학습하고 task수명주기에 대해 테스트합니다. 
draft : false
---

## chapter3. Gradle task와 생명주기 

* task : gradle의 기본 단위.
* gradle은 모듈을 지정할 때 콜론(:)을 구분자로 사용한다. 
```
./gradlew :app:mytask   //app모듈의 mytask 태스트를 실행하라는 의미 
```
* 프로젝트와 모듈은 공통적으로 android, build, build setup, help, install, other, verification 그룹을 포함하고 있다.
    * build 그룹 : 
        * APK 또는 AAR파일을 생성하는 기능을 담당.
        * assembleDebug와 assembleRelease가 주고 사용된다.

### task란 무엇인가?
* gradle에서 작업의 기본 단위.
* org.gradle.api.Task 클래스에 해당
```groovy
<<interface>>
    Task

    dependsOn(Object... paths)
    doFirst(Closure action)
    doLast(Closure action)
    finalizedBy(Object... paths)
    getDescription()
    getGroup()
    getInputs()
    getOutputs()
    getMustRunAfter()
    getProject()
```

### 사용자 정의 task만들기 
* 기본 task 생성
```groovy
task 태스크 이름  {
    ...to do...
}
```
* task에 그룹 지정 
    * 별도로 지정하지 않을 경우 other그룹에 편입된다.
    * task 생성시 그룹명 입력
    * 새로운 그룹 생성 : 생성하려는 그룹명을 groupname에 입력
    ```groovy
    task taskName (group : 'groupName'){
        ...
    }
    ```
* task에 설명 지정 
    * `description` 사용.
    ```groovy
    task taskName (
        group : 'groupName',
        description : "this is my task"){
        ...
    }
    ```
* task에 의존성 지정하기 
    * gradle은 사용자가 특정 태스크를 실행하도록 명령을 내리면 준비 단계에서 실행 순서 결정을 위한 DAG(단방향 비순환 그래프)를 만든다. 
    * DAG는 전체 프로젝트에 포함된 각 모듈의 모든 태스크를 조사하여 어떤 태스크를 먼저 실행하고 어떤 태스크를 나중에 실행할지 정보를 담고 있다. 
    * 어떤 태스크가 현재 태스크보다 먼저 실행해야 할 경우 `dependsOn`을 사용한다.
    * 의존하는 태스크를 여러 개 지정하는 경우 지정된 각 태스크의 실행 순서는 보장되지 않는다. 
    * 현재 태스크보다 먼저 실행만 됨.

     ```groovy
     task fistTask {
         ...
     }
     task taskName (
         group : 'groupName',
         description : "this is my task",
         dependsOn: 'firstTask'){
        ...
    }
    ```

### gradle의 생명주기 
* 초기화 단계 
    * settings.gradle을 분석하고 프로젝트에 포함된 각 모듈의 태스크를 조사하여 어떤 모듈을 먼저 빌드해야 하는지 결정한다.
    * 프로젝트 build.gradle에 해당하는 Project인스턴스를 생성한다.
    * Project 인스턴스 속성 
    ```groovy
    <<interface>>
    Project
    allProjects(Closure congigureClosure)
    buildscript(Closure congigureClosure)
    configurations(Closure congigureClosure)
    getDependencies()
    task(String name)
    task(String name, Closure congigureClosur)
    ```

* 설정 단계
    * Project 객체의 세부 값을 설정한다.
    * 하위 프로젝트에 공통으로 적용되는 내용은 allprojects()를 통해 전달된다.
    * 사용자 정의 태스크의 경우 doFirst()에 넣은 내용이 설정 단계에서 실행된다.
* 실행 단계 
    * DAG에서 결정된 순서에 따라 순차적으로 실행한다. 
    * doLast()에 넣은 내용 또는 task의 본문 내용이 실행되는 단계이다.

### task 테스트 
```groovy
task dependencyTask{
    doFirst {
        println("doFirst of dependencyTask")
    }

    doLast {
        println("doLast of dependencyTask")
    }
}

task firstTask(
        dependsOn: 'dependencyTask'
) {
    doFirst {
        println("doFirst of FirstTask")
    }

    doLast {
        println("doLast of FirstTask")
    }
    println("firstTask")
}

출력 
> Task :app:dependencyTask
doFirst of dependencyTask
doLast of dependencyTask
> Task :app:firstTask
doFirst of FirstTask
doLast of FirstTask

```


## Ref.
[doLast()와 doFirst()](http://www.devkuma.com/books/pages/1076)