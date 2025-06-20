import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-container">
      <Form className='login-form'>
        <Form.Group className="mb-3">
          <Form.Label style={{fontSize:'20px',fontWeight:'500'}}>Email Id</Form.Label>
          <Form.Control required type="email" placeholder="Enter email.." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label style={{fontSize:'20px',fontWeight:'500'}}>Password</Form.Label>
          <Form.Control  required type="password" placeholder="Password.." />
        </Form.Group>
        <Button variant="primary"><Link to="/" className='navb2'>Login Now</Link></Button>
      </Form>
    </div>
  )
}

export default Login;
