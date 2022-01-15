// const { id, name, description, dueDate, assignedTo, status } = task
import React, { useState } from "react";
import Button from "react-bootstrap/Button";

export default function Task({ id, name, description, dueDate, assignedTo, status, deleteTask, setTaskIndex, task }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = () => {
        deleteTask(prev => {
            return prev.filter(task => task.id !== id)
        })
    }

    return (
        <div key={id}>
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
}
