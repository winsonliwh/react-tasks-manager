import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// const options = [
// {
//   name: 'Enable backdrop (default)',
//   scroll: false,
//   backdrop: true,
// },
// {
//   name: 'Disable backdrop',
//   scroll: false,
//   backdrop: false,
// },
// {
//   name: 'Enable body scrolling',
//   scroll: true,
//   backdrop: false,
// },
// {
//   name: 'Enable both scrolling & backdrop',
//   scroll: true,
//   backdrop: true,
// },
// ];

export default function Menu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow((s) => !s);

  return (
    <>
      <Button variant="light" onClick={handleShow}>
        Menu
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Task Manager</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div><Link className="linkText" to="/">HOME</Link></div>
          <div><Link className="linkText" to="/newTask">New Task</Link></div>
          <div><Link className="linkText" to="/taskList">Task List</Link></div>
          <div><Link className="linkText" to="/calendar">Calendar</Link></div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}