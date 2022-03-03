import styled from "styled-components";

export const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => {
    return theme.colors.primary;
  }};
  border-bottom: 2px solid
    ${({ theme }) => {
      return theme.colors.terciary;
    }};
  color: ${({ theme }) => {
    return theme.colors.font;
  }};

  padding: 20px 0px 20px 0px;

  svg {
    width: 20px;
    margin-right: 5px;
  }

  div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

export const HeaderContainer = styled.div`
  padding: 0px 70px 0px 70px;
  margin: auto;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    padding: 0px 20px 0px 20px;
    font-size: 13px;
  }
`;
