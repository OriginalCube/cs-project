import React from 'react'
import { useParams } from 'react-router-dom'
import StoreData from '../StoreData.json'

const Product = (props) => {
    let {id, type} = useParams();
    const itemData = StoreData[type][id];
  return (
    <div style={{position:'absolute', top: '10%'}}>
        <img src={ '../'+ itemData.image} alt="" /> 
        <p>{itemData.name}</p>
        <p>{itemData.price}</p>
        <p onClick={()=>props.addCart({itemData})}>Add to Cart</p>
    </div>
  )
}

export default Product