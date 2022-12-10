import React from 'react'

const Item = (props) => {
    const  {image, name, price, itemId, productId} = props;
    return (//Template for items in hompages
    <a href={`/product/${productId-1}/${itemId}`}><div className='store-item'>
        <img src={image} alt="" /> 
        <p className='store-detail'>{name}</p> 
        <p className='store-deital'>₱{price}</p> 
    </div> </a>
  )
}

export default Item