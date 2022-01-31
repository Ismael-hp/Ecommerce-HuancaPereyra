import React,{useState} from 'react';
import { Button,ButtonGroup,Badge} from 'react-bootstrap';

const ItemCount = ({Stock,Initial}) => {

    const [Counter, setCounter] = useState(Initial);


    const subtractCounter = () => {
     if (Counter <= 0) return;
    setCounter(Counter - 1);
    };

        const addCounter = () => {
            if (Counter >= Stock) return;
            setCounter(Counter + 1);
        };



  return <div>
  <ButtonGroup aria-label="Basic example">
  <Button onClick={subtractCounter} variant="primary">-</Button>
  <Button variant="primary">Agregar al carrito!<Badge bg="secondary">{Counter}</Badge><span className="visually-hidden">unadada</span></Button>
  <Button onClick={addCounter} variant="primary">+</Button>
  </ButtonGroup>
  </div>;
};

export default ItemCount;
