import React, { useContext, useEffect, useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AuthContext from "../context/AuthContext";
import LogOut from "./LogOut";


 function NavBar() {

  const token = localStorage.getItem("token");

  const  [tokenlogin, setTokenlogin] = useState(token)
  
   // console.log(token)
   useEffect(() => {
    const userToken = localStorage.getItem('token')
     setTokenlogin(userToken)
    console.log(userToken)
   },[tokenlogin]) 
   //console.log(token)
  return (
    <nav className="nav flex space-x-10">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/buyhouse">Buy</Nav.Link>
      <Nav.Link href="/renthouse">Rent</Nav.Link>
      <Nav.Link href="/adcreate">Advertise</Nav.Link>
      <Nav.Link href="/agents">Agent Finder</Nav.Link>
      <div className="manageitens">
       { token ? <Nav.Link href="/manageitens">Manage Advertise</Nav.Link> : null }
       </div>
      <div className="login-button">
        { token ? <LogOut /> : <Nav.Link href="/login">Sign in</Nav.Link>}

      
      </div>
    </nav>
  );
}

export default NavBar;
