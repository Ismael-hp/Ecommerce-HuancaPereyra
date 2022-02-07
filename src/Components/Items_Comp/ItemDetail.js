import React from 'react';
import { Card,} from 'react-bootstrap';
import Bender from '../Icon-Comp/Bender.png';
import ItemCount from './ItemCount';


const ItemDetail = (selectItem) => {
    
    return <div>
       <Card style={{ width: '16rem' }} bg={selectItem.bg}>
            <Card.Img variant="top" src={Bender} height={400} />
            <Card.Body>
                <Card.Title>{selectItem.Producto}</Card.Title>
                <Card.Title >${selectItem.Precio}</Card.Title>
                <Card.Text>
                    {selectItem.Description}
                </Card.Text>
                <ItemCount Stock={selectItem.Stock} Initial={selectItem.Initial} />
            </Card.Body>
        </Card>
    </div>;
};

export default ItemDetail;
