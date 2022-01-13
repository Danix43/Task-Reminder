import React from 'react'
import AccentButton from './Button';

function ViewTaskModal(title, description, color) {
    return (
        <div>
            <h1>{title}</h1>
            <hr style={{ color: color }} />
            <p>{description}</p>

            <AccentButton color='#8BF271'>Complete task</AccentButton>
        </div>
    )
}

export default ViewTaskModal
