import React, { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap'; 
import { connect } from 'react-redux'; 
import products from '../Data/HomePageData'; 
import { addToCart } from '../../Redux/action'; 

const HomePage = ({ addToCart }) => {
    const [message, setMessage] = useState('');

    const handleAddToCart = (product) => {
        addToCart(product);
        setMessage('Added to cart successfully!');

        // Clear the message after 3 seconds
        setTimeout(() => setMessage(''), 3000);
    };

    return (
        <div className="HomePage">
            <header>
                <Row xs={1} sm={2} md={3} lg={4} className="g-4">
                    {products.map((product) => (
                        <Col key={product.id}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={product.image} alt={product.name} />
                                <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    <p>Price: ${product.price}</p>
                                    <Button className='btn1' onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                                    <Button className='btn2'>Buy Now</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </header>

            {/* Inline notification for added to cart */}
            {message && (
                <div className="alert alert-success" 
                     style={{
                         position: 'fixed',
                         top: '50%',
                         left: '50%',
                         transform: 'translate(-50%, -50%)',
                         zIndex: 1000,
                         width: '300px', // Optional: Set a width for the alert box
                         textAlign: 'center' // Center text
                     }}>
                    {message}
                </div>
            )}
        </div>
    );
};

// Connect the component to Redux
export default connect(null, { addToCart })(HomePage);
