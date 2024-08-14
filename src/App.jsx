import { useState } from "react";
import NewProjects from "./component/NewProjects";
import ProjectNotSelectd from "./component/ProjectNotSelected";
import SideBar from "./component/SideBar";
import SelectedProject from "./component/SelectedProject";

function App() {
    const [projectsState, setProjectsState] = useState({
        selectedProjectId: undefined,
        projects: [],
        tasks: [],
    });

    function handleAddTask(text) {
      setProjectsState((prevState) => {
        const taskId = Math.random();
        const newTask = {
          text: text,
          projectId: prevState.selectedProjectId,
            id: taskId,
        };

        return {
            ...prevState,
            tasks: [...prevState.tasks, newTask]
        };
    });
    }

    function handleDeleteTask(id) {
      setProjectsState((prevState) => {
        return {
            ...prevState,
            projects: prevState.tasks.filter(
                (task) => task.id !== id
            ),
        };
    });
    }

    function handleSelectProject(id) {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: id,
            };
        });
    }

    function handleStartAddProject() {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: null,
            };
        });
    }

    function handleAddProject(projectData) {
        setProjectsState((prevState) => {
            const projectId = Math.random();
            const newProject = {
                ...projectData,
                id: projectId,
            };

            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: [...prevState.projects, newProject],
            };
        });
    }

    function handleDeleteProject() {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined,
                projects: prevState.projects.filter(
                    (project) => project.id !== prevState.selectedProjectId
                ),
            };
        });
    }

    function handleCancleAddProject() {
        setProjectsState((prevState) => {
            return {
                ...prevState,
                selectedProjectId: undefined,
            };
        });
    }
    // console.log(projectsState);
    const selectedProject = projectsState.projects.find(
        (project) => project.id === projectsState.selectedProjectId
    );
    let content = (
        <SelectedProject
            project={selectedProject}
            onDelete={handleDeleteProject}
            onAddTask={handleAddTask}
            onDeleteTask={handleDeleteTask}
            tasks={projectsState.tasks}
        />
    );

    if (projectsState.selectedProjectId === null) {
        content = (
            <NewProjects
                onAdd={handleAddProject}
                onCancel={handleCancleAddProject}
            />
        );
    } else if (projectsState.selectedProjectId === undefined) {
        content = (
            <ProjectNotSelectd onStartAddProject={handleStartAddProject} />
        );
    }

    return (
        <>
            <div className="lg:flex gap-8">
                <SideBar
                    onStartAddProject={handleStartAddProject}
                    projects={projectsState.projects}
                    onSelectProject={handleSelectProject}
                />
                {/* <NewProjects /> */}
                {content}
            </div>
        </>
    );
}

export default App;
