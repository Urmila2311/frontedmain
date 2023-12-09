
 import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

export function Cell()
{
    return(
           



                    <Container className="mt-5">
                      <Row >
                        <Col className="mt-5">
                            <div className="mt-5" ><p> <b>CellLogin</b></p></div>
                        
                         <FloatingLabel controlId="floatingInputCellemail" label="Email address" className="mb-3">
                            <Form.Control type="cellemail" placeholder="name@example.com" />
                         </FloatingLabel>
                         <FloatingLabel controlId="floatingInputCellpassword" label="Password">
                            <Form.Control type="cellpassword" placeholder="Password" />
                         </FloatingLabel>
                        
                        <Button variant="secondary" type="submit">Login</Button>{' '}
                         
                            <p className="mb-3">Don't Have Acoount?  <Nav.Link href="/cellregister" className="mb-1">Click here for sigup</Nav.Link></p>
                        
                        
                        
                        </Col>
                      </Row>
                    </Container>
            
        
    );
}
        