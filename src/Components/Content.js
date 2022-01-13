import React, { useState } from 'react'
import styled from 'styled-components'
import Controller from '../Logic/Controller'

import Button from './Button'
import ViewTaskModal from './ViewTaskModal'

const controller = new Controller()

const Container = styled.div`
    display: flex;
    flex-direction: column;

    background-color: white;
    margin-top: 3rem;
    
    border-radius: 30px;
    
    gap: 3rem;
    
    padding: 3rem;
    
    margin-left: 30%;
    margin-right: 30%;
    
    filter: drop-shadow(0px 12px 15px rgba(0, 0, 0, 0.25));
    `

const openModal = function (elemTitle) {
    const task = controller.findTaskByTitle(elemTitle)

    // hides the list and the create new task button
    toggleList();

    // isModalOpen(true)

    // return <ViewTaskModal title={task.title} description={task.description} color={task.color} />
}

const toggleList = function () {
    const containerTasks = document.querySelector('#tasks')
    containerTasks.style.display = 'none' ? '' : 'none'

    const containerCreateTask = document.querySelector('#create-task')
    containerCreateTask.style.display = 'none' ? '' : 'none'
}

function Content() {
    return (
        <div className='container'>
            <Container id='tasks'>
                {controller.taskList.map((elm, idx) => {
                    return <Button key={idx} color={elm.color} onClick={() => openModal(elm.title)}>{elm.title}</Button>
                })}
            </Container>

            <Container id='create-task'>
                <Button color='red'>Press here to add a new task</Button>
            </Container>
        </div>
    )
}

export default Content
