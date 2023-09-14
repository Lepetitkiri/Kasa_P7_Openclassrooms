import styled from 'styled-components';

const CollapseStyle = styled.section`

display: flex;
flex-direction: row;
justify-content: space-between;
width: 86%;
height: auto;

&.collapse__housing {

  margin-top: 24px;
  margin-bottom: 201px;
  gap: 76px;

  /* Version mobile */
  @media only screen and (max-width: 767px) {

    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  /* Version mobile - Très petits ecrans */
  @media only screen and (max-width: 525px) {

    margin-top: 16.5px;
    margin-bottom: 59px;
  }
}


&.collapse__about {

  flex-wrap: wrap;
  width: 72%;
  margin-top: 31px;
  margin-bottom: 201px;
  row-gap: 31px;

  /* Version mobile */
  @media only screen and (max-width: 767px) {

    width: 90%;
    display: flex;
    flex-direction: column;
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
