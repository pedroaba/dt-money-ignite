import { HeaderContainer, HeaderContent, NewTransectionButton } from "./styles";

import logo from "../../assets/logo.svg";

export function Header () {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />

        <NewTransectionButton>Nova transação</NewTransectionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}