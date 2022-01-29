import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { ReactComponent as Setting } from '../../img/setting.svg';
import Menu from './Menu';
import Time from './Time';
import SignOut from './SignOut';
import { MaterialUISwitch } from './DarkModeBtn';

export default function TopBar({ darkMode, handleDarkMode }) {
    return (
        <div>
            <Navbar className="topBar rounded-0" fixed='top'>
                <Menu />
                <Navbar.Brand><p>Task Manager</p></Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Time />
                        <span className="darkModeBtn">
                        <MaterialUISwitch checked={darkMode} onChange={handleDarkMode} />
                        </span>
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
