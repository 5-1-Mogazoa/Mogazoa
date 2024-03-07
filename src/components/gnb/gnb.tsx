import { StyleContainer } from "./Styled/StyledContainer";
import { Logo } from "./Styled/StyledMenuLogo";
import { MenuButton } from "./Styled/StyledMenuLogo";
import { InputContainer } from "./Styled/StyledSearchContainer";

import GnbButton from "./GnbButton";
import Searchbar from "./Searchbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const logo = "/icons/LogoLarge.svg";

export default function Gnb() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      setIsLoggedIn(true);
    }
  }, [currentPath]);

  return (
    <StyleContainer>
      <MenuButton />
      <Link href="/">
        <Logo src={logo} width={112} height={18} alt="mogazoa 로고" />
      </Link>
      <InputContainer>
        <Searchbar />
        <GnbButton>{isLoggedIn ? "비교하기" : "로그인"}</GnbButton>
        <GnbButton>{isLoggedIn ? "내 프로필" : "회원가입"}</GnbButton>
      </InputContainer>
    </StyleContainer>
  );
}
