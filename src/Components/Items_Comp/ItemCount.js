import React, { useState } from 'react';
import { Button, ButtonGroup, Badge } from 'react-bootstrap';

const ItemCount = ({ Stock, Initial, onAdd, setQuantity }) => {
    const [Counter, setCounter] = useState(Initial);
    const subtractCounter = () => {
        if (Counter <= 0) return;
        setCounter(Counter - 1);
        setQuantity(Counter - 1);
    };
    const addCounter = () => {
        if (Counter >= Stock) return;
        setCounter(Counter + 1);
        setQuantity(Counter + 1);
    };
    return <div>
        <ButtonGroup aria-label="Basic example">
            <Button onClick={subtractCounter} variant="info">-</Button>
            {onAdd ? <Button onClick={onAdd} variant="info">Agregar al carrito!<Badge bg="dark">{Counter}</Badge><span className="visually-hidden">unadada</span></Button> :
                <div>
                    <Badge bg="dark">{Counter}</Badge><span className="visually-hidden">unadada</span>
                </div>}
            <Button onClick={addCounter} variant="info">+</Button>
        </ButtonGroup>
    </div>;
};

export default ItemCount;
