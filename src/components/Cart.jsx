import React from 'react'
import { useNavigate } from 'react-router-dom';

const Cart = (props) => {
    const {name, price, id, image, removeItem} = props;
    const navigate = useNavigate(); 
    let cartData = JSON.parse(localStorage.getItem('cart'));
    const removeData = (e) =>{
        cartData.splice(id,1)
        removeItem(price);
        localStorage.setItem('cart', JSON.stringify(cartData));
        navigate('/homepage/4');
    }
    return (
    <div className='cart-wrapper'>
        <img src={'../'+ image} alt="" />
        <div className='cart-data'>
        <label>Name:</label>
        <p>{name}</p>
        <label>Price:</label>
        <p style={{color: 'green'}}>₱{price}</p>
        </div> 
        <button onClick={removeData}>Remove</button> 
    </div>
  )
}

export default Cart