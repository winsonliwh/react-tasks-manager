import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Calendarfunc from './pages/Calendarfunc';
import { Routes, Route } from 'react-router-dom';
import Filter from './pages/components/Filter';
import useLocalStorage from 'use-local-storage'
import { Button } from '@mui/material';
import TopBar from './pages/components/TopBar';

// import { useState, useEffect } from 'react';
// import { apiHost } from './Components/Const';
// import { db, auth } from "./firebase";
// import { onValue, ref } from "firebase/database";
// import orderBy from 'lodash/orderBy'

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

	const [darkMode, setDarkMode] = useLocalStorage("darkMode", false)
    const handleDarkMode = () => {
        setDarkMode(!darkMode)
    }

	return (
		<div className={darkMode ? "darkMode" : ""}>
			<TopBar darkMode={darkMode} handleDarkMode={handleDarkMode} />
			<Routes>
				<Route path="/react-tasks-manager/" element={<Welcome />} />
				<Route path="/react-tasks-manager/home" element={<Home />} />
				<Route path="/react-tasks-manager/calendar" element={<Calendarfunc />} />
			</Routes>
		</div>
	);
}

export default App;
