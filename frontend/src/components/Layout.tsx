import React, { ReactChild } from "react";
import { Flex } from "@chakra-ui/react";

import Header from "./Header";
import Footer from "./Footer";
import GlobalContextProvider from "~/context";
import MobileMenu from "./MobileMenu";

interface Props {
  hideFooter: boolean;
  children: ReactChild;
}

export default function Layout({ hideFooter, children }: Props) {
  return (
    <GlobalContextProvider>
      <Flex
        flexDirection="column"
        width="100%"
        minHeight="100vh"
        position="relative"
        zIndex="1"
      >
        <Header />
        <MobileMenu />
        <Flex width="100%" flexGrow="1">
          {children}
        </Flex>
        {!hideFooter && <Footer />}
      </Flex>
    </GlobalContextProvider>
  );
}
