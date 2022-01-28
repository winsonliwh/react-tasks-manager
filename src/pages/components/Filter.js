import { Form } from "react-bootstrap";
import { useState } from "react";

export default function Filter(input, handleInput) {
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
            <h4 className="filterTitle">Filter</h4>
            <Form>
                <Form.Group>
                    <Form.Label className="filterTaskName">Task Name</Form.Label>
                    <Form.Control className="filterInputBox" />
                </Form.Group>

                <Form.Group>
                    <Form.Label className="filterDueDate">Due Date</Form.Label>
                    <Form.Control className="filterInputBox" id="dueDate" value={input.dueDate} onChange={handleInput} type="date" />
                </Form.Group>

                <Form.Group>
                    <Form.Label className="filterTaskType">Task Type</Form.Label>
                    <Form.Check className="filterCheckBox" checked={WorkCBstatus} onChange={handleWorkCB}
                        type="checkbox"
                        label="Work"
                    />
                    <Form.Check className="filterCheckBox" checked={HomeCBstatus} onChange={handleHomeCB}
                        type="checkbox"
                        label="Home"
                    />
                    <Form.Check className="filterCheckBox" checked={EntertainmentCBstatus} onChange={handleEntertainmentCB}
                        type="checkbox"
                        label="Entertainment"
                    />
                </Form.Group>
            </Form>
        </div>
    )
}