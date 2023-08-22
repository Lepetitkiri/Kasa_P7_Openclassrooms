import styled from 'styled-components';
import colors from '../../Utils/Colors';

const LogoStyled = styled.div`

  /* styles spécifiques à la classe "header__logo" */
  &.header__logo {
    fill: ${colors.primary};
    width: 210.322px;
    height: 68px;
    flex-shrink: 0;

  /* Version mobile */
  @media only screen and (max-width: 767px) {
    width: 145px;
    height: 47px;
    flex-shrink: 0;
  }
  }
`;

export default LogoStyled;