import styled from 'styled-components';
import colors from '../../Utils/Colors';

const GalleryStyle = styled.main`

  display: flex;
  justify-content: center;
  height: auto;
  margin: 43px 0px 43px 0px;
  padding: 56px 50px 56px 50px;

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
      padding: 0px;
      background-color: ${colors.white};
      }

    /* Version mobile - Très petits ecrans */
    @media only screen and (max-width: 525px)

        }
`;

export default GalleryStyle;
