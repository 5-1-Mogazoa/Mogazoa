import { CategoryType } from "@/src/apis/product/schema";
import Modal from "../../common/modal/Modal";
import * as S from "./styled";
import { useEffect, useState } from "react";
import RatingStars from "../RatingStar";
import { StyledTextBox } from "../../common/input/Styled/StyledTextBox";
import { FormProvider, useForm } from "react-hook-form";
import ERROR_MESSAGE from "../../../constant/ERROR_MESSAGE";
import { StyledImageBox } from "../../common/input/Styled/StyledImageInput";
import ImageInput from "../ImageInput";

interface ModalReviewProps {
  productId: number;
  name: string;
  category?: CategoryType | undefined;
  callback?: () => void;
  onClose: () => void;
}

function ModalReview({ productId, name, category, onClose, callback }: ModalReviewProps) {
  const [score, setScore] = useState(5);
  const [reviewImages, SetReviewImages] = useState([]);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  return (
    <Modal title={name} modalType="review" category={category} onClose={onClose} callback={callback}>
      <S.Container>
        <S.Rating>
          별점
          <RatingStars type="modal" score={score} setScore={setScore} />
        </S.Rating>
        <StyledTextBox
          id="content"
          placeholder="리뷰를 작성해 주세요"
          {...register("nickname", {
            required: {
              value: true,
              message: ERROR_MESSAGE.REQUIRED_REVIEW,
            },
            maxLength: {
              value: 500,
              message: ERROR_MESSAGE.NICKNAME_MAX_LENGTH,
            },
          })}
          // $isError={errors.content ? true : false}
        />
        <ImageInput register={register} />
      </S.Container>
    </Modal>
  );
}

export default ModalReview;
