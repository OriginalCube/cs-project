import React from 'react'
import StoreData from '../StoreData.json'
import Item from './Item'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import CarouselTemplate from './CarouselTemplate'

const Computers = (props) => {
  const itemId = ['Computers', 'Laptops', 'Accessories']
  return (
    <div className='computers'>
      <CarouselTemplate/>
      <div className='item-list'>
      {
        StoreData[itemId[props.id-1]].map((e)=>(
          <Item 
            itemId={itemId[props.id-1]}
            productId={e.id}
            key={e.id}
            name={e.name} 
            description={e.description}
            image={e.image} 
            price={e.price}
          />
        ))
      } </div>
      <img style={{width: '100%', marginTop: '12%' }} src="https://cdn3.wpbeginner.com/wp-content/uploads/2021/10/the-next-web-footer.png" alt="" /> 
    </div>
  )
}

export default Computers