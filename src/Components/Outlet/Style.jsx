import styled from 'styled-components';
import colors from '../../Utils/Colors';

const OutletStyle = styled.div`

  display : flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 86%;
  height: auto;
  row-gap: 20px;
background-color : green;

.dropdown {
  display: flex;
  flex-direction: column;
  width: 47%;
  height: auto;

  .dropdown__title {
    display: flex;

    h2 {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      width: 90%;
      height: 47px;
      margin: 0px;
      padding-left: 10px;
      border-radius: 10px 0px 0px 0px;
      background-color: ${colors.primary};
      color: ${colors.white};
      font-size: 24px;
      font-weight: 500;
      line-height: 34px;
    }

    button {
      width: 10%;
      border: 0px;
      border-radius: 0px 10px 0px 0px;
      background-color: ${colors.primary};
      color: ${colors.white};
    }
  }

  .dropdown__datas {
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    border-radius: 0px 0px 10px 10px;
    color: ${colors.primary};
    background-color: ${colors.secondary};
  }

}

    /* Version mobile */
    @media only screen and (max-width: 767px) {
    }
`;

export default OutletStyle;
