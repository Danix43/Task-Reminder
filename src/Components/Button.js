import styled from 'styled-components'

const AccentButton = styled.button`
    font-family: Oxygen Mono;
    font-style: normal;
    font-weight: normal;
    font-size: 1.9vw;
    line-height: 37px;

    border: 0;
    border-radius: 30px;
    box-shadow: 0px 2px 20px 1px rgba(0, 0, 0, 0.25);

    padding: 1rem;

    color: white;

    background-color: ${props => props.color}
    `


export default AccentButton 