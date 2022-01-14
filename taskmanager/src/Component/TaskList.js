// import React from 'react';
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
// import NewTask from "./NewTask.js";
// import {Abc} from "./NewTask.js";


let taskSample = [{
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

// taskSample.push(abc)
// console.log(Abc)
// console.log(taskSample)

export default function TaskList() {
    const [show, setShow] = useState(false);
    const [taskIndex, setTaskIndex] = useState(0);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            {/* {props.Tasks.map(task => ( */}
            {taskSample.map(task => (
                <div key={task.id}>
                    <div className="d-grid gap-2" onClick={(e) => { setTaskIndex(e.target.id - 1) }}>
                        <Button id={task.id} variant="secondary" size="lg" onClick={handleShow}>
                            {task.name}
                        </Button>
                    </div>
                </div>
            ))}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{taskSample[taskIndex].name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control value={taskSample[taskIndex].name} onChange={() => { }} placeholder="Name" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" value={taskSample[taskIndex].description} onChange={() => { }} placeholder="Description" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Assigned To</Form.Label>
                            <Form.Control value={taskSample[taskIndex].assignedTo} onChange={() => { }} placeholder="Assigned To" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control value={taskSample[taskIndex].dueDate} onChange={() => { }} type="date" placeholder="Due Date" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Select onChange={() => { }}>
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
        </div>
    )
}