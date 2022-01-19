import React, { useState } from 'react'
import { editTask } from '../../Redux/Actions/ListTask'
import { useDispatch } from 'react-redux'
import {FormControl, Modal} from 'react-bootstrap'
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';

function Edit({task}) {
  const [show, setShow] = useState(false);
  
  const [newTask, setNewTask] = useState(task.text);
  const dispatch = useDispatch()
    
  const handleClose = () => setShow(false);
    
      
      const handleShow = () => setShow(true);
      const handleEdit = ()=>{
        dispatch(editTask(task.id, newTask))
        handleClose()
      }
    
      return (
        <>
          
          <Button onClick={handleShow}><EditIcon/></Button>
    
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormControl value={newTask} onChange={(e)=>setNewTask(e.target.value)}
            aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
              <Button variant="primary" onClick={handleEdit}>Save Changes</Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    }


export default Edit