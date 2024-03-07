import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "@/styles/GlobalStyle";
import { theme } from "@/styles/theme";
import Gnb from "@/src/components/gnb/gnb";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Gnb />
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
