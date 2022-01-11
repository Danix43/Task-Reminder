import React from 'react'
import styled from 'styled-components'
import AccentButton from './Button';

const Container = styled.div`
    display: flex;
    flex-direction: column;
`

function ViewTaskModal(props) {
    const { title, description, color } = props;

    return (
        <Container>
            <h1>{title}</h1>
            <hr style={{ color: color }} />
            <p>{description}</p>

            <AccentButton color='#8BF271'>Complete task</AccentButton>
        </Container>
    )
}

export default ViewTaskModal
