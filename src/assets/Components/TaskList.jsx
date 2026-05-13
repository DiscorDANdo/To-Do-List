import TasksItems from "./TasksItems"

export default function TaskList(props) {
    return (
        <div className="flex flex-col overflow-y-auto gap-4">
            {props.tasks.map((task) => {
                return (
                    <TasksItems 
                        key={task.id}
                        tasks={task}
                        saveEditTask={props.saveEditTask}
                        saveConcludedTask={props.saveConcludedTask}
                    />
                )
            })}
        </div>
    )
}