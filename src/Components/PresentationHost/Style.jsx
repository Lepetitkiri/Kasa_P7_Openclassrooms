import styled from 'styled-components';
import colors from '../../Utils/Colors';

const PresentationHostStyle = styled.div`

  display: flex;
height: auto;
width: auto;
color: ${colors.primary};
background-color: blue;

  /* Version mobile */
  @media only screen and (max-width: 767px) {

background-color: yellow;
  }
`;

export default PresentationHostStyle;
