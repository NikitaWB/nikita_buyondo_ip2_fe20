import React from 'react'
import Navigation from './Navigation'
import styled from 'styled-components'

const StyledHeader = styled.header`
/* background: var(--deep-space-sparkle); */
background: linear-gradient(135deg, #16425B 0%, #55828B 100%);
color: white;
 
`

function Header() {
    return (
        <StyledHeader>
          <h1>Nikita Buyondo</h1>
          <Navigation />
        </StyledHeader>
    )
}

export default Header
