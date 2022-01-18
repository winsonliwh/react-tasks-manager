import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import TaskList from './Components/TaskList';
import NewTask from './Components/NewTask';
import TopBar from './Components/TopBar';
import Time from './Components/Time';
import Calendarfunc from './Components/Calendarfunc';
import Menu from './Components/Menu';
import { apiHost } from './Components/Const';

async function fetchData(setTask) {
	const res = await fetch(`${apiHost}`)
	const { task } = await res.json()
	setTask(task)
}

async function fetchSetData(task) {
	await fetch(apiHost, {
		method: "PUT",
		headers: {
			'Content-type': 'application/json'
		},
		body: JSON.stringify({ task })
	})
}

function App() {
	const [task, setTask] = useState([]);
	const submittingStatus = useRef(false)

	useEffect(() => {
		if (!submittingStatus.current) {
			return
		}
		fetchSetData(task)
			.then(data => submittingStatus.current = false)
	}, [task])

	useEffect(() => {
		fetchData(setTask)
	}, [])

	return (
		<div>
			{/* <Menu /> */}
			{/* <Link to="/">HOME</Link> */}
			{/* <Link to="/newTask">New Task</Link>
        <Link to="/taskList">Task List</Link>
      <Link to="/calendar">Calendar</Link> */}
			<BrowserRouter>
				<Routes>
					{/* <Route path="/" element={<Menu />}> */}
						<Route path="/" element={
							<>
								<TopBar />
								{/* <Menu /> */}
								{/* <Time /> */}
								<TaskList taskList={task} editTask={setTask} submittingStatus={submittingStatus} />
								<NewTask addTask={setTask} submittingStatus={submittingStatus} />
							</>
						} />

						<Route path="/taskData/1/:id" element={<TaskList taskList={task} />} />

						<Route path="/calendar" element={<Calendarfunc />} />

					{/* </Route> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
