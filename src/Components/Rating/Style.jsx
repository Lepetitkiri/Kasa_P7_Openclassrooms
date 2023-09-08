import styled from 'styled-components';
import colors from '../../Utils/Colors';

const RatingStyle = styled.div`

  display: flex;
  align-items: center;
  height: 36px;
  width: auto;

background-color: ${colors.primary};

  img {
    background-color: yellow;
    height: 24px;
    width: 24px;
  }


/* Version mobile */
  @media only screen and (max-width: 767px) {
background-color: blue;
      height: 18px;

      img {
        height: 13px;
        width: 13px;
      }
  }
`;

export default RatingStyle;
