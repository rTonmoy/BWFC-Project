import React from 'react'
import "./logos.css"
import logos from "../../assets/logos.png"
import { Col, Container, Row } from 'react-bootstrap'

const Logos = () => {
  return (
    <section id='logos'>
        <Container>
            <Row className='justify-content-center'>
                <Col lg={10}>
                    <div className="logo_main">
                        <img src={logos} className='w-100'  alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Logos