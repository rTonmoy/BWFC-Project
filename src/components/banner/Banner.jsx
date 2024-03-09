import React from 'react'
import "./banner.css"
import { Container, Row ,Col} from 'react-bootstrap'
import banner from "../../assets/banner.png"
import { FaPlayCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <section id='banner'>
        <Container>
            <Row>
                <Col lg={6}>
                    <div className="banner_left">
                        <h1>Managing business payments has never been easier</h1>
                        <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                            <a className='bann_btnn' href="#">Get Started</a>
                            <FaPlayCircle className='logo2' /><a className='bann_btnn2' href="#">See How It Works</a>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="banner_right">
                    <img src={banner} className='w-100' alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner