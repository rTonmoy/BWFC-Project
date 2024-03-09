import React from 'react'
import "./feature3.css"
import feature3 from "../../assets/feature3.png"
import { Col, Container, Row } from 'react-bootstrap'

const Feature3 = () => {
  return (
    <section id='feature3'>
        <Container>
            <Row>
                <Col lg={6}>
                    <div className="feature3_left">
                        <h5>Our Feature</h5>
                        <h2>All payments are linked to your Financy account</h2>
                        <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>
                        <a href="#">Get Started</a>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="feature3_right">
                        <img src={feature3} className='w-100' alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Feature3