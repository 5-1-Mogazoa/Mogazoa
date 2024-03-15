import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    word-break: keep-all;
  }
  
  html {
    font-size: 62.5%;
    background-color: var(--color-black-17);
  }

  body {
    font-size: 1.6rem;
    font-family: "Pretendard";
    font-weight: 400;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  input {
    outline: none;
    border: none;
    padding: none;
  }

  input:focus {
  outline: none;
}

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    -webkit-text-fill-color: #333236;
    -webkit-box-shadow: 0 0 0px 1000px #fff inset;
  }

  button {
    border: none;
    padding: unset;
    background-color: unset;
    cursor: pointer;
  }

  ul{
    padding: unset;
  }

  ::-webkit-scrollbar {
    display: block;
    height: 6px;
    width: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #5363ff; /* 스크롤바 핸들의 배경 색상 (indigo) */
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #1C1C22; /* 스크롤바 트랙의 배경 색상 */
  }

  .scrollbar-hide {
    scrollbar-gutter: stable both-edges;
  }

  /* 스크롤바 숨김 */
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }

  /* 호버 시 스크롤바 표시 - WebKit 기반 브라우저용 */
  .scrollbar-hide:hover::-webkit-scrollbar {
    display: block;
    width: 8px;
    height: 8px;
  }

  /* 호버 시 스크롤바 표시 - Firefox용 */
  .scrollbar-hide:hover {
    scrollbar-width: auto;
  }

  /* 스크롤바 트랙 스타일 */
  .scrollbar-hide::-webkit-scrollbar-track {
    background: #f1effd; /* 스크롤바 트랙의 배경 색상 */
  }

  /* 스크롤바 핸들 스타일 */
  .scrollbar-hide::-webkit-scrollbar-thumb {
    background-color: #5363ff; /* 스크롤바 핸들의 배경 색상 (indigo) */
    border-radius: 8px;
  }

  /* 호버 시 스크롤바 핸들 스타일 변경 */
  .scrollbar-hide:hover::-webkit-scrollbar-thumb {
    background-color: #424fcc; /* 호버 시 스크롤바 핸들의 배경 색상을 어둡게 조정 */
  }

  :root {
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    text-size-adjust: 100%;
    cursor: default;
    line-height: 1.5;
    overflow-wrap: break-word;
    word-break: break-word;
    -moz-tab-size: 4;
    tab-size: 4;
    --color-main-gradation: linear-gradient(90deg, #5097fa, #5363ff);
    --color-main-blue: #5097fa;
    --color-main-indigo: #5363ff;
    --color-yellow: #ffc83c;
    --color-green: #05d58b;
    --color-pink: #ff2f9f;
    --color-red: #ff0000;
    --color-black-17: #17171c;
    --color-black-21: #21212a;
    --color-black-2e: #2e2e3a;
    --color-black-1c: #1C1C22;
    --color-black-25: #252530;
    --color-black-35: #353542;
    --color-gray-6e: #6e6e82;
    --color-gray-9f: #9fa6b2;
    --color-white: #f1f1f5;
  }
`;

export default GlobalStyle;
