import styled from 'styled-components';
import colors from '../../Utils/Colors';

const SlideshowStyled = styled.div`

  display: flex;
  position: relative;
  width: 86%;  
  height: 415px;
  padding-top: 27px;
  object-fit: fill;

  .slideshow__picture {
    width: 100%;
    height: 100%;
    border-radius: 25px;
  }


  button {
    display: flex;
    position : absolute;
    justify-content: center;
    align-items: center;
    border: 0;
    width: 96px;
    height: 119px;
    background: transparent;
    cursor: pointer;
    top: 50%;
    transform: translate(0,-50%);

    &.slideshow__leftArrow, .slideshow__leftArrow--Mobile  {
      left: 0%;
    }
    &.slideshow__rightArrow, .slideshow__rightArrow--Mobile {
      right: 0%;
    }

    .slideshow__leftArrow--Mobile, .slideshow__rightArrow--Mobile {
      visibility: hidden;
      position: absolute;
      top: 50%;
      transform: translate(0,-50%);
    }
  }

  p {
    position : absolute;  
    height: 32px;
    font-size: 18px;
    font-weight: 500;
    line-height: 26px;
    bottom: 0%;
    left: 50%;
    color: ${colors.white};
  }

  .hide {
    visibility: hidden;
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
    width: 90%;
    height: 255px;

    button {
      .slideshow__leftArrow--Desktop, &.slideshow__rightArrow--Desktop {
        visibility: hidden;
        width: 24px;
        height: 24px;
      }

      .slideshow__leftArrow--Mobile {
        visibility: visible;
        padding-left: 10px;
      }
      .slideshow__rightArrow--Mobile {
        visibility: visible;
        padding-right: 10px;
      }
    }

    p, .hide {
      display: none;
    }
  }
`;

export default SlideshowStyled;
