import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import Search from "./Search";
import ExampleTaskButton from "./ExampleTaskButton";

function TasksPage() {
  return (
    <Container>
      <Header title="Task list" />
      <Section
        title="Add new task"
        body={<Form />}
        extraHeaderContent={<ExampleTaskButton />}
      />
      <Section title="Search" body={<Search />} />

      <Section
        title="Task list"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default TasksPage;
