/* eslint-disable react/prop-types */
export const TodoList = ({ todoList, setTodoList }) => {
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
