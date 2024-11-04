import './Cards.css';
import { LinkContainer } from 'react-router-bootstrap';

import { Card,} from 'react-bootstrap';


import HomePage from '../HomePage';




function Cards3() {

  



  
  return (
    <>
    
<div className="section4">
     
     <h3>Best Deals of the day</h3>
     
     <div className='card0'>
    
        <HomePage/>
 

    </div>
    </div>
   


  <div >
       <h3>Top deals</h3>
       <div className='section5'>
      
      


      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.onecrazyhouse.com/wp-content/uploads/2016/03/best-electronic-gadgets-4.jpg" />
      <Card.Body>
        <Card.Title>Eloctronics</Card.Title>
       
      </Card.Body>
    </Card>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.rHyHufgDrUXEBonuXZ9nmQHaGP?rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title>Gadget</Card.Title> 
       
      </Card.Body>
    </Card>



    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.lchXW73xdebHK6qOJOdTrAHaE8?w=800&h=534&rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title>Rakhi special</Card.Title>
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.U1C2eN5YAuNy-vSfOi_8iQAAAA?rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title>Fashion</Card.Title>
      </Card.Body>
    </Card>



    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.bHGYc7qodZ5ECP2Ms-mJgQHaEx?rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title>Home essentials</Card.Title>
      </Card.Body>
    </Card>



   


    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.sqr0SJvvbWScaVq2qk5CFQHaF9?rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title>Furniture</Card.Title>
      </Card.Body>
      </Card>
    

      
      
    </div>
     
   </div>
   
    
    
    </>
  );
}

export default Cards3;