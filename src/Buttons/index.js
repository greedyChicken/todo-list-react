import "./style.css";

const Buttons = ({
  tasks,
  hideDone,
  allTasksCompleted,
  toggleHideDone,
  completeAllTasks,
}) => {
  return (
    tasks.length > 0 && (
      <div className="buttons">
        <button className="buttons__button" onClick={toggleHideDone}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          className="buttons__button"
          onClick={completeAllTasks}
          disabled={allTasksCompleted}
        >
          Ukończ wszystkie
        </button>
      </div>
    )
  );
};

export default Buttons;
