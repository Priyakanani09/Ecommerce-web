import React from 'react'
import Header from './Header'
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Footer from './Footer';


function Blog() {
  return (
    <div>
      <Header />
      <div className="about-hero text-center text-white " style={{ backgroundImage: `url(${require('./img/about1.png')})`, backgroundSize: 'cover', padding: '150px 0' }}>
        <h1 className="display-4 fw-bold ">News PlantStore</h1>
        <p className="fs-4">Blog : contact</p>
      </div>
      <Container style={{ maxWidth: '1570px' }}>
        <Row className='my-7'>
          <Col xs={12} md={6} className='my-2 px-4'>
            <Row className='border'>
              <Col md={6} className="d-flex flex-column justify-content-center ">
                <p style={{fontSize:'22px',fontWeight:'400',}}>16 Jun, 2024</p>
                <h2>Self Watering Planters</h2><br/>
                <p style={{fontSize:'17px',fontWeight:'500',color: 'gray'}}>Upgrade your garden with premium self-watering planters from Green Carpet. Designed for
                   easy plant care, these planters keep your plants healthy and hydrated with minimal effort. </p>
              </Col>
              <Col md={6} className='my-4'>
                  <img src={require('./img/product-6.png')} style={{width:'90%',marginLeft: '20px' }}/>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} className='my-2 px-4'>
            <Row className='border'>
              <Col md={6} className="d-flex flex-column justify-content-center ">
                <p style={{fontSize:'22px',fontWeight:'400',}}>25 Sep, 2024</p>
                <h2>Plant Pots With Metal Stand</h2><br/>
                <p style={{fontSize:'17px',fontWeight:'500',color: 'gray'}}>Elevate your indoor plants or home outdoor space with our sleek , balcony/living room and versatile Classic Matte Round
                pot. Available in anthracite and taupe.</p>
              </Col>
              <Col md={6} className='my-4'>
                  <img src={require('./img/product-11.png')} style={{width:'90%',marginLeft: '20px'}}/>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className='my-5'>
          <Col xs={12} md={6} className='my-2 px-4'>
            <Row className='border'>
              <Col md={6} className="d-flex flex-column justify-content-center ">
                <p style={{fontSize:'22px',fontWeight:'400',}}>25 Sep, 2024</p>
                <h2>Face Planter Pots</h2><br/>
                <p style={{fontSize:'17px',fontWeight:'500',color: 'gray'}}>UMESONG Smily Face Planter Pot Cute Resin Flower Head Planters for
                   Indoor Outdoor Unique Sit Rocking Chair Succulent Pots Gift IdeaI for Mother and Appreciation Christmas with Drainage Hole, Beige</p>
              </Col>
              <Col md={6} className='my-4'>
                  <img src={require('./img/product-12.png')} style={{width:'90%',marginLeft: '20px' }}/>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} className='my-2 px-4'>
            <Row className='border'>
              <Col md={6} className="d-flex flex-column justify-content-center ">
                <p style={{fontSize:'22px',fontWeight:'400',}}>18 Oct, 2024</p>
                <h2>Round Garden Pots</h2><br/>
                <p style={{fontSize:'17px',fontWeight:'500',color: 'gray'}}>Round Large Dish Garden Pots are wide, shallow containers designed to multiple small plants in a single.
                   Their elegant circular shape makes them ideal for indoor tabletops or zen gardens. </p>
              </Col>
              <Col md={6} className='my-4'>
                  <img src={require('./img/product-7.png')} style={{width:'90%',marginLeft: '20px'}}/>
              </Col>
            </Row>
          </Col>
        </Row>

                <Row className='my-5'>
          <Col xs={12} md={6} className='my-2 px-4'>
            <Row className='border'>
              <Col md={6} className="d-flex flex-column justify-content-center ">
                <p style={{fontSize:'22px',fontWeight:'400',}}>01 Nov, 2024</p>
                <h2>Colorful Classic Round Pot</h2><br/>
                <p style={{fontSize:'17px',fontWeight:'500',color: 'gray'}}>Make your plants stand out with our Colorful Classic Round Pot planter.Crafted width 100%
                porcelain ceramic to perfection.</p>
              </Col>
              <Col md={6} className='my-4'>
                  <img src={require('./img/c3.png')} style={{width:'90%',marginLeft: '20px' }}/>
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} className='my-2 px-4'>
            <Row className='border'>
              <Col md={6} className="d-flex flex-column justify-content-center ">
                <p style={{fontSize:'22px',fontWeight:'400',}}>09 Nov, 2024</p>
                <h2>Monstera Deliciosa Ronaldo white planter</h2><br/>
                <p style={{fontSize:'17px',fontWeight:'500',color: 'gray'}}>This round large planter set is an ideal fit for classic. 
                  Its sleek, tall structure makes it perfect for a single planter. 
                  This large FRP planter box is sure to become a statement planter in your home or balcony. </p>
              </Col>
              <Col md={6} className='my-4'>
                  <img src={require('./img/product-5.png')} style={{width:'90%',marginLeft: '20px'}}/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  )
}

export default Blog