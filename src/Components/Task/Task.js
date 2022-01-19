import React from 'react'
import { useDispatch } from 'react-redux'


import Button from '@mui/material/Button';

import DoneIcon from '@mui/icons-material/Done';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ClearIcon from '@mui/icons-material/Clear';
import './Task.css'
import { deleteTask,doneTask } from '../../Redux/Actions/ListTask';
import Edit from '../Edit/Edit';

const Task = ({task}) => {
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteTask(task.id))
    }

    const handleDone = (id) => {
        dispatch(doneTask(task.id))
    }

    
    return (
        <div className='Task'>
            <span className='Task-text'>{task.text}</span> 
            <div className='BTN-GROUP'>
                <Edit task= {task} />
                <Button onClick={handleDelete}><ClearIcon/></Button>
                <Button onClick={handleDone}>{task.isDone ? <DoneIcon/> : <MoreHorizIcon/>}</Button>
            </div>
        </div>
    )
}

export default Task