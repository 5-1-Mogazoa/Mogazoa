// type statisticalCalculatorProps = {
//   statType: "rating" | "reviewCount" | "favoriteCount";
//   count: number;
//   average: number;
// };

// export const statisticalCalculator = (
//   statType: "rating" | "reviewCount" | "favoriteCount",
//   count: number,
//   average: number,
// ) => {
//   const differenceInCount = average - count;
//   const absoluteDifference = Math.abs(differenceInCount);
//   const formattedAbsoluteDifference = Math.abs(differenceInCount).toFixed(1);

//   let result = {
//     resultCount: "",
//     resultText: "",
//   };

//   switch (statType) {
//     case "rating":
//       if (differenceInCount < 0) {
//         return `같은 카테고리의 제품들보다 ${formattedAbsoluteDifference}점 더 낮아요!`;
//       } else if (differenceInCount > 0) {
//         return `같은 카테고리의 제품들보다 ${formattedAbsoluteDifference}점 더 높아요!`;
//       } else {
//         return "같은 카테고리 제품들의 딱 평균 별점 점수예요!";
//       }
//       break;

//     case "reviewCount":
//       if (differenceInCount < 0) {
//         return `같은 카테고리의 제품들보다 ${absoluteDifference}개 더 적어요!`;
//       } else if (differenceInCount > 0) {
//         return `같은 카테고리의 제품들보다 ${absoluteDifference}개 더 많아요!`;
//       } else {
//         return "같은 카테고리 제품들의 딱 평균 찜 개수예요!";
//       }
//       break;

//     case "favoriteCount":
//       if (differenceInCount < 0) {
//         return `같은 카테고리의 제품들보다 ${absoluteDifference}개 더 적어요!`;
//       } else if (differenceInCount > 0) {
//         return `같은 카테고리의 제품들보다 ${absoluteDifference}개 더 많아요!`;
//       } else {
//         return "같은 카테고리 제품들의 딱 평균 리뷰 개수예요!";
//       }
//       break;
//   }
// };

import { Result } from "../components/product/StatisticsItem/styled";

type statisticalCalculatorProps = {
  statType: "rating" | "reviewCount" | "favoriteCount";
  count: number;
  average: number;
};

export const statisticalCalculator = (
  statType: "rating" | "reviewCount" | "favoriteCount",
  count: number,
  average: number,
) => {
  const differenceInCount = average - count;
  const isZeroDifference = differenceInCount === 0;
  const absoluteDifference = Math.abs(differenceInCount);
  const formattedAbsoluteDifference = Math.abs(differenceInCount).toFixed(1);

  let resultCount = "";
  let resultText = "";

  switch (statType) {
    case "rating":
      if (differenceInCount < 0) {
        resultCount = `${formattedAbsoluteDifference}점 `;
        resultText = "더 낮아요!";
      } else if (differenceInCount > 0) {
        resultCount = `${formattedAbsoluteDifference}점 `;
        resultText = "더 높아요!";
      }
      break;
    default:
      if (differenceInCount < 0) {
        resultCount = `${absoluteDifference}개 `;
        resultText = "더 적어요!";
      } else if (differenceInCount > 0) {
        resultCount = `${absoluteDifference}개 `;
        resultText = "더 많아요!";
      }
  }

  return (
    <Result>
      {isZeroDifference ? "같은 카테고리의 제품들의 평균이네요!" : "같은 카테고리의 제품들보다 "}
      {!isZeroDifference && <span>{resultCount}</span>}
      {!isZeroDifference && resultText}
    </Result>
  );
};
