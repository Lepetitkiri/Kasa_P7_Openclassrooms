import styled from 'styled-components';
import colors from '../../Utils/Colors';

const HostPortraitStyle = styled.div`

  display: flex;
height: auto;
width: auto;
background-color: ${colors.primary};
color: ${colors.white};

  /* Version mobile */
  @media only screen and (max-width: 767px) {

  }
`;

export default HostPortraitStyle;
