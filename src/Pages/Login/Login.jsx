import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    console.log(email, password);

    const hundleLogin = (event) =>{
        event.preventDefault();
        console.log('clicked')
    }

    return (
        <div>
            <Container className='mx-auto w-25 mt-5'>
                <h3>Please Login</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" name='email' placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Button onClick={hundleLogin} variant="primary" type="submit">
                        Login
                    </Button>
                    <br />
                    <Form.Text className="text-secondary">
                        <p>Don't have an account <Link to='/register'>Please register</Link></p>
                    </Form.Text>


                    <Form.Text className="text-success">
                    </Form.Text>

                    <Form.Text className="text-danger">
                    </Form.Text>
                </Form>
            </Container>
        </div>
    );
};

export default Login;