import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import Navbar from "./common/Navbar";

const App = () => (
  <HashRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Navigate to="/zadania" />}></Route>
      <Route path="/zadania" element={<TasksPage />}></Route>
      <Route path="/zadania/:id" element={<TaskPage />}></Route>
      <Route path="autor" element={<AuthorPage />}></Route>
    </Routes>
  </HashRouter>
);

export default App;
