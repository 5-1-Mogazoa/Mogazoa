import { useRouter } from "next/router";
import { StyledButtonsContainer, StyledLogOutButton, StyledProfileEditButton } from "./Styled/StyledMyPageButton";
import { resetToken } from "@/src/apis/auth";
import ProfileEditModal from "./ProfileEditModal";
import { useState } from "react";

type MyPageProfileButtons = {
  handleIsDataUpdated: () => void;
};

export default function MyPageProfileButtons({ handleIsDataUpdated }: MyPageProfileButtons) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleProfileEditButton = () => {
    setIsOpen(true);
  };

  const handleLogOutButton = async () => {
    await resetToken();
    router.push("/");
  };

  return (
    <StyledButtonsContainer>
      <StyledProfileEditButton onClick={handleProfileEditButton}>프로필 편집</StyledProfileEditButton>
      {isOpen && <ProfileEditModal handleIsDataUpdated={handleIsDataUpdated} setIsOpen={setIsOpen} />}
      <StyledLogOutButton onClick={handleLogOutButton}>로그아웃</StyledLogOutButton>
    </StyledButtonsContainer>
  );
}
