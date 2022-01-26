import React from 'react';
import NewTask from '../NewTask';
import TaskList from '../TaskList';
import TopBar from '../TopBar';


export default function Home({ taskList, setTasks }) {
    return (
        <div>
            <TopBar />
            <TaskList taskList={taskList} editTask={setTasks} />
            <NewTask addTask={setTasks} />
        </div>
    )
}
