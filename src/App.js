import Form from './Form';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Container from './Container';
import './index.css';

const tasks = [
  {id: 1, content: "zadanie 1", done: false},
  {id: 2, content: "zadanie 2", done: true},
];

const hideDoneTasks = false;
const allTasksCompleted = false;

function App() {
  return (
    <Container >
        <Header title="Lista zadań"/>
        <Section 
        title="Dodaj nowe zadanie" 
        body={<Form />}/>

        <Section 
        title="Lista zadań" 
        body={
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} allTasksCompleted={allTasksCompleted} />
        }
        />
    </Container>
  );
}

export default App;
