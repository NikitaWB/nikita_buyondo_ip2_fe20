import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledUl = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledLi = styled.li`
    margin: 15px;
    padding: 10 px;
    
    a:link, a:visited {
            color: white;
       }
    a:hover{
        color: var(--tea-green);
    }
    a:active{
        color: var(--eton-blue);
    }
`

function Navigation() {
    return (
        <StyledUl>
            <StyledLi>
                <Link to='/'>Home</Link>
            </StyledLi>
            <StyledLi>
                <Link to='/about'>About</Link>
            </StyledLi>
            <StyledLi>
                <Link to='contact'>Contact</Link>
            </StyledLi>
            <StyledLi>
                <Link to='/projects'>Projects</Link>
            </StyledLi>
        </StyledUl>
    )
}

export default Navigation
