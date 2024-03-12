import { useRouter } from "next/router";
import { PAGE_ROUTES } from "@/src/routes";
import { StyledButton, StyledSidebarButton } from "./Styled/StyledButton";
import { Children } from "react";

type buttonProps = {
  children: React.ReactNode;
};

function SidebarButton({ children }: buttonProps) {
  const router = useRouter();
  const handleClick = () => {
    switch (children) {
      case "로그인":
        router.push(PAGE_ROUTES.SIGNIN);
        break;
      case "회원가입":
        router.push(PAGE_ROUTES.SIGNUP);
        break;
      case "비교하기":
        router.push(PAGE_ROUTES.COMPARE);
        break;
      case "내 프로필":
        router.push(PAGE_ROUTES.MY_PAGE);
        break;
      default:
        console.log("error!");
        break;
    }
  };
  return <StyledSidebarButton onClick={handleClick}>{children}</StyledSidebarButton>;
}
export { SidebarButton as SidebarButton };

function GnbButton({ children }: buttonProps) {
  const router = useRouter();
  const handleClick = () => {
    switch (children) {
      case "로그인":
        router.push(PAGE_ROUTES.SIGNIN);
        break;
      case "회원가입":
        router.push(PAGE_ROUTES.SIGNUP);
        break;
      case "비교하기":
        router.push(PAGE_ROUTES.COMPARE);
        break;
      case "내 프로필":
        router.push(PAGE_ROUTES.MY_PAGE);
        break;
      default:
        console.log("error!");
        break;
    }
  };
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
}
export { GnbButton as GnbButton };
