import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background: linear-gradient(135deg, #55828b 0%, #16425b 100%);
  justify-content: center;
  text-align: center;
  display: flex;
  color: white;
  padding: 40px;
`;

function Footer() {
  return (
    <StyledFooter>
      <h2>
        Made by yours truly <br></br> Nikita "NixiS" Buyondo
      </h2>
    </StyledFooter>
  );
}

export default Footer;
