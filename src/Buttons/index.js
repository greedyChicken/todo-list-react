import "./style.css";

const Buttons = ({ tasks, hideDone, allTasksCompleted }) => {
  return (
    tasks.length > 0 && (
      <div className="buttons">
        <button className="buttons__button">
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button className="buttons__button" disabled={allTasksCompleted}>
          Ukończ wszystkie
        </button>
      </div>
    )
  );
};

export default Buttons;
