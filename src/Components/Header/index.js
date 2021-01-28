import React from 'react'
import Navigation from './Navigation'
import styled from 'styled-components'

const StyledHeader = styled.header`
background: orange;
`

function Header() {
    return (
        <StyledHeader>
          <h2>Header</h2>
          <Navigation />
        </StyledHeader>
    )
}

export default Header
