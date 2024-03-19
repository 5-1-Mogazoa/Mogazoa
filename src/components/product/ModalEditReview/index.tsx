import { CategoryType, ReviewListType } from "@/src/apis/product/schema";
import Modal from "../../common/modal/Modal";
import * as S from "../ModalReview/styled";
import { FormRatingStars } from "../RatingStar";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import ERROR_MESSAGE from "../../../constant/ERROR_MESSAGE";
import FormTextareaInput from "../../common/input/FormTextareaInput";
import FormMultiImageInput from "../../common/input/FormMultiImageInput";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { patchReview } from "@/src/apis/review";
import { QUERY_KEY } from "@/src/routes";
import { PatchReveiwRequestType } from "@/src/apis/review/schema";
import { postImage } from "@/src/apis/image";
import { OrderType } from "../ReviewList";

interface ModalEditReviewProps {
  name: string;
  category?: CategoryType | undefined;
  order: OrderType;
  defaultValue?: ReviewListType;
  onClose: () => void;
}

function ModalEditReview({ name, category, order, defaultValue, onClose }: ModalEditReviewProps) {
  const { id, reviewImages: defaultImages, content: defaultContent, rating: defaultRating } = defaultValue || {};

  const methods = useForm();
  const queryClient = useQueryClient();

  // 리뷰 수정 요청
  const patchReviewMutation = useMutation({
    mutationFn: (newReview) => patchReview(id, newReview),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.REVIEWS, productId, order.id] });
    },
  });

  // 리뷰 수정 버튼 클릭시 발생 이벤트
  const patchReviewCallback = async (data: FieldValues) => {
    const formData: PatchReveiwRequestType = {
      images: [],
      content: data.content,
      rating: data.rating,
    };

    // data 이미지 파일이 있을 경우 기존 이미지{id: number}는 바로 formData.images에 push하고, 새로운 이미지 File 파일들은 업로드해 새로운 URL 받아서 formData.images에 추가
    const getImageUrlPromises = [];

    if (data.images !== undefined) {
      for (const file of data.images) {
        if (file instanceof File) {
          let newImageUrl = await postImage(file);
          getImageUrlPromises.push(newImageUrl);
        } else {
          formData.images.push(file);
        }
      }

      try {
        const imageUrlResponse = await Promise.all(getImageUrlPromises);
        const allImageUrl = imageUrlResponse.map((response) => response.url);
        allImageUrl.forEach((url) => {
          formData.images.push({ source: url });
        });
      } catch (erroe) {
        console.error("이미지 업로드를 실패했어요.");
      }
    }

    patchReviewMutation.mutate(formData, {
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
        callback={patchReviewCallback}
        isFormData>
        <S.Container>
          <S.Rating>
            별점
            <FormRatingStars type="modal" defaultValue={defaultRating ? defaultRating : 1} />
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
            defaultValue={defaultContent}
            placeholder="리뷰를 작성해 주세요."
          />

          <FormMultiImageInput name="images" defaultValue={defaultImages} />
        </S.Container>
      </Modal>
    </FormProvider>
  );
}

export default ModalEditReview;
