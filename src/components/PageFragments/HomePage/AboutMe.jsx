import React from 'react'
import { Row, Col } from 'antd'
import AboutTile from '../../AbouTile'
import { stripTags, domHtml } from '../../../utils/stripTags'

import SEO from '../../Seo'

const pageText = {
  paraOne: `안녕하세요. 현혜진입니다!<br>
    디자인과 전공 중 '디지털 미디어'수업에서 프로그래밍을 처음 접하였고, 상상했던 것을 직접 구현하는 것에 매료되어 대학 휴학 후 학원을 통해 안드로이드 개발에 입문하였습니다. 
    
    <br><br>

    안드로이드 개발자로 아르바이트 활동과 외주 작업으로 전시에 사용되는 심리 테스트 사이트 작업을 하며 '프로그래밍'이 사람들에게 새로운 경험을 제시할 수 있다는 것을 깨달았습니다.
     끊임없이 새로운 경험을 원하는 사람들의 니즈에 발맞춰 성장하는 개발자가 되고 싶습니다.
    <br><br>

    <ul>
      <li>항상 코드가 어떻게 하면 더 효율적으로 동작할 수 있을지 고민하고, 더 나은 방법을 찾아 적용합니다.
    그렇기에 변경의 전파가 적은 코드와 구조에 관심을 두고 프로젝트에 적용합니다.</li>
    <li>호기심을 원동력으로 공부하고 있습니다. 항상 왜? 어떻게?라는 질문을 통해서 관심 있는 분야의 지식을 쌓습니다.</li>
    <li>사용자 경험을 디자인 하는 것에 관심이 있습니다. 어떤 정보를 어떤 방식으로 전달해야 내가 원하는 만큼의 가치를 사용자에게 전달할 수 있을까를 고민합니다. 
    기회가 된다면 UX에 대해서 제대로 공부하고 싶습니다. </li>
    <li>모험을 좋아합니다. 새로운 것을 경험하면서 사는데 필요한 가치관을 찾아 가는 중입니다.</li>
    </ul>
  
    <br><br>

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
