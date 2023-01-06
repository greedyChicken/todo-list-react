import { useDispatch, useSelector } from "react-redux";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import { Button } from "./SectionButton/styled";
import { fetchExampleTasks, selectExampleTasksLoading } from "../tasksSlice";
import Search from "./Search";

function TasksPage() {
  const dispatch = useDispatch();
  const loading = useSelector(selectExampleTasksLoading);

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={
          <Button
            onClick={() => dispatch(fetchExampleTasks())}
            disabled={loading}
          >
            {loading ? "Ładowanie.." : "Pobierz przykładowe zadania"}
          </Button>
        }
      />
      <Section title="Wyszukiwarka" body={<Search />} />

      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
