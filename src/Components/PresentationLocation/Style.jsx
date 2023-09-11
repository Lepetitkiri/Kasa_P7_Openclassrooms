import styled from 'styled-components';
import colors from '../../Utils/Colors';

const PresentationLocationStyle = styled.div`

  display: flex;
  flex-direction: column;
  color: ${colors.primary};

  h2 {
    font-size: 36px;
    font-weight: 500;
    line-height: 51px;
    margin: 0px;
  }

  h3  {
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    margin: 0px;
  }
  
  .presentation__location__tag {
    display: flex;
    flex-direction: row;
    width: auto;
    gap: 10px;
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {

    h2 {
      font-size: 18px;
      line-height: 26px;
    }

    h3 {
      padding-top: 5px;
      font-size: 14px;
    }

    width: 90%;
  }
`;

export default PresentationLocationStyle;
