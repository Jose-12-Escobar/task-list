import React, { useState, useEffect } from 'react';
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import Taskform from '../pure/forms/taskForm';
import TaskComponent from '../pure/task';



const TaskListComponent = () => {

  const defaultTask1 = new Task('Example1', 'Default description', true, LEVELS.NORMAL);
  const defaultTask2 = new Task('Example2', 'Default description', false, LEVELS.URGENT);
  const defaultTask3 = new Task('Example3', 'Default description', false, LEVELS.BLOCKING);


  //Estado del componente 
  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
  const [loading, setLoading] = useState(true);

  //Control dle ciclo de vida del componente
  useEffect(() => {
    console.log('Task State has been modified:');
    setLoading(false);
    return () => {
      console.log('TaskList component is going to unmount...')
    };
  }, [tasks]);

  // Funcion que permite marcar una tarea como completa o incompleta 
  function completeTask(task) {
    console.log('Complete this Task: ', task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks[index].completed = !tempTasks[index].completed;
    // We update the state of the component with the new list of tasks  and it 
    // will update the iteration of the tasks order to show the tas update 
    setTasks(tempTasks); 
  }

  // Funcion para eliminar una tarea 
  function deleteTask(task) {
    console.log('Esta es la tarea que se quiere borrar: ', task);
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.splice(index,1);
    setTasks(tempTasks);
  }

  //Funcion para añadir una tarea
  function addTask(task) {
    console.log('Nueva tarea');
    const index = tasks.indexOf(task);
    const tempTasks = [...tasks];
    tempTasks.push(task);
    setTasks(tempTasks);
  }

  return (
    <div>
      <div className='col-12'>
        <div className='card'>
          {/* Card Header (title) */}
          <div className='card-header p-3 '>
            <h5>
              Your Tasks:
            </h5>
          </div>
          {/* Card Body (content) */}
          <div className='card-body ' data-mbd-perfect-scrollbar='treu' style={{ position: 'relative', height: '400px' }}>
            <table>
              <thead>
                <tr>
                  <th scope='col'>Title</th>
                  <th scope='col'>Description</th>
                  <th scope='col'>Priority</th>
                  <th scope='col'>Actions</th>
                </tr>
              </thead>
              <tbody>
                { tasks.map((task, index) => {
                    return (
                          <TaskComponent
                              key={index}
                              task={task}
                              complete={completeTask}
                              remove={deleteTask}>
                          </TaskComponent>
                        )
                    }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Taskform add={addTask}></Taskform>
    </div>
  );
};

export default TaskListComponent ;
