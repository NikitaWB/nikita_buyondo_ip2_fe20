import React from 'react'
import styled from 'styled-components'
import background from '../../../img/kelly-sikkema.jpg'

const StyledHome = styled.main`
background-image: url(${background});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
width: 100%;
height: 100vh;
margin: 0;
padding: 50px;
text-align: center;
justify-content: center;
display: flex;
flex-direction: column;

    h1{
        font-size: 3rem;
        color: white;
        letter-spacing: 3px;
    }
    h2{
        font-size: 2rem;
        color: white;
        letter-spacing: 2px;
    }
    hr{
        width: 70%;
        margin: 0 auto;
    }
`


function Home() {
    return (
        <StyledHome>
            <h1>Nikita Buyondo</h1>
            <br></br>
            <hr />
            <br></br>
            <h2>Front-End Developer</h2>
        </StyledHome>
    )
}

export default Home
