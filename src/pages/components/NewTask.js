import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { v4 } from "uuid";
import { ReactComponent as AddTask } from '../../img/addTask.svg';
import { db, auth } from "../../firebase";
import { set, ref } from "firebase/database";
import Days from "react-calendar/dist/umd/MonthView/Days";
import TaskForm from "./TaskForm";

export default function NewTask() {
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	const nowDay = () => {
		const date = new Date()
		const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
		return date.getFullYear('en-US') + "-" + months[date.getMonth()] + "-" + date.getDate('en-US')
	}

	const nowTime = () => {
		const date = new Date()
		return date.toLocaleTimeString('en-US', { hour12: false })
	}

	const [input, setInput] = useState({
		name: "",
		description: "",
		taskType: "",
		dueDate: nowDay(),
		status: "In Progress"
	});

	const handleInput = e => {
		const { id, value } = e.target;
		setInput({
			...input,
			[id]: value
		});
	};

	const key = v4()
	const handleSubmit = e => {
		e.preventDefault()
		set(ref(db, `/${auth.currentUser.uid}/${key}`), {
			key: key,
			createdDate: nowDay(),
			createdTime: nowTime(),
			...input
		})
		setShow(false)
		setInput({
			name: "",
			description: "",
			taskType: "",
			dueDate: nowDay(),
			status: "In Progress"
		});
	}

	return (
		<div className="newTask" >
			<Button className="addTaskbtn rounded-circle" size="md" onClick={handleShow}>
				<AddTask />
			</Button>

			<Modal show={show} onHide={handleClose} backdrop="static">
				<Modal.Header closeButton>
					<Modal.Title><p>New Task</p></Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form onSubmit={handleSubmit} className="d-grid">
						<TaskForm input={input} handleInput={handleInput} btnText="Submit" />
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