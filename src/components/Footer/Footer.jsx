import React from 'react'
import "./footer.css"
import { Col, Container, Row } from 'react-bootstrap'
import logo5 from "../../assets/logo5.png"

const Footer = () => {
  return (
    <footer>
        <Container>
            <Row>
                <Col lg={6}>
                    <div className="footer_left">
                        <img src={logo5} alt="" />
                        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
                    </div>
                </Col>
                <Col xs={4} lg={2}>
                    <div className="itemm">
                        <h4>Company</h4>
                        <ul>
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Blog</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                </Col>
                <Col xs={4} lg={2}>
                    <div className="itemm">
                        <h4>Product</h4>
                        <ul>
                            <li>Invoicing Platform</li>
                            <li>Accounting Plateform</li>
                            <li>Create Proposal</li>
                            <li>Contracts</li>
                        </ul>
                    </div>
                </Col>
                <Col xs={4} lg={2}>
                    <div className="itemm">
                        <h4>Resources</h4>
                        <ul>
                            <li>Proposal Template</li>
                            <li>Invoice Template</li>
                            <li>Tuturoial</li>
                            <li>How to write</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer