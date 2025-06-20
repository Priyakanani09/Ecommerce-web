import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Register() {
  return (
    <div>
      <div className="login-container">
        <Form className='login-form1'>
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
              <Form.Label style={{ fontSize: '20px', fontWeight: '500' }}>Address*</Form.Label>
              <Form.Control placeholder="Enter Address.." />
            </Col>
          </Row><br />

          <Row>
            <Col xs={12} md={6}>
              <Form.Label style={{ fontSize: '20px', fontWeight: '500' }}>Phone Number*</Form.Label>
              <Form.Control type="tel" placeholder="Enter phone number.." />
            </Col>
            <Col ms={12} md={6}>
              <Form.Label style={{ fontSize: '20px', fontWeight: '500' }}>Date of Birth</Form.Label>
              <Form.Control type="date" />
            </Col>
          </Row><br />


          <Row>
            <Col xs={12} md={4}>
              <Form.Label style={{ fontSize: '20px', fontWeight: '500' }}>City*</Form.Label>
              <Form.Control />
            </Col>
            <Col xs={12} md={4}>
              <Form.Label style={{ fontSize: '20px', fontWeight: '500' }}>State*</Form.Label>
              <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
              </Form.Select>
            </Col>
            <Col xs={12} md={4}>
              <Form.Label style={{ fontSize: '20px', fontWeight: '500' }}>Zip*</Form.Label>
              <Form.Control />
            </Col>
          </Row><br />

          <Row>
            <Col xs={12} md={12}>
              <Form.Label style={{ fontSize: '20px', fontWeight: '500' }}>Password</Form.Label>
              <Form.Control required type="password" placeholder="Password.." />
            </Col>
          </Row><br />

          <Row>
            <Col>
              <Button type="submit" style={{ width: '100px', height: '45px', fontSize: '20px' }}>Submit</Button>
            </Col>
          </Row>

        </Form>
      </div>
    </div>
  )
}

export default Register