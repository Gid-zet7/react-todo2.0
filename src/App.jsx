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

  const initialTasksState = JSON.parse(localStorage.getItem("tasks")) || [];
  const initialTodayTasksState =
    JSON.parse(localStorage.getItem("todayTasks")) || [];
  const [tasks, setTasks] = useState(initialTasksState);
  const [taskName, setTaskName] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskPriority, setTaskPriority] = useState("");
  const [createTask, setCreateTask] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [todayTasks, setTodayTasks] = useState(initialTodayTasksState);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
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
}

export default App;
