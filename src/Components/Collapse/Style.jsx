import styled from 'styled-components';

const CollapseStyle = styled.div`

&.collapse__about {

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 72%;
  height: auto;
  margin-top: 31px;
  margin-bottom: 201px;
  row-gap: 31px;

  /* Version mobile */
  @media only screen and (max-width: 767px) {

    width: 90%;
  }

  /* Version mobile - Très petits ecrans */
  @media only screen and (max-width: 525px) {

    margin-top: 19px;
    margin-bottom: 168px;
    row-gap: 20px;
  }
}
`;

export default CollapseStyle;
