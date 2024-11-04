import React, { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import BasicRating from '../Ratting';
import NavScrollExample from '../header/Navbar';
import Footer from '../Footer/Footre';

const Tv = () => {
    const [tv, setTv] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/electronics')
            .then(response => response.json())
            .then(data => {
                setTv(data);
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch(() => setLoading(false)); // Handle errors and stop loading
    }, []);

    const handleAddToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Added to cart:', product);
    };

    return (
        <div>
            <NavScrollExample />

            {loading ? (
                <div className="spinner-container">
                    <Spinner animation="border" role="status">
                        
                       
                    </Spinner>
                </div>
            ) : (
                <div className="section4">
                    {tv.map(product => (
                        <div className="cat1" key={product.id}>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={product.image} alt={product.title} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <p>From ${product.price}</p>
                                    <BasicRating />
                                    <button className='btn1' onClick={() => handleAddToCart(product)}>
                                        Add to Cart
                                    </button>
                                    <button className='btn2'>Buy Now</button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Tv;
