import styled from 'styled-components';
import colors from '../../Utils/Colors';

const TagStyle = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 115px;
  height: 25px;
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 0 10px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

/* Version mobile */
@media only screen and (max-width: 767px) {

  min-width: 84px;
  font-size: 10px;
  height: 18px;

    p {
      height: 18px;
    }
  }

`;

export default TagStyle;
