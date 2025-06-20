import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function AboutUs() {
  return (
    <div>
      <Header />

      <div className="about-hero text-center text-white " style={{ backgroundImage: `url(${require('./img/about1.png')})`, backgroundSize: 'cover', padding: '150px 0' }}>
        <h1 className="display-4 fw-bold">About PlantStore</h1>
        <p className="fs-4">Bringing Life Indoors with Nature’s Finest</p>
      </div>

      <Container style={{ maxWidth: '1570px' }}>
        <Row className="align-items-center my-5">
          <Col md={6} className='my-5'>
            <img src={require('./img/a2.png')} className="img-fluid rounded" alt="Our Story" style={{ width: '100%' }} />
          </Col>
          <Col md={6}>
            <h1 className='font'>Our Story</h1><br/>
            <p style={{ fontSize: '20px', color: 'rgb(95, 92, 92)' }}>
              PlantStore was born out of a deep love for nature and the belief that plants have the power to breathe life
              into any space. What started in a small apartment with just a few potted plants and a dream has grown into
              a community-driven brand known and loved by plant enthusiasts across the country.
            </p>
            <p style={{ fontSize: '20px', color: 'rgb(95, 92, 92)' }}>
              To make greenery accessible and enjoyable for everyone —
              whether you're a seasoned plant parent or just starting your journey. We source our plants responsibly,
              ensuring they are healthy, sustainable, and ready to thrive in their new homes.
            </p>

          </Col>
        </Row>


        <Row className="my-5">
          <Col md={6}>
            <h1 className='font'>Our Mission</h1>
            <p style={{ fontSize: '20px', color: 'rgb(95, 92, 92)' }}>
              We aim to make plant ownership joyful, accessible, and rewarding. Whether you’re new
              to plant care or a seasoned green thumb, we offer handpicked plants, expert advice, and
              eco-conscious solutions.
            </p>
          </Col>
          <Col md={6}>
            <h1 className='font'>Our Vision</h1>
            <p style={{ fontSize: '20px', color: 'rgb(95, 92, 92)' }}>
              To cultivate a world where homes and workplaces breathe with the calming presence of
              nature—one plant at a time.
            </p>
          </Col>
        </Row>

        <Row className="text-center my-5">
          <h1 className="mb-4 font">Our Core Values</h1>
          <Col md={4}>
            <img src={require('./img/t4.png')} className="icon1" />
            <h4 className='my-2 font'>Quality</h4>
            <p style={{ fontSize: '17px', color: 'rgb(95, 92, 92)' }}>Only the healthiest, most beautiful plants make it to your doorstep.</p>
          </Col>
          <Col md={4}>
            <img src={require('./img/t2.png')} className="icon1" />
            <h4 className='my-2 font'>Eco-Friendly</h4>
            <p style={{ fontSize: '17px', color: 'rgb(95, 92, 92)' }}>We prioritize sustainable practices in packaging and sourcing.</p>
          </Col>
          <Col md={4}>
            <img src={require('./img/t3.png')} className="icon1" />
            <h4 className='my-2 font'>Customer Care</h4>
            <p style={{ fontSize: '17px', color: 'rgb(95, 92, 92)' }}>Our team is here to guide you every step of your plant journey.</p>
          </Col>
        </Row>

        <Row className="my-5 text-center">
          <Col>
            <h2 className='font'>Join Our Green Family</h2>
            <p style={{ fontSize: '17px', color: 'rgb(95, 92, 92)' }}>Explore our collections and bring a little more nature into your life.</p>
            <button className="button2">Shop Now</button>
          </Col>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default AboutUs;
