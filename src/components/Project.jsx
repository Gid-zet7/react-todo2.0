/* eslint-disable react/prop-types */
export const Project = ({
  todoList,
  //   setTodoList,
  //   projects,
  //   setProjects,
  //   projectName,
  //   setProjectName,
  //   projectTasks,
  //   setProjectTasks,
  //   createProj,
  //   setCreateProj,
  //   editProj,
  //   setEditProj,
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
  return (
    <>
      <ul>
        {todoList.map((todo) => {
          return <li key={todo.id}>{todo.projectName}</li>;
        })}
      </ul>
    </>
  );
};
