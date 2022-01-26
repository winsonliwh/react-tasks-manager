import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { ReactComponent as Setting } from '../../img/setting.svg';
import Menu from './Menu';
import Time from './Time';
import SignOut from './SignOut';

export default function TopBar() {
    return (
        <div>
            <Navbar className="topBar rounded-0" variant="light" sticky="top" bg="light">
                <Menu />
                <Navbar.Brand><p>Task Manager</p></Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Time />
                        <NavDropdown align="end" title={<Setting />} id="basic-nav-dropdown">
                            <NavDropdown.Item>Dark Mode</NavDropdown.Item>
                        </NavDropdown>
                        <SignOut />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
