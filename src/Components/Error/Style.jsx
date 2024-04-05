import styled from 'styled-components';
import colors from '../../Utils/Colors';

const ErrorStyle = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 86%;
  padding: 50px 0;

  & .Error-Game__Instructions {
    color: ${colors.black};
    width: 100%;
    text-align: center;   
    margin: 0;
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 20px;
  }

  & .Error-Game__First-Hidden-Text {    
    width: 100%;
    text-align: center;
    margin: 0;
    font-weight: 500;
    height: 51px;
    font-size: 18px;
    height: 26px;
    text-decoration: underline;
    padding-bottom: 30px;
  }

  & .Error-Game__Container {
    width: 300px;
    height: 300px;
    & .Error-Game__First-Hidden-Text {
      position: absolute;
      width: 300px;
      height: 0px;
      padding: 0;
      top: 350px;
      text-decoration: none;
      color: ${colors.primary};
      font-weight: bolder;
    }
    & .Error-Game__Second-Hidden-Text {
      width: 300px;
      position: absolute;
      top: 400px;
      text-decoration: underline;
    }
  }

  & .Error-Game__Canvas {
    border-radius: 10px;
    background-color: ${colors.white};
  }

  /* Version tablette */
  @media only screen and (max-width: 992px) {
  }


/* Version mobile */
  @media only screen and (max-width: 767px) {
    width: 90%;

    & .Error-Game__First-Hidden-Text {
      height: 52px;
      font-size: 18px;
      line-height: 26px;
  
      &.Link__error {
        font-size: 14px;
        height: 20px;
        line-height: 20px;
      }
    }
  }
`;

export default ErrorStyle;
