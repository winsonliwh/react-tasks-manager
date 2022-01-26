import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { v4 } from "uuid";
import { ReactComponent as AddTask } from '../../img/addTask.svg';
import { db, auth } from "../../firebase";
import { set, ref } from "firebase/database";
import Days from "react-calendar/dist/umd/MonthView/Days";

export default function NewTask() {
	const [show, setShow] = useState(false);
	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	// const [input, setInput] = useState({
	// 	name: "",
	// 	description: "",
	// 	taskType: "",
	// 	dueDate: nowDay(),
	// 	status: "Prograssing"
	// });

	// const handleInput = ({ target }) => {
	// 	const { id, value } = target;
	// 	setInput(prevInput => ({
	// 		...prevInput,
	// 		[id]: value
	// 	}));
	// 	console.log(input)
	// };

	const nowDay = () => {
		const date = new Date()
		const months = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"]
		return date.getFullYear('en-US') + "-" + months[date.getMonth()] + "-" + date.getDate('en-US')
	}

	const nowTime = () => {
		const date = new Date()
		return date.toLocaleTimeString('en-US', { hour12: false })
	}

	const [name, setName] = useState("");
	const nameChange = e => {
		setName(e.target.value)
	}

	const [description, setDescription] = useState("");
	const descriptionChange = e => {
		setDescription(e.target.value)
	}

	const [taskType, setTaskType] = useState("");
	const taskTypeChange = e => {
		setTaskType(e.target.value)
	}

	const [dueDate, setDueDate] = useState(nowDay);
	const dueDateChange = e => {
		setDueDate(e.target.value)
	}

	const [status, setStatus] = useState("Prograssing");
	const statusChange = e => {
		setStatus(e.target.value)
	}

	const key = v4()
	const handleSubmit = e => {
		e.preventDefault()
		set(ref(db, `/${auth.currentUser.uid}/${key}`), {
			key: key,
			createdDate: nowDay(),
			createdTime: nowTime(),
			name: name,
			description: description,
			taskType: taskType,
			dueDate: dueDate,
			status: status
		})
		setShow(false)
		setName("")
		setDescription("")
		setTaskType("")
		setDueDate(nowDay)
		setStatus("Prograssing")
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
						{/* <Form.Group className="mb-3">
							<Form.Label><p>Name</p></Form.Label>
							<Form.Control id="name" placeholder="Name" value={input.name} onChange={handleInput} />
						</Form.Group> */}
						<Form.Group className="mb-3">
							<Form.Label><p>Name</p></Form.Label>
							<Form.Control id="name" placeholder="Name" value={name} onChange={nameChange} required />
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label><p>Description</p></Form.Label>
							<Form.Control id="description" as="textarea" placeholder="Description" value={description} onChange={descriptionChange} />
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label><p>Task Type</p></Form.Label>
							<Form.Select value={taskType} onChange={taskTypeChange}>
                                <option value="Work">Work</option>
                                <option value="Home">Home</option>
                                <option value="Entertainment">Entertainment</option>
                            </Form.Select>
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label><p>Due Date</p></Form.Label>
							<Form.Control type="date" value={dueDate} onChange={dueDateChange} />
						</Form.Group>

						<Form.Group className="mb-3">
							<Form.Label><p>Status</p></Form.Label>
							<Form.Select defaultValue={status} onChange={statusChange} >
								<option value="Prograssing">Prograssing</option>
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