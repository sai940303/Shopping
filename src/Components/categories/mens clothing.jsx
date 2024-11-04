import React, { useEffect, useState } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import BasicRating from '../Ratting';
import NavScrollExample from '../header/Navbar';
import Footer from '../Footer/Footre';

const Mensclothing = () => {
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/mens%20clothing") // Corrected URL
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Use json() to parse the response
      })
      .then(data => {
        setWatches(data); // Set watches state with fetched data
        setLoading(false); // Update loading state
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Also set loading to false on error
      });
  }, []);

  return (
    <div>
      <NavScrollExample />
      <div className="section4">
        {loading ? (
          <div className="spinner-container">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        ) : (
          watches.map((watch) => (
            <div className="cat1" key={watch.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={watch.image || 'default-image.jpg'} alt={watch.title} />
                <Card.Body>
                  <Card.Title>{watch.title}</Card.Title> {/* Use 'title' instead of 'brand' */}
                  <p>From ${watch.price}</p>
                  <BasicRating />
                  <button className="btn1">Add to Cart</button>
                  <button className="btn2">Buy Now</button>
                </Card.Body>
              </Card>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Mensclothing;
