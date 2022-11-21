//import logo from './logo.svg';
import './App.css';
//import LoginFormik from './components/pure/forms/loginFormik';
//import ElementRectangle from './components/pure/elementRectangle';
//import Father from './components/container/father';
//import GreetingF from './components/pure/greetingF';
//import Greeting from './components/pure/greeting';
//import TaskListComponent from './components/container/task_list';
import TaskFormik from './components/pure/forms/taskFormik';
//import RegisterFormik from './components/pure/forms/registerFormik';
//import OptionalRender from './components/pure/optionalRender';

function App() {
  return (
    <div className='App'>
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* Componente propio Greeting.jsx */}
        {/* <GreetingF name="Martin"></GreetingF> */}
        {/* Componente de Listado de Tareas */}
        {/* Gestión de eventos*/}
        {/* <Father></Father> */}

        {/* Ejemplos de uso de Formik y Yup */}
        {/* <LoginFormik></LoginFormik> */}
        {/* <RegisterFormik></RegisterFormik> */}
        {/* <TaskListComponent></TaskListComponent> */}
        <TaskFormik></TaskFormik>
        {/* <OptionalRender></OptionalRender> */}
        {/* <ElementRectangle></ElementRectangle> */}
      {/* </header> */}
    </div>
  );
}

export default App;
