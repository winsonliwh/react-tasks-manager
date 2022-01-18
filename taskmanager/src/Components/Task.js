import { useState } from "react";
// import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import { ReactComponent as Edit } from '../img/pencil.svg';
import { ReactComponent as Minus } from '../img/minus.svg';

export default function Task({ task, editTask }) {

    // const { key, id, name, description, dueDate, assignedTo, status } = task

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState(task.name);
    const nameChange = e => {
        setName(e.target.value)
    }

    const [description, setDescription] = useState(task.description);
    const descriptionChange = e => {
        setDescription(e.target.value)
    }

    const [assignedTo, setAssignedTo] = useState(task.assignedTo)
    const assignedToChange = e => {
        setAssignedTo(e.target.value)
    }

    const [dueDate, setDueDate] = useState(task.dueDate);
    const dueDateChange = e => {
        setDueDate(e.target.value)
    }

    const [status, setStatus] = useState(task.status);
    const statusChange = e => {
        setStatus(e.target.value)
    }

    const updatedTaskData = {
        key: task.key,
        id: task.id,
        name: name,
        description: description,
        assignedTo: assignedTo,
        dueDate: dueDate,
        status: status
    };

    const handleDelete = () => {
        editTask(prev => {
            return prev.filter(eachTask => eachTask.key !== task.key)
        })
    }

    const handleUpdate = e => {
        e.preventDefault()
        editTask(prev => {
            return prev.map(eachTask => eachTask.key === task.key ? updatedTaskData : eachTask)
        })
    }

    return (
        <div class="">
            <div class="card">
                <div class="card-body">
                    <div className="cardTitle sticky-top">
                        <h5 class="card-title">{task.name}</h5>
                        <span className="listButton">
                            <Button className="btn-sm listEdit" onClick={handleShow}>
                                <Edit />
                            </Button>
                            <Button className="btn-sm listDelete" onClick={handleDelete} >
                                <Minus />
                            </Button>
                        </span>
                    </div>
                    <p class="card-body">
                        {task.description}
                    </p>
                </div>
                <div class="card-footer">
                    <small class="text-muted"><p>Last updated 3 mins ago</p></small>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{task.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={handleUpdate} className="d-grid">
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control value={name} onChange={nameChange} placeholder="Name" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control value={description} onChange={descriptionChange} placeholder="Description" as="textarea" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Assigned To</Form.Label>
                            <Form.Control value={assignedTo} onChange={assignedToChange} placeholder="Assigned To" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Due Date</Form.Label>
                            <Form.Control value={dueDate} onChange={dueDateChange} type="date" placeholder="Due Date" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Select value={status} onChange={statusChange}>
                                <option value="NEW">NEW</option>
                                <option value="DONE">DONE</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Task1" />
                        </Form.Group>
                        <Button variant="success" onClick={handleClose} type="submit">
                            Save Changes
                        </Button>
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
