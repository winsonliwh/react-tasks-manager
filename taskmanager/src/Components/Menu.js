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
      <Button variant="flat" onClick={handleShow} className="me-2">
        Menu
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
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