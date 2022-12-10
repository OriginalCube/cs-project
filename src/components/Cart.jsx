import React from 'react'

const Cart = (props) => {
    const {name, price, id,} = props;
    let cartData = JSON.parse(localStorage.getItem('cart'));
    const removeData = (e) =>{
        cartData.splice(id,1)
        localStorage.setItem('cart', JSON.stringify(cartData));
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