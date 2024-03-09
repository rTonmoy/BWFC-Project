import React from 'react'
import "./choose.css"
import { Col, Container, Row } from 'react-bootstrap'

const Choose = () => {
  return (
   <section id='choose'>
    <Container>
        <Row>
            <Col lg={7}>
                <div className="choose_left">
                    <h5>Why Choose Us</h5>
                    <h2>Track your crytpo portfolio on the best way possible</h2>
                    <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                </div>
            </Col>
            <Col lg={5}>
                <div className="choose_right">
                    <div className="input1"><input type="email" placeholder='Email Address' /></div>
                    <div className="input2"><input type="password" placeholder='Password' /></div>
                    <a href="#">Get Started</a>
                </div>
            </Col>
        </Row>
    </Container>
   </section>
  )
}

export default Choose