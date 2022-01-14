import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'


export default function TopBar() {
    return (
        <div>
            <Navbar sticky="top" bg="light">
            <Container>
                <Navbar.Brand href="#home">Task Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="Sort" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Apps</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Games</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Movies</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}
