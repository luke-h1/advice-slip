import { ChakraProvider } from '@chakra-ui/react';
import { CacheProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import emotionCache from '../utils/cache';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <CacheProvider value={emotionCache}>
      <ChakraProvider resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </CacheProvider>
  );
};

export default App;
