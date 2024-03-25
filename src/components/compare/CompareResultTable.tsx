import { useState } from "react";
import * as S from "./Styled/StyledTable";

type CompareResultTableProps = {
  productAData: any;
  productBData: any;

  // handleSetA: () => void;
  // handleSetB: () => void;
  setA: (value: any) => void;
  setB: (value: any) => void;
};

export default function CompareResultTable({ productAData, productBData, setA, setB }: CompareResultTableProps) {
  const resultRatingA = productAData?.rating?.toFixed(1);
  const resultRatingB = productBData?.rating?.toFixed(1);
  const resultReviewA = productAData?.reviewCount;
  const resultReviewB = productBData?.reviewCount;
  const resultFavoriteA = productAData?.favoriteCount;
  const resultFavoriteB = productBData?.favoriteCount;

  const Rating = () => {
    if (resultRatingA > resultRatingB) {
      setA((prev) => prev + 1);
      return <S.Win1>상품 1 승리</S.Win1>;
    } else if (resultRatingA < resultRatingB) {
      setB((prev) => prev + 1);
      return <S.Win2>상품 2 승리</S.Win2>;
    } else {
      // the below code fragment can be found in:
      return <S.TableWhite> 무승부 </S.TableWhite>;
    }
  };

  const Review = () => {
    if (resultReviewA > resultReviewB) {
      setA((prev) => prev + 1);
      return <S.Win1>상품 1 승리</S.Win1>;
    } else if (resultReviewA < resultReviewB) {
      setB((prev) => prev + 1);
      return <S.Win2>상품 2 승리</S.Win2>;
    } else {
      return <S.TableWhite> 무승부 </S.TableWhite>;
    }
  };
  const Favorite = () => {
    if (resultFavoriteA > resultFavoriteB) {
      setA((prev) => prev + 1);
      return <S.Win1>상품 1 승리</S.Win1>;
    } else if (resultFavoriteA < resultFavoriteB) {
      setB((prev) => prev + 1);
      return <S.Win2>상품 2 승리</S.Win2>;
    } else {
      return <S.TableWhite> 무승부 </S.TableWhite>;
    }
  };

  return (
    <tbody>
      <tr>
        <td>별점</td>
        <S.TableWhite>{resultRatingA}</S.TableWhite>
        <S.TableWhite>{resultRatingB} </S.TableWhite>
        <Rating />
      </tr>
      <tr>
        <td>리뷰개수</td>
        <S.TableWhite>{resultReviewA}</S.TableWhite>
        <S.TableWhite>{resultReviewB}</S.TableWhite>
        <Review />
      </tr>
      <tr>
        <td>찜개수</td>
        <S.TableWhite>{resultFavoriteA}</S.TableWhite>
        <S.TableWhite>{resultFavoriteB}</S.TableWhite>
        <Favorite />
      </tr>
    </tbody>
  );
}
