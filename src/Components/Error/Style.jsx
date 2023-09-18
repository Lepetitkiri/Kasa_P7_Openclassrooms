import styled from 'styled-components';
import colors from '../../Utils/Colors';

const ErrorStyle = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 86%;
  padding-top: 169px;
  padding-bottom: 159px;
  color: ${colors.primary};

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;  
    height: 263px;  
    font-size: 288px;
    font-weight: 700;
    margin: 0;
  }

  p {
    width: 100%;    
    text-align: center;
    margin: 0;
    font-size: 36px;
    font-weight: 500;
    height: 51px;
    padding-top: 66px;

    &.Link__error {
      font-size: 18px;
      height: 26px;
      padding-top: 182px;
      text-decoration: underline;
    }
  }

/* Version mobile */
  @media only screen and (max-width: 767px) {
      width: 90%;
      padding-top: 195px;
      padding-bottom: 235px;

      h1 { 
        height: 99px;  
        font-size: 96px;
      }

      p {
        padding-top: 11px;
        height: 52px;
        font-size: 18px;
        line-height: 26px;
    
        &.Link__error {
          font-size: 14px;
          height: 20px;
          padding-top: 133px;
          line-height: 20px;
        }
      }
  }
`;

export default ErrorStyle;
