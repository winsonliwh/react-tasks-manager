// import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function EditTask() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Edit Task
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Edit Task</Modal.Title>
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
								<option>NEW</option>
								<option>DONE</option>
							</Form.Select>
						</Form.Group>

						<Form.Group className="mb-3" controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
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
		</>
	);
}

//   export default render(<Example />);