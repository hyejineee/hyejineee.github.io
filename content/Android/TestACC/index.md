---
title: '안드로이드 테스트 베이직'
path: blog/test-basic
tags: [Android]
cover: './testing-workflow.png'
date: 2021-07-13
excerpt: 안드로이드 테스트에 대해 공부하자!
draft: true
---

[안드로이드 코드랩 - 테스트 베이직](https://developer.android.com/codelabs/advanced-android-kotlin-training-testing-basics#0)

- 발생한 문제 1 : No instrumentation registered! Must run under a registering instrumentation.에러 발생 - application context가 생성이 안됨.
- 해결 : kotest에 있는 robolectric extension을 사용함.

- 참고

  - [kotest extension](https://kotest.io/docs/extensions/robolectric.html)

  - @RunWith()를 사용할 경우 여전히 문제가 발생하게 됨. 위와 같은 에러가 뜨지는 않지만 taskViewModel 객체가 만들어지지 않음. 만드는 도중에 테스트 중단. 나중에 디버거로 보니까 NPE뜨는 것 같음.

  - BeforeSpec 콜백에서 처리해줌. 테스트 본문에서 할 경우 위와 같은 에러 발생

-> kotest에 있는 robolectric extension 사용

```kotlin

@RobolectricTest
class TasksViewModelTest : DescribeSpec() {
    var application: Application? = null
    var tasksViewModel: TasksViewModel? = null
    val observer = Observer<Event<Unit>> {}


    override fun beforeSpec(spec: Spec) {
        super.beforeSpec(spec)
        try {
            application = ApplicationProvider.getApplicationContext()
            tasksViewModel = TasksViewModel(application!!)
        } catch (e: Exception) {
            println(e)
        }
    }

    override fun afterEach(testCase: TestCase, result: TestResult) {
        super.afterEach(testCase, result)
        tasksViewModel?.newTaskEvent?.removeObserver(observer)

    }

    init {
        listener(InstantExecutorListener())
        describe("addNewTask()") {
            tasksViewModel?.newTaskEvent?.observeForever(observer)


            context("새로운 작업이 추가되었을 떄") {
                tasksViewModel?.addNewTask()

                it("새로운 작업 화면을 여는 작업이 실행된다.") {

                    val value = tasksViewModel?.newTaskEvent?.value
                    value?.getContentIfNotHandled() shouldNotBe nullValue()
                }
            }
        }
    }
}

```

- 발생한 문제2 : 테스트가 끝까지 실행되지 않았는 데 중간에 끝난다.

  - 디버거로 원인을 찾아본 결과 `tasksViewModel?.newTaskEvent?.observeForever(observer)`부분에서 `java.lang.IllegalStateException: Cannot invoke observeForever on a background thread` 발생

  - 코드랩에 나온대로 백그라운드에서 실행할 수 있도록 junit rule을 추가해줘야 하는데 나는 kotest를 쓰고 있다.

  - 어디선가 kotest junit5를 바탕으로 만들었다는 걸 본 것같다. -> extendWith 어노테이션을 사용하고 구현 되어 있는 InstantTaskExecutorRule 코드를 참고, [junit5에서 extension](https://jeroenmols.com/blog/2019/01/17/livedatajunit5/)을 만드는 방법을 참고해서 적용해보았지만 실패. 아예 다른 싸이클을 갖고 있는 것 같다. 자세하게 찾아볼 것.

  - 그러다가 리스너를 추가해서 문제를 해결한 코드를 발견 (https://gist.github.com/OliverCulleyDeLange/84aa4d2b299b2dfff3746bfdf346cd3e)

    - InstantTaskListener만드는거.

  - 적용해서 전체 테스트가 무사히 끝나도록 완료!


    ```
    delegate
    describe
    context
    it
    remove delegate
    ```
