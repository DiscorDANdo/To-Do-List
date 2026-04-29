export default function Insert(props) {
    return (
        <div className="flex flex-row items-center justify-center gap-4">
            <input placeholder="New task" className="flex lg:w-100 lg:h-10 rounded-full shadow-lg bg-[#757475ad]"></input>

            <button className="flex items-center justify-center lg:w-10 lg:h-10 shadow-lg bg-[#6f269cdc] rounded-full"
            onClick={() => {props.AddTask("Teste")}}>+</button>
      </div>
    )
}