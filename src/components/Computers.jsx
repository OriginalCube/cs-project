import React from 'react'
import StoreData from '../StoreData.json'
import Item from './Item'

const Computers = (props) => {
  const itemId = ['Computers', 'Laptops']
  return (
    <div className='computers'>
      <div className='catalogue'></div> 
      <div className='item-list'>
      {
        StoreData[itemId[props.id-1]].map((e)=>(
          <Item 
            itemId={itemId[props.id-1]}
            productId={e.id}
            key={e.id}
            name={e.name} 
            image={e.image} 
            price={e.price}
          />
        ))
      } </div>
      <div className='footer'>
      </div>
    </div>
  )
}

export default Computers