import React, { Component } from "react";
import axios from 'axios';
import { Container, Form, Button } from "react-bootstrap";
import '../css/login.css';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            password: "",
        };
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value,
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault();
        console.log("clicked");

        const newUser = {
            username: this.state.username,
            password: this.state.password,
        };

        axios
            .post("http://localhost:3000/record/create-account", newUser)
            .then((res) => console.log(res.data));

        this.setState({
            username: "",
            password: "",
        });
    }

    render() {
        return (
            <Container id="box">
                <div className="login">
                    <Form onSubmit={this.onSubmit}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control value={this.state.username}
                                onChange={this.onChangeUsername} type="input" placeholder="Username" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={this.state.password}
                                onChange={this.onChangePassword} />
                        </Form.Group>
                        <Button variant="outline-primary my-2 my-sm-0" type="submit">Submit</Button>
                    </Form>
                </div>
            </Container>
        );
    }
}