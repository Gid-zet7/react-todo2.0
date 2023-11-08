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
  tasks,
  createTask,
  setTasks,
  taskName,
  setTaskName,
  taskDesc,
  setTaskDesc,
  taskDate,
  setTaskDate,
  taskPriority,
  setTaskPriority,
  setCreateTask,
  editTask,
  setEditTask,
  todayTasks,
  setTodayTasks,
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
        tasks={tasks}
        createTask={createTask}
        setCreateTask={setCreateTask}
        setTasks={setTasks}
        todayTasks={todayTasks}
        setTodayTasks={setTodayTasks}
        taskName={taskName}
        setTaskName={setTaskName}
        taskDesc={taskDesc}
        setTaskDesc={setTaskDesc}
        taskDate={taskDate}
        setTaskDate={setTaskDate}
        taskPriority={taskPriority}
        setTaskPriority={setTaskPriority}
        editTask={editTask}
        setEditTask={setEditTask}
      />
    </>
  );
};
