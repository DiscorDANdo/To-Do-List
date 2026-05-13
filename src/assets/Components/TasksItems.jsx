import { useState } from "react";

export default function TasksItems(props) {
    if (!props.tasks) {
        return null;
    }

    const [title, setTitle] = useState(props.tasks.task);
    const [checked, setChecked] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const concluded = props.tasks.status === "concluded";

    return (
        <div className="flex gap-4 flex-col items-center">
            <div className="flex gap-4 items-center w-full">
                <input disabled={concluded}
                    type="checkbox"
                    checked={checked}
                    className="checkbox rounded-full border"
                    onChange={() => {
                        if (concluded) return;
                        else {
                            setChecked(!checked);
                            props.saveConcludedTask(props.tasks);
                        }
                    }}/>
                {editMode && !concluded ? (<input placeholder="Task" value={title} onChange={(e) => setTitle(e.target.value)}/>)
                : (<p className={`wrap-break-word ${concluded ? "line-through" : ""}`}>{props.tasks.task}</p>)}  
            </div>
            {!concluded && (
                <div className="flex gap-4 w-fit justify-center">
                    <button onClick={() => {
                        if (editMode) props.saveEditTask(props.tasks, title);
                        setEditMode(!editMode);
                    }}>Editar</button>
                    <button>Excluir</button>
                </div>
            )}
        </div>
    )
}