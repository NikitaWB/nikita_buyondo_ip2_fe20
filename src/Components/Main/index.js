import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import styled from 'styled-components'

const StyledMain = styled.main`
min-height: 74vh;
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
          <Route path='/projects'>
            <Projects />
          </Route>
        </Switch>
      </StyledMain>
    )
}

export default Main
