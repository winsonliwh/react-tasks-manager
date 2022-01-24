import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import { ReactComponent as Edit } from '../img/pencil.svg';
import { ReactComponent as Minus } from '../img/minus.svg';

export default function Task({ task, editTask }) {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

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
        const confirmDelete = window.confirm("Want to delete this task?");
        if (confirmDelete) {
            editTask(prev => {
                return prev.filter(eachTask => eachTask.key !== task.key)
            })
        }
    }

    const handleUpdate = e => {
        e.preventDefault()
        editTask(prev => {
            return prev.map(eachTask => eachTask.key === task.key ? updatedTaskData : eachTask)
        })
        setShow(false)
    }

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <div className="cardTitle sticky-top">
                        <h5 className="card-title">{task.name}</h5>
                        <span className="listButton">
                            <Button className="btn-sm listEdit" onClick={handleShow}>
                                <Edit />
                            </Button>
                            <Button className="btn-sm listDelete" onClick={handleDelete} >
                                <Minus />
                            </Button>
                        </span>
                    </div>
                    <p className="card-body">
                        {task.description}
                    </p>
                </div>
                <div className="card-footer">
                    <span>{task.status}</span><small className="text-muted"> Last updated 3 mins ago</small>
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
                            <Form.Control value={name} onChange={nameChange} placeholder="Name" required />
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
                            <Form.Control value={dueDate} onChange={dueDateChange} type="date" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Status</Form.Label>
                            <Form.Select value={status} onChange={statusChange}>
                                <option value="NEW">NEW</option>
                                <option value="DONE">DONE</option>
                            </Form.Select>
                        </Form.Group>

                        <Button variant="success" type="submit">
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
