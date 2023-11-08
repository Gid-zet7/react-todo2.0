/* eslint-disable react/prop-types */
import { isToday, toDate } from "date-fns";
import uniqid from "uniqid";

export const TaskForm = ({
  tasks,
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
  projectName,
  projectOnclicked,
  todoList,
  setTodoList,
  todayTasks,
  setTodayTasks,
}) => {
  const changeNameHandler = (e) => {
    setTaskName(e.target.value);
  };

  const changeDescHandler = (e) => {
    setTaskDesc(e.target.value);
  };

  const changeDateHandler = (e) => {
    setTaskDate(e.target.value);
  };

  const changePriorityHandler = (e) => {
    setTaskPriority(e.target.value);
  };

  const createTaskHandler = () => {
    setCreateTask((prevState) => !prevState);
  };

  const createTaskCancelHandler = () => {
    setCreateTask((prevState) => !prevState);
    setEditTask("");
  };

  // Checks inbox's tasks array and returns true if a newly created task already exists in the array and false otherwise

  const existsInInbox = () => {
    return todoList
      .find((todo) => todo.projectName === "Inbox")
      .tasks.some((task) => task.taskName === taskName);
  };

  // Checks today's tasks array and returns true if a newly created task already exists in the array and false otherwise
  const existsInToday = (task) => {
    return todoList
      .find((todo) => todo.projectName === "Today Tasks")
      .tasks.includes(task);
  };

  // Checks the tasks array of projects created by users  and returns true if a newly created task already exists in the array and false otherwise
  const existsInProject = () => {
    return todoList
      .find((todo) => todo.projectName === projectOnclicked)
      .tasks.some((task) => task.taskName === taskName);
  };

  // Formats the taskDate to the "mmm/ddd/yyy" format
  const getFormattedDate = (dueDate) => {
    const day = dueDate.split("-")[2];
    const month = dueDate.split("-")[1];
    const year = dueDate.split("-")[0];
    return `${month}/ ${day}/ ${year}`;
  };

  const updateTask = (
    id,
    taskName,
    taskDesc,
    taskDate,
    taskPriority,
    projectOnclicked
  ) => {
    // Traverses the task array of a project created by user to find a task whose id matches the "task to be edited"'s id. If found it modifies that task with the new inputs from the user else it just returns the task
    const newProjectTask = todoList
      .find((todo) => todo.projectName === projectOnclicked)
      .tasks.map((task) =>
        task.id === id
          ? {
              edited: true,
              id: id,
              taskName: taskName,
              taskDesc: taskDesc,
              taskDate: taskDate,
              taskPriority: taskPriority,
              projectName: projectOnclicked,
            }
          : task
      );

    // Traverses the task array of inbox project to find a task whose id matches the "task to be edited"'s id. If found it modifies that task with the new inputs from the user else it just returns the task
    const newInboxTask = todoList
      .find((todo) => todo.projectName === "Inbox")
      .tasks.map((task) =>
        task.id === id
          ? {
              edited: true,
              id: id,
              taskName: taskName,
              taskDesc: taskDesc,
              taskDate: taskDate,
              taskPriority: taskPriority,
              projectName: projectOnclicked,
            }
          : task
      );

    // The task will also be modified in the "all tasks" array to keep the consistency
    const newTasks = tasks.map((task) =>
      task.id === id
        ? {
            edited: true,
            id: id,
            taskName: taskName,
            taskDesc: taskDesc,
            taskDate: taskDate,
            taskPriority: taskPriority,
            projectName: projectOnclicked,
          }
        : task
    );

    // ?If the modified task is in the "today tasks" it will also be modified to keep consistency
    const newTodayTasks = todoList
      .find((todo) => todo.projectName === "Today Tasks")
      .tasks.map((task) =>
        task.id === id
          ? {
              edited: true,
              id: id,
              taskName: taskName,
              taskDesc: taskDesc,
              taskDate: taskDate,
              taskPriority: taskPriority,
              projectName: projectOnclicked,
            }
          : task
      );

    // Sets tasks if any changes
    setTasks([...tasks, (tasks = newTasks)]);
    setTasks(tasks.filter((task) => typeof task === "object"));

    // Sets todolist is any changes in inbox
    setTodoList([
      ...todoList,
      (todoList.find((todo) => todo.projectName === "Inbox").tasks =
        newInboxTask),
    ]);

    // Sets todolist is any changes in "Today Tasks"
    setTodoList([
      ...todoList,
      (todoList.find((todo) => todo.projectName === "Today Tasks").tasks =
        newTodayTasks),
    ]);

    // Sets todolist is any changes in user projects
    setTodoList([
      ...todoList,
      (todoList.find((todo) => todo.projectName === projectOnclicked).tasks =
        newProjectTask),
    ]);

    setTodoList(todoList.filter((todo) => typeof todo === "object"));

    // Rest tasks inputs
    setTaskName("");
    setTaskDesc("");
    setTaskDate("");
    setTaskPriority("");
    setEditTask("");
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!editTask) {
      //   setTodoList([
      //     // ...todoList,
      //     (todoList[
      //       todoList
      //         .map((x, i) => [i, x])
      //         .filter((x) => x[1].projectName == projectOnclicked)[0][0]
      //     ] = {
      //       projectName: projectOnclicked,
      //       tasks: [
      //         ...tasks,
      //         {
      //           id: uniqid(),
      //           taskName: taskName,
      //           taskDesc: taskDesc,
      //           taskDate: taskDate,
      //           taskPriority: taskPriority,
      //           projectName: projectName,
      //         },
      //       ],
      //     }),
      //   ]);
      //   getFormattedDate(taskDate);
      //   const newtaskDate = new Date(getFormattedDate(taskDate));

      // Checks if a task alrady exists in a user project tasks array. If true return else push the new task into the array of the specified project tasks array and setTodoList
      if (existsInInbox() || existsInProject()) {
        alert("Task already exists!");
        return;
      } else {
        setTodoList([
          ...todoList,
          todoList
            .find((todo) => todo.projectName === projectOnclicked)
            .tasks.push({
              id: uniqid(),
              taskName: taskName,
              taskDesc: taskDesc,
              taskDate: taskDate,
              taskPriority: taskPriority,
              projectName: projectName,
            }),
        ]);

        // Checks if a task alrady exists in the inbox project tasks array. If true return else push the new task into the array of the inbox project tasks array and setTodoList
        setTodoList([
          ...todoList,
          todoList
            .find((todo) => todo.projectName === projectOnclicked)
            .tasks.map((task) => {
              if (
                todoList
                  .find((todo) => todo.projectName === "Inbox")
                  .tasks.includes(task)
              ) {
                return;
              } else {
                todoList
                  .find((todo) => todo.projectName === "Inbox")
                  .tasks.push(task);
              }
            }),
        ]);

        // Checks if a task alrady exists in the today project tasks array. If true return else check again if the task's date is today. If both conditions are met, push the new task into the array of the inbox project tasks array and setTodoList

        setTodoList([
          ...todoList,
          todoList
            .find((todo) => todo.projectName === projectOnclicked)
            .tasks.map((task) => {
              if (
                !existsInToday(task) &&
                isToday(toDate(new Date(getFormattedDate(task.taskDate))))
              ) {
                todoList
                  .find((todo) => todo.projectName === "Today Tasks")
                  .tasks.push(task);
              } else {
                return;
              }
            }),
        ]);

        // Checks if a task alrady exists in the "almighty all tasks" tasks array. If true return else push the new task into the array of the "tasks" tasks array and setTodoList
        setTasks([
          todoList
            .find((todo) => todo.projectName === projectOnclicked)
            .tasks.map((task) => {
              if (tasks.includes(task)) {
                return;
              } else {
                tasks.push(task);
              }
            }),
        ]);

        setTasks(tasks.filter((task) => typeof task === "object"));

        // Checks if a task alrady exists in the "today tasks" tasks array. If true return else push the new task into the array of the "todayTasks" tasks array and setTodoList

        setTodayTasks([
          todoList
            .find((todo) => todo.projectName === projectOnclicked)
            .tasks.map((task) => {
              console.log(todayTasks.includes(task));
              if (
                !todayTasks.includes(task) &&
                isToday(toDate(new Date(getFormattedDate(task.taskDate))))
              ) {
                todayTasks.push(task);
              }
            }),
        ]);

        setTodayTasks(todayTasks.filter((task) => typeof task === "object"));
      }

      setTaskName("");
      setTaskDesc("");
      setTaskDate("");
      setTaskPriority("");

      setTodoList(todoList.filter((todo) => typeof todo === "object"));
    } else {
      updateTask(
        editTask.id,
        taskName,
        taskDesc,
        taskDate,
        taskPriority,
        projectOnclicked
      );
    }
    createTaskHandler();
  };

  return (
    <>
      <div className="task-modal modal">
        <h5> {projectOnclicked} </h5>
        <form onSubmit={onSubmitForm}>
          <div className="task-name__field fields">
            <input
              type="text"
              placeholder="Enter task name"
              className="task-name"
              value={taskName}
              required
              onChange={changeNameHandler}
            />
            <span className="error" aria-live="polite"></span>
          </div>
          <div className="task-desc__field fields">
            <input
              type="text"
              placeholder="Enter description"
              className="task-desc"
              value={taskDesc}
              required
              onChange={changeDescHandler}
            />
            <span className="error" aria-live="polite"></span>
          </div>

          <div className="task-priority__field fields">
            <input
              type="text"
              placeholder="Enter priority"
              className="task-desc"
              value={taskPriority}
              required
              onChange={changePriorityHandler}
            />
            <span className="error" aria-live="polite"></span>
          </div>
          <div className="task-date__field fields">
            <input
              type="date"
              placeholder="Enter a date"
              className="task-date"
              value={taskDate}
              required
              onChange={changeDateHandler}
            />
            <span className="error" aria-live="polite"></span>
          </div>

          <div className="btn__container">
            <button className="task-btn add" type="submit">
              {editTask ? "Edit task" : "Add task"}
            </button>
            <button
              className="task-btn cancel"
              type="button"
              onClick={createTaskCancelHandler}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
