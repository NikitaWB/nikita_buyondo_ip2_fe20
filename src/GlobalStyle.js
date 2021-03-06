import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;


/* CSS HEX */
--tea-green: #c9e4caff;
--eton-blue: #87bba2ff;
--steel-teal: #55828bff;
--deep-space-sparkle: #3b6064ff;
--charcoal: #364958ff;

/* CSS HEX */
--lapis-lazuli: #2f6690ff;
--steel-blue: #3a7ca5ff;
--timberwolf: #d9dcd6ff;
--indigo-dye: #16425bff;
--dark-sky-blue: #81c3d7ff;
  }
  h1, h2, h3{
      font-family: 'Yusei Magic', sans-serif;
    }
    p, a{
      font-family: 'Roboto', sans-serif;
    }
    .github-container{
      background: #eee;
      padding: 40px 80px;
      text-align: center;
    }
    a.social{
      display: inline-block;
    }
    a.social :hover{
      color: #87bba2;
    }
    a.github {
      color: black;
    }
`;

export default GlobalStyle;
