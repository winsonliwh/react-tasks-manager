import { useEffect, useState } from 'react';
import { Button, Form, Modal, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { ReactComponent as Setting } from '../../img/setting.svg';
import Menu from './Menu';
import Time from './Time';
import SignOut from './SignOut';
import { DarkModeBtn } from './DarkModeBtn';
import { getAuth, updatePassword } from "firebase/auth";

export default function TopBar({ darkMode, handleDarkMode }) {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
        setUserInfo({
            email: user.email,
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: ""
        })
    }

    const user = getAuth().currentUser;
    useEffect(() => {
        if (user !== null) {
            setUserInfo(prevUserInfo => {
                return {
                    ...prevUserInfo,
                    email: user.email
                }
            })
        }
    }, [user])

    const [userInfo, setUserInfo] = useState({
        email: "",
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: ""
    })

    const handleInput = e => {
        const { id, value } = e.target;
        setUserInfo(prevInput => {
            return {
                ...prevInput,
                [id]: value
            }
        });
    };

    const handleUpdateUserInfo = e => {
        e.preventDefault()
        if (userInfo.newPassword !== userInfo.confirmNewPassword) {
            alert("Please confirm that password are the same!");
            return;
        }

        updatePassword(user, userInfo.newPassword).then(() => {
            alert("Password Updated!")
            handleClose()
        }).catch(err => alert(err.message));
    }


    return (
        <div>
            <Navbar className="topBar rounded-0" fixed='top'>
                <Menu />
                <Navbar.Brand><p>Task Manager</p></Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Time />
                        <span className="darkModeBtn">
                            <DarkModeBtn checked={darkMode} onChange={handleDarkMode} />
                        </span>
                        <NavDropdown className="settingImg" align="end" title={<Setting />} id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={handleShow}>Change Password</NavDropdown.Item>
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
                    <Form className="d-grid" onSubmit={handleUpdateUserInfo}>
                        <Form.Group className="mb-3">
                            <Form.Label>My Email</Form.Label>
                            <Form.Control id="email" type="email" value={userInfo.email} onChange={handleInput} placeholder="Email" required disabled />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Current Password</Form.Label>
                            <Form.Control id="currentPassword" type="password" value={userInfo.password} onChange={handleInput} placeholder="Current Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>New Password</Form.Label>
                            <Form.Control id="newPassword" type="password" value={userInfo.password} onChange={handleInput} placeholder="New Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Confirm New Password</Form.Label>
                            <Form.Control id="confirmNewPassword" type="password" value={userInfo.confirmPassword} onChange={handleInput} placeholder="Confirm New Password" required />
                        </Form.Group>
                        <Button type="submit">Save Changes</Button>
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
