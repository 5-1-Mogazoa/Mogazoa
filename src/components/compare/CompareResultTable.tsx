import * as S from "./Styled/StyledTable";
import { useEffect } from "react";

type CompareResultTableProps = {
  productAData: any;
  productBData: any;
  handleResultCount: (value: number) => void;
  handleFinalWinner: (value: string) => void;
};

export default function CompareResultTable({
  productAData,
  productBData,
  handleResultCount,
  handleFinalWinner,
}: CompareResultTableProps) {
  const resultRatingA = productAData?.rating?.toFixed(1);
  const resultRatingB = productBData?.rating?.toFixed(1);
  const resultReviewA = productAData?.reviewCount;
  const resultReviewB = productBData?.reviewCount;
  const resultFavoriteA = productAData?.favoriteCount;
  const resultFavoriteB = productBData?.favoriteCount;

  const resultRating = resultRatingA === resultRatingB ? 0 : resultRatingA > resultRatingB ? 1 : -1;
  const resultReview =
    productAData?.reviewCount === productBData?.reviewCount
      ? 0
      : productAData?.reviewCount > productBData?.reviewCount
        ? 1
        : -1;
  const resultFavorite =
    productAData?.favoriteCount === productBData?.favoriteCount
      ? 0
      : productAData?.favoriteCount > productBData?.favoriteCount
        ? 1
        : -1;

  const resultCountArr = ["rating", "reviewCount", "favoriteCount"].map<number>((compareKey) => {
    //number 리턴
    const productAValue = Math.floor(productAData[compareKey] * 10) / 10;
    const productBValue = Math.floor(productBData[compareKey] * 10) / 10;

    if (productAValue > productBValue) {
      return 1;
    } else if (productAValue < productBValue) {
      return -1;
    } else {
      return 0;
    }
  });

  const resultCount = resultCountArr.reduce((acc, cur) => acc + cur, 0);
  const winnerCount = resultCountArr.filter((num) => {
    if (resultCount > 0) return num === 1;
    else if (resultCount < 0) return num === -1;
  }).length;

  const winner = resultCount > 0 ? productAData.name : productBData.name;

  useEffect(() => {
    handleResultCount(winnerCount);
    handleFinalWinner(!resultCount ? "무승부" : winner);
  }, []);

  return (
    <tbody>
      <tr>
        <td>별점</td>
        <S.TableWhite>{resultRatingA}</S.TableWhite>
        <S.TableWhite>{resultRatingB} </S.TableWhite>
        {resultRating === 1 ? (
          <S.Win1>상품 1 승리</S.Win1>
        ) : resultRating === -1 ? (
          <S.Win2>상품 2 승리</S.Win2>
        ) : (
          <S.TableWhite>무승부 </S.TableWhite>
        )}
      </tr>
      <tr>
        <td>리뷰개수</td>
        <S.TableWhite>{resultReviewA}</S.TableWhite>
        <S.TableWhite>{resultReviewB}</S.TableWhite>
        {resultReview === 1 ? (
          <S.Win1>상품 1 승리</S.Win1>
        ) : resultReview === -1 ? (
          <S.Win2>상품 2 승리</S.Win2>
        ) : (
          <S.TableWhite>무승부 </S.TableWhite>
        )}
      </tr>
      <tr>
        <td>찜개수</td>
        <S.TableWhite>{resultFavoriteA}</S.TableWhite>
        <S.TableWhite>{resultFavoriteB}</S.TableWhite>
        {resultFavorite === 1 ? (
          <S.Win1>상품 1 승리</S.Win1>
        ) : resultFavorite === -1 ? (
          <S.Win2>상품 2 승리</S.Win2>
        ) : (
          <S.TableWhite>무승부</S.TableWhite>
        )}
      </tr>
    </tbody>
  );
}
