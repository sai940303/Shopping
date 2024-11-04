

import React, { useState, useEffect } from 'react';

const Api = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fake-e-commerce-api.onrender.com/product')
            .then(response => response.json())
            .then(data => {setProducts(data);console.log('Fetched products:', data); 
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='section4'>

            <div className="cards2">
            <h2>Products</h2>
            <ul>
        {products.map(product => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <img src={product.image} alt={product.title} style={{ width: '100px' }} />
          </li>
        ))}
      </ul>


      
            </div>
        </div>
    );
};

export default Api;
