import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { GnbButton, SidebarButton } from "./GnbButton";
import router, { useRouter } from "next/router";
import styled from "styled-components";
import resetToken from "@/pages/api/resetToken";

type SidebarProps = {
  isLoggedIn?: boolean;
  $isSidebarOpen: boolean;
};

const StyledSidebar = styled.div<SidebarProps>`
  position: fixed;
  width: 0;
  transition: 0.4s;
  top: 0;
  left: 0;
  z-index: 10;

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    display: none;
  }
  ${({ $isSidebarOpen }) =>
    $isSidebarOpen &&
    `
    width: 15rem;
    height: 100%;
    transition: 0.4s; 
    background: rgba(0, 0, 0, 1);
    `};
`;

const ButtonContainer = styled.ul<SidebarProps>`
  margin-top: 100px;
  height: 0;
  width: 15.9rem;
  transition: 0.2s;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 40px;

  ${({ $isSidebarOpen }) =>
    $isSidebarOpen &&
    `
  height: 100vh;

  `};
`;

function SidebarContent({ isLoggedIn, $isSidebarOpen }: SidebarProps) {
  return (
    <>
      <StyledSidebar $isSidebarOpen={$isSidebarOpen}>
        <ButtonContainer $isSidebarOpen={$isSidebarOpen}>
          <SidebarButton>{isLoggedIn ? "비교하기" : "로그인"}</SidebarButton>
          <SidebarButton>{isLoggedIn ? "내 프로필" : "회원가입"}</SidebarButton>
        </ButtonContainer>
      </StyledSidebar>
    </>
  );
}
// function SidebarLogoutButton({ $isSidebarOpen }: SidebarProps) {
//   const handleLogOutButton = () => {
//     //TODO: localStorage 설정 차후 제거
//     localStorage.clear();
//     resetToken();
//     router.push("/");
//   };

export function Sidebar({ isLoggedIn, $isSidebarOpen }: SidebarProps) {
  return (
    <>
      <SidebarContent $isSidebarOpen={$isSidebarOpen} isLoggedIn={isLoggedIn} />
    </>
  );
}

export default Sidebar;
