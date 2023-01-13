---
title: '[기초] PendingIntent  '
path: blog/android-pending-intent
tags: [Android]
cover: './cover.png'
date: 2021-10-14
excerpt: 안드로이드 - pendingIntent
draft: false
---

## PendingIntent

다른 애플리케이션에 PendingIntent를 제공하면 해당 애플리케이션이 그 인텐트를 처리할 수 있는 권한을 갖게 할 수 있는 것입니다.
다른 프로세스에 처리를 맡겨야 하는 경우 사용합니다.

### 주의

- 동일한 값을 갖는 PendingIntent(동일한 액션, 동일한 인텐트, 데이터, 범주 및 구성요소, 동일한 플래그)는 같은 pendingIntent 객체로 취급됩니다.
- 때문에 다른 PendingIntent를 얻고 싶은 면 값을 다르게 해서 만들어야 합니다.

### 어떻게 사용하는가?

- getService, getBroadcast, getActivityies, getActivity를 사용하여 pendingIntent 객체를 만들 수 있습니다.

### 사용 예시

- Notification을 사용할 때 PendingIntent를 사용합니다. 알림 창에 있는 noti를 클릭 시 제어하는 부분에 PendingIntent를 사용합니다.
- 알림 창에 있는 noti를 클릭하면 NotificationManager가 전달된 PendingIntent를 실행합니다.
- NotificationManager는 일반 애플리케이션과 다른 프로세스이기 때문에 PendingIntent를 사용합니다.

- 그밖에 바탕화면의 위젯, 알람 매니저등에 사용됩니다.

### Pending Intent Flag

- FLAG_NO_CREATE : 기존 pendingIntent가 없으면 null을 반환하고(pendingIntent를 생성하지 않는다.), 있으면 존재하는 pendingIntent를 반환한다.
- FLAG_UPDATE_CURRENT : 기존 pendingIntent가 있으면 해당 intent의 Extra data만 변경한다.
- FLAG_CANCEL_CURRENT : 기존에 있는 pendingIntent는 취소하고 새롭게 만든다.
- FLAG_IMMUTABLE : 생성된 pendingIntent는 변경할 수 없다.

### Ref.

- https://developer.android.com/reference/android/app/PendingIntent
- https://www.charlezz.com/?p=861
