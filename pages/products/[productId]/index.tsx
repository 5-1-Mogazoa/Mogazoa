import { getProductDetail, getProductReviews } from "@/src/apis/product";
import ProductDetail from "@/src/components/product/ProductDetail";
import ProductLayout from "@/src/components/product/ProductLayout";
import StatisticsItem from "@/src/components/product/StatisticsItem";
import StatisticsList from "@/src/components/product/StatisticsList";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
  dehydrate,
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import ReviewList from "@/src/components/product/ReviewList";
import ModalReview from "@/src/components/product/ModalReview";
import React, { useState } from "react";
import { QUERY_KEY, REVIEWS_LIMIT } from "@/src/routes";
import { postReview } from "@/src/apis/review";
import { PostReviewRequestType } from "@/src/apis/review/schema";
import { useToggle } from "usehooks-ts";
import { FieldValues } from "react-hook-form";
import { postImage } from "@/src/apis/image";
import { postImageResponseType } from "@/src/apis/image/schema";
import { ProductDetailResponseType } from "@/src/apis/product/schema";

export type OrderOptionType = "recent" | "ratingDesc" | "ratingAsc" | "likeCount" | "reviewCount" | "rating";
export type OrderType = { id: OrderOptionType; name: string };

export default function Product() {
  const queryClient = useQueryClient();
  const router = useRouter();
  const productId = Number(router.query.productId);

  const [order, setOrder] = useState<OrderType>({ id: "recent", name: "최신순" });
  const [reviewModal, reviewToggle, setReviewMdodal] = useToggle();

  // SSR로 받은 데이터 쿼리로 가져오기
  const { data: productDetail } = useQuery({
    queryKey: ["productDetail", productId],
    queryFn: () => getProductDetail(productId),
  });

  const {
    data: reviewsData,
    isPending,
    isError,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEY.REVIEWS, productId, order],
    queryFn: ({ pageParam }) => getProductReviews(productId, order.id, pageParam, REVIEWS_LIMIT),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
      lastPage.hasMore ? lastPageParam + 1 : undefined,
  });

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
        let newImageUrl: postImageResponseType = await postImage(file);
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
        console.log("리뷰가 성공적으로 업로드 되었습니다!");
      },
    });
  };

  const reviewList: ReviewListType[] =
    reviewsData?.pages && reviewsData.pages.length > 0 ? reviewsData.pages[0].list : [];

  // 리뷰목록의 정렬기준 버튼클릭 이벤트
  const handleOrderButtonClick = (orderItem: OrderType) => {
    setOrder(orderItem);
  };

  if (!productDetail) {
    return null;
  }

  const {
    name,
    category,
    reviewCount,
    favoriteCount,
    rating: ratingCountData,
    writerId,
  } = productDetail as ProductDetailResponseType;
  const ratingCount = Number(ratingCountData.toFixed(1)); // 별정평균은 소수점 1자리 까지만
  const userId = Number(localStorage.getItem("userId"));

  const ratingAverage = 4; // TODO 별점 평균. 추후 수정 rating은 .toFixed(1)
  const favoriteAverage = 5; // TODO 찜 평균. 소수점 없게 만들기
  const reviewAverage = 9; // TODO 리뷰 평균. 소수점 없게 만들기

  return (
    <ProductLayout>
      <ProductDetail productDetail={productDetail} userId={userId} reviewToggle={reviewToggle} />
      <StatisticsList>
        <StatisticsItem statType="rating" count={ratingCount} average={ratingAverage} />
        <StatisticsItem statType="favoriteCount" count={favoriteCount} average={favoriteAverage} />
        <StatisticsItem statType="reviewCount" count={reviewCount} average={reviewAverage} />
      </StatisticsList>
      <ReviewList reviewList={reviewList} order={order} handleOrderButtonClick={handleOrderButtonClick} />
      {reviewModal && (
        <ModalReview
          productId={productId}
          name={name}
          category={category.name}
          onClose={() => setReviewMdodal(false)}
          callback={postReviewCallback}
        />
      )}
    </ProductLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient();

  const productId = Number(context.query["productId"]);

  // 상품 상세 조회 데이터 요청
  await queryClient.prefetchQuery({
    queryKey: [QUERY_KEY.PRODUCT_DETAIL, productId],
    queryFn: () => getProductDetail(productId),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
