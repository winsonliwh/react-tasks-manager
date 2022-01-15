import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import TaskList from './Components/TaskList';
import NewTask from './Components/NewTask';
import TopBar from './Components/TopBar';
import Time from './Components/Time';
import Calendarfunc from './Components/Calendarfunc';
import Menu from './Components/Menu';

function App() {
  const [task, setTask] = useState([]);

  return (
    <div>
      {/* <Menu /> */}
        {/* <Link to="/">HOME</Link> */}
        {/* <Link to="/newTask">New Task</Link>
        <Link to="/taskList">Task List</Link>
      <Link to="/calendar">Calendar</Link> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Menu />
              <Time />
              <TopBar />
              <NewTask addTask={setTask} />
              <TaskList taskList={task} deleteTask={setTask} />
            </>
          } />

          <Route path="/taskList" element={<TaskList taskList={task} />} />

          <Route path="/calendar" element={<Calendarfunc />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
