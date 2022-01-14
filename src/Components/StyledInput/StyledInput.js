import React from 'react'
import './StyledInput.css'

function StyledInput(props) {
    const { id, title, placeholder } = props

    return (
        <div id={id} className='styledInput-root'>
            <h1 className='styledInput-title'>{title}</h1>
            <input type='text' id='styledInput-input' name='input' placeholder={placeholder} />
        </div>
    )
}

export default StyledInput
