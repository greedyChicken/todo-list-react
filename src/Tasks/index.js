import './style.css';

const Tasks = (props) => {
    return (
        <ul className="taskList">
            {props.tasks.map(task => (
                <li 
                key={task.id}
                className={`taskList__item ${task.done && props.hideDoneTasks ? 'taskList__item--hidden' : ''}` }
                >
                    <button className="taskList__button taskList__button--done">
                            {task.done ? "✔️" : ""}
                    </button>
                    <span className={`taskList__item--text ${task.done ? "taskList__item--textCrossed" : ""}`}>
                        {task.content}
                    </span>
                    <button className="taskList__button taskList__button--remove">
                        🗑️
                    </button>    
                </li>
            ))}       
        </ul>   
    );
};

export default Tasks;
