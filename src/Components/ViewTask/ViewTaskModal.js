import React from 'react'
import AccentButton from '../Button';

import './ViewTask.css'


function ViewTaskModal(props) {
    const { title, description, color, buttonFunc } = props

    return (
        <div className='viewTask-container'>
            <h1 className='viewTask-title'>{title}</h1>
            <div className='viewTask-color' style={{ backgroundColor: color }} />
            <p className='viewTask-description'>{description}</p>

            <AccentButton onClick={buttonFunc} color='#8BF271'>Complete task</AccentButton>
        </div>
    )
}

export default ViewTaskModal
