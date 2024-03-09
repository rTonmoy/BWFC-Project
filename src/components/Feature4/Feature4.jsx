import React from 'react'
import "./feature4.css"
import { Col, Container, Row } from 'react-bootstrap'
import feature4 from "../../assets/feature4.png"

const Feature4 = () => {
  return (
    <section id='feature4'>
        <Container>
            <Row>
                <Col lg={6}>
                    <div className="feature4_left">
                        <h5>Our Feature</h5>
                        <h2>All payments are linked to your Financy account</h2>
                        <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                        <a href="#">Get Started</a>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="feature4_right">
                        <img src={feature4} className='w-100' alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Feature4