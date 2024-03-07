import { StyleContainer } from "./Styled/StyledContainer";
import { Logo } from "./Styled/StyledMenuLogo";
import { MenuButton } from "./Styled/StyledMenuLogo";
import { InputContainer } from "./Styled/StyledSearchContainer";

import GnbButton from "./GnbButton";
import Searchbar from "./Searchbar";

const logo = require("@/public/icons/LogoLarge.svg");

export default function Gnb() {
  return (
    <StyleContainer>
      <MenuButton />
      <Logo src={logo} width={112} height={18} alt="mogazoa 로고" />
      <InputContainer>
        <Searchbar />
        <GnbButton>로그인</GnbButton>
        <GnbButton>회원가입</GnbButton>
      </InputContainer>
    </StyleContainer>
  );
}
