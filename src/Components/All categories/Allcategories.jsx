import React, { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { fetchCategoriesData, addToCart } from '../../Redux/action'; // Import addToCart
import Footer from '../Footer/Footre';
import NavScrollExample from '../header/Navbar';

function App({ categoriesData, fetchCategoriesData, addToCart }) { // Add addToCart to props
    useEffect(() => {
        fetchCategoriesData();
    }, [fetchCategoriesData]);

    const handleAddToCart = (product) => {
        addToCart(product); // Call the action to add to cart
    };

    return (
        <div className="App">
            <NavScrollExample />
            <header className="section4">
                {categoriesData && categoriesData.length > 0 ? (
                    categoriesData.map(product => (
                        <div key={product.id} className="cat1">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={product.image} alt={product.title} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <p>From ${product.price}</p>
                                    <Button className='btn1' onClick={() => handleAddToCart(product)}>
                                        Add to Cart
                                    </Button>
                                    <Button className='btn2'>
                                        Buy Now
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </header>
            <Footer />
        </div>
    );
}

// Map state to props
const mapStateToProps = (state) => ({
    categoriesData: state.categoriesData,
});

export default connect(mapStateToProps, { fetchCategoriesData, addToCart })(App);