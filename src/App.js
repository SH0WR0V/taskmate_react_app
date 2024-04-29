import { useState } from "react";
import { Header } from "./components/Header";
import { TaskAdd } from "./components/TaskAdd";
import { ShowTask } from "./components/ShowTask";

import "./App.css";

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState({});
  return (
    <div className="App">
      <Header />
      <TaskAdd
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
      <ShowTask
        taskList={taskList}
        setTaskList={setTaskList}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
