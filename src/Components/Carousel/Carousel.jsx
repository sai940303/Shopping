import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='slider'>
      <Carousel.Item >
        <img
          className="d-block w-100 h-350"
          src="https://images-static.nykaa.com/uploads/7dcdd30a-bc9b-4b35-9d0c-3eb8a579e1ed.jpg?tr=w-2400"
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://mianelectronics.org/pk/wp-content/uploads/2020/10/SDFDFSDFD.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://1.bp.blogspot.com/---toE7KebpM/X4ZFE3CMIII/AAAAAAAAGio/p-Lkh-4nkKkx6MgNEDY5YTGUnPe95ExjwCLcBGAsYHQ/s1312/am1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
