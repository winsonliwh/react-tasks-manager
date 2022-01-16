import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import Time from './Time';
import { ReactComponent as Setting } from '../img/setting.svg';

export default function TopBar() {
    return (
        <div>
            <Navbar className="topBar rounded-0" variant="light" sticky="top" bg="light">
                <Menu />
                <Navbar.Brand>Task Manager</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Time />
                        <NavDropdown align="end" title={<Setting />} id="basic-nav-dropdown">
                            <NavDropdown.Item>Dark Mode</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
