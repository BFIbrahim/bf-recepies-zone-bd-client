import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Registation = () => {

    const [name, setName] = useState("");
    const [photoUrl, setPhotoUrl] = useState()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(photoUrl)

    const hundleRegister = (event) =>{
        event.preventDefault();
        console.log('regiter clicked')
    }

    return (
        <div>
             <Container className='mx-auto w-25 mt-5'>
            <h3>Please Register</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onChange={(e) => setName(e.target.value)} type="name" name='name' placeholder="Enter Your Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control onChange={(e) => setPhotoUrl(e.target.value)} type="text" name='photo' placeholder="Your Photo Url" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accepts' label="Accept terms and conditions" />
                </Form.Group>
                <Button onClick={hundleRegister} variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    <p>Already have an account <Link to='/login'>Please login</Link></p>
                </Form.Text>
                
                <Form.Text className="text-success">
                </Form.Text>

                <Form.Text className="text-danger">
                </Form.Text>
            </Form>

            {/* <p className='danger'>{error.message}</p> */}
        </Container>
        </div>
    );
};

export default Registation;