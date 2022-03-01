import React from 'react';
import { Form,Button } from 'react-bootstrap';
import SendCompra from '../SendCompra-Comp/SendCompra';

const FormmC = () => {
  return (
    <div className='w-50'> <Form>
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
  </Form>
  <SendCompra/>
  </div>
  )
}

export default FormmC