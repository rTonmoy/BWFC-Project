import React from 'react'
import Slider from "react-slick";
import "./testi.css"
import { Col, Container, Row } from 'react-bootstrap'
import testi from "../../assets/testi.png"
import testi1 from "../../assets/testi.png"
import testi2 from "../../assets/testi.png"
import cott from "../../assets/cott.png"
import stars from "../../assets/stars.png"
import { IoIosArrowRoundBack , IoIosArrowRoundForward } from "react-icons/io";


function SampleNextArrow(props) {
    const {onClick } = props;
    return (
      <div className='next' onClick={onClick}><IoIosArrowRoundForward /></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div className='prev' onClick={onClick}><IoIosArrowRoundBack /></div>
    );
  }

const Testi = () => {   

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };

  return (
    <section id='testi'>
        <Container>
            <Row>
                <Col lg={4}>
                    <div className="testi_top">
                        <h5>Testimonials</h5>
                        <h3>Check what our 
                        clients are saying</h3>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col lg={7}>
                <Slider {...settings}>
                <div className="testi_left">
                    <img src={testi} className='w-100' alt="" />
                    </div>
                    <div className="testi_left">
                    <img src={testi1} className='w-100' alt="" />
                    </div>
                    <div className="testi_left">
                    <img src={testi2} className='w-100' alt="" />
                    </div>
                </Slider>
                </Col>
                <Col lg={5}>
                    <div className="testi_right">
                        <img src={cott} alt="" />
                        <h3>Save Time Managing Social Media For Your Business</h3>
                        <p>Is be upon sang fond must shew. Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
                        <h4>Believing neglected so so allowance existence departure in. In design active temper be uneasy.</h4>
                        <img src={stars} alt="" />
                        <h5>Angela Taylor</h5>
                        <h6>CEO SAMSUNG</h6>
                    </div>
                </Col>
            </Row>
               
        </Container>
    </section>
  )
}

export default Testi