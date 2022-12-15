import React from 'react'
import { Carousel } from 'react-responsive-carousel'

const CarouselTemplate = () => {
  return (
  <div style={{marginTop:'20px'}}>
   <Carousel>
    <div>
      <img src="https://cdn.discordapp.com/attachments/889434629495476296/1052091964897632256/96ff022427b1415d696b89300a7e9c67.jpg" />
      <p className="legend">Computers</p>
    </div>
    <div>
        <img src="https://cdn.discordapp.com/attachments/889434629495476296/1052092195160723496/3fb30606faa3ef93aac011b5d98508da.jpg" />
        <p className="legend">Laptops</p>
    </div>
    <div>
        <img src="https://cdn.discordapp.com/attachments/889434629495476296/1052092613416730664/96ffad4307c6134497717a19381aa2f6.jpg" />
        <p className="legend">Accessories</p>
    </div>
    </Carousel> </div>
  )
}

export default CarouselTemplate
