import React from 'react'
import StyledInput from '../StyledInput/StyledInput'
import './CreateTask.css'
import Button from '../Button'

function CreateTask() {
    return (
        <div className='createTask-root'>
            <h1 className='createTask-title'>New Task</h1>
            <StyledInput title='Title' placeholder='Enter a title for this task' />
            <StyledInput title='Description' placeholder='Enter a description for this task' />
            <Button id='createTask-colorPick' color='red'>Choose a color representing this task</Button>
            <Button style={{ marginLeft: '30%', marginRight: '30%' }} color='#8BF271'>Done!</Button>
        </div >
    )
}

export default CreateTask
