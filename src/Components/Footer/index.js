import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
background: var(--indigo-dye);
justify-content: center;
display: flex;
color: white;
padding: 40px;
`

function Footer() {
    return (
        <StyledFooter>
          <h2>Made with love by yours truly Nikita "NixiS" Buyondo</h2>
        </StyledFooter>
    )
}

export default Footer
