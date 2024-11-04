import React from 'react'
import NavScrollExample from './header/Navbar'
import ControlledCarousel from './Carousel/Carousel'
import Footer from './Footer/Footre'
import Toplist from './Products/CARDS/toplist'
import Cards3 from './Products/CARDS/Cards3'







const Mainpage = () => {
  return (
    <div className='body'>

        
          <NavScrollExample/>
       <Toplist/>
       <ControlledCarousel/>
      
       
       <Cards3/>
       
     <Footer/>
      
          
        
       
        
       
    </div>
  )
}

export default Mainpage