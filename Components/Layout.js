import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from "react-router-dom"

const Layout = () =>{
    return(
        <>
        <Navbar bg="dark" variant="dark" style={{height:"60px"}}>
            
                <Navbar.Brand href="#home" style={{marginLeft:"40px"}}>Customer Management System</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/" style={{marginLeft:"10px"}}>Home</Nav.Link>
                </Nav>
            
        </Navbar>


        <Outlet/>
        </>
    );
}


export default Layout;