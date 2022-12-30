import { useSelector } from "react-redux";
import { List, Item, Content, ToggleDoneButton, RemoveButton } from "./styled";
import { selectTasks } from "../tasksSlice";

const TaskList = ({ removeTask, toggleTaskDone }) => {
  const { tasks, hideDone } = useSelector(selectTasks);

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <ToggleDoneButton onClick={() => toggleTaskDone(task.id)}>
            {task.done ? "✔️" : ""}
          </ToggleDoneButton>
          <Content done={task.done}>{task.content}</Content>
          <RemoveButton onClick={() => removeTask(task.id)}>🗑️</RemoveButton>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
