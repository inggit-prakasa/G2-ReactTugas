import React, { Component } from 'react';
import {NavbarHome} from "../../templates";
import User from "../user";
import AddUser from "../addUser";
import UserProfile from "../userProfile";
import UpdateUser from "../updateUser";
import Albums from "../albums";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            idx : 0,
            page:"HOME",
            userUpdate:{},
            display:""
        }
    }

    editRow = (idx) => {
        this.setState({
            page:"UPDATEUSER",
            updateUser:this.props.users[idx],
            idx
        })
    }

    showPage = () => {
        if (this.state.page === "HOME") {
            return <User users={this.props.users} goToPage={this.goToPage} editRow={this.editRow} deleteRow={this.props.deleteRow}/>
        } else if (this.state.page === "USER") {
            return <AddUser updateUser={this.props.updateUser} goToPage={this.goToPage} />
        } else if (this.state.page === "PROFILE") {
            return <UserProfile user={this.props.user}/>
        } else if (this.state.page === "UPDATEUSER") {
            return <UpdateUser user={this.state.updateUser} idx={this.state.idx} updateUser={this.props.editUser} goToPage={this.goToPage}/>
        } else if (this.state.page === "ALBUMS") {
            return <Albums user={this.props.user} />
        }
    }

    goToPage = page => {
        this.setState({
            page
        })
    }

    render() {
        return (
            <>
            <NavbarHome goToLogin={this.props.goToLogin} goToPage={this.goToPage} display={this.state.display} user={this.props.user}/>
                {
                    this.showPage()
                }
            </>
        );
    }
}

export default Home;