/* eslint-disable react/prop-types */
import uniqid from "uniqid";

export const ProjectForm = ({
  projects,
  setProjects,
  projectName,
  setProjectName,
  setCreateProj,
  todoList,
  setTodoList,
}) => {
  const projectNameHandler = (e) => {
    setProjectName(e.target.value);
  };

  const createProjHandler = () => {
    setCreateProj((prevState) => !prevState);
  };

  const createProjCancelHandler = () => {
    setCreateProj((prevState) => !prevState);
    const overlay = document.querySelector("#overlay");
    overlay.classList.remove("active");
  };

  const onSubmitForm = (e) => {
    e.preventDefault();

    setProjects([
      ...projects,
      {
        id: uniqid(),
        projectName: projectName,
      },
    ]);

    setTodoList([
      ...todoList,
      {
        id: uniqid(),
        projectName: projectName,
        tasks: [],
      },
    ]);
    setProjectName("");
    console.log(projects);
    createProjHandler();
    const overlay = document.querySelector("#overlay");
    overlay.classList.remove("active");
  };

  return (
    <>
      <div className="project-modal modal">
        <form onSubmit={onSubmitForm}>
          <div className="project-name__field fields">
            <input
              type="text"
              placeholder="Enter project name"
              className="project-name"
              value={projectName}
              name={projectName}
              required
              onChange={projectNameHandler}
            />
            <span className="error" aria-live="polite"></span>
          </div>
          <div className="btn__container ">
            <button className="task-btn add" type="submit">
              Add Project
            </button>
            <button
              className="task-btn cancel"
              type="button"
              onClick={createProjCancelHandler}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
