import { useEffect } from "react";
import * as S from "./styled";

interface ToastProps {
  type?: "success" | "error" | string;
  message: string | undefined;
  setToastIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  mobileStyle?: string;
  tabletStyle?: string;
  desktopStyle?: string;
}

function Toast({ type = "success", message, mobileStyle, tabletStyle, desktopStyle, setToastIsOpen }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (setToastIsOpen) {
        setToastIsOpen(false);
      }
    }, 3000);
    return () => {
      clearTimeout(timer);
    };
  }, [setToastIsOpen]);

  return (
    <S.Container $type={type} $mobileStyle={mobileStyle} $tabletStyle={tabletStyle} $desktopStyle={desktopStyle}>
      {message}
    </S.Container>
  );
}

export default Toast;
