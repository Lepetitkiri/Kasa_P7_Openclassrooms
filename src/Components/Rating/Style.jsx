import styled from 'styled-components';

const RatingStyle = styled.div`

  display: flex;
  align-items: center;
  height: 36px;
  width: auto;

  img {
    height: 24px;
    width: 24px;
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
    height: 18px;

    img {
      height: 13px;
      width: 13px;
    }
  }
`;

export default RatingStyle;
