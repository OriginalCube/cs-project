import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const CarouselTemplate = () => {
  return (
  <div style={{marginTop:'20px'}}>
   <Carousel>
    <div>
      <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/10/Bocchi-The-Rock!-Episode-4-Hitori-Gotou-Loses-Her-Mind-Crunchyroll.jpg" />
      <p className="legend">Computers</p>
    </div>
    <div>
        <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/10/Bocchi-The-Rock!-Episode-4-Hitori-Gotou-Loses-Her-Mind-Crunchyroll.jpg" />
        <p className="legend">Laptops</p>
    </div>
    <div>
        <img src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/10/Bocchi-The-Rock!-Episode-4-Hitori-Gotou-Loses-Her-Mind-Crunchyroll.jpg" />
        <p className="legend">Accessories</p>
    </div>
    </Carousel> </div>
  )
}

export default CarouselTemplate