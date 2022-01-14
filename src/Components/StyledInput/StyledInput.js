import React from 'react'
import './StyledInput.css'

function StyledInput(props) {
    const { title, placeholder } = props

    return (
        <div className='styledInput-root'>
            <h1 className='styledInput-title'>{title}</h1>
            <input type='text' id='styledInput-input' name='input' placeholder={placeholder} />
        </div>
    )
}

export default StyledInput
