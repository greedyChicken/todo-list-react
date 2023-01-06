import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { StyledNavLink } from "./styled";

const App = () => (
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <StyledNavLink to="/zadania">Zadania</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/autor">O autorze</StyledNavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Navigate to="/zadania" />}></Route>
        <Route path="/zadania" element={<TasksPage />}></Route>
        <Route path="/zadania/:id" element={<TaskPage />}></Route>
        <Route path="autor" element={<AuthorPage />}></Route>
      </Routes>
    </nav>
  </BrowserRouter>
);

export default App;
