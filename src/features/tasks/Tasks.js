import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";
import { useTasks } from "../../useTasks";

function Tasks() {
  const { removeTask, toggleTaskDone, completeAllTasks, addNewTask } =
    useTasks();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        body={
          <TaskList removeTask={removeTask} toggleTaskDone={toggleTaskDone} />
        }
        extraHeaderContent={<Buttons completeAllTasks={completeAllTasks} />}
      />
    </Container>
  );
}

export default Tasks;
