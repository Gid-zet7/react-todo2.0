import { Project } from "./Project";

/* eslint-disable react/prop-types */
export const TodoList = ({
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
  editProj,
  setEditProj,
}) => {
  return (
    <>
      <Project
        todoList={todoList}
        setTodoList={setTodoList}
        projects={projects}
        setProjects={setProjects}
        projectName={projectName}
        setProjectName={setProjectName}
        projectTasks={projectTasks}
        setProjectTasks={setProjectTasks}
        createProj={createProj}
        setCreateProj={setCreateProj}
        editProj={editProj}
        setEditProj={setEditProj}
      />
    </>
  );
};
