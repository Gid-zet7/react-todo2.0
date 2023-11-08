import { ProjectForm } from "./forms/ProjectForm";

/* eslint-disable react/prop-types */
ProjectForm;
export const Project = ({
  todoList,
  setTodoList,
  projects,
  setProjects,
  projectName,
  setProjectName,
  projectTasks,
  setProjectTasks,
  createProj,
  setCreateProj,
  // editProj,
  // setEditProj,
  setPreview,
  //   tasks,
  //   createTask,
  //   setTasks,
  //   taskName,
  //   setTaskName,
  //   taskDesc,
  //   setTaskDesc,
  //   taskDate,
  //   setTaskDate,
  //   taskPriority,
  //   setTaskPriority,
  //   setCreateTask,
  //   editTask,
  //   setEditTask,
  //   todayTasks,
  //   setTodayTasks,
}) => {
  // Responsible for changing the state/value of "createProj"
  const createProjHandler = () => {
    setCreateProj((prevState) => !prevState);
  };
  return (
    <>
      <div className="projects__container">
        <div className="project-header">
          <h3>Task Manager</h3>
        </div>
      </div>

      {/* button calls the "createProjHandler" function to change the value of "createProj" when clicked on */}

      <button
        type="button"
        id="create-project__btn"
        onClick={createProjHandler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2em"
          viewBox="0 96 960 960"
          width="1.5em"
          fill="darkslateblue"
        >
          <path d="M453 776h60V610h167v-60H513V376h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80 658.319 80 575.5q0-82.819 31.5-155.659Q143 347 197.5 293t127.341-85.5Q397.681 176 480.5 176q82.819 0 155.659 31.5Q709 239 763 293t85.5 127Q880 493 880 575.734q0 82.734-31.5 155.5T763 858.316q-54 54.316-127 86Q563 976 480.266 976Zm.234-60Q622 916 721 816.5t99-241Q820 434 721.188 335 622.375 236 480 236q-141 0-240.5 98.812Q140 433.625 140 576q0 141 99.5 240.5t241 99.5Zm-.5-340Z" />
        </svg>
        Create Project
      </button>

      {/* Displays the list of projects */}
      <ul>
        {todoList.map((todo) => {
          return <li key={todo.id}>{todo.projectName}</li>;
        })}
      </ul>

      {/* If "createProj" value/state is true the form is displayed and not displayed if false */}

      {createProj && (
        <ProjectForm
          projects={projects}
          setProjects={setProjects}
          projectName={projectName}
          setProjectName={setProjectName}
          projectTasks={projectTasks}
          setProjectTasks={setProjectTasks}
          createProj={createProj}
          setCreateProj={setCreateProj}
          setPreview={setPreview}
          todoList={todoList}
          setTodoList={setTodoList}
        />
      )}
    </>
  );
};
