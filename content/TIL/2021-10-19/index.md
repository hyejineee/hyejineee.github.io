---
title: "20211019 TIL"
path: blog/TIL/20211019
tags: [TIL]
cover:  "./TIL.png"
date: 2021-10-19
excerpt: 
draft: false
---

## Facts

* 안드로이드 알람앱을 구현했습니다. 
* 노트북, ssd 포맷했습니다...
* 국가건강검진을 받았습니다. 

## Feelings

* ssd에 있는 안드로이드 프로젝트가 자꾸 빌드가 안되는 문제가 발생하여 문제를 해결하고자 2틀동안 노트북을 청소했습니다. 처음에는 맥의 홈 디렉토리를 ssd로 바꾸려 했지만 파인더가 실행되지 않는 문제가 발생하여 맥북을 초기화 했습니다. 깔끔하니 좋군요ㅎ 두 번째 해결 방법으로는 ssd의 포맷을 맥os 확장 저널링으로 포맷하는 작업을 했습니다. 덕분에 ssd에 있는 데이터를 정리했습니다. 데이터를 옮기는 데 시간이 많이 걸렸지만 결과적으로 성공했습니다!! 와아아ㅏㅏㅏㅏㅏㅏ!!!!!!!!!
* 이제 ssd에 있는 안드로이드 프로젝트가 멀쩡하게 빌드되어 너무 기쁩니다.
* 덕분에 공부는 많이 하지 못했습니다. 

## Findings

* 안드로이드 백그라운드 작업 
  * 즉시 실행해야 하는 작업 : Thread, Handler, coroutine
  * 지연된 작업 : work manager
  * 특정 시간에 실행해야 하는 작업 : alarm manager

* PendingIntent flag 
  * FLAG_NO_CREATE : 기존 pendingIntent가 없으면 null을 반환하고(pendingIntent를 생성하지 않는다.), 있으면 존재하는 pendingIntent를 반환한다.
  * FLAG_UPDATE_CURRENT : 기존 pendingIntent가 있으면 해당 intent의 Extra data만 변경한다.
  * FLAG_CANCEL_CURRENT : 기존에 있는 pendingIntent는 취소하고 새롭게 만든다.
  * FLAG_IMMUTABLE : 생성된 pendingIntent는 변경할 수 없다.

## Future Action Plans
* 나는 내일이 더 나은 사람입니다.













