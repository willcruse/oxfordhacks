import React from "react";
import {Navbar} from "react-bootstrap";

const Header = () => {
    return (

        <Navbar style={{"marginBottom": "10px"}}bg="dark" expand="lg">
            <Navbar.Brand style = {{"color":"white"}}>Mimic Me</Navbar.Brand>
        </Navbar>);
};


export default Header;