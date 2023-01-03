import { useSelector, useDispatch } from "react-redux";
import { ButtonsContainer } from "./styled";
import { Button } from "../SectionButton/styled";
import {
  selectTasks,
  toggleHideDone,
  setAllDone,
  selectHideDone,
} from "../tasksSlice";

const Buttons = () => {
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();

  return (
    tasks.length > 0 && (
      <ButtonsContainer>
        <Button onClick={() => dispatch(toggleHideDone())}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
          onClick={() => dispatch(setAllDone())}
          disabled={tasks.every((task) => task.done)}
        >
          Ukończ wszystkie
        </Button>
      </ButtonsContainer>
    )
  );
};

export default Buttons;
