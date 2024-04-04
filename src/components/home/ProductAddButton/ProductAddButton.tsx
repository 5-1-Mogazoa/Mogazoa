// import StyledAddButton from "@/src/components/common/button/Styled/StyledButton";
import styled from "styled-components";
import ModalProductAdd from "../ModalProductAdd/ModalProductAdd";
import { useToggle } from "usehooks-ts";

export default function ProductAddButton() {
  const [isModal, isModalToggle, setIsModal] = useToggle();
  const handleProductAddModal = () => {
    setIsModal(!isModal);
  };
  return (
    <>
      <StyledAddButton onClick={handleProductAddModal}>상품추가 버튼</StyledAddButton>
      {isModal && <ModalProductAdd onClose={() => setIsModal(false)} />}
    </>
  );
}

const StyledAddButton = styled.button`
  font-size: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background: url("/icons/addButton.svg") no-repeat center / cover;
`;
