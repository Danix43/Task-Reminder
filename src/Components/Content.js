import React from 'react'
import styled from 'styled-components'
import Controller from '../Logic/Controller'

import Button from './Button'

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

const openModal = function (param) {
    // find task from title
    const taskTitle = param.target.innerText

    const task = controller.findTaskByTitle(taskTitle)

    // hideList();

}

const hideList = function () {
    const container = document.querySelector('.container')
    container.style.display = 'none';
}


function Content() {
    return (
        <div className='container'>
            <Container>
                {/* sample data */}
                {/* <Button color='#E02323' onClick={openModal}>🐶Feed the dog</Button>
                <Button color='#6BE023' onClick={openModal}>🌱Water the plants</Button>
                <Button color='#23BEE0' onClick={openModal}>😃Meet the new coworker</Button> */}

                {controller.taskList.map((elm, idx) => {
                    return <Button key={idx} color={elm.color}>{elm.title}</Button>
                })}

            </Container>

            <Container>
                <Button color='red'>Press here to add a new task</Button>
            </Container>
        </div>
    )
}

export default Content
