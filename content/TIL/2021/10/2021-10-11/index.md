---
title: '20211011 TIL'
path: blog/TIL/20211011
tags: [TIL]
cover: './TIL.png'
date: 2021-10-11
excerpt: GTD로 정리한 일 해내기
draft: false
---

## Facts

- 패캠 고급정렬 유형 문제풀이 강의를 들었습니다.

  - 백준 수 정렬하기2, k번째 수 문제를 풀었습니다.

- 패캠 안드로이드 강의 수강
  - 기초 부분 프로젝트 부분을 완료했습니다.
- 포트폴리오 포맷 만들기

## Feelings

- 지난주 한 주 동안 GTD를 읽으면서 할 일들을 정리했습니다. 항상 머릿속에 뭐 해야지를 생각하다가 작업하는 도중에 다른 작업하고 또 다른 작업하고 생산성이 떨어졌는데 머릿속에 있는 할 일을 모두 적으니 한 결 편해진 것 같습니다. 작업 중간에 다른 작업이 생각나면 하는 방식이 습관이 되어 오늘 작업 중에도 간혹 그랬지만 생각이 난다면 바로 적어놓고 현재 일에 집중하려고 노력하고 있습니다.

- 오랜만에 안드로이드 공부를 했습니다. 기초적인 부분 부터 다시 보는 중입니다. 기초부터 다시 차근차근 정리하려고 합니다.

## Findings

- 안드로이드 constraintLayout의 속성들
  - `layout_constraintHorizontal_weight` and `layout_constraintVertical_weight` : match_constraint를 사용하는 요소간에 공간을 어떻게 분배할 지 조절하는 속성이다.
  - constraintLayout을 사용할 때 0dp로 입력한 값을 match_constraint라고 읽는다.
  - `layout_constraintDimensionRatio`: 위젯의 크기를 비율로 설정할 수 있다.
    ```xml
        <Button android:layout_width="wrap_content"
                android:layout_height="0dp"
                app:layout_constraintDimensionRatio="가로:세로" />
    ```
    - width나 height 중에 적어도 하나 이상 match_constraint값을 가져야한다.
    - 다른 한 쪽을 기준으로 비율을 결정할 때 `W`또느 `H`를 사용한다.
- kotlin timer, countDownTimer
