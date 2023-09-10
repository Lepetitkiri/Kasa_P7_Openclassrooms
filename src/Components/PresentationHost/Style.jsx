import styled from 'styled-components';
import colors from '../../Utils/Colors';

const PresentationHostStyle = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 21px;
  color: ${colors.primary};

  /* Version mobile */
  @media only screen and (max-width: 767px) {

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  gap: 0px;
  }
`;

export default PresentationHostStyle;
