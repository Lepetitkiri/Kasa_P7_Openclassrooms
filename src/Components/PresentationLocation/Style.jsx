import styled from 'styled-components';
import colors from '../../Utils/Colors';

const PresentationLocationStyle = styled.div`

  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${colors.primary};

  h2 {
    font-size: 36px;
    font-weight: 500;
    line-height: 51px;
    margin: 0;
    padding-top: 30px;
  }

  h3  {
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    margin: 0;
  }
  
  .presentation__location__tag {
    display: flex;
    flex-wrap: wrap;
    padding-top: 20px;
    gap: 10px;
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {

    h2 {
      font-size: 18px;
      line-height: 26px;
      padding-top: 15px;
    }

    h3 {
      padding-top: 5px;
      font-size: 14px;
    }

    .presentation__location__tag {
      padding-top: 10px;
    }
  }
`;

export default PresentationLocationStyle;
