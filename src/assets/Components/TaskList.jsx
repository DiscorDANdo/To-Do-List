export default function TaskList(props) {
    return (
        <div className="flex flex-col overflow-y-auto gap-4">
            {props.tasks.map((task) => {
                return <p key={task.id}>{task.task}</p>
            })}
        </div>
    )
}