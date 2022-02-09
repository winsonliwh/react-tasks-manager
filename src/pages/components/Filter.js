import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import $ from "jquery";
import { IoIosArrowDown } from "react-icons/io";

export default function Filter({ tasks, setfilterTasks }) {

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

    useEffect(() => {
        setfilterTasks(tasks);
        setfilterTasks(prevTasks => prevTasks.filter(task => {
            return task.name.toLowerCase().includes(filterStatus.searchName.toLowerCase())
                && (filterStatus.searchDate ? task.dueDate <= filterStatus.searchDate : true)
                && (filterStatus.workStatus ? task.taskType === "Work" : true)
                && (filterStatus.homeStatus ? task.taskType === "Home" : true)
                && (filterStatus.entertainmentStatus ? task.taskType === "Entertainment" : true)
        }));
    }, [filterStatus, tasks, setfilterTasks]);

    const toggleFilter = () => {
        $(".filter").toggleClass("filterActive");
        $(".filterToggleArrow").toggleClass("filterToggleArrowActive");
        $(".taskListOutter").toggleClass("taskListOutterActive");
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div className="filter">
            <Form className="filterForm">
                <h4 className="filterTitle mobileHide"><p>Filter</p></h4>
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
            <div className="filterToggle" onClick={toggleFilter}>Filter<IoIosArrowDown className="filterToggleArrow" /></div>
        </div>
    )
}