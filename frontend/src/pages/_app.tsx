import App, { AppProps, AppContext } from "next/app";
import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "~/constants/theme";
import Layout from "~/components/Layout";

interface Props {
  title: string;
  hideFooter?: boolean;
}

function MyApp({ Component, pageProps }: AppProps<Props>) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="David Shefcik" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, user-scalable=no"
        />
        <title>Neuqua Study {pageProps.title && ` - ${pageProps.title}`}</title>
        <link rel="icon" href="icon.png" />
      </Head>
      <ChakraProvider theme={theme}>
        <Layout {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return appProps;
};

export default MyApp;
