import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask }) => {
  return (
    <ul className="taskList">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`taskList__item ${
            task.done && hideDone ? "taskList__item--hidden" : ""
          }`}
        >
          <button className="taskList__button taskList__button--done">
            {task.done ? "✔️" : ""}
          </button>
          <span
            className={`taskList__item--text ${
              task.done ? "taskList__item--textCrossed" : ""
            }`}
          >
            {task.content}
          </span>
          <button
            className="taskList__button taskList__button--remove"
            onClick={() => removeTask(task.id)}
          >
            🗑️
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tasks;
