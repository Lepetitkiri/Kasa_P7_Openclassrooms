import styled from 'styled-components';
import colors from '../../Utils/Colors';
const bannerHomeUrl = './Pictures/Banner__Home.png';
const bannerAboutUrl = './Pictures/Banner__About.jpg';

const BannerStyle = styled.div`

  display: flex;
  justify-content: center;
  height: 223px;
  width: 100%;

div {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 25px;
  width: 86%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  }

&.banner__home {
  margin-top: 63px;
  div {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bannerHomeUrl});
  }
  h1 {
    color: ${colors.white};
    font-size: 48px;
    font-style: normal;
    font-weight: 500;
    line-height: 142.6%;
  }
}

&.banner__about {
  margin-top: 44px;
  div {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${bannerAboutUrl});
  }
  h1 {
    display: none;
  }
}

  /* Version tablette */
  @media only screen and (max-width: 992px) {
    &.banner__home {
      h1 {
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 100%;
      }
    }
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
    div {
      width: 90%;
      border-radius: 10px;
    }
    &.banner__home {
      height: 111px;
    }
  }

  /* Version mobile - Très petits ecrans */
  @media only screen and (max-width: 525px) {
    &.banner__home {
      div {
        display: flex;
        justify-content: flex-start;
      }
      h1 {
        padding: 0px 16px 0px 16px;
      }
    }
  }
`;

export default BannerStyle;
