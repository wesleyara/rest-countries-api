import React from "react";
import { HeaderContainer, HeaderWrapper } from "../../Styles/HeaderStyle";

import { BsMoon } from "react-icons/bs";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Header(props: any) {
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
