import Gnb from "../gnb/gnb";
import styled from "styled-components";
import {
  ResultContainer,
  ResultWinner,
  ResultProduct,
  ResultDes,
  Table,
  TableWhite,
  Tableline,
  Win1,
} from "./Styled/StyledTable";

//비교하기 테이블 만들기
// export function CompareTable({ productOneData }) {
//   console.log(productOneData);
//   return (
//     <>
//       <ResultContainer>
//         <ResultWinner>
//           <ResultProduct>이긴상품</ResultProduct> 상품이 승리하였습니다
//         </ResultWinner>
//         <ResultDes>3가지 항목 중 이긴갯수 가지 항목에서 우세합니다.</ResultDes>
//       </ResultContainer>
//       <Table>
//         <thead>
//           <tr>
//             <Tableline>기준</Tableline>
//             <Tableline>상품1</Tableline>
//             <Tableline>상품2</Tableline>
//             <Tableline>결과</Tableline>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>별점</td>
//             <TableWhite>{productOneData.rating.toFixed(1)}</TableWhite>
//             <TableWhite>상품2의 별점 </TableWhite>
//             {/* {if(result1count >= result2count) {
//               <Win1>상품1 승</Win1>
//             } else (result2count >= reuslt1count){
//               <Win2> 상품 2 승리</Win2>
//             } else (result1count === result2count){
//               <TableWhite> 무승부 </TableWhite>
//             }

//         } */}
//           </tr>
//           <tr>
//             <td>리뷰개수</td>
//             <TableWhite>{productOneData.reviewCount}</TableWhite>
//             <TableWhite>상품2의 리뷰개수</TableWhite>
//             <td>리뷰개수 결과값</td>
//           </tr>
//           <tr>
//             <td>찜개수</td>
//             <TableWhite>{productOneData.favoriteCount}</TableWhite>
//             <TableWhite>상품2의 찜개수</TableWhite>
//             <td>찜개수 결과값</td>
//           </tr>
//         </tbody>
//       </Table>
//     </>
//   );
// }
