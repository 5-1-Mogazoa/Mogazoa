import { getProductDetail } from "@/src/apis/product";
import ProductDetail from "@/src/components/product/ProductDetail";
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

  console.log(productDetail);

  return <>{productDetail && <ProductDetail productDetail={productDetail} />}</>;
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
