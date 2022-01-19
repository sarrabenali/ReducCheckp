import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {addTask} from '../../Redux/Actions/ListTask'
import Input from '@mui/material/Input';

import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';

import '../../App.css'

const ariaLabel = { 'aria-label': 'description' };
const AddTask = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    
    const handleAdd = (e) => {
        if (text) {
            dispatch(addTask({ id: Math.random(), text, isDone: false}))
            setText("")
        }else{
            alert("cannot add an empty task!")
        }
       
    }

    return (
        <div className='AddTask'>
            
            <Input type='text' onChange={(e) => setText(e.target.value)} value={text} defaultValue="Enter Task" inputProps={ariaLabel} />
            
            <IconButton onClick={handleAdd} color="primary" aria-label="add to shopping cart">
            <AddIcon />
      </IconButton>
        </div>
    )
}

export default AddTask