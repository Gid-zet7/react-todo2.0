/* eslint-disable react/prop-types */

export const DefaultProjectItem = ({
  setPreview,
  setprojectOnclicked,
  todo,
}) => {
  const previewHandler = (e) => {
    setPreview(true);
    setprojectOnclicked(e.target.value);
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
