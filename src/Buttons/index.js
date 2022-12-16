import './style.css';

const Buttons = (props) => {
    return props.tasks.length > 0 && (
        <div className="buttons">
            <button className="buttons__button">
                {props.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </button>
            <button 
            className="buttons__button" 
            disabled={props.allTasksCompleted}>
                Ukończ wszystkie
            </button>
        </div>
    );
};

export default Buttons;