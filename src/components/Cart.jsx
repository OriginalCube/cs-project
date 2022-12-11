import React from 'react'
import { useNavigate } from 'react-router-dom';

const Cart = (props) => {
    const {name, price, id,} = props;
    const navigate = useNavigate(); 
    let cartData = JSON.parse(localStorage.getItem('cart'));
    const removeData = (e) =>{
        cartData.splice(id,1)
        localStorage.setItem('cart', JSON.stringify(cartData));
        navigate('/homepage/4');
    }
    return (
    <div>
        <p>Name: {name}</p>
        <p>Price: ₱{price}</p>
        <p onClick={removeData}>Remove</p>
    </div>
  )
}

export default Cart