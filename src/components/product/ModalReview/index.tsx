import { CategoryType } from "@/src/apis/product/schema";
import Modal from "../../common/modal/Modal";
import * as S from "./styled";
import { useState } from "react";
import { FormRatingStars } from "../RatingStar";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import ERROR_MESSAGE from "../../../constant/ERROR_MESSAGE";
import FormTextareaInput from "../../common/input/FormTextareaInput";
import FormMultiImageInput from "../../common/input/FormMultiImageInput";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postReview } from "@/src/apis/review";
import { QUERY_KEY } from "@/src/routes";
import { PostReviewRequestType } from "@/src/apis/review/schema";
import { postImage } from "@/src/apis/image";

interface ModalReviewProps {
  productId: number;
  name: string;
  category?: CategoryType | undefined;
  // callback?: (data: FieldValues) => Promise<void>;
  onClose: () => void;
}

function ModalReview({ productId, name, category, onClose }: ModalReviewProps) {
  const [reviewImages, SetReviewImages] = useState<string[]>([]);

  const methods = useForm();
  const queryClient = useQueryClient();

  // 리뷰 생성 요청
  const postReviewMutation = useMutation({
    mutationFn: (newReview) => postReview(newReview),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.REVIEWS] });
    },
  });

  // 리뷰 생성 버튼 클릭시 발생 이벤트
  const postReviewCallback = async (data: FieldValues) => {
    const formData: PostReviewRequestType = {
      productId: productId,
      images: [],
      content: data.content,
      rating: data.rating,
    };

    // data 이미지 파일이 있을 경우 파일들을 업로드하고 새로운 URL 받아서 formData.images에 추가
    const getImageUrlPromises = [];

    if (data.images !== undefined) {
      for (const file of data.images) {
        let newImageUrl = await postImage(file);
        getImageUrlPromises.push(newImageUrl);
      }

      try {
        const imageUrlResponse = await Promise.all(getImageUrlPromises);
        formData.images = imageUrlResponse.map((response) => response.url);
      } catch (erroe) {
        console.log("이미지 업로드를 실패했어요.");
      }
    }
    postReviewMutation.mutate(formData, {
      onSuccess: () => {
        // console.log("리뷰가 성공적으로 업로드 되었습니다!");
      },
    });
  };

  return (
    <FormProvider {...methods}>
      <Modal
        title={name}
        modalType="review"
        category={category}
        onClose={onClose}
        callback={postReviewCallback}
        isFormData>
        <S.Container>
          <S.Rating>
            별점
            <FormRatingStars type="modal" defaultValue={5} />
          </S.Rating>
          <FormTextareaInput
            name="content"
            rules={{
              required: {
                value: true,
                message: ERROR_MESSAGE.REQUIRED_REVIEW,
              },
              maxLength: {
                value: 500,
                message: ERROR_MESSAGE.REVIEW_MAX_LENGTH,
              },
            }}
            placeholder="리뷰를 작성해 주세요."
          />

          <FormMultiImageInput name="images" defaultValue={reviewImages} />
        </S.Container>
      </Modal>
    </FormProvider>
  );
}

export default ModalReview;
