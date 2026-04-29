
import Insert from "./assets/Components/Insert"

function App() {
  function AddTask(task) {
    console.log(task)
  }

  return (
    // background
    <div className="flex flex-col h-screen w-screen items-center justify-center bg-[#2b0146b7] gap-5">
      {/* Titulo */}
      <div className="card text-3xl font-bold text-white rounded-sm transform ease-out duration-300 p-4">
        <h1 className="text-5xl font-work font-bold w-fit text-center">To-Do List</h1>
      </div>

      {/* Container de flex-row */}
      <Insert AddTask={AddTask} />
    </div>
  )
}

export default App
