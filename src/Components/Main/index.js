import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import styled from 'styled-components'

const StyledMain = styled.main`
min-height: 74vh;
display:flex;
padding: 10px;

  h2{
    color: var(--deep-space-sparkle)
  }
`

function Main() {
    return (
      <StyledMain>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/projects'>
            <Projects />
          </Route>
        </Switch>
      </StyledMain>
    )
}

export default Main
