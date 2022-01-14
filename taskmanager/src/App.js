import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TaskList from './Component/TaskList.js';
import NewTask from './Component/NewTask.js';
import TopBar from './Component/TopBar.js';
import Time from './Component/Time.js';
import Calendarfunc from './Component/Calendarfunc.js';

// let taskList = [{
//   id: 1,
//   name: 'Take out the trash',
//   description: 'Take out the trash to the front of the house',
//   assignedTo: 'Nick',
//   dueDate: '2020-09-20',
//   status: 'TODO'
// }, {
//   id: 2,
//   name: 'Cook Dinner',
//   description: 'Prepare a healthy serving of pancakes for the family tonight',
//   assignedTo: 'Nick',
//   dueDate: '2020-09-20',
//   status: 'TODO'
// }]

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/calendar">Calendar</Link>
        <Link to="/newTask">New Task</Link>
        <Link to="/taskList">Task List</Link>
        <Link to="/">HOME</Link>
        <Routes>
          <Route path="/" element={
            <>
              <Time />
              <TopBar />
              <NewTask />
              <TaskList />
            </>
          }/>
          <Route path="/calendar" element={<Calendarfunc />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
