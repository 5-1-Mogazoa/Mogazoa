/** 
미디어쿼리, z-index
사용예시
@media (min-width: ${({ theme }) => theme.deviceSizes.mobile}) {}
z-index: ${({ theme }) => theme.zIndex.sticky};
*/

export interface themeType {
  [key: string]: { [key: string]: string };
}

export const theme: themeType = {
  deviceSizes: {
    tablet: "744px",
    desktop: "1600px",
  },
  zIndex: {
    default: "1",
    sticky: "100",
    popover: "200",
    overlay: "300",
    modal: "400",
    toast: "500",
  },
};

/** 
  폰트 스타일
  사용예시 (weight, size, line-heihgt 순으로)
  ${fontStyle({ w: 400, s: 16, l: 22 })}
  */

interface FontStyleType {
  w: number;
  s: number;
  l: number;
}

export const fontStyle = ({ w, s, l }: FontStyleType) => {
  return `font-size: ${s / 10}rem; font-weight: ${w}; line-height: ${l / 10}rem`;
};
