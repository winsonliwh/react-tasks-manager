import { Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import $ from "jquery";
import { IoIosArrowDown } from "react-icons/io";
import DatePicker from "react-datepicker";
import useLocalStorage from "use-local-storage";


export default function Filter({ tasks, setfilterTasks }) {

    const [filterDone, setFilterDone] = useLocalStorage("filterDone", false);
    const [sortByStartDate, setSortByStartDate] = useLocalStorage("sortByStartDate", false);
    const [sortByDueDate, setSortByDueDate] = useLocalStorage("sortByDueDate", false);
    const [filterStatus, setFilterStatus] = useState({
        searchName: "",
        startDate: "",
        dueDate: "",
        workStatus: false,
        homeStatus: false,
        entertainmentStatus: false
    })

    const handleStartDateChange = date => {
        setFilterStatus({
            ...filterStatus,
            startDate: date
        })
    }

    const handleDueDateChange = date => {
        setFilterStatus({
            ...filterStatus,
            dueDate: date
        })
    }

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
            return (task.name.toLowerCase().includes(filterStatus.searchName.toLowerCase()) 
                || task.description.toLowerCase().includes(filterStatus.searchName.toLowerCase()))
                && (filterStatus.startDate ? task.startDate >= filterStatus.startDate.getTime() : true)
                && (filterStatus.dueDate ? task.dueDate <= filterStatus.dueDate.getTime() : true)
                && (filterStatus.workStatus ? task.taskType === "Work" : true)
                && (filterStatus.homeStatus ? task.taskType === "Home" : true)
                && (filterStatus.entertainmentStatus ? task.taskType === "Entertainment" : true)
                && (filterDone ? !task.done : true)
        }));
        setfilterTasks(prevTasks => {
            if (sortByStartDate) {
                return prevTasks.sort((a, b) => a.startDate - b.startDate)
            } else if (sortByDueDate) {
                return prevTasks.sort((a, b) => a.dueDate - b.dueDate)
            } else {
                return prevTasks
            }
        });
    }, [filterStatus, filterDone, sortByStartDate, sortByDueDate, tasks, setfilterTasks]);

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
                    <Form.Label className="filterTaskName"><p>Search Tasks</p></Form.Label>
                    <Form.Control className="filterInputBox" onChange={handleFilterStatus} id="searchName" placeholder="Keywords" />
                </Form.Group>

                <Form.Group>
                    <Form.Label className="filterStartDate"><p>Start Date</p></Form.Label>
                    <DatePicker className="filterInputBox" isClearable dateFormat="yyyy-MM-dd" placeholderText="YYYY-MM-DD" selected={filterStatus.startDate} onChange={handleStartDateChange} />
                </Form.Group>

                <Form.Group>
                    <Form.Label className="filterDueDate"><p>Due Date</p></Form.Label>
                    <DatePicker className="filterInputBox" isClearable dateFormat="yyyy-MM-dd" placeholderText="YYYY-MM-DD" selected={filterStatus.dueDate} onChange={handleDueDateChange} />
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
                <Form.Group>
                    <Form.Label className="filterTaskType"><p>Options</p></Form.Label>
                    <Form.Check className="filterCheckBox" checked={filterDone} onChange={() => setFilterDone(!filterDone)}
                        type="checkbox"
                        label="Hide Done Tasks"
                    />
                    <Form.Check className="filterCheckBox" checked={sortByStartDate} onChange={() => setSortByStartDate(!sortByStartDate)}
                        type="checkbox"
                        label="Sort By Start Date"
                    />
                    <Form.Check className="filterCheckBox" checked={sortByDueDate} onChange={() => setSortByDueDate(!sortByDueDate)}
                        type="checkbox"
                        label="Sort By Due Date"
                    />
                </Form.Group>
            </Form>
            <div className="filterToggle" onClick={toggleFilter}>Filter<IoIosArrowDown className="filterToggleArrow" /></div>
        </div>
    )
}