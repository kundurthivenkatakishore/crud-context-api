import React from "react";
import { Link } from "react-router-dom";
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
} from 'reactstrap';
//importing the Navbar from reactstrap
//header of the component
export const Heading=()=>{
    return(
        <Navbar color="dark" className="nav">
            <Container>
                <NavbarBrand href="/">My Team</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link to="/components/AddUser">Add User</Link>
                    </NavItem>
                </Nav>

            </Container>
        </Navbar>
    )
}