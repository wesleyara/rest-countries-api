import styled from "styled-components";

export const HomePageWrapper = styled.div`
  background-color: ${({ theme }) => {
    return theme.colors.secondary;
  }};
`;

export const SearchContainer = styled.section`
  padding: 50px 70px 0px 70px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;

    button {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      background-color: ${({ theme }) => {
        return theme.colors.primary;
      }};
      width: 58px;
      height: 58px;
      border: none;

      border-radius: 5px 0px 0px 5px;

      svg {
        font-size: 20px;
        color: ${({ theme }) => {
          return theme.colors.placeholder;
        }};
      }
    }
  }

  input {
    padding: 18px;
    background-color: ${({ theme }) => {
      return theme.colors.primary;
    }};
    border: none;
    border-radius: 0px 5px 5px 0px;
    width: 320px;
    font-size: 16px;

    &::placeholder {
      color: ${({ theme }) => {
        return theme.colors.placeholder;
      }};
    }
  }

  select {
    border: none;
    border-radius: 5px;
    padding: 15px;
    font-size: 16px;
    width: 170px;
    background-color: ${({ theme }) => {
      return theme.colors.primary;
    }};
    color: ${({ theme }) => {
      return theme.colors.font;
    }};
  }

  @media screen and (max-width: 500px) {
    padding: 50px 20px 0px 20px;
    margin: auto;
    justify-content: flex-start;

    input {
      width: 280px;
    }

    select {
      margin-top: 40px;
    }
  }
`;

export const CardContainer = styled.section`
  padding: 0px 70px 0px 70px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const CardWrapper = styled.div`
  width: 260px;
  background-color: ${({ theme }) => {
    return theme.colors.primary;
  }};
  border-radius: 5px;
  margin-top: 50px;
  cursor: pointer;
  a {
    color: ${({ theme }) => {
      return theme.colors.font;
    }};
    text-decoration: none;
  }

  img {
    width: 260px;
    height: 170px;
    object-fit: cover;
    border-radius: 5px 5px 0px 0px;
  }

  div {
    padding: 20px 30px 30px 30px;
  }
`;
