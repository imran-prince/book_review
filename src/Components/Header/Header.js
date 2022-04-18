import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.init';
 
import CustomLink from '../CustomLink/CustomLink';
 

const Header = () => {
    const [user]=useAuthState(auth)
    const signoutHandaler=()=>{
        signOut(auth)
    }
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand  as={CustomLink} to="/">React-Bootstrap</Navbar.Brand>
          
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                     
                    <Nav className="ms-auto">
                        <Nav.Link as={CustomLink} to="/about">About</Nav.Link>
                    
                        <Nav.Link as={CustomLink} to="/blog">Blog</Nav.Link>
                        {
                            user ?<button onClick={signoutHandaler}>Log out</button>:<Nav.Link   as={CustomLink} to="/login">
                            Login
                        </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;