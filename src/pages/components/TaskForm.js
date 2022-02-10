import { Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";

export default function TaskForm({ input, handleInput, handleStartDateChange, handleDueDateChange, btnText }) {
    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control id="name" value={input.name} onChange={handleInput} placeholder="Name" required />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control id="description" value={input.description} onChange={handleInput} placeholder="Description" as="textarea" />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Task Type</Form.Label>
                <Form.Select id="taskType" value={input.taskType} onChange={handleInput}>
                    <option value="Work">Work</option>
                    <option value="Home">Home</option>
                    <option value="Entertainment">Entertainment</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Start Date</Form.Label>
                {/* <Form.Control id="dueDate" value={input.dueDate} onChange={handleInput} type="date" /> */}
                <DatePicker dateFormat="yyyy-MM-dd" placeholderText="YYYY-MM-DD" selected={input.startDate} onChange={handleStartDateChange} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Due Date</Form.Label>
                {/* <Form.Control id="dueDate" value={input.dueDate} onChange={handleInput} type="date" /> */}
                <DatePicker dateFormat="yyyy-MM-dd" placeholderText="YYYY-MM-DD" selected={input.dueDate} onChange={handleDueDateChange} />
            </Form.Group>

            <Button variant="success" type="submit">
                {btnText}
            </Button>
        </>
    )
}
