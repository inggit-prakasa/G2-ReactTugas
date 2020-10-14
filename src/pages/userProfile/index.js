import React, { Component } from 'react';
import Card from "react-bootstrap/cjs/Card";
import Row from "react-bootstrap/cjs/Row";
import Col from "react-bootstrap/cjs/Col";
import  {Container,Table} from "react-bootstrap";

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username:"Inggit",
            email:"inggit.prakasa123@gmail.com",
            address:"Bogor",
            phone:"0823220837293",
            birth:"01 Januari 2090",
            role:"HRD"
        }
    }
    render() {
        return (
            <Container className={'mt-5'}>
                <Card>
                    <Row className="no-gutters">
                        <Col md="auto" className={'bg-secondary w-25 d-flex align-items-center '}>
                            <img
                                src="https://ui-avatars.com/api/?name=M%20Inggit%20Prakasa&background=0D8ABC&color=fff&rounded=true"
                                className="img-fluid mx-auto"
                                alt=""
                                width={100}
                                height={100}
                            />
                        </Col>
                        <Col>
                            <Container className="mx-2 my-3">
                                <h3>Profile</h3>
                                <Table className="mx-2 my-3" borderless>
                                    <tr>
                                        <td className="w-25">Username</td>
                                        <td className="font-weight-bold">{this.props.user.username}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td className="font-weight-bold">{this.props.user.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Address</td>
                                        <td className="font-weight-bold">{this.props.user.address}</td>
                                    </tr>
                                    <tr>
                                        <td>Phone</td>
                                        <td className="font-weight-bold">{this.props.user.phone}</td>
                                    </tr>
                                    <tr>
                                        <td>Birthday</td>
                                        <td className="font-weight-bold">{this.props.user.birth}</td>
                                    </tr>
                                    <tr>
                                        <td>Role</td>
                                        <td className="font-weight-bold">{this.props.user.role}</td>
                                    </tr>
                                </Table>
                            </Container>
                        </Col>
                    </Row>
                </Card>
            </Container>

            // <div>
            //     <div className="card">
            //         <div className="row no-gutters">
            //             <div className="col-auto">
            //                 <img src="//placehold.it/200" className="img-fluid" alt="">
            //             </div>
            //             <div className="col">
            //                 <div className="card-block px-2">
            //                     <h4 className="card-title">Title</h4>
            //                     <p className="card-text">Description</p>
            //                     <a href="#" className="btn btn-primary">BUTTON</a>
            //                 </div>
            //             </div>
            //         </div>
            //         <div className="card-footer w-100 text-muted">
            //             Footer stating cats are CUTE little animals
            //         </div>
            //     </div>
            // </div>
        );
    }
}

export default UserProfile;