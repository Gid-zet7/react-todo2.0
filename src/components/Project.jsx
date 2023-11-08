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
