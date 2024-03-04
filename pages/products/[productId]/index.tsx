import { getProductDetail } from "@/src/apis/product";
import ProductDetail from "@/src/components/product/ProductDetail";
import ProductLayout from "@/src/components/product/ProductLayout";
import StatisticsItem from "@/src/components/product/StatisticsItem";
import StatisticsList from "@/src/components/product/StatisticsList";
import { HydrationBoundary, QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";

export function Product() {
  const router = useRouter();
  const productId = Number(router.query.productId);

  const { data: productDetail } = useQuery({
    queryKey: ["productDetail", productId],
    queryFn: () => getProductDetail(productId),
  });

  if (!productDetail) {
    return null;
  }

  const createdByMe = true; // 추후 수정
  const ratingCount = 4.3; // 별점 점수. 추후 수정
  const ratingAverage = 4; // 별점 평균. 추후 수정 rating은 .toFixed(1)
  const favoriteCount = 12; // 찜 개수. 추후 수정
  const favoriteAverage = 5; // 찜 평균. 소수점 없게 만들기
  const reviewCount = 26; // 리뷰 개수. 추후 수정
  const reviewAverage = 9; // 리뷰 평균. 소수점 없게 만들기

  return (
    <ProductLayout>
      <ProductDetail productDetail={productDetail} createdByMe={createdByMe} />
      <StatisticsList>
        <StatisticsItem statType="rating" count={ratingCount} average={ratingAverage} />
        <StatisticsItem statType="favoriteCount" count={favoriteCount} average={favoriteAverage} />
        <StatisticsItem statType="reviewCount" count={reviewCount} average={reviewAverage} />
      </StatisticsList>
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
