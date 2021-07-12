import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';

import SEO from '../../Seo';

const pageText = {

  paraOne: `안녕하세요. 현혜진입니다!<br>
    디자인 과를 전공하다 개발에 흥미를 느껴 개발자가 되기로 했습니다. 좋은 개발자가 되기 위해 학습하고 노력합니다. 
    근복적인 것에 대해 공부합니다. 객체지향과 함수형, 클린 아키텍처에 관심이 많습니다. 
    현재는 안드로이드 애플리케이션을 개발하고 있습니다. 모바일 애플리케이션 개발은 너무 재미있습니다🤩🤩 앞으로 ios 애플리케이션도 공부할 생각입니다. 

    <br><br>

    사용자 경험을 디자인 하는 것에 관심이 있습니다. 어떤 정보를 어떤 방식으로 전달해야 내가 원하는 만큼의 가치를 사용자에게 전달할 수 있을까를 고민합니다. 
    아직 자세하게 책을 읽거나 강의를 들으며 공부하고 있지는 않지만 기회가 된다면 UX에 대해서 제대로 공부하고 싶습니다. 

    <br><br>

    자연으로 여행하는 것을 좋아합니다. 가방을 메고 자연으로 백패킹 여행을 떠납니다. 자전거 여행도 좋아합니다. 백패킹 + 자전거 = 최고의 여행😆😆
   `,
};

const AboutMe = () => {
  const description = `${stripTags(pageText.paraOne)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['hyejineee', 'Backpacking', 'android developer', 'Javascript', 'ReactJS', 'Android', 'Gatsby', 'Kotlin']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraOne)} />

      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="Journey"
            textH3="자전거 + 백패킹 = 👍🏻"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Mobile app programming"
            textH3="앱 개발 너무 재미있어🤩"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="User Experience"
            textH3="디자인 궁금해🤔"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
