import { Button, Form } from "react-bootstrap";
import { useState } from "react";

export default function Filter() {
    const [WorkCBstatus, setWorkCBstatus] = useState(false);
    const handleWorkCB = e => {
        setWorkCBstatus(e.target.checked)
        console.log(WorkCBstatus)
    }
    const [HomeCBstatus, setHomeCBstatus] = useState(false);
    const handleHomeCB = e => {
        setHomeCBstatus(e.target.checked)
        console.log(HomeCBstatus)
    }
    const [EntertainmentCBstatus, setEntertainmentCBstatus] = useState(false);
    const handleEntertainmentCB = e => {
        setEntertainmentCBstatus(e.target.checked)
        console.log(EntertainmentCBstatus)
    }

    return (
        <div className="filter">
            <h4>Filter</h4>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Task Name</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Task Type</Form.Label>
                    <Form.Select>
                        <option>Work</option>
                        <option>Home</option>
                        <option>Entertainment</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Check checked={WorkCBstatus} onChange={handleWorkCB}
                        type="checkbox"
                        label="Work"
                    />
                    <Form.Check checked={HomeCBstatus} onChange={handleHomeCB}
                        type="checkbox"
                        label="Home"
                    />
                    <Form.Check checked={EntertainmentCBstatus} onChange={handleEntertainmentCB}
                        type="checkbox"
                        label="Entertainment"
                    />
                </Form.Group>
                <Button type="submit">Submit</Button>
            </Form>
        </div>
    )
}