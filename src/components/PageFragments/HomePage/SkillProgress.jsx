import React from 'react'
import { Row, Col } from 'antd'
import ProgressBar from '../../Progress'

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={65} text="Typescript" />

        <ProgressBar percent={65} text="Javascript" />

        <ProgressBar percent={65} text="React" />

        <ProgressBar percent={55} text="Nextjs" />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={40} text="Jest" />
        <ProgressBar percent={60} text="Android" />
        <ProgressBar percent={60} text="Kotlin" />

      </Col>
    </Row>
  </div>
)

export default SkillsProgress
