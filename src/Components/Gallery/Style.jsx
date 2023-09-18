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
  margin: 43px 0 43px 0;
  padding: 56px 50px 56px 50px;
  row-gap: 50px;
  column-gap : 50px;
  
  /* Version tablette */
  @media only screen and (max-width: 992px) {
    padding: 56px 10px 56px 10px;
    column-gap: 20px;
  }

    /* Version mobile */
    @media only screen and (max-width: 767px) {
      width: 100%;
      border-radius: 0;
      margin: 22px 0 43px 0;
      background-color: ${colors.white};
      padding: 0;
      }
`;

export default GalleryStyle;
