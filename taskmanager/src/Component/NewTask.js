import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default class NewTask extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			show: false,
			name: "",
			description: "",
			addTask: []
		}
		// this.handleShow = this.handleShow.bind(this);
		// this.handleClose = this.handleClose.bind(this);
		// this.handleChange = this.handleChange.bind(this);
		// this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleClose = () => this.setState({ show: false });
	handleShow = () => this.setState({ show: true });
	handleChange = e => {
		let changeID = e.target.id
		this.setState({ [changeID]: e.target.value })
	}
	handleSubmit = event => {
		console.log(this.state.name)
		event.preventDefault()
		// this.state.addTask.push({
		return ({
			name: this.state.name,
			description: this.state.description
		})
		// console.log(this.state.addTask)
	}

	render() {
		return (
			<div className="d-grid gap-2" >
				<Button variant="primary" size="lg" onClick={this.handleShow}>
					New Task
				</Button>

				<Modal onSubmit={this.handleSubmit} show={this.state.show} onHide={this.handleClose} backdrop="static">
					<Modal.Header closeButton>
						<Modal.Title>New Task</Modal.Title>
					</Modal.Header>

					<Modal.Body>
						<Form>
							<Form.Group className="mb-3">
								<Form.Label>Name</Form.Label>
								<Form.Control id="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Description</Form.Label>
								<Form.Control id="description" as="textarea" placeholder="Description" value={this.state.description} onChange={this.handleChange} />
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Assigned To</Form.Label>
								<Form.Control placeholder="Assigned To" />
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Due Date</Form.Label>
								<Form.Control type="date" placeholder="Due Date" />
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label>Status</Form.Label>
								<Form.Select>
									<option value="new">NEW</option>
									<option value="done">DONE</option>
								</Form.Select>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="Task1" />
							</Form.Group>
							<Button variant="primary" onClick={this.handleClose} type="submit">
								Submit
							</Button>
						</Form>
					</Modal.Body>

					<Modal.Footer>
						<Button variant="secondary" onClick={this.handleClose}>
							Close
						</Button>
						<Button variant="primary" onClick={this.handleClose} type="submit">
							Save Changes
						</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
	}
}

export const Abc = () => {
	return NewTask.handleSubmit()
	// console.log(ab)
	// return ab
}