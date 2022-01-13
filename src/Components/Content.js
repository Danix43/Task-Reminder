import React, { useState } from 'react'
import styled from 'styled-components'
import Controller from '../Logic/Controller'

import Button from './Button'
import ViewTaskModal from './ViewTask/ViewTaskModal'

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
}

const toggleList = function () {
    const containerTasks = document.querySelector('#tasks')
    containerTasks.style.display = 'none' ? '' : 'none'

    const containerCreateTask = document.querySelector('#create-task')
    containerCreateTask.style.display = 'none' ? '' : 'none'
}

function Content() {
    const [readTask, isReadingTask] = useState(false)
    const [taskObj, setTaskObj] = useState({})

    return (
        <div className='container'>
            {!readTask ?
                <>
                    <Container id='tasks'>
                        {controller.taskList.map((elm, idx) => {
                            return <Button key={idx} color={elm.color} onClick={() => {
                                openModal(elm.title)
                                isReadingTask(true)
                                setTaskObj({
                                    title: elm.title,
                                    description: elm.description,
                                    color: elm.color
                                })
                            }}>{elm.title}</Button>
                        })}
                    </Container>

                    <Container id='create-task'>
                        <Button color='red'>Press here to add a new task</Button>
                    </Container>
                </>
                : <>
                    <ViewTaskModal title={taskObj.title} description={taskObj.description} color={taskObj.color} buttonFunc={() => isReadingTask(false)} />
                </>
            }

        </div>
    )
}

export default Content
