import { useDispatch, useSelector } from "react-redux";
import { Button } from "../SectionButton/styled";
import { fetchExampleTasks, selectExampleTasksLoading } from "../../tasksSlice";

const ExampleTaskButton = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectExampleTasksLoading);

  return (
    <Button onClick={() => dispatch(fetchExampleTasks())} disabled={loading}>
      {loading ? "Ładowanie.." : "Pobierz przykładowe zadania"}
    </Button>
  );
};

export default ExampleTaskButton;
