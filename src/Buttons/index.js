import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, completeAllTasks }) => {
  return (
    tasks.length > 0 && (
      <div className="buttons">
        <button className="buttons__button" onClick={toggleHideDone}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
          className="buttons__button"
          onClick={completeAllTasks}
          disabled={tasks.every((task) => task.done)}
        >
          Ukończ wszystkie
        </button>
      </div>
    )
  );
};

export default Buttons;
