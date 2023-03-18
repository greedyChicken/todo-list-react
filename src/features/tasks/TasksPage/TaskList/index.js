import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  List,
  Item,
  Content,
  ToggleDoneButton,
  RemoveButton,
  StyledLink,
} from "./styled";
import {
  toggleTaskDone,
  removeTask,
  selectHideDone,
  selectTasksByQuery,
} from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get(searchQueryParamName);

  const tasks = useSelector((state) => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    <List>
      {tasks.map((task) => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <ToggleDoneButton onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔️" : ""}
          </ToggleDoneButton>
          <Content done={task.done}>
            <StyledLink to={`/tasks/${task.id}`}>{task.content}</StyledLink>
          </Content>
          <RemoveButton onClick={() => dispatch(removeTask(task.id))}>
            🗑️
          </RemoveButton>
        </Item>
      ))}
    </List>
  );
};

export default TaskList;
