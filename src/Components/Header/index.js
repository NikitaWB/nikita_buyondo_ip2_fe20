import React from 'react'
import Navigation from './Navigation'
import styled from 'styled-components'

const StyledHeader = styled.header`
/* background: var(--deep-space-sparkle); */
background: linear-gradient(135deg, #87bba2ff 0%, #3b6064ff 100%);
color: white;
`

function Header() {
    return (
        <StyledHeader>
          <h1>Header</h1>
          <Navigation />
        </StyledHeader>
    )
}

export default Header
