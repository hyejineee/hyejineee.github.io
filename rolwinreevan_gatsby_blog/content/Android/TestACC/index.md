---
title: "안드로이드 테스트 베이직"
path: blog/test-basic
tags: [Android]
cover: "./testing-workflow.png"
date: 2021-07-13
excerpt: 안드로이드 테스트에 대해 공부하자!
draft : true
---

[안드로이드 코드랩 - 테스트 베이직](https://developer.android.com/codelabs/advanced-android-kotlin-training-testing-basics#0)

No instrumentation registered! Must run under a registering instrumentation.에러 발생

[위의 문제 참고](https://bean-and-yu.tistory.com/159)

-> kotest와 junit의 before를 섞어서 사용.
```kotlin
@RunWith(RobolectricTestRunner::class)
class TasksViewModelTest : DescribeSpec({
    var tasksViewModel:TasksViewModel? = null

    @Before
    fun before(){
        tasksViewModel = TasksViewModel(ApplicationProvider.getApplicationContext())
    }

    describe("addNewTask()"){
        context("새로운 작업이 추가되었을 떄"){
            tasksViewModel?.addNewTask()
            it("새로운 작업 화면을 여는 작업이 실행된다."){

            }
        }
    }
})
```
