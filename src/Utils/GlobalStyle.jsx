import styled from 'styled-components';
import colors from './Colors';

const GlobalStyle = styled.div`
    margin: 0;
    padding: 0;
    list-style: none;
    font-family: Montserrat, 'Courier New', Courier, sans-serif;
    color: ${colors.primary};
    background-color: ${colors.white};
    box-sizing: border-box;
    width: 100%;
    object-fit: cover;

  a {
    text-decoration: none;
    color: ${colors.primary};
  }

  ::placeholder {
    color: ${colors.white};
  }

  div, ul, ol, li, p, h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
