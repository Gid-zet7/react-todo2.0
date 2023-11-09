/* eslint-disable react/prop-types */
// import { useEffect } from "react";
import { TaskItem } from "./TaskItem";

export const ProjectPreview = ({
  projects,
  setCreateTask,
  projectOnclicked,
  setProjects,
  editTask,
  setEditTask,
  tasks,
  setTasks,
  todoList,
  setTodoList,
  todayTasks,
  setTodayTasks,
}) => {
  const createTaskHandler = () => {
    setCreateTask((prevState) => !prevState);
    const overlay = document.querySelector("#overlay");
    overlay.classList.add("active");
  };

  return (
    <>
      <div className="tasks-header__container">
        <div className="header">
          <h1 className="projectname-clicked"> {projectOnclicked} </h1>
        </div>
        <div className="create-task__container">
          <button
            type="button"
            className="create-task__btn"
            onClick={createTaskHandler}
          >
            Create Task
          </button>
        </div>
      </div>

      <div className="task-list">
        <ul>
          {projectOnclicked
            ? todoList
                .find((todo) => todo.projectName === projectOnclicked)
                .tasks.map((task) => {
                  return (
                    <TaskItem
                      key={task.id}
                      task={task}
                      todoList={todoList}
                      setTodoList={setTodoList}
                      projects={projects}
                      setProjects={setProjects}
                      projectOnclicked={projectOnclicked}
                      editTask={editTask}
                      setEditTask={setEditTask}
                      tasks={tasks}
                      setTasks={setTasks}
                      createTaskHandler={createTaskHandler}
                      todayTasks={todayTasks}
                      setTodayTasks={setTodayTasks}
                    />
                  );
                })
            : todoList
                .find((todo) => todo.projectName === "Inbox")
                .tasks.map((task) => {
                  return (
                    <TaskItem
                      key={task.id}
                      task={task}
                      tasks={tasks}
                      setTasks={setTasks}
                      todoList={todoList}
                      setTodoList={setTodoList}
                      projectOnclicked={projectOnclicked}
                      setEditTask={setEditTask}
                      todayTasks={todayTasks}
                      setTodayTasks={setTodayTasks}
                      createTaskHandler={createTaskHandler}
                    />
                  );
                })}
        </ul>
      </div>
    </>
  );
};
