import styled from 'styled-components';
import colors from '../../Utils/Colors';

const PresentationLocationStyle = styled.div`

  display: flex;
  color: ${colors.primary};
  background-color: blue;

  /* Version mobile */
  @media only screen and (max-width: 767px) {

  width: 90%;
  background-color: yellow;
  }
`;

export default PresentationLocationStyle;
