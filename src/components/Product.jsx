import React from 'react'
import { useParams } from 'react-router-dom'
import StoreData from '../StoreData.json'

const Product = (props) => {
    let {id, type} = useParams();
    const itemData = StoreData[type][id];
    const [clicked, setClicked] = React.useState(false);
    const eventHandle = () =>{
      props.addCart({itemData});
      setClicked(true);
    } 
    return (
    <div className='product' style={{position:'absolute', top: '10%'}}>
      <img src={ '../'+ itemData.image} alt="" />
      <div className='product-details'>
        <label>Name:</label>
        <p>{itemData.name}</p>
        <label>Price:</label>
        <p>₱ {itemData.price}</p>
        <label>Description:</label>
        <p>{itemData.description}</p>
        <div  className='product-cart' ><button onClick={eventHandle}>Add to Cart</button> </div>
        <p style={{textAlign:'center', color: 'green', marginTop:'2px'}}>{clicked?'Item Successfully added!':null}</p>
      </div>
    </div>
  )
}

export default Product