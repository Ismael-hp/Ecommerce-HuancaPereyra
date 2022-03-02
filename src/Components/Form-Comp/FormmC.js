import React from 'react';
import { Form,Button } from 'react-bootstrap';
import SendCompra from '../SendCompra-Comp/SendCompra';
import { useContext, useEffect, useState } from "react";

const FormmC = () => {
  const [FormData, setFormData] = useState({
    nombreCompleto:"",
    direccion:"",
    email:"",
    tel:""
  })

  const irCompletando=(event)=>{
    setFormData({
      ...FormData,
      [event.target.name]:event.target.value
    })
  }

  return (
    <div className='vistaCheckout'>
      <div><h1>Completar datos para finalizar compra! </h1></div>
      <div className='formulario'> 
      
      <Form >
        <Form.Group className="mb-3" controlId="NombreyApellido">
  
      <Form.Control onChange={irCompletando} name="nombreCompleto" type="text" placeholder="Nombre y apellido" />
    </Form.Group>
      <Form.Group className="mb-3" controlId="Direccion">
  
        <Form.Control onChange={irCompletando} name="direccion" type="text" placeholder="Direccion" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
  
        <Form.Control onChange={irCompletando} name="email" type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
  
        <Form.Control onChange={irCompletando} name="tel" type="text" placeholder="Telefono" />
      </Form.Group>
    </Form>
    </div>
    <SendCompra FormData={FormData}/>
    </div>

  )
}

export default FormmC