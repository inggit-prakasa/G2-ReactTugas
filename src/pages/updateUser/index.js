import React, { Component } from 'react';
import {Button, Card, Container, Form, Col} from "react-bootstrap";

class UpdateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:this.props.user.username,
            password:this.props.user.password,
            email:this.props.user.email,
            address:this.props.user.address,
            phone:this.props.user.phone,
            birth:this.props.user.birth,
            role:this.props.user.role
        }
        this.handleChange = this.handleChange.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    handleChange(event) {
        console.log(event.target.value)
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    updateUser(event) {
        const { username,password,email, address, phone, birth, role} = this.state
        console.log(this.props.idx)
        this.props.updateUser(this.props.idx,{ username,password,email, address, phone, birth, role})
        this.props.goToPage("HOME")
        event.preventDefault();
    }

    render() {
        return (
            <Container className={'mt-5'}>
                <Card>
                    <Card.Header>Update User</Card.Header>
                    <Card.Body>
                        <Form onSubmit={this.updateUser}>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" name="username" defaultValue={this.props.user.username} onChange={this.handleChange} placeholder="Enter Username" disabled/>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridAddress1">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type={'email'} name="email" defaultValue={this.props.user.email} onChange={this.handleChange} placeholder="Email Address" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" name="address" defaultValue={this.props.user.address} onChange={this.handleChange} placeholder="1234 Main St" />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridAddress1">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="number" name="phone" defaultValue={this.props.user.phone} onChange={this.handleChange} placeholder="Phone Number" />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>BirthDay</Form.Label>
                                    <Form.Control type="date" name="birth" defaultValue={this.props.user.birth} onChange={this.handleChange} />
                                </Form.Group>
                            </Form.Row>


                            <Form.Row>
                                {/*<Form.Group as={Col} controlId="formGridCity">*/}
                                {/*    <Form.Label>City</Form.Label>*/}
                                {/*    <Form.Control />*/}
                                {/*</Form.Group>*/}

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control as="select" name="role"  onChange={this.handleChange} defaultValue={this.props.user.role}>
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

export default UpdateUser;