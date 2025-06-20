import React from 'react'
import Header from './Header'
import './App.css'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import 'animate.css';


function Home() {
    return (
        <div>
         <Header />
            <Carousel controls={false} indicators={true}>
                <Carousel.Item>
                    
                    <img src={require('./img/slider-plant-1.png')} style={{ height: '650px', width: '100%' }} />
                    <Carousel.Caption>
                        <h1 className="animate__animated animate__backInDown hi1" style={{ fontSize: '80px', fontWeight: 'bold' }}>
                            Elegance Redefined
                        </h1>
                        <p>
                            Discover timeless styles for every occasion.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('./img/slider-plant-2.png')} style={{ height: '650px', width: '100%' }} />
                    <Carousel.Caption>
                        <h1  className="animate__animated animate__backInDown hi1" style={{ fontSize: '80px', fontWeight: 'bold' }}>
                            Timeless Elegance
                        </h1>
                        <p>
                            Explore classic designs that suit every moment.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={require('./img/slider-plant-3.png')} style={{ height: '650px', width: '100%' }} />
                    <Carousel.Caption>
                        <h1  className="animate__animated animate__backInDown hi1" style={{ fontSize: '80px', fontWeight: 'bold' }}>
                            Refined Beauty
                        </h1>
                        <p>

                            Explore classic designs that suit every moment.

                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container style={{ maxWidth: '1550px' }}>
                <div className='box my-6'>
                    <h3 className='title fs-1 f-bold'>Why Shop With Us?</h3>
                    <Row className='my-5'>
                        <Col xs={6} md={3}>
                            <Row>
                                <Col xs={3}>
                                    <img src={require('./img/t1.png')} className='icon1' />
                                </Col>
                                <Col xs={9}>
                                    <h3 className='f-bold'>Quality trees</h3>
                                    <p className='textp'>Always the best</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6} md={3}>
                            <Row>
                                <Col xs={3}>
                                    <img src={require('./img/t2.png')} className='icon1' />
                                </Col>
                                <Col xs={9}>
                                    <h3 className='f-bold'>Eco-Friendly</h3>
                                    <p className='textp'>Expect more by default</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6} md={3}>
                            <Row>
                                <Col xs={3}>
                                    <img src={require('./img/t3.png')} className='icon1' />
                                </Col>
                                <Col xs={9}>
                                    <h3 className='f-bold'>Great support</h3>
                                    <p className='textp'>We’re here to help</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={6} md={3}>
                            <Row>
                                <Col xs={3}>
                                    <img src={require('./img/t4.png')} className='icon1' />
                                </Col>
                                <Col xs={9}>
                                    <h3 className='f-bold'>Expert Care</h3>
                                    <p className='textp'>Ready to impress</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>

                <Row>
                    <Col xs={12} md={6}>
                        <img src={require('./img/plant-1.png')} style={{ width: '90%', marginLeft: '10%' }} />
                    </Col>
                    <Col xs={12} md={6} className="d-flex flex-column justify-content-center">
                        <h2 className="hi2">Refresh Your Space <br /> with Greenery</h2>
                        <p className="text">
                            Discover a range of indoor plants that breathe life into <br />
                            your home. Shop now and elevate your space with <br />
                            nature's beauty.
                        </p>
                        <button className="button1">Shop Now</button>
                    </Col>
                </Row>


                <Row>
                    <Col xs={12}>
                        <h1 className='hi1'>Featured Products</h1>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6} md={3} className='my-5'>
                        <div className='image-container '>
                            <img src={require('./img/product-1.png')} style={{ borderRadius: '20px', height: '80%', width: '100%' }} />
                            <div className="hover-img">
                                <img src={require('./img/product-01.png')} style={{ borderRadius: '20px', height: '100%', width: '100%' }} />
                            </div>
                        </div>
                        <br /><br />
                        <h1 className='fs-2'>Ficus 'Ruby'</h1>
                        <h3 className='hi3'>$110.00 <del>$130.00</del></h3>
                    </Col>
                    <Col xs={6} md={3} className='my-5'>
                        <div className='image-container'>
                            <img src={require('./img/product-2.png')} style={{ borderRadius: '20px', height: '80%', width: '100%' }} />
                            <div className="hover-img">
                                <img src={require('./img/product-02.png')} style={{ borderRadius: '20px', height: '100%', width: '100%' }} />
                            </div>
                        </div>
                        <br /><br />
                        <h1 className='fs-2'>Olive Tree</h1>
                        <h3 className='hi3'>$150.00</h3>
                    </Col>
                    <Col xs={6} md={3} className='my-5'>
                        <div className='image-container'>
                            <img src={require('./img/product-3.png')} style={{ borderRadius: '20px', height: '80%', width: '100%' }} />
                            <div className="hover-img">
                                <img src={require('./img/product-03.png')} style={{ borderRadius: '20px', height: '100%', width: '100%' }} />
                            </div>
                        </div>
                        <br /><br />
                        <h1 className='fs-2'>zz plant</h1>
                        <h3 className='hi3'>$145.00 <del>$160.00</del></h3>
                    </Col>
                    <Col xs={6} md={3} className='my-5'>
                        <div className='image-container'>
                            <img src={require('./img/product-04.png')} style={{ borderRadius: '20px', height: '80%', width: '100%' }} />
                            <div className="hover-img">
                                <img src={require('./img/product-4.png')} style={{ borderRadius: '20px', height: '100%', width: '100%' }} />
                            </div>
                        </div>
                        <br /><br />
                        <h1 className='fs-2'>Brid Of Paradise</h1>
                        <h3 className='hi3'>$130.00 <del>$150.00</del></h3>
                    </Col>
                </Row>

                <Row className='my-5'>
                    <Col md={6} xs={12} style={{ marginTop: '10%' }}>
                        <h5>LIFE GATHERS AROUND PLANTS</h5>
                        <h1 className='hi'>Perfect Plants for Every<br /> Corner</h1>
                        <p style={{ fontSize: '22px' }}>From small succulents to statement plants, find the ideal green <br />
                            companion for any room. Explore our collection today!</p>
                        <button className="button2">Shop Collection</button>
                    </Col>
                    <Col md={6} xs={12}>
                        <div className='image-container1'>
                            <div className='img-1'>
                                <img src={require('./img/sub-plant-3.png')} style={{ width: '100%' }} />
                            </div>
                            <div className='img-2'>
                                <img src={require('./img/plant-2.png')} style={{ width: '100%', borderRadius: '20px' }} />
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <h1 className='hi text-center my-5'>Shop By Collection</h1>
                    </Col>
                </Row>

                <Row>
                    <Col xs={6} md={3}>
                        <div className='image-container2'>
                            <img src={require('./img/c1.png')}/>
                        </div><br />
                        <h2 className='ho2'>Plants</h2>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className='image-container2'>
                            <img src={require('./img/c2.png')} />
                        </div><br />
                        <h2 className='ho2'>Plant Care</h2>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className='image-container2'>
                            <img src={require('./img/c3.png')} />
                        </div><br />
                        <h2 className='ho2'>Pots</h2>
                    </Col>
                    <Col xs={6} md={3}>
                        <div className='image-container2'>
                            <img src={require('./img/c4.png')} />
                        </div><br />
                        <h2 className='ho2'>Pet-Friendly</h2>
                    </Col>
                </Row>


                <Row>
                    <Col xs={12} className='bg-green text-white text-center my-5'>
                        <Carousel indicators={true} controls={false}>
                            <Carousel.Item>
                                <div className='my-5'>
                                    <FontAwesomeIcon icon={faLeaf} style={{ fontSize: '50px' }} /><br /><br />
                                    <h4>HAPPY CUSTOMERS</h4><br />
                                    <h1 className='hi'>"Beautiful, Healthy Plants"</h1>
                                    <p className='fs-4 custom-mb-6'>
                                        I ordered a few indoor plants, and they arrived in perfect condition.
                                        They’ve added so <br /> much life to my living room! I’ll definitely be back for
                                        more.
                                    </p><br/>
                                    <h5 style={{fontWeight:'400'}}>Vineta</h5>
                                    <h6 style={{fontWeight:'300'}}>
                                            Item purchased : <span>Olive Tree</span>
                                    </h6><br/>
                                </div>
                            </Carousel.Item>

                            <Carousel.Item>
                                <div className='my-5'>
                                    <FontAwesomeIcon icon={faLeaf} style={{ fontSize: '50px' }} /><br /><br />
                                    <h4>HAPPY CUSTOMERS</h4><br />
                                    <h1 className='hi'>"Gorgeous, Thriving Plants!"</h1>
                                    <p className='fs-4 custom-mb-6'>
                                        I ordered a few indoor plants, and they arrived in perfect condition.
                                        They’ve <br /> added so much life to my living room.
                                    </p><br />
                                    <h5 style={{fontWeight:'400'}}>Lisa</h5>
                                    <h6 style={{fontWeight:'300'}}>
                                            Item purchased : <span>Olive Tree</span>
                                    </h6><br/>
                                </div>
                            </Carousel.Item>
                            
                            <Carousel.Item>
                                <div className='my-5'>
                                    <FontAwesomeIcon icon={faLeaf} style={{ fontSize: '50px' }} /><br /><br />
                                    <h4>HAPPY CUSTOMERS</h4><br />
                                    <h1 className='hi'>"Vibrant, Lush Greenery!"</h1>
                                    <p className='fs-4 custom-mb-6'>
                                        I recently got a few indoor plants, and they arrived in flawless condition.<br />
                                        They’ve brought so much freshness to my home.
                                    </p><br />
                                    <h5 style={{fontWeight:'400'}}>Emily</h5>
                                    <h6 style={{fontWeight:'300'}}>
                                            Item purchased : <span>Ficus Audrey Tree</span>
                                    </h6><br/>
                                </div>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>

                <Row>
                    <Col md={12}>
                        <h1 className='hi text-center my-5'>Shop By @PlantStore</h1>
                    </Col>
                </Row>

                <Row className='mb-5'>
                    <Col xs={4} md={2}>
                        <img src={require('./img/gallery-1.png')} style={{width:'100%',borderRadius:'20px'}}/>
                    </Col>
                    <Col xs={4} md={2}>
                        <img src={require('./img/gallery-2.png')} style={{width:'100%',borderRadius:'20px'}}/>
                    </Col>
                    <Col xs={4} md={2}>
                        <img src={require('./img/gallery-3.png')} style={{width:'100%',borderRadius:'20px'}}/>
                    </Col>
                    <Col xs={4} md={2}>
                        <img src={require('./img/gallery-4.png')} style={{width:'100%',borderRadius:'20px'}}/>
                    </Col>
                    <Col xs={4} md={2}>
                        <img src={require('./img/gallery-5.png')} style={{width:'100%',borderRadius:'20px'}}/>
                    </Col>
                    <Col xs={4} md={2}>
                        <img src={require('./img/gallery-6.png')} style={{width:'100%',borderRadius:'20px'}}/>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    )
}

export default Home