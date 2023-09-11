import styled from 'styled-components';
import colors from '../../Utils/Colors';

const TagStyle = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;
  min-width: 115px;
  height: 25px;
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 0px 10px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

/* Version mobile */
@media only screen and (max-width: 767px) {

  width: 84px;
  height: 18px;
  font-size: 10px;
  line-height: 14px;
  }

`;

export default TagStyle;
