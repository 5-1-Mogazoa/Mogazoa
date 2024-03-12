import { useRouter } from "next/router";
import Modal from "../../common/modal/Modal";
import { PAGE_ROUTES } from "@/src/routes";

interface ModalLoginProps {
  onClose: () => void;
}

function ModalLogin({ onClose }: ModalLoginProps) {
  const router = useRouter();
  const title = "회원만 이용가능한 서비스입니다.";
  const subTitle = "로그인하러 갈까요?";

  const loginCallback = () => {
    router.push(PAGE_ROUTES.SIGNIN);
  };

  return <Modal title={title} subTitle={subTitle} modalType="login" callback={loginCallback} onClose={onClose}></Modal>;
}

export default ModalLogin;
