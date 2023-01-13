import React from 'react'
import { Row, Col } from 'antd'
import ProgressBar from '../../Progress'

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={60} text="Android" />

        <ProgressBar percent={60} text="Kotlin" />

        <ProgressBar percent={40} text="Junit" />

        <ProgressBar percent={30} text="Mockito" />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={50} text="Javascript" />
        <ProgressBar percent={30} text="ReactJS" />
        <ProgressBar percent={30} text="Jest" />

        <ProgressBar percent={30} text="Gatsby" />
      </Col>
    </Row>
  </div>
)

export default SkillsProgress
