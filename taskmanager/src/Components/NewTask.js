import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 } from "uuid";
import { ReactComponent as AddTask } from '../img/addTask.svg';

export default function NewTask({ addTask, submittingStatus }) {
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	const [id, setId] = useState(1)

	const [name, setName] = useState("");
	const nameChange = e => {
		setName(e.target.value)
	}

	const [description, setDescription] = useState("");
	const descriptionChange = e => {
		setDescription(e.target.value)
	}

	const [assignedTo, setAssignedTo] = useState("");
	const assignedToChange = e => {
		setAssignedTo(e.target.value)
	}

	const [dueDate, setDueDate] = useState("");
	const dueDateChange = e => {
		setDueDate(e.target.value)
	}

	const [status, setStatus] = useState("NEW");
	const statusChange = e => {
		setStatus(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()
		// submittingStatus.current = true
		setId(prev => prev + 1)
		addTask(prevTask => {
			return [...prevTask, {
				key: v4(),
				id: id,
				name: name,
				description: description,
				assignedTo: assignedTo,
				dueDate: dueDate,
				status: status
			}]
		})
		setName("")
		setDescription("")
		setAssignedTo("")
		setDueDate("")
		setStatus("NEW")
	}

	return (
		<div className="newTask" >
			<Button className="addTaskbtn rounded-circle" size="lg" onClick={handleShow}>
				<AddTask />
			</Button>

			<Modal show={show} onHide={handleClose} backdrop="static">
				<Modal.Header closeButton>
					<Modal.Title>New Task</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form onSubmit={handleSubmit} className="d-grid">
						<Form.Group className="mb-3">
							<Form.Label>Name</Form.Label>
							<Form.Control id="name" placeholder="Name" value={name} onChange={nameChange} />
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Description</Form.Label>
							<Form.Control id="description" as="textarea" placeholder="Description" value={description} onChange={descriptionChange} />
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Assigned To</Form.Label>
							<Form.Control placeholder="Assigned To" value={assignedTo} onChange={assignedToChange} />
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Due Date</Form.Label>
							<Form.Control type="date" placeholder="Due Date" value={dueDate} onChange={dueDateChange} />
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Status</Form.Label>
							<Form.Select value={status} onChange={statusChange} >
								<option value="NEW">NEW</option>
								<option value="DONE">DONE</option>
							</Form.Select>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Task1" />
						</Form.Group>
						<Button variant="success" onClick={handleClose} type="submit">
							Submit
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
	);
}