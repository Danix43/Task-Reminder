import React from 'react'
import styled from 'styled-components';

const NavbarBackground = styled.div`
    background: white;
    box-shadow: 0px 8px 15px 10px rgba(0, 0, 0, 0.25);
`;

const PageTitle = styled.h1`
    font-family: Pacifico, sans-serif;
    font-size: 3vw;
    color: black;
    text-align: center;
    text-decoration: underline;

    margin: 0;
`;

function Navbar() {
    return (
        <NavbarBackground>
            <PageTitle>Task Reminder</PageTitle>
        </NavbarBackground>
    )
}

export default Navbar
