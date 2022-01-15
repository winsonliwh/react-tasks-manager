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
          <Link to="/">HOME</Link><br />
          <Link to="/newTask">New Task</Link><br />
          <Link to="/taskList">Task List</Link><br />
          <Link to="/calendar">Calendar</Link><br />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}