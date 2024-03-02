import styled from "styled-components";
import { ButtonType, Variant } from "./Button";
import { fontStyle } from "@/styles/theme";

type StyledButtonProps = {
  $variant: Variant;
  $buttonType: ButtonType;
};

// variant에 따른 선과 글자색
const variantColor = {
  filled: {
    border: "none",
    color: "var(--color-white)",
  },
  ghost_blue: {
    border: "1px solid var(--color-main-blue)",
    color: "var(--color-main-blue)",
  },
  ghost_pink: {
    border: "1px solid var(--color-pink)",
    color: "var(--color-pink)",
  },
  ghost_black: {
    border: "1px solid var(--color-black-35)",
    color: "var(--color-gray-6e)",
  },
  ghost_gray: {
    border: "1px solid var(--color-gray-9f)",
    color: "var(--color-gray-9f)",
  },
};

// buttonType에 따른 width 값
const buttonTypeWidth = {
  auth: ["100%", "44rem", "64rem"],
  modal: ["100%", "100%", "100%"],
  compare: ["100%", "16.4rem", "20rem"],
  follow: ["29.5rem", "44.9rem", "30rem"],
  review: ["100%", "100%", "100%"],
  product_compare_edit: ["100%", "10.7rem", "16rem"],
  product_compare: ["100%", "12.3rem", "18rem"],
};

export const Button = styled.button<StyledButtonProps>`
  width: ${({ $buttonType }) => buttonTypeWidth[$buttonType][0]};
  height: 5rem;
  border-radius: 0.8rem;
  border: ${({ $variant }) => variantColor[$variant].border};
  background: ${({ $variant }) => ($variant === "filled" ? "var(--color-main-gradation)" : "none")};
  ${fontStyle({ w: 600, s: 16, l: 19 })};
  color: ${({ $variant }) => variantColor[$variant].color};

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: ${({ $buttonType }) => buttonTypeWidth[$buttonType][1]};
    height: 5.5rem;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: ${({ $buttonType }) => buttonTypeWidth[$buttonType][2]};
    height: ${({ $buttonType }) => ($buttonType === "compare" ? "7rem" : "6.5rem")};
  }
`;

// const variantStyle = {
//   filled: {
//     backgroundColor: "var(--color-main-gradation)",
//     border: "none",
//   },
//   ghost: {
//     backgroundColor: "none",
//     border: "1px solid #fff",
//   },
// };

// const buttonTypeStyle = {
//   width: {
//     auth: ["100%", "44rem", "64rem"],
//     modal: ["100%", "100%", "100%"],
//     compare: ["100%", "16.4rem", "20rem"],
//     follow: ["29.5rem", "44.9rem", "30rem"],
//     review: ["100%", "100%", "100%"],
//     productCompareEdit: ["100%", "10.7rem", "16rem"],
//     productCompare : ["100%", "12.3rem", "18rem"]
//   },
//   // height: {
//   //   auth: ["5rem", "5.5rem", "6.5rem"],
//   //   modal: ["5rem", "5.5rem", "6.5rem"],
//   //   compare: ["5rem", "5.5rem", "7rem"],
//   //   follow: ["5rem", "5.5rem", "6.5rem"],
//   // },
// };

// const variantStyle = {
//   filled: {
//     backgroundColor: "var(--color-main-gradation)",
//     border: "none",
//     color: "var(--color-white)",
//   },
//   ghost_blue: {
//     backgroundColor: "none",
//     border: "1px solid var(--color-main-blue)",
//     color: "var(--color-main-blue)",
//   },
//   ghost_pink: {
//     backgroundColor: "none",
//     border: "1px solid var(--color-pink)",
//     color: "var(--color-pink)",
//   },
//   ghost_black: {
//     backgroundColor: "none",
//     border: "1px solid var(--color-black-35)",
//     color: "var(--color-gray-6e)",
//   },
//   ghost_gray: {
//     backgroundColor: "none",
//     border: "1px solid var(--color-gray-9f)",
//     color: "var(--color-gray-9f)",
//   },
// };
