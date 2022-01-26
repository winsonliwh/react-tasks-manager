import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './Components/pages/Home';
import Welcome from './Components/pages/Welcome';
import Calendarfunc from './Components/Calendarfunc';
// import { apiHost } from './Components/Const';
import { db, auth } from "./firebase";
import { onValue, ref } from "firebase/database";
import orderBy from 'lodash/orderBy'

// async function fetchData(setTask) {
// 	const res = await fetch(`${apiHost}`)
// 	const { task } = await res.json()
// 	setTask(task)
// }

// async function fetchSetData(task) {
// 	await fetch(apiHost, {
// 		method: "PUT",
// 		headers: {
// 			'Content-type': 'application/json'
// 		},
// 		body: JSON.stringify({ task })
// 	})
// }

function App() {
	const [tasks, setTasks] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				// read user's data
				const dbRef = ref(db, `/${auth.currentUser.uid}`)
				onValue(dbRef, snapshot => {
					setTasks([]);
					const data = snapshot.val();
					if (data !== null) {
						Object.values(data).map(task => {
							setTasks(oldArray => [...oldArray, task]);
							setTasks(prevTasks => {
								return orderBy(prevTasks, ['createDateTime'], ['desc'])
							})
						});
					}
				});
			} else if (!user) {
				navigate("/react-tasks-manager/");
			}
		});
	}, []);

	// useEffect(() => {
	// 	if (!submittingStatus.current) {
	// 		return
	// 	}
	// 	fetchSetData(task)
	// 		.then(data => submittingStatus.current = false)
	// }, [task])

	// useEffect(() => {
	// 	fetchData(setTask)
	// }, [])

	return (
		<div>
			<Routes>
				<Route path="/react-tasks-manager/" element={<Welcome />} />
				<Route path="/react-tasks-manager/home" element={
					<Home taskList={tasks} setTasks={setTasks} />
				} />
				<Route path="/calendar" element={<Calendarfunc />} />
			</Routes>
		</div>
	);
}

export default App;
