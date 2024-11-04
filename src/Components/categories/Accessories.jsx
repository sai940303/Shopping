import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, fetchJewelryData } from '../../Redux/action';
import { Button, Card, Spinner } from 'react-bootstrap'; // Added Spinner for loading state
import BasicRating from '../Ratting';
import NavScrollExample from '../header/Navbar';

const Accessories = () => {
  const dispatch = useDispatch();
  const jewelryData = useSelector((state) => state.jewelryData);
  const error = useSelector((state) => state.error);
  const cart = useSelector((state) => state.cart);
  const loading = !jewelryData || jewelryData.length === 0;

  useEffect(() => {
    dispatch(fetchJewelryData());
  }, [dispatch]);

  useEffect(() => {
    console.log('Updated Cart:', cart); // Log the cart for debugging
  }, [cart]);

  const handleAddToCart = (product) => {
    console.log('Adding to cart:', product); // Log the product being added
    dispatch(addToCart(product));
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <NavScrollExample />
      <header className='section4'>
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" role="status" />
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          jewelryData.map(product => (
            <div key={product.id} className="cat1">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} alt={product.name} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title> {/* Changed to title */}
                  <p>From ${product.price}</p>
                  <BasicRating />
                  <Button 
                    className='btn1' 
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </Button>
                  <Button className='btn2'>Buy Now</Button>
                </Card.Body>
              </Card>
            </div>
          ))
        )}
      </header>
    </div>
  );
};

export default Accessories;
