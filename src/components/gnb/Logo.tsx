import styled from "styled-components";
import Image from "next/image";

type LogoProps = {
  $isOpen: boolean;
};

const StyledLogo = styled(Image)<LogoProps>`
  position: relative;
  display: ${({ $isOpen }) => ($isOpen ? "none" : "block")};
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    display: block;
    width: 13.8rem;
    height: 2.4rem;
  }
  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 16.6rem;
    height: 2.8rem;
  }
`;
export function Logo({ $isOpen }: LogoProps) {
  const logo = "/icons/LogoLarge.svg";

  return (
    <StyledLogo $isOpen={$isOpen} src={logo} width={112} height={18} alt="mogazoa 로고" priority={true}></StyledLogo>
  );
}
