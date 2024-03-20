import { useEffect } from "react";
import * as S from "./styled";

interface ToastProps {
  type: "success" | "error" | string;
  message: string;
  setToastIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Toast({ type = "success", message, setToastIsOpen }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setToastIsOpen(false);
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [setToastIsOpen]);

  return <S.Container $type={type}>{message}</S.Container>;
}

export default Toast;
