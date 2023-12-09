import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState} from 'react';



export function Cellregister()
{
    
    const [celldata,setcelldata]=useState({cellname:"",cellemail:"",cellpassword:"",celllocation:""});
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(celldata);
    }
    const handleChange=(e)=>{
      setcelldata({ ...celldata , [e.target.name]:e.target.value});
    }
   
    return(
            
        
        
       <Container className="mt-3">
         <h1>cell Registration Form</h1>
          <Row>
        <Col >
            <Form  onSubmit={handleSubmit}>
            
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCellname" >
                    <Form.Label column sm={2}>Company Name </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="cellname" placeholder="Enter Company Name"  onKeyUp={handleChange} name="cellname"/>
                    </Col>
                    </Form.Group>
                    
                    
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCellname" >
                    <Form.Label column sm={2}>Company Location  </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="celllocation" placeholder="Enter Company Location"  onKeyUp={handleChange} name="celllocation"/>
                    </Col>
                    </Form.Group>
                    
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCellemail">
                    <Form.Label column sm={2}>Email </Form.Label>
                    <Col sm={10}> <Form.Control type="cellemail" placeholder="Email" onKeyUp={handleChange} name="cellemail"/> </Col>
                    </Form.Group>

                   
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalCellpassword">
                    <Form.Label column sm={2}>Password </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="cellpassword" placeholder="Password" onKeyUp={handleChange} name="cellpassword"/>
                    </Col>
                    </Form.Group>
                    
                   
                    
                      
                    <Button variant="secondary" type="submit">Register</Button>{' '}
                    <p className="mb-3">Already have account? <Nav.Link href="/cell" className="mb-1">Click To Login</Nav.Link></p>
                    
                    
                    
            </Form>
        </Col>
        
        
        
        <Col>
        <img src='images/registerdac.jpg' width='690' height='550'></img>
        </Col>
        
        
         </Row>
         </Container>
        
    );
}