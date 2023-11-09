/* eslint-disable react/prop-types */

export const DefaultProjectItem = ({
  setPreview,
  setprojectOnclicked,
  todo,
}) => {
  const previewHandler = (e) => {
    setPreview(true);
    setprojectOnclicked(e.target.value);
    const projectContainer = document.querySelector(".projects__container");
    const header = document.querySelector(".header");
    const taskList = document.querySelectorAll(".task-list > ul > li");

    projectContainer.classList.add("slide");
    header.classList.add("slide-down");
    taskList.forEach((list) => list.classList.add("slide-up"));
  };

  return (
    <li
      key={todo.id}
      onClick={previewHandler}
      className="default-project project"
    >
      <input
        type="text"
        value={todo.projectName}
        onChange={(e) => e.preventDefault()}
      />
    </li>
  );
};
