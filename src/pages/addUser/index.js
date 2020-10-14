import React, { Component } from 'react';
import {Button, Card, Container, Form, Col} from "react-bootstrap";

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:"",
            email:"",
            address:"",
            phone:"",
            birth:"",
            role:""
        }
        this.handleChange = this.handleChange.bind(this);
        this.addUser = this.addUser.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    addUser(event) {
        const {username, email, address, phone,password, birth, role} = this.state
        this.props.updateUser({username,password, email, address, phone, birth, role})
        this.props.goToPage("HOME")
        event.preventDefault();
    }

    render() {
        return (
            <Container className={'mt-5'}>
                <Card>
                    <Card.Header>Add User</Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.addUser}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" name="username" onChange={this.handleChange} placeholder="Enter Username" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" onChange={this.handleChange} placeholder="Password" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridAddress1">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type={'email'} name="email" onChange={this.handleChange} placeholder="Email Address" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" name="address" onChange={this.handleChange} placeholder="1234 Main St" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridAddress1">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="number" name="phone" onChange={this.handleChange} placeholder="Phone Number" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>BirthDay</Form.Label>
                                    <Form.Control type="date" name="birth" onChange={this.handleChange} />
                                </Form.Group>
                            </Form.Row>


                            <Form.Row>
                                {/*<Form.Group as={Col} controlId="formGridCity">*/}
                                {/*    <Form.Label>City</Form.Label>*/}
                                {/*    <Form.Control />*/}
                                {/*</Form.Group>*/}

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control as="select" name="role" onChange={this.handleChange} defaultValue="Choose...">
                                        <option value="HRD">HRD</option>
                                        <option value="KARYAWAN">Karyawan</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>

                            <Button variant="primary" type="submit">
                                Save
                            </Button>
                        </Form>

                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default AddUser;