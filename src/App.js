import Home from './pages/Home';
import Welcome from './pages/Welcome';
import Calendarfunc from './pages/Calendarfunc';
import { Routes, Route } from 'react-router-dom';
import useLocalStorage from 'use-local-storage'
import TopBar from './pages/components/TopBar';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db, auth } from "./firebase";
import { onValue, ref } from "firebase/database";
import orderBy from 'lodash/orderBy';

// import { useState, useEffect } from 'react';
// import { apiHost } from './Components/Const';

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

	const [tasks, setTasks] = useState([]);
    const [filterTasks, setfilterTasks] = useState(tasks);

    const navigate = useNavigate();

    useEffect(() => {
        const login = auth.onAuthStateChanged((user) => {
            if (user) {
                // read user's data
                const dbRef = ref(db, `/${auth.currentUser.uid}`)
                onValue(dbRef, snapshot => {
                    setTasks([]);
                    const data = snapshot.val();
                    if (data !== null) {
                        Object.values(data).forEach(task => {
                            setTasks(prevTasks => [...prevTasks, task])
                        });
                        setTasks(prevTasks => {
                            return orderBy(prevTasks, ['done', 'createdDate', 'createdTime'], ['esc', 'desc', 'desc'])
                        })
                    }
                });
            } else if (!user) {
                navigate("/");
            }
        });
        return login;
    }, [navigate]);

	const [darkMode, setDarkMode] = useLocalStorage("darkMode", false)
    const handleDarkMode = () => {
        setDarkMode(!darkMode)
    }

	return (
		<div className={darkMode ? "darkMode" : ""}>
			<TopBar darkMode={darkMode} handleDarkMode={handleDarkMode} />
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/home" element={<Home tasks={tasks} filterTasks={filterTasks} setfilterTasks={setfilterTasks} />} />
				<Route path="/calendar" element={<Calendarfunc tasks={tasks} />} />
			</Routes>
		</div>
	);
}

export default App;
