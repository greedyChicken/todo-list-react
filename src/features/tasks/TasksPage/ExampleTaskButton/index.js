import { useDispatch, useSelector } from "react-redux";
import { Button } from "../SectionButton/styled";
import { fetchExampleTasks, selectExampleTasksLoading } from "../../tasksSlice";
import { Wrapper } from "./styled";

const ExampleTaskButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectExampleTasksLoading);

  return (
    <Wrapper>
      <Button onClick={() => dispatch(fetchExampleTasks())} disabled={loading}>
        {loading ? "Ładowanie.." : "Pobierz przykładowe zadania"}
      </Button>
    </Wrapper>
  );
};

export default ExampleTaskButton;
