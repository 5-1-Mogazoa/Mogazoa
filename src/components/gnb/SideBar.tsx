import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { GnbButton, SidebarButton } from "./GnbButton";
import { useRouter } from "next/router";
import styled from "styled-components";

type SidebarProps = {
  isLoggedIn?: boolean;
  $isSidebarOpen: boolean;
};

const StyledSidebar = styled.div<SidebarProps>`
  width: 0;
  height: 100%;
  transition: 0.4s;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  background: rgba(0, 0, 0, 0.8);

  ${({ $isSidebarOpen }) =>
    $isSidebarOpen &&
    `
    width: 15rem;
    transition: 0.4s; 
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
  height: 300px;

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

export function Sidebar({ isLoggedIn, $isSidebarOpen }: SidebarProps) {
  return (
    <>
      <SidebarContent $isSidebarOpen={$isSidebarOpen} isLoggedIn={isLoggedIn} />
    </>
  );
}

export default Sidebar;
