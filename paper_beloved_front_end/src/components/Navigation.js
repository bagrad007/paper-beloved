import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Route, Switch, useHistory } from 'react-router-dom'

const Navigation = () => {
    const history = useHistory()

    const handleHome = e => {
        e.preventDefault()
        history.push("/home")
    }

    const handleList = e => {
        e.preventDefault()
        history.push("/favorites")
    }
    const handleSearch = e => {
        e.preventDefault()
        history.push("/search")
    }
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/home" onClick={handleHome}>Paper Beloved</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/favorites" onClick={handleList}>About</Nav.Link>
                        <Nav.Link href="/search" onClick={handleSearch}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Switch>
                <Route />
                <Route />
                <Route />
            </Switch>
        </>

    );

}

export default Navigation;