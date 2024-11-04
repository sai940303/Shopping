import { LinkContainer } from 'react-router-bootstrap';

import { Card } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';




   

  




function Api2() {

const [products, setProducts] = useState([]);

useEffect(() => {
  fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(error => console.error('Error fetching data:', error));
}, []);
  return (
    <div>

{products.slice(6, 11).map(product => (
     

  <Card className='tag' key={product.id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.images[0]} />
    <Card.Body>
      <LinkContainer to={`/product/${product.id}`}>
        <Card.Title>{product.title}</Card.Title>
      </LinkContainer>
      <p>From ${product.price}</p>
     
    </Card.Body>
  </Card>
 
))}


    </div>
  )
}

export default Api2
