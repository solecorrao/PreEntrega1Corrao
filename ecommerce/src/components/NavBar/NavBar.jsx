import CartWidget from "../CartWidget/CartWidget"

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return (
        <>
            <Navbar  expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Link className="btn" style={{border: 'none'}} to="/">Burger Shop</Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink className={( {isActive} ) => isActive ? 'btn btn-dark' : 'btn' } to="/">Inicio</NavLink>
                            <NavLink className={( {isActive} ) => isActive ? 'btn btn-dark' : 'btn' } to="/category/combos">Combos</NavLink>
                            <NavLink className={( {isActive} ) => isActive ? 'btn btn-dark' : 'btn' } to="/category/hamburguesas">Hamburguesas</NavLink>
                        </Nav>
                    <NavLink className={( {isActive} ) => isActive ? 'btn btn-dark' : 'btn' } to='/carrito'>
                        <CartWidget />
                    </NavLink  >
                    </Navbar.Collapse>
                </Container>
            </Navbar>



        </>
    );
}

export default NavBar

