import NewTask from "./NewTask";
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

export default function TaskList({ taskList }) {

    return (
        <div className="taskListOutter">
            <div className="d-flex taskList">
                <NewTask />
                {/* if empty, display "No tasks to display" */}
                {
                    // taskList.length === 0 ?
                    //     <div>
                    //         <p>No tasks to display</p>
                    //     </div>
                    //     :
                        taskList.map(task => (
                            <div className="eachTask col-12 col-lg-6" key={task.key}>
                                <Task task={task} />
                            </div>
                        ))
                }
            </div>
        </div>
    )
}