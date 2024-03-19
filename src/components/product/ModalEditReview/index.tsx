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
import { useRouter } from "next/router";

export interface ImageUrlType {
  url: string;
}

interface ModalEditReviewProps {
  name: string;
  category?: CategoryType | undefined;
  order: OrderType;
  defaultValue?: ReviewListType;
  onClose: () => void;
}

function ModalEditReview({ name, category, order, defaultValue, onClose }: ModalEditReviewProps) {
  const { id, reviewImages: defaultImages, content: defaultContent, rating: defaultRating } = defaultValue || {};

  const router = useRouter();
  const productId = Number(router.query.productId);

  const methods = useForm<FieldValues>();
  const queryClient = useQueryClient();

  // 리뷰 수정 요청
  const patchReviewMutation = useMutation<void, unknown, PatchReveiwRequestType>({
    mutationFn: async (newReview) => {
      await patchReview(id!, newReview);
    },
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

    const getImageUrlPromises: Promise<ImageUrlType>[] = [];

    if (data.images !== undefined) {
      for (const file of data.images) {
        // File(새로 추가된 이미지)은 업로드해 새로운 URL 받아서 getImageUrlPromises에 모으기
        if (file instanceof File) {
          let newImageUrl = await postImage(file);
          getImageUrlPromises.push(newImageUrl);
        } else {
          // {id: number} 기존 이미지는 formData.images에 바로 추가하기
          formData.images.push(file);
        }
      }

      // getImageUrlPromises 모아둔 image url을 formData.source에 넣기
      try {
        const imageUrlResponse = await Promise.all(getImageUrlPromises);
        const allImageUrl = imageUrlResponse.map((response) => response.url);
        allImageUrl.forEach((url) => {
          formData.images.push({ source: url });
        });
      } catch (error) {
        console.error("이미지 업로드를 실패했어요.", error);
      }
    }

    patchReviewMutation.mutate(formData);
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
