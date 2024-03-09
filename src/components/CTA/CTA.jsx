import React from 'react'
import "./cta.css"
import cta from "../../assets/CTA.png"
import { Col, Container, Row } from 'react-bootstrap'

export const CTA = () => {
  return (
   <section id='cta'>
    <Container>
        <Row>
            <Col lg={12}>
                <div className="cta_main">
                    <img src={cta} className='w-100' alt="" />
                </div>
            </Col>
        </Row>
    </Container>
   </section>
  )
}
