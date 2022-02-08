import { Form } from "react-bootstrap";
import { useState } from "react";

export default function Filter({tasks}) {
    // const [searchName, setSearchName] = useState("");
    // const handleNameSearch = (event) => {
    //     setSearchName(event.target.value);
    // }

    // const [searchDate, setSearchDate] = useState("");
    // const handleDateSearch = (event) => {
    //     setSearchDate(event.target.value);
    // }

    // const [workStatus, setWorkStatus] = useState(false);
    // const handleWorkStatus = e => {
    //     setWorkStatus(e.target.checked);
    // }

    // const [homeStatus, setHomeStatus] = useState(false);
    // const handleHome = e => {
    //     setHomeStatus(e.target.checked)
    // }
    // const [entertainmentStatus, setEntertainmentStatus] = useState(false);
    // const handleEntertainment = e => {
    //     setEntertainmentStatus(e.target.checked)
    // }

    const [filterStatus, setFilterStatus] = useState({
        searchName: "",
        searchDate: "",
        workStatus: false,
        homeStatus: false,
        entertainmentStatus: false
    })

    const handleFilterStatus = e => {
		const { id, value } = e.target;
		setFilterStatus(prevInput => {
			return {
				...prevInput,
				[id]: value
			}
		});
	};

    const handleCheckBoxStatus = e => {
		const { id, checked } = e.target;
		setFilterStatus(prevInput => {
			return {
				...prevInput,
				[id]: checked
			}
		});
	};

    return (
        <div className="filterOutter">
            <div className="filter">
                <h4 className="filterTitle"><p>Filter</p></h4>
                <Form>
                    <Form.Group>
                        <Form.Label className="filterTaskName"><p>Task Name</p></Form.Label>
                        <Form.Control className="filterInputBox" onChange={handleFilterStatus} id="searchName" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="filterDueDate"><p>Due Date</p></Form.Label>
                        <Form.Control className="filterInputBox" type="date" onChange={handleFilterStatus} id="searchDate" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label className="filterTaskType"><p>Task Type</p></Form.Label>
                        <Form.Check className="filterCheckBox" checked={filterStatus.workStatus} onChange={handleCheckBoxStatus} 
                            type="checkbox"
                            label="Work"
                            id="workStatus" 
                        />
                        <Form.Check className="filterCheckBox" checked={filterStatus.homeStatus} onChange={handleCheckBoxStatus}
                            type="checkbox"
                            label="Home"
                            id="homeStatus" 
                        />
                        <Form.Check className="filterCheckBox" checked={filterStatus.entertainmentStatus} onChange={handleCheckBoxStatus}
                            type="checkbox"
                            label="Entertainment"
                            id="entertainmentStatus" 
                        />
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}