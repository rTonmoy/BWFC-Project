import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import "./feature.css"
import feature from "../../assets/feature.png"

const Feature = () => {
  return (
    <section id='feature'>
        <Container>
            <Row>
                <Col lg={6}>
                    <div className="feature_left">
                        <img src={feature} className='w-100' alt="" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="feature_right">
                        <h5>Our Feature</h5>
                        <h2>Receive payments quickly from anywhere</h2>
                        <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                        <a href="#">Get Started</a>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Feature