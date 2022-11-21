import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const Taskform = ({ add, length }) => {

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(event) {
        console.log(event);
        event.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    const normlaStyle = {
        color: 'blue',
        fontWeight: 'bold'
    }

    const urgentStyle = {
        color: 'yellow',
        fontWeight: 'bold'
    }

    const blockingStyle = {
        color: 'tomato',
        fontWeight: 'bold'
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill d-grid gap-2'>
                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task Name' />
                <input ref={descriptionRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Task Description' />
                <select className=' form-select form-select-lg ' ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                    <option style={normlaStyle} className='bg-secondary' value={LEVELS.NORMAL}>
                        Normal
                    </option>
                    <option style={urgentStyle} className='bg-secondary' value={LEVELS.URGENT}>
                        Urgent
                    </option>
                    <option style={blockingStyle} className='bg-secondary' value={LEVELS.BLOCKING}>
                        Blocking
                    </option>
                </select>
                <button type='submit' className='btn btn-success btn-lg '>
                    {length > 0 ? 'Add New Task' : 'Create your First Task'}
                </button>
            </div>
        </form>
    );
}

Taskform.propTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default Taskform;
