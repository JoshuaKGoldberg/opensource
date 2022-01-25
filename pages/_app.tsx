import { GamutProvider, theme } from "@codecademy/gamut-styles";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GamutProvider theme={theme}>
      <Component {...pageProps} />
    </GamutProvider>
  );
}

export default MyApp;
