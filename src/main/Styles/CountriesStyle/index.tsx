import styled from "styled-components";

export const DetailsWrapper = styled.section`
  padding: 50px 20px 300px 20px;

  @media screen and (max-width: 1366px) {
    background-color: ${({ theme }) => {
      return theme.colors.secondary;
    }};
    padding: 50px 20px 100px 20px;

    a {
      text-decoration: none;
      color: ${({ theme }) => {
        return theme.colors.font;
      }};
    }

    button {
      padding: 8px 30px 8px 30px;
      border: none;
      border-radius: 5px;
      background-color: ${({ theme }) => {
        return theme.colors.primary;
      }};
      color: ${({ theme }) => {
        return theme.colors.font;
      }};

      box-shadow: 0 0 2px black;

      display: flex;
      align-items: center;
      cursor: pointer;

      svg {
        font-size: 16px;
        margin-right: 5px;
      }
    }
  }
`;

export const DetailsContainar = styled.section`
  display: flex;
  justify-content: flex-start;
  margin-top: 50px;
  color: ${({ theme }) => {
    return theme.colors.font;
  }};

  h2 {
    overflow: hidden;
    white-space: nowrap;
    width: 15rem;
    text-overflow: ellipsis;
  }

  span {
    width: 70%;
  }

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 945px) {
    span {
      width: 100%;
    }

    img {
      height: 80%;
    }
  }

  @media screen and (max-width: 500px) {
    justify-content: center;
    flex-wrap: wrap;
    padding: 0px 20px 0px 20px;

    img {
      width: 330px;
      height: 236px;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;

  strong {
    display: flex;
    width: 138px;
  }

  span {
    width: 138px;
  }

  @media screen and (max-width: 500px) {
    display: flex;

    strong {
      height: 25px;
    }

    span {
      height: 25px;
    }
  }
`;

export const ButtonsBx = styled.section`
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    cursor: pointer;
    list-style-type: none;
    margin-right: 10px;
    padding: 0px 30px 0px 30px;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => {
      return theme.colors.primary;
    }};
    box-shadow: 0 0 2px black;
  }
  @media screen and (max-width: 500px) {
    margin-top: 10px;
  }
`;

export const DescriptionWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 50px 20px 0px 20px;
  width: 80%;

  @media screen and (max-width: 945px) {
    width: 60%;
    div {
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 500px) {
    width: 330px;
    margin-top: 0px;
    justify-content: flex-start;

    div {
      margin-top: 50px;
    }
  }
`;
