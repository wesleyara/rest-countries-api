import React from "react";
import styled from "styled-components";

export const Loading = styled.div`
  display: inline-block;
  margin-top: 200px;
  width: 80px;
  height: 80px;

  &:after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid
      ${({ theme }) => {
        return theme.colors.font;
      }};
    border-color: ${({ theme }) => {
        return theme.colors.font;
      }}
      transparent
      ${({ theme }) => {
        return theme.colors.font;
      }}
      transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoadingBx = styled.section`
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: center;
`;

export default function Loadings() {
  return (
    <LoadingBx>
      <Loading></Loading>
    </LoadingBx>
  );
}
