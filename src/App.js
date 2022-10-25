//import logo from './logo.svg';
import './App.css';
//import Father from './components/container/father';
//import GreetingF from './components/pure/greetingF';
//import Greeting from './components/pure/greeting';
import TaskListComponent from './components/container/task_list';



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
        <TaskListComponent></TaskListComponent>
      {/* </header> */}
    </div>
  );
}

export default App;
