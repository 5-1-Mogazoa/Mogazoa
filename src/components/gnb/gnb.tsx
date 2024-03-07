import { useCallback, useEffect, useState } from "react";
import { PAGE_ROUTES } from "@/src/routes";
import { ProductsearchInput } from "./Styled/StyledSearchInput";
import { StyleContainer } from "./Styled/StyledContainer";
import { Logo } from "./Styled/StyledMenu";
import { MenuButton } from "./Styled/StyledMenu";
import { InputContainer } from "./Styled/StyledSearchContainer";
import router from "next/router";
import GnbButton from "./GnbButton";
import Searchbar from "./Searchbar";
import styled from "styled-components";

const logo = require("@/public/icons/LogoLarge.svg");

type GnbProps = {
  value: string;
  searchClick: boolean;
};
const MobileContainer = styled.div``;

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
