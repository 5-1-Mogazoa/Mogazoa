import { useRouter } from "next/router";
import { PAGE_ROUTES } from "@/src/routes";
import { StyledButton } from "./Styled/StyledButton";

type buttonProps = {
  children: React.ReactNode;
};
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
        // 다른 경우에 대한 처리
        break;
    }
  };
  return <StyledButton onClick={handleClick}>{children}</StyledButton>;
}
export default GnbButton;
