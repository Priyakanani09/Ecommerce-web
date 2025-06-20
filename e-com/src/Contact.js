import React from 'react'
import Header from './Header'
import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';
import Card from 'react-bootstrap/Card';

function Contact() {
  return (
    <div>
      <Header />

      <div className="text-center text-white " style={{ backgroundImage: `url(${require('./img/about1.png')})`, backgroundSize: 'cover', padding: '150px' }}>
        <h1 className="display-4 fw-bold ">Contact PlantStore</h1>
        <p className="fs-4">Home : Contact</p>
      </div>
      
      <Container style={{ maxWidth: '1570px' }}>
        <Row className='my-7'>
          <Col md={12}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4287.5233800960505!2d151.2578664936981!3d-33.81764144368732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ab8bc95a137f%3A0x358f04a7f6f5f6a6!2sGrotto%20Point%20Lighthouse!5e0!3m2!1sen!2sin!4v1747623644773!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{ width: '100%', height: '700px', borderRadius: '20px' }} className='border-0'></iframe>
          </Col>
        </Row>

        <Row className='my-5'>
          <Col xs={12} md={6} className='my-5'>
            <h1>Contact Us</h1><br />
            <p style={{ fontWeight: '450', color: 'rgb(95, 92, 92)', fontSize: '22px' }}>Have a question? Please contact us using the customer support <br /> channels below.</p><br />
            <p style={{ fontSize: '19px' }}><b>Address : </b>15 Yarran st, Punchbowl, NSW, Australia</p>
            <p style={{ fontSize: '19px' }}><b>Phone number : </b>+1 234 567</p>
            <p style={{ fontSize: '19px' }}><b>Email : </b>contact@vineta.com</p>
            <p style={{ fontSize: '19px' }}><b>Open : </b>9am - 10pm, Mon - Sat</p>
          </Col>
          <Col xs={12} md={6} className='my-5'>
            <h1>Get In Touch</h1><br />
            <p style={{ fontWeight: '450', color: 'rgb(95, 92, 92)', fontSize: '22px' }}>Please submit all general enquiries in the contact form below and we look forward to hearing from you soon.</p><br />
            <Form>
              <Row>
                <Col xs={12} md={6}>
                  <Form.Label style={{ fontSize: '20px', fontWeight: '500' }}>First name*</Form.Label>
                  <Form.Control required type="text" placeholder="First name.." />
                </Col>
                <Col xs={12} md={6}>
                  <Form.Label style={{ fontSize: '20px', fontWeight: '500' }}>Last name*</Form.Label>
                  <Form.Control required type="text" placeholder="Last name.." />
                </Col>
              </Row><br />

              <Row>
                <Col xs={12} md={12}>
                  <Form.Label style={{ fontSize: '20px', fontWeight: '500' }}>Email*</Form.Label>
                  <Form.Control type="email" placeholder="Enter email.." />
                </Col>
              </Row><br />

              <Row>
                <Col xs={12} md={12}>
                  <Form.Label style={{ fontSize: '20px', fontWeight: '500' }}>Message*</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Enter your message.." />
                </Col>
              </Row><br />


              <Row>
                <Col>
                  <Button type="submit" style={{ width: '100px', height: '45px', fontSize: '20px' }}>Send</Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  )
}

export default Contact