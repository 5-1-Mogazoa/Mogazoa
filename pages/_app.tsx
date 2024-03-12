import { HydrationBoundary, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import "@/styles/font.css";
import GlobalStyle from "@/styles/GlobalStyle";
import { theme } from "@/styles/theme";
import Gnb from "@/src/components/gnb/gnb";
import { OauthProvider } from "@/src/lib/OauthProvider";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <ThemeProvider theme={theme}>
          <OauthProvider>
            <GlobalStyle />
            <Gnb />
            <Component {...pageProps} />
          </OauthProvider>
        </ThemeProvider>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
