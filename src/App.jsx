import { useEffect, useState } from "react";
import uniqid from "uniqid";
import { TodoList } from "./components/TodoList";

function App() {
  const initialTodoListState = JSON.parse(localStorage.getItem("todoList")) || [
    { id: uniqid(), projectName: "Inbox", tasks: [] },
    { id: uniqid(), projectName: "Today Tasks", tasks: [] },
  ];
  const [todoList, setTodoList] = useState(initialTodoListState);

  const initialProjectState =
    JSON.parse(localStorage.getItem("projects")) || [];
  const [projects, setProjects] = useState(initialProjectState);
  const [projectName, setProjectName] = useState("");
  const [projectTasks, setProjectTasks] = useState([]);
  const [createProj, setCreateProj] = useState(false);
  const [editProj, setEditProj] = useState(null);
  const [preview, setPreview] = useState(false);
  const [projectOnclicked, setprojectOnclicked] = useState("");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);
  return (
    <>
      <TodoList
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
        preview={preview}
        setPreview={setPreview}
        projectOnclicked={projectOnclicked}
        setprojectOnclicked={setprojectOnclicked}
      />
    </>
  );
}

export default App;
