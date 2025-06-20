import React from 'react'
import './Footer.css'
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Footer() {
    return (
        <div>
            <footer className='bg-green1'>
                <Row>
                    <Col xs={6} md={4} className='my-5'>
                        <div className='ms-5'>
                            <h1 style={{ fontSize: '50px' }}>Plant store</h1>
                            <p style={{ fontSize: '18px', fontWeight: '350' }}>
                                “Beautiful, healthy plants for every home and <br /> garden—perfect for all plant lovers.”
                            </p>
                            <h5 style={{ fontSize: '29px' }}>Visit our store :-</h5>
                            <h5 style={{ fontSize: '20px', fontWeight: '400' }}>Mon - Sat : 9AM - 10PM</h5>
                            <h5 style={{ fontSize: '20px', fontWeight: '400' }}>Sun : Closed</h5>
                            <p><FontAwesomeIcon icon={faPhone} className='icon3' />
                                <span style={{ fontSize: '20px' }}>  +(64) 8342 1245</span></p>
                        </div>
                    </Col>
                    <Col xs={6} md={4} className='my-5'>
                        <div style={{ marginTop: '5%' }}>
                            <h3>Subscribe Newsletter</h3><br />
                            <p style={{ fontSize: '20px', fontWeight: '350' }}>
                                We invite you to register to read the latest news, offers<br />
                                and events about our company. We promise not spam<br />  your inbox.
                            </p>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="Enter your e-mail.." style={{width:'85%'}} />
                                </Form.Group>
                                <Button type="submit" className='button'>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    <Col xs={6} md={4} className='my-5'>
                        <Row>
                            <Col xs={6} md={6}>
                                <div style={{ marginTop: '10%' }}>
                                    <h4 style={{ fontSize: '30px' }}>About us</h4><br />
                                    <h5 className='hi5'>About us</h5>
                                    <h5 className='hi5'>Contact us</h5>
                                    <h5 className='hi5'>Our store</h5>
                                    <h5 className='hi5'>Our stroy</h5>
                                </div>
                            </Col>
                            <Col xs={6} md={6}>
                                <div style={{ marginTop: '10%' }}>
                                    <h4 style={{ fontSize: '30px' }}>Resource</h4><br />
                                    <h5 className='hi5'>Privacy Policies</h5>
                                    <h5 className='hi5'>Terms & Conditions</h5>
                                    <h5 className='hi5'>Returns & Refunds</h5>
                                    <h5 className='hi5'>FAQ’s</h5>
                                    <h5 className='hi5'>Shipping</h5>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <hr />
                    <h6 style={{ textAlign: 'center', fontWeight: '400', wordSpacing: '2px' }}>Copyright &copy; 2025 by PlantStore. All Rights Reserved</h6>
                </Row>
            </footer>
        </div>
    )
}

export default Footer