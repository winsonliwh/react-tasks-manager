import { useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap';
import { ReactComponent as Edit } from '../../img/pencil.svg';
import { ReactComponent as Minus } from '../../img/minus.svg';
import { db, auth } from "../../firebase";
import { update, remove, ref } from "firebase/database";
import Badge from 'react-bootstrap/Badge';
import TaskForm from "./TaskForm";

export default function Task({ task }) {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const [input, setInput] = useState({
        name: task.name,
        description: task.description,
        taskType: task.taskType,
        dueDate: task.dueDate,
        status: task.status
    });

    const handleInput = e => {
        const { id, value } = e.target;
        setInput({
            ...input,
            [id]: value
        });
    };

    const handleDelete = key => {
        const confirmDelete = window.confirm("Are you sure to delete this task?");
        if (confirmDelete) {
            remove(ref(db, `/${auth.currentUser.uid}/${key}`));
        }
    }

    const handleUpdate = e => {
        e.preventDefault()
        update(ref(db, `/${auth.currentUser.uid}/${task.key}`), {
            ...input
        })
        setShow(false)
    }

    const checkStatus = task.status === "DONE" ? "secondary" : "success";

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
                            <Button className="btn-sm listDelete" onClick={() => handleDelete(task.key)} >
                                <Minus />
                            </Button>
                        </span>
                    </div>
                    <p className="card-body">
                        {task.description}
                    </p>
                </div>
                <div className="card-footer">
                    <Badge bg={checkStatus}>{task.status}</Badge><small className="text-muted">{task.createdDate}&nbsp;&nbsp;{task.createdTime}</small>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{task.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={handleUpdate} className="d-grid">
                        <TaskForm input={input} handleInput={handleInput} btnText="Save Changes" />
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}
