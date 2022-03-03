import { getDoc, doc, getFirestore } from 'firebase/firestore';
import { useState,useEffect } from 'react'
import {Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const CheckCompra = ({dataSearch }) => {
  const [DetalleCompra, setDetalleCompra] = useState(null)
  
  useEffect(() => {
    if(DetalleCompra!==null){ 
      Alertas()
      setDetalleCompra(null)
    }
  }, [DetalleCompra])
  

    const Getdata = () => {
    //   return new Promise((resolve, reject) => {
    //   const findProduct = products.find(product => product.id === idItem);
    //   setTimeout(() => {
    //     resolve(findProduct);
    //   }, 50)
    // })
        const db = getFirestore();
        const dataDoc = doc(db, "orders", dataSearch.search)
        getDoc(dataDoc).then((data)=>{
          setDetalleCompra(data.data())
        })
      }

    const Alertas=()=>{
      console.log(dataSearch.search)
      console.log(DetalleCompra)
      if (DetalleCompra!==null) {
        Swal.fire(
          dataSearch.search,
          DetalleCompra.FormData.email
        )
      }
      if(DetalleCompra===undefined){
        Swal.fire(
          "No se encontro data con el valor ingresado!",
          "Intente nuevamente"
        )
  
      }
    }

  return (
      <Button onClick={Getdata} variant="outline-success">SearchCompra</Button>

  )
}

export default CheckCompra
