import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/HomePage';
import Notfoundpage from './pages/404/NotFoundPage';
import Aboutpage from './pages/about-faqs/AboutPage';
import ProfilePage from './pages/profile/ProfilePage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';
import StatePage from "./pages/home/StatePage";

function AppRoutingOne() {


  let logged = false;

  
 
  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My fist Task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second Task'
    }
  ]

  function task(id) {
    return taskList[id];
  }

  useEffect(() => {
    logged = localStorage.getItem('credentials');
    console.log('User Logged?' , logged)
  }, []);

  return ( 
    <Router>
      <div>
        <aside>
          <Link to='/' >|| HOME |</Link>
          <Link to='/about' >| ABOUT |</Link>
          <Link to='/faqs'>| FAQs |</Link>
          <Link to='/task/1'>| TASK 1 |</Link>
          <Link to='/task/2'>| TASK 2 |</Link>
          <Link to='/any404'>| Not Existing Route |</Link>
          <Link to='/login'>| LOGIN ||</Link>
        </aside>

        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/online-state' element={<StatePage />} />
            <Route path='/login' element={logged ? <Navigate to='/' replace /> : <LoginPage /> } />
            <Route path='/about' element={<Aboutpage />} />
            <Route path='/faqs' element={<Aboutpage />} />
            <Route path='/profile' element={logged ? <ProfilePage /> : <Navigate to='/login' replace />} />
            <Route path='/tasks' element={<TasksPage />} />
            <Route path='/task/:id' element={<TaskDetailPage taskProp={task}/>} />
            {/* 404 - Page No Found */}
            <Route path='*' element={<Notfoundpage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
  