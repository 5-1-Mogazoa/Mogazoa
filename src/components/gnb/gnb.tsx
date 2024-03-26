import { StyleContainer, StyledLogoContainer } from "./Styled/StyledContainer";
import { MenuButton } from "./Styled/StyledMenuLogo";
import { InputContainer } from "./Styled/StyledSearchContainer";

import { GnbButton } from "./GnbButton";
import Searchbar from "./Searchbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Sidebar from "./SideBar";
import { Logo } from "./Logo";
import { getToken } from "@/src/apis/auth";

export default function Gnb() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const currentPath = router.pathname;

  const handleClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    (async () => {
      const token = await getToken();
      setIsLoggedIn(token ? true : false);
    })();
  }, [currentPath]);

  return (
    <StyleContainer>
      <MenuButton onClick={handleClick} />
      <Sidebar $isSidebarOpen={isSidebarOpen} isLoggedIn={isLoggedIn} />
      <Link href="/">
        <StyledLogoContainer>
          <Logo $isOpen={isOpen} />
        </StyledLogoContainer>
      </Link>
      <InputContainer>
        <Searchbar setIsOpen={setIsOpen} isOpen={isOpen} />
        <GnbButton>{isLoggedIn ? "비교하기" : "로그인"}</GnbButton>
        <GnbButton>{isLoggedIn ? "내 프로필" : "회원가입"}</GnbButton>
      </InputContainer>
    </StyleContainer>
  );
}
