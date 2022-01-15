import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

export default function Menu({ ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="me-2">
        Menu
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Task Manager</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div><Link to="/">HOME</Link></div>
          <div><Link to="/newTask">New Task</Link></div>
          <div><Link to="/taskList">Task List</Link></div>
          <div><Link to="/calendar">Calendar</Link></div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}