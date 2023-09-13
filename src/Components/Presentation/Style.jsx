import styled from 'styled-components';

const Presentation = styled.div`

  display: flex;
  justify-content: space-between;
  width: 86%;
  height: auto;

  /* Version mobile */
  @media only screen and (max-width: 767px) {

    display: flex;
    flex-direction: column;
    width: 90%;
  }
`;

export default Presentation;
