import React, { useState, useEffect } from 'react';
import { LEVELS } from "../../models/levels.enum";
import { Task } from "../../models/task.class";
import TaskComponent from '../pure/task';



const TaskListComponent = () => {

  const defaultTask = new Task('Example', 'Default description', true, LEVELS.NORMAL);

  //Estado del componente 
  const [tasks, setTasks] = useState([defaultTask]);
  const [loading, setLoading] = useState(true);

  //Control dle ciclo de vida del componente
  useEffect(() => {
    console.log('Task State has been modified');
    setLoading(false);
    return () => {
      console.log('TaskList component is going to unmount...')
    };
  }, [tasks]);

  const changeCompleted = (id) => {
    console.log('TODO: Cambiar estado de una tarea')
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
          <div className='card-body' data-mbd-perfect-scrollbar='treu' style={{ position: 'relative', height: '400px' }}>
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
                <TaskComponent task={defaultTask}></TaskComponent>  
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* TODO: Aplicar un For/Map para renderizar una lisat  */}
      {/* <TaskComponent task={defaultTask}></TaskComponent> */}
    </div>
  )
}

export default TaskListComponent 
