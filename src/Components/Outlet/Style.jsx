import styled from 'styled-components';
import colors from '../../Utils/Colors';

const OutletStyle = styled.div`

  width: 582px;
  height: 52px;
  background-color: ${colors.primary};
  color: ${colors.white};

    /* Version mobile */
    @media only screen and (max-width: 767px) {
    }
`;

export default OutletStyle;
