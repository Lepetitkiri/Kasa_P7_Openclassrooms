import styled from 'styled-components';
import colors from '../../Utils/Colors';

const GalleryStyle = styled.section`

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  height: auto;
  width: 86%;
  border-radius: 25px;
  background: #F6F6F6;
  margin: 43px 0px 43px 0px;
  padding: 56px 50px 56px 50px;
  row-gap: 50px;
  column-gap : 56px;
  
    /* Version mobile */
    @media only screen and (max-width: 767px) {
      width: 90%;
      border-radius: 0px;
      background-color: ${colors.white};
      padding: 0px;
      }
`;

export default GalleryStyle;
