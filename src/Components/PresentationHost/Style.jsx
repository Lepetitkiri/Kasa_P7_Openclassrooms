import styled from 'styled-components';
import colors from '../../Utils/Colors';

const PresentationHostStyle = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 21px;
  padding-top: 24px;
  color: ${colors.primary};

  /* Version mobile */
  @media only screen and (max-width: 767px) {

  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  gap: 0;
  padding-top: 16.5px;
  }
`;

export default PresentationHostStyle;
