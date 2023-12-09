
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export function Homenav()
{
    return(
            
    
              
                 <Navbar bg="dark" data-bs-theme="dark">
              <Container>
        <Navbar.Brand href="#home">CdacM Placement Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
          
            
            
            

            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/cell">CellLogin</Nav.Link>
            <Nav.Link href="/services">Services</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">StudentRegistration</Nav.Link>
            <Nav.Link href="/cellregister">CellRegistration</Nav.Link>
           
              
            
            
            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
           
          
            
       
    );
}