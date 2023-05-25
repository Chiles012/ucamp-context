import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { login } from "../services/user";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = () => {

        if (email !== '' && password !== '') {
            login(email, password)
        }

    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Password</Form.Label>
                <Form.Control value={password} onChange={(e) => setPassword(e.target.password)} type="password" />
            </Form.Group>
            <Button onClick={onSubmit} variant="primary">Login</Button>
        </Form>
    )

}

export default Login;