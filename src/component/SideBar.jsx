import Button from "./Button";

export default function SideBar({
    onStartAddProject,
    projects,
    onSelectProject,
    selectedProjectId,
}) {
    return (
        <>
            <div className="lg:w-1/3 lg:h-screen px-8 lg:mr-7 bg-stone-700 md:w-72 my-8 text-stone-200 rounded-r-xl py-16 ">
                <h2 className="mb-8 uppercase md:text-xl">Your Projects</h2>
                <div>
                    <Button onClick={onStartAddProject}>+ Add Projects</Button>
                </div>
                <ul className="mt-8">
                    {projects.map((project) => {
                        let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";
                        if(project.id === selectedProjectId){
                            cssClasses += ' bg-stone-800 text-stone-200';
                        }else{
                            cssClasses += ' text-stone-400';
                        }
                        return (
                            <li key={project.id}>
                                <button
                                    className={cssClasses}
                                    onClick={() => onSelectProject(project.id)}
                                >
                                    {project.title}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}
