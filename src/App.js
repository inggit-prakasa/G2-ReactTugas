import React, {Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Home,Login } from "./pages";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: true,
      page: "LOGIN",
      userSelected: {},
      users: [{
        username:"inggit",
        password:"123123123",
        email:"inggit.prakasa123@gmail.com",
        address:"Bogor",
        phone:"0823220837293",
        birth:"1998-10-21",
        role:"HRD"
      },
      {
        username:"admin",
        password:"admin",
        email:"admin@admin.com",
        address:"Bogor",
        phone:"0823220837293",
        birth:"1990-10-21",
        role:"KARYAWAN"
      }],
      result : null
    }
  }

  selectedUser = userSelected => {
    this.setState({
      userSelected
    })
  }

  deleteRow = (idx) => {
    const lastData = this.state.users
    lastData.splice(idx, 1)
    this.setState({
      contacts: lastData
    })
  }

  fetchData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(result => this.setUsers(result));
  }

  setUsers(result) {
    this.setState({ users : result });
  }

  componentDidMount() {
    // const { datausers } = this.state;
    this.fetchData();
  }

  updateUser = user => {
    let newData = this.state.users
    console.log(user.username)
    newData.push(user)
    this.setState({
      users: newData
    })
  }

  editUser = (idx,user) => {
    const newData = this.state.users
    console.log(idx)
    newData[idx] = user
    this.setState({
      users: newData
    })
  }

  showPage = () => {
    if (this.state.page === "HOME")
      return <Home goToLogin={() => this.goToPage("LOGIN")} editUser={this.editUser} updateUser={this.updateUser} user={this.state.userSelected} users={this.state.users} deleteRow={this.deleteRow}/>

    return <Login users={this.state.users}  goToHome={() => this.goToPage("HOME")} selectedUser={this.selectedUser}/>
  }


  goToPage = page => {
    this.setState({
      page
    })
  }

  render() {
    console.log("results :",this.state.users)
    return (
        <>
        {
          this.showPage()
        }
        </>
    );
  }
}

export default App;
