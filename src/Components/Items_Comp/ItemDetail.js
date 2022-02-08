import React from 'react';
import { Card} from 'react-bootstrap';
import Bender from '../Icon-Comp/Bender.png';
import ItemCount from './ItemCount';


const ItemDetail = ({Producto,Description,bg,Precio,Stock}) => {
    return <div>
       <Card style={{ width: '16rem' }} bg={bg}>
            <Card.Img variant="top" src={Bender} height={400} />
            <Card.Body>
                <Card.Title>{Producto}</Card.Title>
                <Card.Title >${Precio}</Card.Title>
                <Card.Text>
                    {Description}
                </Card.Text>
                <ItemCount Stock={Stock} Initial={1} />
            </Card.Body>
        </Card>
    </div>;
};

export default ItemDetail;
