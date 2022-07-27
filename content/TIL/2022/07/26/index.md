---
title: "20220726 TIL"
path: blog/TIL/2022-07-26
tags: [TIL]
cover: "./TIL.png"
date: 2022-07-26
excerpt: 2022년 7월 26일 TIL
---

## Facts.

- 프로그래머스 거리두기 문제 풀이 미친 6,9,31 뭐여
- 백엔드 프로젝트를 만들고 typeorm과 디비를 연결을 배웠습니다.
- 운동했습니다!
- 퀴즈 프로젝트를 분리하면서 프로젝트 초기 세팅 과정을 정리했습니다.

## Feelings.

- 마라탕 존맛. 구내염이 생겨서 조금 괴로웠지만 마라탕 너무 맛있었습니다.
- 동기님이 질문을 주셔서 실행 컨텍스트에 대해 설명하게 되었는데…. 쓰읍… 열심히 공부해야겠습니다…

## Findings.

- typeorm
    - [https://gmlwjd9405.github.io/2019/02/01/orm.html](https://gmlwjd9405.github.io/2019/02/01/orm.html)
    - ORM (Object Relationship Mapping , 객체 -관계 매핑)
    - 객체와 관계형 데이터베이스의 데이터를 자동으로 매핑해주는 것을 말합니다.
    - 객체지향 프로그래밍에서는 클래스를 사용해 데이터를 표현하고, 관계형 데이터베이스는 테이블을 사용하기 때문에 각 모델이 불일치하게 되는데 ORM을 사용해서 이 문제를 쉽게 해결할 수 있습니다.
    - ORM을 통해 객체 간의 관계를 바탕으로 SQL을 자동으로 생성하여 불일치를 해결합니다.
    - typeorm은 자바스크립트 또는 타입스크립트와 함께 사용할 수 있는 ORM입니다.
    - typeorm 및 typeorm과 postgres연결을 원활하게 해주기 위한 pg를 같이 설치합니다.
        
        ```jsx
        yarn add typeorm pg
        ```
        
    - 연결 설정 및 실행
        
        ```jsx
        const AppDataSource = new DataSource({
          type: "postgres",
          host: "",
          port: 0000,
          username: "",
          password: "",
          database: "",
          synchronize: true,
          logging: true,
          entities: [Photo, Product],
        });
        
        AppDataSource.initialize().then(() => {
          console.log("연결 성공");
        }); 
        ```
        

## Future Action Plans.

- 다른 사람한테 설명할 수 있도록 공부하기