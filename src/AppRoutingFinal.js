import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';

import NotFoundPage from "./pages/404/NotFoundPage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import DashBoardPage from "./pages/dashboard/DashBoard";
import TasksPage from './pages/tasks/TasksPage';

function AppRoutingFinal() {

  // TODO: Change to value  from sessionStorage(or something dinamic)
  let loggedIn = true;
  let registered = false;

  return (
    <Router>
      {/* Route Switch */} 
      <Routes> 
        <Route path="/" element={ loggedIn ? <Navigate to='/dashboard' replace /> : <Navigate to='/login' replace /> } />
        {/* Login Route */}
        <Route path="/login" element={ <LoginPage/>}/>
        {/* DashBoard Route */}
        <Route path="/dashboard" element={ loggedIn ? <DashBoardPage /> : <Navigate to='/login' replace /> } />
        {/* Task Route */}
        <Route path='/task' element={ loggedIn ? <TasksPage/> : <Navigate to='/login' replace /> }/>
        {/* Register Route */}
        <Route path="/register" element={ registered ? <LoginPage/> : <RegisterPage/> }/>
        {/* 404 - Page No Found */}
        <Route element={NotFoundPage} />
      </Routes>
    </Router>
  );
}

export default AppRoutingFinal;
