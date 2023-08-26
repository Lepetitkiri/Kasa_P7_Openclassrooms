import styled from 'styled-components';
import colors from '../../Utils/Colors';

const GalleryCardStyle = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 340px;
  background-color: ${colors.primary};
  color: ${colors.white};

    /* Version mobile */
    @media only screen and (max-width: 767px) {
      }

    /* Version mobile - Très petits ecrans */
    @media only screen and (max-width: 525px)
        }
`;

export default GalleryCardStyle;
