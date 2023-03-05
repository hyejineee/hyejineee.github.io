import React from 'react'
import { Row, Col } from 'antd'
import AboutTile from '../../AbouTile'
import { stripTags, domHtml } from '../../../utils/stripTags'

import SEO from '../../Seo'

const pageText = {
  paraOne: `안녕하세요. 현혜진입니다!<br>
    <br>
    디자인과 전공 중 '디지털 미디어'수업에서 프로그래밍을 처음 접하였고,<br>
    상상했던 것을 직접 구현하는 것에 매료되어 대학 휴학 후 학원을 통해 개발에 입문하였습니다. <br>
    안드로이드 개발자로서 아르바이트 활동과 외주 작업을 하며 '프로그래밍'이 사람들에게 새로운 경험을 제시할 수 있다는 것을 깨달았습니다. <br>
    끊임없이 새로운 경험을 원하는 사람들의 니즈에 발맞춰 성장하는 개발자가 되고 싶습니다.<br>
    <br>
    <h3>저는, </h3>
    <br>

    <b>변경에 유연하게 대응할 수 있는 구조에 대해서 관심이 많습니다.</b>
    <ul>
      <li>사용자에게 더 나은 서비스를 제공하기 위해서는 서비스는 변화에 유연하게 대응할 수 있어야 합니다.</li>
      <li>관심사를 분리하고 의존성을 최소화하여 변경에 유연한 구조를 설계하기 위해 항상 테스트 코드를 짜며 개발하고 있습니다.</li>
    </ul>

    <br>

    <b>함께 성장할 수 있습니다.</b>
    <ul>
      <li>현재 우리가 갖고 있는 문제점을 파악하고, 더 나은 해결 방법을 공유하고 동료와 더불어 학습합니다.</li>
      <li>프로젝트에 테스트 코드를 작성하기 쉬운 유연한 구조를 만들기 위해 팀원과 함께 repository 패턴 도입을 의논하고 
       필요한 개념을 학습하여 프로젝트에 적용한 경험이 있습니다. </li>
    </ul>

    <br>

    <b>비효율 적인 것을 개선하는 것을 좋아합니다.</b>
    <ul>
      <li>비효율적으로 사용되는 부분을 찾아 리팩터링을 진행합니다.</li>
      <li>프로젝트에서 반응형을 위해서 비효율적으로 사용되고 있는 미디어 쿼리 구문을 emotion의 composition 개념을 활용해
       재사용할 수 있는 함수로 리팩터링한 경험이 있습니다.</li>
    </ul>

    <br>
    
    <b>개발 외적으로, </b>
    <ul>
      <li>호기심을 원동력으로 공부하고 있습니다. 항상 왜? 어떻게?라는 질문을 통해서 관심 있는 분야의 지식을 쌓습니다.</li>
      <li>사용자 경험을 디자인 하는 것에 관심이 있습니다. 어떤 정보를 어떤 방식으로 전달해야 내가 원하는 만큼의 가치를 사용자에게 전달할 수 있을까를 고민합니다. 
    기회가 된다면 UX에 대해서 제대로 공부하고 싶습니다. </li>
      <li>모험을 좋아합니다. 새로운 것을 경험하면서 사는데 필요한 가치관을 찾아 가는 중입니다.</li>
    </ul>

    <br>
   `,
}

const AboutMe = () => {
  const description = `${stripTags(pageText.paraOne)}`
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={[
            'hyejineee',
            'Backpacking',
            'android developer',
            'frontend developer',
            'Javascript',
            'Typescript',
            'Nextjs',
            'ReactJS',
            'Android',
            'Gatsby',
            'Kotlin',
          ]}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraOne)} />
      </div>
      
    </>
  )
}
export default AboutMe
