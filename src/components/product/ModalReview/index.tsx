import { CategoryType } from "@/src/apis/product/schema";
import Modal from "../../common/modal/Modal";
import * as S from "./styled";
import { FormRatingStars } from "../RatingStar";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import ERROR_MESSAGE from "../../../constant/ERROR_MESSAGE";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postReview } from "@/src/apis/review";
import { QUERY_KEY } from "@/src/routes";
import { PostReviewRequestType } from "@/src/apis/review/schema";
import { postImage } from "@/src/apis/image";
import { OrderType } from "../ReviewList";
import { ImageUrlType } from "../ModalEditReview";
import FormTextarea from "../../common/input/FormTextarea";
import FormImageMulti from "../../common/input/FormImageMulti";

interface ModalReviewProps {
  productId: number;
  name: string;
  category?: CategoryType | undefined;
  order: OrderType;
  onClose: () => void;
}

function ModalReview({ productId, name, category, order, onClose }: ModalReviewProps) {
  const methods = useForm({ mode: "onBlur" });
  const queryClient = useQueryClient();

  // 리뷰 생성 요청
  const postReviewMutation = useMutation<void, unknown, PostReviewRequestType>({
    mutationFn: async (newReview) => {
      await postReview(newReview);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.REVIEWS, productId, order.id] });
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
    const getImageUrlPromises: Promise<ImageUrlType>[] = [];

    if (data.images !== undefined) {
      for (const file of data.images) {
        const newImageUrl: Promise<ImageUrlType> = postImage(file) as Promise<ImageUrlType>;
        getImageUrlPromises.push(newImageUrl);
      }

      try {
        const imageUrlResponse = await Promise.all(getImageUrlPromises);
        formData.images = imageUrlResponse.map((response) => response.url);
      } catch (erroe) {
        console.error("이미지 업로드를 실패했어요.");
      }
    }

    try {
      await postReviewMutation.mutateAsync(formData);
      return true;
    } catch {
      return false;
    }
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
            <FormRatingStars type="modal" defaultValue={1} />
          </S.Rating>
          <FormTextarea
            rules={{
              required: {
                value: true,
                message: ERROR_MESSAGE.REQUIRED_REVIEW,
              },
              minLength: {
                value: 10,
                message: ERROR_MESSAGE.REVIEW_MIN_LENGTH,
              },
              maxLength: {
                value: 300,
                message: ERROR_MESSAGE.REVIEW_MAX_LENGTH,
              },
            }}
            name="content"
            placeholder="리뷰는 최소 10자 이상 작성해 주세요."
            maxLength={300}
          />
          <FormImageMulti name="images" />
        </S.Container>
      </Modal>
    </FormProvider>
  );
}

export default ModalReview;
