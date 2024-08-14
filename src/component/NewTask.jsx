import { useState } from "react";

export default function NewTask({onAdd}) {
    const [enteredTask, setEnteredTask] = useState('');

    function handlChange(event){
        setEnteredTask(event.target.value);
    }

    function handleClick(){
        onAdd(enteredTask)
        setEnteredTask('');
    }

    return (
        <div className="flex items-center gap-4">
            <input
                type="text"
                className="bg-stone-200 w-64 px-2 py-1 rounded-sm"
                onChange={handlChange}
                value={enteredTask}
            />
            <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">
                Add Task
            </button>
        </div>
    );
}
