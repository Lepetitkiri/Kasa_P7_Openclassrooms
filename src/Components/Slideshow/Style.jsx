import styled from 'styled-components';
import colors from '../../Utils/Colors';

const SlideshowStyled = styled.div`

  Background-color: ${colors.primary};
  color: ${colors.white};
}

&.slideshow__picture {
  display: flex;
  width: 1240px;
  height: 415px;
  border-radius: 25px;
}

  /* Version tablette */
  @media only screen and (max-width: 992px) {
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
  }

  /* Version mobile - Très petits ecrans */
  @media only screen and (max-width: 525px) {
  }
`;

export default SlideshowStyled;
