import { Header } from "./components/Header";
import { TaskAdd } from "./components/TaskAdd";
import { ShowTask } from "./components/ShowTask";

import "./App.css";
import { useState } from "react";

function App() {
  const [taskList, setTaskList] = useState([]);
  return (
    <div className="App">
      <Header />
      <TaskAdd taskList={taskList} setTaskList={setTaskList} />
      <ShowTask taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
