import { useState } from "react";
import Insert from "./assets/Components/Insert";
import TaskList from "./assets/Components/TaskList";

function App() {
  const localTasks = JSON.parse(window.localStorage.getItem("tasks")) || [];
  const [tasks, setTasks] = useState(localTasks);

  const concludedTasks = tasks.filter((task) => task.status === "concluded");
  const pendingTasks = tasks.filter((task) => task.status === "pending");

  function saveEditTask(task, title) {
    // 1. Create a shallow copy of the state array
    let auxTasks = [...tasks]; 
    
    const editedTask = {
      id: task.id,
      task: title || task.task,
      status: task.status,
      created_at: task.created_at,
    };

    const findTaskPosition = auxTasks.findIndex(
      (t) => t.id === editedTask.id
    );

    // 2. Splice the copy, not the original state
    auxTasks.splice(findTaskPosition, 1, editedTask);

    localStorage.setItem("tasks", JSON.stringify(auxTasks));
    GetTasks();
  }

  function saveConcludedTask(task) {
    // 1. Create a shallow copy
    let auxTasks = [...tasks]; 
    
    const editedTask = {
      id: task.id,
      task: task.task,
      status: "concluded",
      created_at: task.created_at,
    };

    const findTaskPosition = auxTasks.findIndex(
      (t) => t.id === editedTask.id
    );

    auxTasks.splice(findTaskPosition, 1, editedTask);

    localStorage.setItem("tasks", JSON.stringify(auxTasks));
    GetTasks();
  }

  function AddTask(taskDescription) {
    let auxTasks = [...tasks]; 
    let id = 0;

    if (auxTasks.length) {
      id = auxTasks[auxTasks.length - 1].id;
    }
    id++;

    const createdTask = {
      id: id,
      task: taskDescription,
      status: "pending",
      created_at: new Date(Date.now()).toUTCString()
    };
    
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

      <div className="grid grid-cols-2 gap-4 w-full max-w-3xl place-content-center">
        <div className="flex flex-col gap-4">
          <h1>Tasks abertas</h1>
          <TaskList 
            tasks={pendingTasks}
            saveEditTask={saveEditTask}
            saveConcludedTask={saveConcludedTask} 
          />
        </div>    

        <div className="flex flex-col gap-4">
          <h1>Tasks finalizadas</h1>
          <TaskList 
            tasks={concludedTasks}
            saveEditTask={saveEditTask}
            saveConcludedTask={saveConcludedTask} 
          />
        </div>
      </div>
    </div>
  );
}

export default App;