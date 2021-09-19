import React from 'react';
import {Navbar,Container,Nav,NavDropdown} from 'react-bootstrap';

export default function HeadBar(props) {

  const {users, currentUser, changeCurrentUser} = props;
  
  console.log(users);

  function onChangeUser(e) {
    const {userid} = e.target.dataset;
    changeCurrentUser(userid);
  }

  const navUserList = users.userList.map((value)=>{
    return (<NavDropdown.Item 
    key={value.id} 
    onClick={onChangeUser}
    data-userid={value.id}
    >
      {value.username}
    </NavDropdown.Item>)
  })

  let userName
  if(users.currentUser == null){
    userName = "Guest";
  }else{
    userName = users.currentUser.username;
  }
  

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Board Info</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Change User" id="basic-nav-dropdown">
              {navUserList}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Hello {userName}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}