// import React from 'react';
import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Task from "./Task"

// let taskSample = [{
//     id: 1,
//     name: 'Take out the trash',
//     description: 'Take out the trash to the front of the house',
//     assignedTo: 'Nick',
//     dueDate: '2020-09-20',
//     status: 'TODO'
// }, {
//     id: 2,
//     name: 'Cook Dinner',
//     description: 'Prepare a healthy serving of pancakes for the family tonight',
//     assignedTo: 'Nick',
//     dueDate: '2020-09-20',
//     status: 'TODO'
// }]

export default function TaskList({ taskList, deleteTask }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [taskIndex, setTaskIndex] = useState(0);


    return (
        <div>
            {taskList.map(task => {
                const { id, name, description, dueDate, assignedTo, status } = task
      
                // return (
                //     <div key={id}>
                //         <Task 
                //             id={id}
                //             name={name}
                //             description={description}
                //             assignedTo={assignedTo}
                //             dueDate={dueDate}
                //             status={status}
                //             deleteTask={deleteTask}
                //             setTaskIndex={setTaskIndex}
                //         />
                //     </div>
                // )

                const handleDelete = () => {
                    deleteTask(prev => {
                        return prev.filter(task => task.id !== id)
                    })
                }
                return (
                    <div key={task.id}>
                        <div className="d-grid gap-2" onClick={e => setTaskIndex(e.target.id - 1)}>
                            <Button id={id} variant="secondary" size="lg" onClick={handleShow}>
                                {name}
                            </Button>
                            <Button onClick={handleDelete} >
                                Delete
                            </Button>
                        </div>
                    </div>
                )
            })}

            {taskList[taskIndex] &&
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{taskList[taskIndex].name}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control value={taskList[taskIndex].name} onChange={() => { }} placeholder="Name" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Description</Form.Label>
                                <Form.Control value={taskList[taskIndex].description} onChange={() => { }} placeholder="Description" as="textarea" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Assigned To</Form.Label>
                                <Form.Control value={taskList[taskIndex].assignedTo} onChange={() => { }} placeholder="Assigned To" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Due Date</Form.Label>
                                <Form.Control value={taskList[taskIndex].dueDate} onChange={() => { }} type="date" placeholder="Due Date" />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Status</Form.Label>
                                <Form.Select value={taskList[taskIndex].status} onChange={() => { }}>
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
            }
        </div>
    )
}