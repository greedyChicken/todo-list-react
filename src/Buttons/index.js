import { ButtonsContainer, Button } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, completeAllTasks }) => {
  return (
    tasks.length > 0 && (
      <ButtonsContainer>
        <Button onClick={toggleHideDone}>
          {hideDone ? "Pokaż" : "Ukryj"} ukończone
        </Button>
        <Button
          onClick={completeAllTasks}
          disabled={tasks.every((task) => task.done)}
        >
          Ukończ wszystkie
        </Button>
      </ButtonsContainer>
    )
  );
};

export default Buttons;
