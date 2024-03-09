import React from 'react'
import "./feature2.css"
import { Col, Container, Row } from 'react-bootstrap'

const Feature2 = () => {
  return (
    <section id='feature2'>
        <Container className="container_bg">
                <Row>
                    <Col lg={7}>
                        <div className="feature2_left">
                            <h5>Our Feature</h5>
                            <h2>Receive payments quickly from anywhere</h2>
                            <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                        </div>
                    </Col>

                    <Col lg={5}>
                        <div className="feature2_right">
                            <h5>Get Started for Free</h5>
                            <div className="inputt1"><input type="email" placeholder='Email Address' /></div>
                            <div className="inputt1"> <input type="password" placeholder='Password' /></div>
                            <a href="#">Get Started</a>
                        </div>
                    </Col>
                </Row>
        </Container>
    </section>
  )
}

export default Feature2