import * as S from "./Styled/StyledTable";

type CompareResultTableProps = {
  productAData: any;
  productBData: any;
};

export default function CompareResultTable({ productAData, productBData }: CompareResultTableProps) {
  const resultRatingA = productAData?.rating?.toFixed(1);
  const resultRatingB = productBData?.rating?.toFixed(1);
  const resultReviewA = productAData?.reviewCount;
  const resultReviewB = productBData?.reviewCount;
  const resultFavoriteA = productAData?.favoriteCount;
  const resultFavoriteB = productBData?.favoriteCount;

  const resultRating = Number(productAData?.rating > productBData?.rating);
  const resultReview = Number(productAData?.reviewCount > productBData?.reviewCount);
  const resultFavorite = Number(productAData?.favoriteCount > productBData?.favoriteCount);

  const resultCount = ["rating", "reviewCount", "favoriteCount"]
    .map((compareKey) => {
      return Number(productAData[compareKey] > productBData[compareKey]);
    })
    .reduce((acc, cur) => acc + cur, 0);
  console.log(resultCount);
  return (
    <tbody>
      <tr>
        <td>별점</td>
        <S.TableWhite>{resultRatingA}</S.TableWhite>
        <S.TableWhite>{resultRatingB} </S.TableWhite>
        {resultRating ? (
          <S.Win1>상품 1 승리</S.Win1>
        ) : resultRating === 0 ? (
          <S.Win2>상품 2 승리</S.Win2>
        ) : (
          <S.TableWhite>무승부 </S.TableWhite>
        )}
      </tr>
      <tr>
        <td>리뷰개수</td>
        <S.TableWhite>{resultReviewA}</S.TableWhite>
        <S.TableWhite>{resultReviewB}</S.TableWhite>
        {resultReview ? (
          <S.Win1>상품 1 승리</S.Win1>
        ) : resultReview === 0 ? (
          <S.Win2>상품 2 승리</S.Win2>
        ) : (
          <S.TableWhite>무승부 </S.TableWhite>
        )}
      </tr>
      <tr>
        <td>찜개수</td>
        <S.TableWhite>{resultFavoriteA}</S.TableWhite>
        <S.TableWhite>{resultFavoriteB}</S.TableWhite>
        {resultFavorite ? (
          <S.Win1>상품 1 승리</S.Win1>
        ) : resultFavorite === 0 ? (
          <S.Win2>상품 2 승리</S.Win2>
        ) : (
          <S.TableWhite>무승부</S.TableWhite>
        )}
      </tr>
    </tbody>
  );
}
