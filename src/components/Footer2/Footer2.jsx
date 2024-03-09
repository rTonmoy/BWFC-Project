import React from 'react'
import "./footer2.css"
import { Col, Container, Row } from 'react-bootstrap'

const Footer2 = () => {
  return (
    <section id='footer2'>
        <Container>
            <Row>
                <Col lg={10}>
                    <div className="footer2_left">
                        <p>2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms of Services</p>
                    </div>
                </Col>
                <Col lg={2}>
                    <div className="footer2_right">
                        <p>Supported by Microsoft Startup</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Footer2