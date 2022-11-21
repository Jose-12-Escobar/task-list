import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { LEVELS } from '../../../models/levels.enum';
//import { Task } from '../../../models/task.class';

const TaskFormik = () => {

    const initialValues = {
        taskName: '',
        taskDescription: '',
        priority: LEVELS.NORMAL
    }

    const taskSchema = Yup.object().shape(
        {
            taskName: Yup.string()
                .min(5, 'Task name too short')
                .max(12, 'Task name too long')
                .required('Task name required'),
            taskDescription: Yup.string()
                .min(5, 'Description too short')
                .max(15, 'Description too long')
                .required('Description required'),
            priority: Yup.string()
                .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'You most select the priority of the task')
                .required('Priority required')

        }
    )

    return (
        <div>
            <h4>Create task</h4>
            <Formik
                /* Initial Value */
                initialValues={initialValues}
                /* Validation schema */
                validationSchema={taskSchema}
                /* onSubmit Event */
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >

                {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                    <Form>
                        <label htmlFor="taskName">Task name</label>
                        <Field id="taskName" type="text" name="taskName" placeholder="Name of the task" />
                        {/* taskname Erros */}
                        {
                            errors.taskName && touched.taskName &&
                            (

                                <ErrorMessage component="div" name="taskName" />
                            )
                        }

                        <label htmlFor="taskDescription">Task description</label>
                        <Field id="taskDescription" type="text" name="taskDescription" placeholder="task descrition" />
                        {/* taskdescription Erros */}
                        {
                            errors.taskDescription && touched.taskDescription &&
                            (

                                <ErrorMessage component="div" name="taskDescription" />
                            )
                        }

                        <label htmlFor='priority'>Priority</label>
                        <Field as="select" name="priority">
                            <option value={LEVELS.NORMAL}>Normal</option>
                            <option value={LEVELS.URGENT}>Urgent</option>
                            <option value={LEVELS.BLOCKING}>Blocking</option>
                        </Field>

                        <button type="submit">Add New Task</button>
                        
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default TaskFormik;
