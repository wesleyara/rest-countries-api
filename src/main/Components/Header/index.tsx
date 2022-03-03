import React from "react";
import { HeaderContainer, HeaderWrapper } from "../../Styles/HeaderStyle";

import { BsMoon } from "react-icons/bs";
import { FProps } from "../Types";

export default function Header(props: FProps) {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <h2>Where in the world?</h2>
        <div onClick={props.function}>
          <BsMoon /> Dark Mode
        </div>
      </HeaderContainer>
    </HeaderWrapper>
  );
}
