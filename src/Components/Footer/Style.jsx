import styled from 'styled-components';
import colors from '../../Utils/Colors';

const FooterStyle = styled.footer`

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.black};
  color: ${colors.white};
  padding: 66px 0 29px 0;
  gap: 28.556px;

  p {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 46px;
    font-size: 24px;
    font-weight: 500;
    line-height: 142.6%;
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
    padding: 62px 0 62px 0;
    gap: 0;
  }

  /* Version mobile - Très petits ecrans */
  @media only screen and (max-width: 525px) {
    p {
      text-align: center;
      height: auto;
    }
  }
`;

export default FooterStyle;
