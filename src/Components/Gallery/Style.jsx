import styled from 'styled-components';
import colors from '../../Utils/Colors';

const GalleryStyle = styled.section`

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  height: auto;
  width: 86%;
  border-radius: 25px;
  background: #F6F6F6;
  margin: 43px 0px 43px 0px;

    /* Version mobile */
    @media only screen and (max-width: 767px) {
      width: 90%;
      border-radius: 0px;
      background-color: ${colors.white};
      .gallery__home {
        padding: 0px;
        }
      }

    /* Version mobile - Très petits ecrans */
    @media only screen and (max-width: 525px)

`;

export default GalleryStyle;
