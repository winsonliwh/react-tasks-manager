import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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

	const [assignTo, setAssignTo] = useState("");
	const assignToChange = e => {
		setAssignTo(e.target.value)
	}

	const [dueDate, setDueDate] = useState("");
	const dueDateChange = e => {
		setDueDate(e.target.value)
	}

	const [status, setStatus] = useState("");
	const statusChange = e => {
		setStatus(e.target.value)
	}

	const handleSubmit = e => {
		submittingStatus.current = true
		e.preventDefault()
		setId(prev => prev + 1)
		addTask(prevTask => {
			return [...prevTask, {
				id: id,
				name: name,
				description: description,
				assignTo: assignTo,
				dueDate: dueDate,
				status: status
			}]
		})
	}

	return (
		<div className="d-grid gap-2" >
			<Button variant="primary" size="lg" onClick={handleShow}>
				New Task
			</Button>

			<Modal onSubmit={handleSubmit} show={show} onHide={handleClose} backdrop="static">
				<Modal.Header closeButton>
					<Modal.Title>New Task</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form>
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
							<Form.Control placeholder="Assigned To" value={assignTo} onChange={assignToChange} />
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Due Date</Form.Label>
							<Form.Control type="date" placeholder="Due Date" value={dueDate} onChange={dueDateChange} />
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label>Status</Form.Label>
							<Form.Select value={status} onChange={statusChange} >
								<option value="new">NEW</option>
								<option value="done">DONE</option>
							</Form.Select>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Task1" />
						</Form.Group>
						<Button variant="primary" onClick={handleClose} type="submit">
							Submit
						</Button>
					</Form>
				</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose} type="submit" >
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}