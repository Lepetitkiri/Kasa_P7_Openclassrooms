import styled from 'styled-components';
import colors from '../../Utils/Colors';

const FooterStyle = styled.footer`

  display:flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.black};
  color: ${colors.white};
  padding: 66px 0px 29px 0px;
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

  /* Version tablette */
  @media only screen and (max-width: 992px) {
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
  }
`;

export default FooterStyle;
