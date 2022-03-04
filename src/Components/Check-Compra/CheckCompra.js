import { getDoc, doc, getFirestore } from 'firebase/firestore';
import { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';

const CheckCompra = ({ dataSearch }) => {
  const [DetalleCompra, setDetalleCompra] = useState(null)
  useEffect(() => {
    if (DetalleCompra !== null && DetalleCompra !== undefined) {
      AlertaOK();
      setDetalleCompra(null)
    }
    if (DetalleCompra === undefined) {
      Swal.fire(
        "No se encontro data con el valor ingresado!",
        "Intente nuevamente",
        'error'
      )
      setDetalleCompra(null)
    }
  }, [DetalleCompra])


  const Getdata = () => {

    if (dataSearch.search === "") {
      Swal.fire(
        "No se ingreso un valor",
        "Ingrese un valor para realizar la busqueda",
        'error'
      )
    }
    else {
      const db = getFirestore();
      const dataDoc = doc(db, "orders", dataSearch.search)
      getDoc(dataDoc).then((data) => {
        setDetalleCompra(data.data())
      })

    }
  }


  const stringListaProducts = () => {
    let stringProducts = "";
    let productCount = 1;
    DetalleCompra.items.forEach((Item) => {
      stringProducts = stringProducts + '\n' + String(productCount) + '[Items:' + Item.item.ProductName + ']' + '[\nCantidad:' + String(Item.quantity) + ']' + '[Precio:' + Item.item.Precio + ']';
      productCount++;
    });
    return stringProducts;
  }

  const AlertaOK = () => {
    if (DetalleCompra !== null) {
      console.log(DetalleCompra.items[0].item.ProductName)
      Swal.fire({
        title: 'Se encontro informacion para el id:"' + dataSearch.search + '"',
        text: 'Comprador:' + DetalleCompra.FormData.FormData.nombreCompleto + '\nEmail:' + DetalleCompra.FormData.FormData.email + 'Totalcompra:$' + String(DetalleCompra.totalPrice),
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ver productos!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Listado',
            stringListaProducts(),//JSON.stringify(DetalleCompra.items,null,4)
            'success'
          )
        }
      })
    }
  }

  return (
    <Button onClick={Getdata} variant="outline-success">SearchCompra</Button>

  )
}

export default CheckCompra
