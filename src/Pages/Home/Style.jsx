import styled from 'styled-components';
import colors from '../../Utils/Colors';

const HomeStyle = styled.main`

  display: flex;
  justify-content: center;
  height: auto;
  margin: 43px 0px 43px 0px;

  .gallery__home {
    display: flex;
    justify-content: center;
    height: auto;
    border-radius: 25px;
    background: #F6F6F6;
    width: 86%;

    /* Version mobile */
    @media only screen and (max-width: 767px) {
      width: 90%;
      border-radius: 0px;
      background-color: ${colors.white};
      }

    /* Version mobile - Très petits ecrans */
    @media only screen and (max-width: 525px)

        }
`;

export default HomeStyle;
