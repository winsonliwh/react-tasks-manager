// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Form from "react-bootstrap/Form";
import Task from "./Task";

// let taskSample = [{
//     id: 1,
//     name: 'Take out the trash',
//     description: 'Take out the trash to the front of the house',
//     assignedTo: 'Nick',
//     dueDate: '2020-09-20',
//     status: 'TODO'
// }, {
//     id: 2,
//     name: 'Cook Dinner',
//     description: 'Prepare a healthy serving of pancakes for the family tonight',
//     assignedTo: 'Nick',
//     dueDate: '2020-09-20',
//     status: 'TODO'
// }]

export default function TaskList({ taskList, editTask, submittingStatus }) {

    return (
        <div class="d-flex taskList mx-4">
            {taskList.map(task => {
                return (
                    <div class="eachTask col-12 col-md-6" key={task.key} >
                        {submittingStatus.current = true}
                        <Task task={task} editTask={editTask} />
                    </div>
                )
            })}
        </div>
    )
}