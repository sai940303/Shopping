
import React from 'react'
import { Link } from 'react-router-dom'


const Toplist = () => {
  return (

    <div className="section">

      
    



    <div className="list">
        <img src="https://th.bing.com/th/id/OIP.h57TswrkyeEWHqN_9iVa9AHaFj?rs=1&pid=ImgDetMain" alt="" />
      <Link > <h3>Eloctronics</h3></Link>
    </div>


    <div className="list">
        <img className='Mens' src="https://img.kwcdn.com/product/1dec4a2eb0/9c138207-a91e-42bd-ad21-a263043a6e95_1339x1785.jpeg.a.jpg" alt="" />
        <Link ><h3>"men's clothing</h3></Link>
    </div>


    <div className="list">
        <img src="https://th.bing.com/th/id/OIP.LAI5fRwv1k_S3fZncQuRqgAAAA?rs=1&pid=ImgDetMain" alt="" />
       
       <Link ><h3 className='bottom'>Bike-parts</h3></Link>
    </div>


    <div className="list">
        <img src="https://th.bing.com/th/id/OIP.EvrsxAKIKgramfVxtrxowQHaE3?w=626&h=411&rs=1&pid=ImgDetMain" alt="" />
      <Link ><h3>Health&GYM</h3></Link>  
      
    </div>


    


    <div className="list">
        <img src="https://tunisiatech.tn/8882-large_default/smartphone-oppo-a17-4go-64go.jpg" alt="" />
       <Link ><h3>Mobiles</h3></Link> 
    </div>
   

    <div className="list">
        <img src="https://freepngimg.com/thumb/airplane/26564-3-airplane-photos.png" alt="" />
        <h3>Travel</h3>
    </div>




    </div>
  )
}

export default Toplist