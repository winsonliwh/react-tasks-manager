import { useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap';
import { ReactComponent as Edit } from '../../img/pencil.svg';
import { ReactComponent as Minus } from '../../img/minus.svg';
import { db, auth } from "../../firebase";
import { update, remove, ref } from "firebase/database";
import Badge from 'react-bootstrap/Badge';
import TaskForm from "./TaskForm";
import Checked from "../../img/Checked.png"
import Unchecked from "../../img/Unchecked.png"

export default function Task({ task }) {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false);
        setInput(task)
    }

    const [input, setInput] = useState(task);

    const handleInput = e => {
        const { id, value } = e.target;
        setInput(prevInput => {
            return {
                ...prevInput,
                [id]: value
            }
        });
    };

    const handleStartDateChange = date => {
        setInput({
            ...input,
            startDate: date.getTime()
        })
    }

    const handleDueDateChange = date => {
        setInput({
            ...input,
            dueDate: date.getTime()
        })
    }

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

    const handleDone = () => {
        setInput(prevInput => ({ ...prevInput, done: !prevInput.done }))
        setTimeout(() => {
            update(ref(db, `/${auth.currentUser.uid}/${task.key}`), {
                ...input, done: !input.done
            })
        }, 3000)
    }

    const startDate = new Date(input.startDate).toLocaleDateString('en-CA', {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });

    const dueDate = new Date(input.dueDate).toLocaleDateString('en-CA', {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });

    const doneStrike = input.done ? "lineThrough" : "";
    const isDoneStyle = input.done ? "isDoneStyle" : "";

    const doneImg = { backgroundImage: `url(${input.done ? Checked : Unchecked})` }

    const checkStatus = input.done ? "secondary" : "success";
    const checkTaskType = input.taskType === "Home" ? "danger" : input.taskType === "Entertainment" ? "warning" : "primary";

    return (
        <div>
            <div className={`card ${isDoneStyle}`}>
                <div className="cardTitle sticky-top">
                    <div className="doneCheckbox" style={doneImg} onClick={handleDone}></div>
                    <h5 className={`card-title ${doneStrike}`}>{input.name}</h5>
                    <span className="cardButton">
                        <Button className="btn-sm cardEdit" onClick={handleShow}>
                            <Edit />
                        </Button>
                        <Button className="btn-sm cardDelete" onClick={() => handleDelete(task.key)} >
                            <Minus />
                        </Button>
                    </span>
                </div>
                <div className="card-body">
                    <p className={doneStrike}>{input.description}</p>
                </div>
                {/* <small className="dueDateText text-muted">Start Date: {startDate}</small>
                <small className="dueDateText text-muted">Due Date: {dueDate}</small> */}
                <small className="dueDateText text-muted">{startDate} to {dueDate}</small>
                <div className="card-footer">
                    <p>
                        <Badge className="doneBtn" bg={checkStatus}>{input.done ? "Done" : "ToDo"}</Badge>
                        <Badge bg={checkTaskType}>{input.taskType}</Badge>
                    </p>
                    <small className="text-muted">Created: {task.createdDate}&nbsp;&nbsp;{task.createdTime}</small>
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{input.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={handleUpdate} className="d-grid">
                        <TaskForm input={input} handleInput={handleInput} handleStartDateChange={handleStartDateChange} handleDueDateChange={handleDueDateChange} btnText="Save Changes" />
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
