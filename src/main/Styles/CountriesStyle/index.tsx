import styled from "styled-components";

export const DetailsWrapper = styled.section`
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
`;

export const DetailsContainar = styled.section`
  display: flex;
  justify-content: space-between;
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

  img {
    width: 550px;
    height: 393px;
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
  margin-left: 30px;
  display: flex;
  justify-content: flex-start;

  strong {
    display: block;
    width: 160px;
    overflow: hidden;
  }

  @media screen and (max-width: 500px) {
    display: flex;
    flex-wrap: wrap;
    margin-left: 0px;

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
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 50px;
  width: calc(100% - 550px);

  @media screen and (max-width: 500px) {
    width: 330px;
    margin-top: 0px;
    justify-content: flex-start;

    div {
      margin-top: 50px;
    }
  }
`;

export const Space = styled.div`
  width: 150px;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;
