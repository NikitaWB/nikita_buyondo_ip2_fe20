import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
background: var(--indigo-dye);
justify-content: center;
display: flex;
color: white;
`

function Footer() {
    return (
        <StyledFooter>
          <h2>Footer</h2>  
        </StyledFooter>
    )
}

export default Footer
