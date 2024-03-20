import { HydrationBoundary, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import "@/styles/font.css";
import GlobalStyle from "@/styles/GlobalStyle";
import { theme } from "@/styles/theme";
import Gnb from "@/src/components/gnb/gnb";
import { OauthProvider } from "@/src/lib/OauthProvider";
import Script from "next/script";

declare global {
  // Kakao 함수를 전역에서 사용할 수 있도록 선언
  interface Window {
    Kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  function kakaoInit() {
    // 페이지가 로드되면 실행
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);
    // window.Kakao.init("5f1c972517bc97d3c05e95ee4d6d9561");  // env 파일을 못찾아서 직접 javascript key 값을 넣어줘야 공유하기 버튼 제대로 동작
    console.log(window.Kakao.isInitialized());
  }

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <OauthProvider>
            <GlobalStyle />
            <Gnb />
            <Component {...pageProps} />
            <Script src="https://developers.kakao.com/sdk/js/kakao.js" onLoad={kakaoInit}></Script>
          </OauthProvider>
        </ThemeProvider>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
