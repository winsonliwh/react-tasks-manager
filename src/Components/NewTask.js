import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 } from "uuid";
import { ReactComponent as AddTask } from '../img/addTask.svg';
import { ReactComponent as ArrowUp } from '../img/arrowUp.svg';
import { db } from "../firebase";
import { set, ref } from "firebase/database";

export default function NewTask({ addTask }) {
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	// const [input, setInput] = useState({});
	// const handleChange = ({ target }) => {
	// 	const { id, value } = target;
	// 	setInput(prevInput => ({
	// 		...prevInput,
	// 		[id]: value
	// 	}));
	// };
	const key = v4()
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
		console.log(assignedTo)
	}

	const [dueDate, setDueDate] = useState("");
	const dueDateChange = e => {
		setDueDate(e.target.value)
		console.log(dueDate)
	}

	const [status, setStatus] = useState("NEW");
	const statusChange = e => {
		setStatus(e.target.value)
	}

	const handleSubmit = e => {
		e.preventDefault()
		setId(prev => prev + 1)
		set(ref(db, `/taskData/${key}`), {
			key: key,
			id: id,
			name: name,
			description: description,
			assignedTo: assignedTo,
			dueDate: dueDate,
			status: status
		})
		setShow(false)
		setName("")
		setDescription("")
		setAssignedTo("")
		setDueDate("")
		setStatus("NEW")

		// e.preventDefault()
		// setId(prev => prev + 1)
		// addTask(prevTask => {
		// 	return [{
		// 		key: v4(),
		// 		id: id,
		// 		name: name,
		// 		description: description,
		// 		assignedTo: assignedTo,
		// 		dueDate: dueDate,
		// 		status: status
		// 	}, ...prevTask]
		// })
		// setShow(false)
		// setName("")
		// setDescription("")
		// setAssignedTo("")
		// setDueDate("")
		// setStatus("NEW")
	}

	// Setting of Buttom for Back to top
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 400) {
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		});
	}, []);

	const handleBackToTop = () => {
		window.scroll({
			top: 0,
			behavior: 'smooth'
		})
	}

	return (
		<div className="newTask" >
			{showButton &&
				<Button className="ArrowUp rounded-circle btn-sm btn-dark" onClick={handleBackToTop}><ArrowUp /></Button>
			}

			<Button className="addTaskbtn rounded-circle" size="md" onClick={handleShow}>
				<AddTask />
			</Button>

			<Modal show={show} onHide={handleClose} backdrop="static">
				<Modal.Header closeButton>
					<Modal.Title><p>New Task</p></Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form onSubmit={handleSubmit} className="d-grid">
						<Form.Group className="mb-3">
							<Form.Label><p>Name</p></Form.Label>
							<Form.Control id="name" placeholder="Name" value={name} onChange={nameChange} required />
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label><p>Description</p></Form.Label>
							<Form.Control id="description" as="textarea" placeholder="Description" value={description} onChange={descriptionChange} />
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label><p>Assigned To</p></Form.Label>
							<Form.Control placeholder="Assigned To" value={assignedTo} onChange={assignedToChange} />
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label><p>Due Date</p></Form.Label>
							<Form.Control type="date" value={dueDate} onChange={dueDateChange} />
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label><p>Status</p></Form.Label>
							<Form.Select defaultValue={status} onChange={statusChange} >
								<option value="NEW">NEW</option>
								<option value="DONE">DONE</option>
							</Form.Select>
						</Form.Group>

						<Button variant="success" type="submit">
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