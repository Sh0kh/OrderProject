import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import MainLayout from "./layouts/MainLayout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./Pages/Dashboard";
import ProtectedRoute from "./Components/ProtectedRoute"; 
import UI from "./Pages/UI";
import Person from "./AdminComponents/AdminPage/Teacher/Person";
import Teacher from "./AdminComponents/AdminPage/Groups/Teacher";
import TeacherCreate from "./AdminComponents/AdminPage/Groups/TeacherCreate";
import TeacherEdit from "./AdminComponents/AdminPage/Groups/TeacherEdit";
import PersonCreate from "./AdminComponents/AdminPage/Teacher/PersonCreate";
import GruopsId from "./AdminComponents/AdminTeacherGroups/GroupsId";
import AboutUsPage from "./Pages/AboutUsPage";
import Partners from "./Pages/Partners";
import Projects from "./Pages/Projects";
import People from "./Pages/People";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/example/UI" element={<UI />} />
        <Route path="/" element={<AppLayout />}>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/aboutus" element={<AboutUsPage />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/people" element={<People />} />
            <Route path="/contact" element={<Contact />} />





          </Route>

          <Route
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route path="admin/dashboard" element={<Dashboard />} />
            <Route path="admin/teacher" element={<Teacher />} />
            <Route path="admin/groups" element={<Person />} />
            <Route path="admin/teacher/create" element={<TeacherCreate />} />
            <Route path="admin/techer/edit" element={<TeacherEdit />} />
            <Route path="admin/group/create" element={<PersonCreate />} />
            <Route path="teacher/groups/:id" element={<GruopsId />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
