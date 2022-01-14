// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TaskList from './Component/TaskList.js';
import NewTask from './Component/NewTask.js';
import TopBar from './Component/TopBar.js';
import Time from './Component/Time.js';


function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<TopBar />}/>
          <Route path="/" element={<NewTask />}/>
          <Route path="/" element={<TaskList />}/>
        </Routes>
      </BrowserRouter> */}
      <Time />
      <TopBar />
      <NewTask />
      <TaskList />
    </div>
  );
}

export default App;
