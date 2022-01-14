// import React from 'react';
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";


const taskSample = [{
    id: 1,
    name: 'Take out the trash',
    description: 'Take out the trash to the front of the house',
    assignedTo: 'Nick',
    dueDate: '2020-09-20',
    status: 'TODO'
}, {
    id: 2,
    name: 'Cook Dinner',
    description: 'Prepare a healthy serving of pancakes for the family tonight',
    assignedTo: 'Nick',
    dueDate: '2020-09-20',
    status: 'TODO'
}]

export default function TaskList() {
    const [show, setShow] = useState(false);

    const handleClose = (task) => setShow(false);
    const handleShow = (task) => setShow(true);

    // const addTask() {
    //     this.tasks.push({ taskSample })
    // }

    // render() {
    return (
        <div>
            {taskSample.map(task => (
                <div key={task.id}>
                    {console.log(task)}
                    <div className="d-grid gap-2">
                        <Button variant="secondary" size="lg" onClick={() => handleShow(task)}>
                            {task.name}
                        </Button>
                    </div>

                        <Modal key={task.id} show={show} onHide={() => setShow(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>{task.name}</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <Form>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control value={task.name} placeholder="Name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" value={task.description} placeholder="Description" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Assigned To</Form.Label>
                                        <Form.Control value={task.assignedTo} placeholder="Assigned To" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Due Date</Form.Label>
                                        <Form.Control value={task.dueDate} type="date" placeholder="Due Date" />
                                    </Form.Group>

                                    <Form.Group className="mb-3">
                                        <Form.Label>Status</Form.Label>
                                        <Form.Select>
                                            <option value="new">NEW</option>
                                            <option value="done">DONE</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Task1" />
                                    </Form.Group>
                                </Form>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose} type="submit">
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    {/* <div show={show} onHide={handleClose}>
                        Name: {task.name}<br />
                        Description: {task.description}<br />
                        Assigned To: {task.assignedTo}<br />
                        Due Date: {task.dueDate}<br />
                        Status: {task.status}<br /><br />
                    </div> */}
                </div>
            ))}
        </div>
    )
    // }
}