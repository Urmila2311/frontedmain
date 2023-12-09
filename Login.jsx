
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';


export function Login()
{
    return(
                    <Container className="mt-5">
                      <Row >
                        <Col className="mt-5">
                            <div className="mt-5" ><p> <b>Login</b></p></div>
                        
                         <FloatingLabel controlId="floatingInputEmail" label="Email address" className="mb-3">
                            <Form.Control type="email" placeholder="name@example.com" />
                         </FloatingLabel>
                         <FloatingLabel controlId="floatingInputPassword" label="Password">
                            <Form.Control type="password" placeholder="Password" />
                         </FloatingLabel>
                        
                        <Link to="/studentdashboard"> <Button variant="secondary" type="submit">Login</Button>{' '}</Link>
                         
                            <p className="mb-3">Don't Have Acoount?  <Nav.Link href="/register" className="mb-1">Click here for sigup</Nav.Link></p>
                        
                        
                        
                        </Col>
                      </Row>
                    </Container>
            
        
    );
}