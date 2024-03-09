import React from 'react'
import "./finance.css"
import { Col, Container, Row } from 'react-bootstrap'

const Finance = () => {
  return (
    <section id='finance'>
         <Container className='bg_clr'>
            <Row className='justify-content-center'>
                <Col lg={4}>
                    <div className="finance_top text-center">
                        <h5>Why Financy</h5>
                        <h2>Why Choose Us</h2>
                    </div>
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col lg={5}>
                    <div className="finance_item">
                        <div className="clr"></div>
                        <h4>No Extra Fee</h4>
                        <p>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                    </div>
                </Col>
                <Col lg={5}>
                    <div className="finance_item">
                        <div className="clr2"></div>
                        <h4>No Extra Fee</h4>
                        <p>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                    </div>
                </Col>
                <Col lg={5}>
                    <div className="finance_item">
                        <div className="clr3"></div>
                        <h4>No Extra Fee</h4>
                        <p>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                    </div>
                </Col>
                <Col lg={5}>
                    <div className="finance_item">
                        <div className="clr4"></div>
                        <h4>No Extra Fee</h4>
                        <p>End-to-end payments and financial management in a single solution. Meet the right platform.</p>
                    </div>
                </Col>
            </Row>
         </Container>
    </section>
  )
}

export default Finance