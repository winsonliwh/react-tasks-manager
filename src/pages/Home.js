import NewTask from './components/NewTask';
import ScrollToTop from './components/ScrollToTop';
import TaskList from './components/TaskList';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { db, auth } from "../firebase";
import { onValue, ref } from "firebase/database";
import orderBy from 'lodash/orderBy';
import Filter from './components/Filter';


export default function Home() {

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
                        Object.values(data).forEach(task => {
                            setTasks(prevTasks => [...prevTasks, task])
                        });
                        setTasks(prevTasks => {
                            return orderBy(prevTasks, ['createdDate', 'createdTime'], ['desc', 'desc'])
                        })
                    }
                });
            } else if (!user) {
                navigate("/react-tasks-manager/welcome");
            }
        });
    }, [navigate]);

    return (
        <div className='homepage'>
            <div>
                <Filter />
                <TaskList taskList={tasks} />
            </div>
            <NewTask />
            <ScrollToTop />
        </div>
    )
}
