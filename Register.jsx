import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState} from 'react';



export function Register()
{
    
    const [formdata,setformdata]=useState({name:"",prn:0,email:"",password:"",centre:"",year:""});
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formdata);
    }
    const handleChange=(e)=>{
      setformdata({ ...formdata , [e.target.name]:e.target.value});
    }
   
    return(
            
        
        
       <Container className="mt-3">
         <h1>Registration Form</h1>
          <Row>
        <Col >
            <Form  onSubmit={handleSubmit}>
            
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalFullname" >
                    <Form.Label column sm={2}>Full Name </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="fname" placeholder="Enter Full Name"  onKeyUp={handleChange} name="name"/>
                    </Col>
                    </Form.Group>
                    
                    
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPRN">
                    <Form.Label column sm={2}>PRN </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="prn" placeholder="Enter PRN" onKeyUp={handleChange} name="prn"/>
                    </Col>
                    </Form.Group>
                    
                    
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>Email </Form.Label>
                    <Col sm={10}> <Form.Control type="email" placeholder="Email" onKeyUp={handleChange} name="email"/> </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>Password </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="password" placeholder="Password" onKeyUp={handleChange} name="password"/>
                    </Col>
                    </Form.Group>
                    
                   
                    <Form.Select aria-label="Default select example" className="mb-3" controlId="formHorizontalCentre" onChange={handleChange} name="centre">
               
                      <option>Select centre</option>
                      <option value="juhu">Juhu</option>
                      <option value="Kharghar">Kharghar</option>
                    </Form.Select>
                    
                    <Form.Select aria-label="Default select example" className="mb-3" controlId="formHorizontalYear" onChange={handleChange} name="year">
                      <option>Select Year</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="Below 2022">Below 2022</option>
                      </Form.Select>
                      
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalFullname" >
                    <Form.Label column sm={2}>CGPA </Form.Label>
                    <Col sm={10}>
                    <Form.Control type="cgpa" placeholder="Enter final year cgpa"  onKeyUp={handleChange} name="cgpa"/>
                    </Col>
                    </Form.Group>

                      
                      
                      
                    <Button variant="secondary" type="submit">Register</Button>{' '}
                    <p className="mb-3">Already have account? <Nav.Link href="/login" className="mb-1">Click To Login</Nav.Link></p>
                    
                    
                    
            </Form>
        </Col>
        
        
        
        <Col>
        <img src='images/registerdac.jpg' width='690' height='550'></img>
        </Col>
        
        
         </Row>
         </Container>
        
    );
}