// import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function NewTask() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<div className="d-grid gap-2" >
			<Button variant="primary" size="lg" onClick={handleShow}>
				New Task
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>New Task</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<Form>
						<Form.Group className="mb-3">
							<Form.Label>Name</Form.Label>
							<Form.Control placeholder="Name" />
						</Form.Group>
						
						<Form.Group className="mb-3">
							<Form.Label>Description</Form.Label>
							<Form.Control as="textarea" placeholder="Description" />
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
					</Form>
				</Modal.Body>

				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleClose} type="submit">
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
}

//   export default render(<Example />);