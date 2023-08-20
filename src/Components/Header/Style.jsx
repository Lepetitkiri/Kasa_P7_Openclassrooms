import styled from 'styled-components';

const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    margin: 40px 7% 0 7%;

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 30%;
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: 142.6%;
    }

    /* Version tablette */
    @media only screen and (max-width : 992px) {
      nav {
        width: auto;
        gap: 10px;
      }
    }

    /* Version mobile */
    @media only screen and (max-width : 767px) {
      margin: 20px 5% 0 5%;

      nav {
        font-size: 12px;
      }
    }
`;

export default HeaderStyle;