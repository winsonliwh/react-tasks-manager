import { useEffect, useState } from 'react';
import { Button, Form, Modal, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { ReactComponent as Setting } from '../../img/setting.svg';
import Menu from './Menu';
import Time from './Time';
import SignOut from './SignOut';
import { MaterialUISwitch } from './DarkModeBtn';
import { getAuth } from "firebase/auth";

async function getUserEmail() {
    const auth = await getAuth();
    const user = await auth.currentUser;
    if (user !== null) {
        console.log(user)
        console.log(user.email)
        // user.providerData.forEach(profile => {
        //     return profile.email
        // })
        return user.email
    } else {
        return "123"
    }
}

export default function TopBar({ darkMode, handleDarkMode }) {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    // useEffect(() => {
    //     const auth = getAuth();
    //     const user = auth.currentUser;
    //     if (user !== null) {
    //         console.log(user)
    //         console.log(user.email)
    //     }
    // }, [])

    const [userInfo, setUserInput] = useState({
        email: getUserEmail(),
        // email: getAuth().currentUser.email,
        password: "",
        confirmPassword: ""
    })

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
                        <NavDropdown className="settingImg" align="end" title={<Setting />} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={handleShow}>My Account</NavDropdown.Item>
                        </NavDropdown>
                        <SignOut className="signOut" />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>My Account</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form className="d-grid">
                        <Form.Group className="mb-3">
                            <Form.Label>My Email</Form.Label>
                            <Form.Control id="email" value={userInfo.email} /* onChange={handleInput} */ placeholder="Email" required />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
