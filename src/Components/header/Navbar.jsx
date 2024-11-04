import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';




function NavScrollExample() {

  
  

  return (
    
    
    <Navbar expand="lg" className="bg-body-tertiary, sticky-top open">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" id='toggle'/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <LinkContainer to="/"><Nav.Link className='link'>Home</Nav.Link></LinkContainer>
           <LinkContainer to="/AllCategories">
            <Nav.Link className='link'>All Categories</Nav.Link>
           </LinkContainer>

           <LinkContainer to="/Accessories" >
           <Nav.Link className='link'>Accessories</Nav.Link>
           </LinkContainer>

          

           <LinkContainer to="/Login">
           <Nav.Link className='link'>Login</Nav.Link>
           </LinkContainer>

           

           

            <NavDropdown title="Fashions" className='link' id="navbarScrollingDropdown">
            <LinkContainer to="/men Fashions"><NavDropdown.Item >Men Fashions </NavDropdown.Item></LinkContainer>
            
              <LinkContainer to="/Ledies Fashions"><NavDropdown.Item >Ladies Fashions </NavDropdown.Item></LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to="/kids Fashions">
              <NavDropdown.Item> kids Fashions </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
            <Nav.Link href="#" disabled>
             
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            
           <LinkContainer to="/add to cart">
           <Nav.Link className='link'  ><ShoppingCartIcon id='cart-icon' className='cart-icon, active'/> </Nav.Link>
           </LinkContainer>
            <Form.Control
              type="search"
              placeholder="Search  "
            
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className='search'>Search  <SearchIcon  id='search' /> </Button>
          </Form>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;