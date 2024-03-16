import Modal from "../../common/modal/Modal";

interface ModalDeleteReviewProps {
  onClose: () => void;
  callback: () => void;
}

function ModalDeleteReview({ onClose, callback }: ModalDeleteReviewProps) {
  const title = "리뷰를 삭제할까요?";

  return <Modal title={title} modalType="delete" callback={callback} onClose={onClose} />;
}

export default ModalDeleteReview;
