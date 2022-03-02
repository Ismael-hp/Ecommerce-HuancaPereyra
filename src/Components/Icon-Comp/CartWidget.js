import {useContext} from 'react';
import { Button, ButtonGroup, Badge } from 'react-bootstrap';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const {items} = useContext(CartContext)
    return (
      <div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 16 16"
        >
          <path
            fill="#484"
            d="M14 13.1V12H4.6l.6-1.1 9.2-.9L16 4H3.7L3 1H0v1h2.2l2.1 8.4L3 13v1.5c0 .8.7 1.5 1.5 1.5S6 15.3 6 14.5 5.3 13 4.5 13H12v1.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.7-.4-1.2-1-1.4z"
          ></path>
        </svg>
         <Badge style={{borderRadius:'40%'}} bg="dark">{items.length}</Badge>
      </div>
      );
};

export default CartWidget;
