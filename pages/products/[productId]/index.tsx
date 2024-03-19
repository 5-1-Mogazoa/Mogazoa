import { getProductDetail } from "@/src/apis/product";
import ProductDetail from "@/src/components/product/ProductDetail";
import ProductLayout from "@/src/components/product/ProductLayout";
import StatisticsItem from "@/src/components/product/StatisticsItem";
import StatisticsList from "@/src/components/product/StatisticsList";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";
import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import ReviewList, { OrderType } from "@/src/components/product/ReviewList";
import ModalReview from "@/src/components/product/ModalReview";
import React, { useEffect, useState } from "react";
import { QUERY_KEY } from "@/src/routes";
import { useToggle } from "usehooks-ts";
import { ProductDetailResponseType } from "@/src/apis/product/schema";
import ModalLogin from "@/src/components/product/MadalLogin";
import ModalEdit from "@/src/components/product/ModalEdit";

export default function Product() {
  const router = useRouter();
  const productId = Number(router.query.productId);

  const [order, setOrder] = useState<OrderType>({ id: "recent", name: "최신순" });
  const [editModal, editToggle, setEditMdodal] = useToggle();
  const [reviewModal, reviewToggle, setReviewMdodal] = useToggle();
  const [loginModal, loginToggle, setLoginMdodal] = useToggle();
  const [userId, setUserId] = useState(0);

  // SSR로 받은 상품 상세 정보
  const { data: productDetail } = useQuery({
    queryKey: [QUERY_KEY.PRODUCT_DETAIL, productId],
    queryFn: () => getProductDetail(productId),
  });

  const {
    name,
    category,
    reviewCount,
    favoriteCount,
    rating: ratingCountData,
    categoryMetric,
    writerId,
  } = productDetail as ProductDetailResponseType;
  const ratingCount = Number(ratingCountData.toFixed(1)); // 별정평균은 소수점 1자리 까지만
  const ratingAverage = Number(categoryMetric.rating.toFixed(1));
  const favoriteAverage = Number(categoryMetric.favoriteCount.toFixed(0));
  const reviewAverage = Number(categoryMetric.reviewCount.toFixed(0));

  // TODO 안됨
  useEffect(() => {
    const userIdData = Number(localStorage.getItem("userId"));
    setUserId(userIdData);
  }, []);

  return (
    <ProductLayout>
      <ProductDetail
        productDetail={productDetail}
        userId={userId}
        reviewToggle={reviewToggle}
        loginToggle={loginToggle}
        editToggle={editToggle}
      />
      <StatisticsList>
        <StatisticsItem statType="rating" count={ratingCount} average={ratingAverage} />
        <StatisticsItem statType="favoriteCount" count={favoriteCount} average={favoriteAverage} />
        <StatisticsItem statType="reviewCount" count={reviewCount} average={reviewAverage} />
      </StatisticsList>
      <ReviewList productId={productId} order={order} setOrder={setOrder} loginToggle={loginToggle} />
      {reviewModal && (
        <ModalReview
          type="post"
          productId={productId}
          name={name}
          category={category.name}
          order={order}
          onClose={() => setReviewMdodal(false)}
        />
      )}
      {loginModal && <ModalLogin onClose={() => setLoginMdodal(false)} />}
      {editModal && <ModalEdit userId={userId} productId={productId} onClose={() => setEditMdodal(false)} />}
    </ProductLayout>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const queryClient = new QueryClient();

  const productId = Number(context.query["productId"]);

  // 상품 상세 조회
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
