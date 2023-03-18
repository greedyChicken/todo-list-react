import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import Navbar from "./common/Navbar";

const App = () => (
  <HashRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Navigate to="/tasks" />}></Route>
      <Route path="/tasks" element={<TasksPage />}></Route>
      <Route path="/tasks/:id" element={<TaskPage />}></Route>
      <Route path="author" element={<AuthorPage />}></Route>
    </Routes>
  </HashRouter>
);

export default App;
