import React, { Component } from 'react';
import  {Button, Card, Container, Table,Row,Col} from "react-bootstrap";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Container className={'mt-5'}>
                <Card>
                    <Card.Header>
                        <Row>
                            <Col sm={10}>User</Col>
                            <Col sm={2}>
                                <Button variant="primary" onClick={() => this.props.goToPage("USER")}>Add User</Button>
                            </Col>
                        </Row>
                    </Card.Header>
                    <Card.Body>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Website</th>
                                <th className={'w-25'}>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                this.props.users.map((user, idx) => {
                                    return (
                                        <tr key={idx}>
                                            <td>{idx + 1}</td>
                                            <td>{user.username}</td>
                                            <td>{user.email}</td>
                                            <td>{user.website}</td>
                                            <td>
                                                <Button className={'ml-2'} onClick={() => this.props.editRow(idx)} variant="info">Edit</Button>
                                                <Button className={'ml-2'} onClick={() => this.props.deleteRow(idx)} variant="danger">Delete</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}

export default User;