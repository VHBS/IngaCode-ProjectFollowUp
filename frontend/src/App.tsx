import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import ProjectDetails from './pages/ProjectDetails';
import Projects from './pages/Projects';
import TaskDetails from './pages/TaskDetails';
import Tasks from './pages/Tasks';
import PrivateRouter from './router/PrivateRouter';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<PrivateRouter />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/:id" element={<TaskDetails />} />
      </Route>
    </Routes>
  );
}
