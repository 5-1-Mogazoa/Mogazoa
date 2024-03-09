import { CategoryType } from "@/src/apis/product/schema";
import Modal from "../../common/modal/Modal";
import * as S from "./styled";
import { useState } from "react";
import { FormRatingStars } from "../RatingStar";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import ERROR_MESSAGE from "../../../constant/ERROR_MESSAGE";
import FormTextInput from "../../common/input/FormTextInput";
import FormImageInput from "../../common/input/FormImageInput";

interface ModalReviewProps {
  productId: number;
  name: string;
  category?: CategoryType | undefined;
  callback?: (data: FieldValues) => Promise<void>;
  onClose: () => void;
}

function ModalReview({ name, category, onClose, callback }: ModalReviewProps) {
  const [score, setScore] = useState(5);
  const [reviewImages, SetReviewImages] = useState<string[]>([]);

  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Modal title={name} modalType="review" category={category} onClose={onClose} callback={callback} isFormData>
        <S.Container>
          <S.Rating>
            별점
            <FormRatingStars type="modal" score={score} setScore={setScore} defaultValue={score} />
          </S.Rating>
          <FormTextInput
            name="content"
            rules={{
              required: {
                value: true,
                message: ERROR_MESSAGE.REQUIRED_REVIEW,
              },
              maxLength: {
                value: 500,
                message: ERROR_MESSAGE.NICKNAME_MAX_LENGTH,
              },
            }}
            placeholder="리뷰를 작성해 주세요."
          />
          <FormImageInput name="images" defaultValue={reviewImages} />
        </S.Container>
      </Modal>
    </FormProvider>
  );
}

export default ModalReview;
