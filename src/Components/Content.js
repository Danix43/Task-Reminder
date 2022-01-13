import React, { useState } from 'react'
import styled from 'styled-components'
import Controller from '../Logic/Controller'

import Button from './Button'
import ViewTask from './ViewTask/ViewTask'

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

function Content() {
    // reading task
    const [readTask, isReadingTask] = useState(false)
    const [taskObj, setTaskObj] = useState({})

    // writing task
    const [createTask, isCreatingTask] = useState(false)


    // write control statetements were
    let mainContent;
    if (!readTask && !createTask) {
        mainContent = <>
            <Container id='tasks'>
                {controller.taskList.map((elm, idx) => {
                    return <Button key={idx} color={elm.color} onClick={() => {
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
                <Button onClick={() => isCreatingTask(true)} color='red'>Press here to add a new task</Button>
            </Container>
        </>
    } else if (readTask && !createTask) {
        mainContent = <>
            <ViewTask title={taskObj.title} description={taskObj.description} color={taskObj.color} buttonFunc={() => isReadingTask(false)} />
        </>
    } else if (!readTask && createTask) {
        mainContent = <>
            <h1 onClick={() => isCreatingTask(false)}>Create Task Screen</h1>
        </>
    } else {
        mainContent = <>
            <h1>Condition not found</h1>
        </>
    }


    return (
        <div className='container'>
            {mainContent}
        </div>
    )
}

export default Content
