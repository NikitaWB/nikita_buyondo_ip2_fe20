import React from "react";
import Navigation from "./Navigation";
import styled from "styled-components";

const StyledHeader = styled.header`
  /* background: var(--deep-space-sparkle); */
  background: linear-gradient(135deg, #16425b 0%, #55828b 100%);
  color: white;
  h1 {
    padding: 10px 0px 0px 30px;
  }
`;

function Header() {
  return (
    <StyledHeader>
      <h1>Nikita Buyondo</h1>
      <Navigation />
    </StyledHeader>
  );
}

export default Header;
