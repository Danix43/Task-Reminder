import React from 'react'
import StyledInput from '../StyledInput/StyledInput'
import './CreateTask.css'
import Button from '../Button'

const saveTask = (buttonFunc, controller) => {
    const titleInput = document.querySelector('#createTask-titleInput > #styledInput-input').value
    const descriptionInput = document.querySelector('#createTask-descriptionInput > #styledInput-input').value

    if (titleInput === '') {
        alert('Please type something inside the title box')
        return
    }

    if (descriptionInput === '') {
        alert('Please type something inside the description box')
        return
    }

    // save to the controller / storage
    controller.addNewTask(titleInput, descriptionInput, '#00ff00')

    // run last to change to the list view
    buttonFunc()
}

function CreateTask(props) {
    const { buttonFunc, controllerIns } = props

    return (
        <div className='createTask-root'>
            <h1 className='createTask-title'>New Task</h1>
            <StyledInput id='createTask-titleInput' title='Title' placeholder='Enter a title for this task' />
            <StyledInput id='createTask-descriptionInput' title='Description' placeholder='Enter a description for this task' />
            <Button id='createTask-colorPick' color='red'>Choose a color representing this task</Button>
            <Button onClick={() => saveTask(buttonFunc, controllerIns)} style={{ marginLeft: '30%', marginRight: '30%' }} color='#8BF271'>Done!</Button>
        </div >
    )
}

export default CreateTask
