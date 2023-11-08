import { useEffect, useState } from "react";
import uniqid from "uniqid";
import { TodoList } from "./TodoList";

function App() {
  const initialTodoListState = JSON.parse(localStorage.getItem("todoList")) || [
    { id: uniqid(), projectName: "Inbox", tasks: [] },
    { id: uniqid(), projectName: "Today Tasks", tasks: [] },
  ];
  const [todoList, setTodoList] = useState(initialTodoListState);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </>
  );
}

export default App;
