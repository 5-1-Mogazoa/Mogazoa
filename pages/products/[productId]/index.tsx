import { getProductDetail } from "@/src/apis/product";
import ProductDetail from "@/src/components/product/ProductDetail";
import ProductLayout from "@/src/components/product/ProductLayout";
import StatisticsItem from "@/src/components/product/StatisticsItem";
import StatisticsList from "@/src/components/product/StatisticsList";
import { HydrationBoundary, QueryClient, dehydrate, useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import mockData from "../../../src/components/product/reviewFakeData.json";
import ReviewList from "@/src/components/product/ReviewList";
import ReviewItem from "@/src/components/product/ReviewItem";
import ModalReview from "@/src/components/product/ModalReview";
import { useState } from "react";

export function Product() {
  const [isModal, setIsModal] = useState(true);
  const router = useRouter();
  const productId = Number(router.query.productId);

  const { data: productDetail } = useQuery({
    queryKey: ["productDetail", productId],
    queryFn: () => getProductDetail(productId),
  });

  // 리뷰 목록 데이터 요청 => 작성중

  if (!productDetail) {
    return null;
  }

  const { name, category } = productDetail;

  const createdByMe = true; // TODO
  const ratingCount = 4.3; // TODO 별점 점수
  const ratingAverage = 4; // TODO 별점 평균. 추후 수정 rating은 .toFixed(1)
  const favoriteCount = 12; // TODO 찜 개수
  const favoriteAverage = 5; // TODO 찜 평균. 소수점 없게 만들기
  const reviewCount = 26; // TODO 리뷰 개수
  const reviewAverage = 9; // TODO 리뷰 평균. 소수점 없게 만들기

  return (
    <ProductLayout>
      <ReviewList>
        {mockData.list.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ReviewList>
      {/* <ProductDetail productDetail={productDetail} createdByMe={createdByMe} />
      <StatisticsList>
        <StatisticsItem statType="rating" count={ratingCount} average={ratingAverage} />
        <StatisticsItem statType="favoriteCount" count={favoriteCount} average={favoriteAverage} />
        <StatisticsItem statType="reviewCount" count={reviewCount} average={reviewAverage} />
      </StatisticsList> */}
      {isModal && (
        <ModalReview productId={productId} name={name} category={category.name} onClose={() => setIsModal(false)} />
      )}
    </ProductLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient();

  const productId = Number(context.query["productId"]);

  // 상품 상세 조회 데이터 요청
  await queryClient.prefetchQuery({
    queryKey: ["productDetail", productId],
    queryFn: () => getProductDetail(productId),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function ProductRoute({ dehydratedState }: any) {
  return (
    <HydrationBoundary state={dehydratedState}>
      <Product />
    </HydrationBoundary>
  );
}
