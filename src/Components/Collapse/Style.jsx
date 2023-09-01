import styled from 'styled-components';

const CollapseStyle = styled.div`

  display : flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 86%;
  height: auto;
  row-gap: 20px;
}

    /* Version mobile */
    @media only screen and (max-width: 767px) {
      width: 90%;
    }
`;

export default CollapseStyle;
