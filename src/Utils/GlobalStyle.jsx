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

    main {
      display: flex;
      justify-content: center;
    }

  a {
    text-decoration: none;
    color: ${colors.primary};
  }

  ::placeholder {
    color: ${colors.white};
  }

  /* Version tablette */
    @media only screen and (max-width : 992px) {
      max-width: 992px;
    }

    /* Version mobile */
    @media only screen and (max-width : 767px) {
      max-width: 767px;
    }

`;

export default GlobalStyle;
