import styled from 'styled-components';
import colors from '../../Utils/Colors';

const HostPortraitStyle = styled.div`

  display: flex;
  align-items: center;
  color: ${colors.primary};

  h3 {
    padding-right: 10px;
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    text-align: right;
    margin: 0px;
    }

  img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {

    h3 {
      font-size: 12px;
      line-height: 17.112px;
      }

    img {
      height: 32px;
      width: 32px;
    }
  }
`;

export default HostPortraitStyle;
