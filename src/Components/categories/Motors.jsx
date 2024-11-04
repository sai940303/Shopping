import React, { useEffect, useState } from 'react'
import { Card, Spinner } from 'react-bootstrap'
import BasicRating from '../Ratting'
import NavScrollExample from '../header/Navbar'
import Footer from '../Footer/Footre'
const Motors = () => {
 const [motor,setmotor] =useState([])
 const [loading,setLoading] =([true]);
 useEffect(()=>{
  fetch("https://fakestoreapi.com/products/category/ women's clothing")
  .then(response=>response.json())
  .then(data=>{setmotor(data);console.log(data)
   
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    setLoading(false);
});
 })

  return (
    <div>
      <NavScrollExample/>

<div className="section4">      

{loading ? (
                    <div className="spinner-container">
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                ) :
    motor.map(product => (
      <div className="cat1">
         <Card key={product.id} style={{ width:  '18rem'}}>
         <Card.Img variant="top" src={product.image} alt={product.title} />
         <Card.Body>
           <Card.Title>{product.name}</Card.Title>
           <p>From ${product.price}</p>
           <BasicRating/>
           <button className='btn1'>Add to Cart</button>
      <button className='btn2'>Buy Now</button>
         </Card.Body>
       </Card>
       </div>
        ))}
        
       
  </div>
  <Footer/>
    </div>
  )
}

export default Motors