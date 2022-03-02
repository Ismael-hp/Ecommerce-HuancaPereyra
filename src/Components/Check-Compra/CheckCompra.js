import { getDoc, doc, getFirestore } from 'firebase/firestore';
import { useState,useEffect } from 'react'
import {Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const CheckCompra = ({dataSearch }) => {
  const [DetalleCompra, setDetalleCompra] = useState(null)
  useEffect(() => {
Alertas()
  }, [DetalleCompra])

  const Getdata = () => {
    const db = getFirestore();
    const dataDoc = doc(db, "orders", dataSearch.search)
    getDoc(dataDoc).then((vista) => {
      setDetalleCompra(vista.data())
      console.log(vista.data())
      console.log(DetalleCompra);
    })
    console.log(DetalleCompra)
  }

  const Alertas=()=>{
    if (DetalleCompra) {
      Swal.fire(
        dataSearch.search
      )
    }
    else{
      Swal.fire(
        "Vacio"
      )

    }
  }




  return (
    <div>
      <Button onClick={Getdata} variant="outline-success">SearchCompra</Button>
    </div>
  )
}

export default CheckCompra
