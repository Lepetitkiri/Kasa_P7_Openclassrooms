import styled from 'styled-components';
import colors from '../../Utils/Colors';

const OutletStyle = styled.div`

  display : flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 86%;
  height: auto;
  row-gap: 20px;

.dropdown {
  display: flex;
  flex-direction: column;
  width: 47%;
  height: auto;

  .dropdown__title {
    display: flex;
    height: 47px;

    h2 {
      display: flex;
      align-items: center;
      box-sizing: border-box;
      width: 90%;
      margin: 0px;
      padding-left: 10px;
      border-radius: 10px 0px 0px 10px;
      background-color: ${colors.primary};
      color: ${colors.white};
      font-size: 24px;
      font-weight: 500;
      line-height: 34px;
    }

    button {
      width: 15%;
      border: 0px;
      border-radius: 0px 10px 10px 0px;
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
    font-size: 24px;
    font-weight: 400;
    line-height: 34px;
  }

}

    /* Version mobile */
    @media only screen and (max-width: 767px) {
      width: 90%;

      .dropdown {
        width: 100%;
      
        .dropdown__title {
          height : 30px;
      
          h2 {
            font-size: 13px;
            line-height: 18.54px;
          }
        }
      
        .dropdown__datas {
          font-size: 12px;
          line-height: 17px;
        }

    }
`;

export default OutletStyle;
