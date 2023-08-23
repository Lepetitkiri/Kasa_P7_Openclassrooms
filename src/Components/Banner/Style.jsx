import styled from 'styled-components';
const bannerHomeUrl = '../../Utils/Pictures/Banner__Home';
const bannerAboutUrl = '../../Utils/Pictures/Banner__About';

const BannerStyle = styled.div`

  background-color: yellow;

  &.banner__about div {
    background-image: url(${bannerAboutUrl});
  }

  &.banner__home div {
    background-image: url(${bannerHomeUrl});
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

export default BannerStyle;
