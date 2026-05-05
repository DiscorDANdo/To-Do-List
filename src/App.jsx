import  { useState } from "react" 
import Insert from "./assets/Components/Insert"
import TaskList from "./assets/Components/TaskList"

function App() {
  const [tasks, setTasks] = useState([]);

  function AddTask(task) {
    let auxTasks = tasks;
    let id = 0;

    if (auxTasks.length) {
      id = auxTasks[auxTasks.length - 1].id;
    }
    id++;

    const createdTask = {
      id: id,
      task: task,
      status: "pending",
      created_at: new Date(Date.now()).toUTCString()
    }
    auxTasks.push(createdTask);
    localStorage.setItem("tasks", JSON.stringify(auxTasks));
    GetTasks();
  }

  function GetTasks() {
    setTasks(JSON.parse(window.localStorage.getItem("tasks")));
  }

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center bg-[#2b0146b7] gap-5">
      <div className="card text-3xl font-bold text-white rounded-sm transform ease-out duration-300 p-4">
        <h1 className="text-5xl font-work font-bold w-fit text-center">To-Do List</h1>
      </div>

      <Insert AddTask={AddTask} />
      <TaskList tasks={tasks} />
    </div>
  )
}

export default App
