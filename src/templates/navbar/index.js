import React, {Component} from 'react';
import { Nav,DropdownButton,Dropdown, Navbar} from "react-bootstrap";

export class NavbarHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            display: this.props.display
        }
    }

    render() {
        return (
            <Navbar expand="lg" bg="primary" variant="dark">
                <Navbar.Brand href="#home">HRD Management System</Navbar.Brand>
                <Nav className="mr-auto" >
                    <Nav.Link onClick={() => this.props.goToPage("HOME")}>Home</Nav.Link>
                    <Nav.Link onClick={() => this.props.goToPage("USER")}>User</Nav.Link>
                    <Nav.Link onClick={() => this.props.goToPage("ALBUMS")}>Albums</Nav.Link>
                </Nav>
                <Nav>
                    <DropdownButton
                        alignRight
                        title={
                            <span> <img
                                src="https://ui-avatars.com/api/?name=M%20Inggit%20Prakasa&background=0D8ABC&color=fff&rounded=true"
                                alt="userProfile"
                                height={30}
                                width={30}
                            /> </span>
                        }
                    >
                        <Dropdown.Item onClick={() => this.props.goToPage("PROFILE")}>User Profile</Dropdown.Item>
                        <Dropdown.Item divider />
                        <Dropdown.Item onClick={this.props.goToLogin}>Logout</Dropdown.Item>
                    </DropdownButton>
                </Nav>
            </Navbar>
        );
    };
};

export default NavbarHome;
