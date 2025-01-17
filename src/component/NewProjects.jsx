import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProjects({onAdd, onCancel}) {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if(enteredDescription.trim() === '' || enteredTitle.trim() === '' || enteredDueDate.trim() === ''){
            modal.current.open();
            return;
        }
        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }
    return (
        <>
        <Modal ref={modal} buttonCaption="Close">
            <h2 className='text-xl font-bold text-stone-500 my-4'>Invalid Input</h2>
            <p className='mb-4'>Oops.. provide valid input.</p>
        </Modal>
        <div className="lg:w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
                        Cancel
                    </button>
                </li>
                <li>
                    <button
                        className="bg-stone-800 text-stone-50 px-4 py-2 rounded-md hover:bg-stone-950"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title" />
                <Input ref={description} label="Description" textarea />
                <Input type="date" ref={dueDate} label="Due Date" />
            </div>
        </div>
        </>
    );
}
