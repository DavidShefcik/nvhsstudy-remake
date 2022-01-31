import React, { ReactNode, useState, useContext, useEffect } from "react";
import { Flex, Text, Image, Link, HStack, Box } from "@chakra-ui/react";
import NextLink from "next/link";

import styles from "./css/header.module.css";
import sessionContext, { Session } from "~/context/session";
import uiContext, { UI } from "~/context/ui";
import useIsMobile from "~/hooks/useIsMobile";
import HamburgerMenu from "./HamburgerMenu";

function RightHeaderItems({ children }: { children: ReactNode }) {
  return (
    <Flex flexDirection="row" alignItems="center" margin="0 10px">
      <HStack spacing="10px">{children}</HStack>
    </Flex>
  );
}

export default function Header() {
  const [imageError, setImageError] = useState(false);
  const isMobile = useIsMobile();
  const { loggedIn, currentUser } = useContext<Session>(sessionContext);
  const { setMobileMenuOpen } = useContext<UI>(uiContext);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(true);
  };

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [isMobile]);

  let rightItems = null;
  if (isMobile) {
    rightItems = <HamburgerMenu onClick={toggleMobileMenu} />;
  } else if (loggedIn) {
    rightItems = (
      <RightHeaderItems>
        <p>Logged in</p>
      </RightHeaderItems>
    );
  } else {
    rightItems = (
      <RightHeaderItems>
        <Link as={NextLink} href="/login" title="Log in with Google">
          Log in with Google
        </Link>
      </RightHeaderItems>
    );
  }

  return (
    <Flex
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      backgroundColor="brand.100"
      borderBottomColor="brand.300"
      borderBottomWidth="1px"
      padding="0 15px"
      boxSizing="border-box"
      height="60px"
      overflow="hidden"
      position="sticky"
      left="0"
      top="0"
      zIndex="10"
      className={styles.header}
    >
      <Flex
        width={isMobile ? "auto" : "30%"}
        justifyContent={isMobile ? "flex-start" : "center"}
      >
        <Link as={NextLink} href="/" title="Neuqua Study">
          {imageError ? (
            <Text color="white" fontSize="2xl" cursor="pointer">
              Neuqua Study
            </Text>
          ) : (
            <Image
              src="/logo.png"
              alt=""
              onError={() => setImageError(true)}
              height="45px"
              marginTop="3px"
              marginLeft="-20px"
              cursor="pointer"
            />
          )}
        </Link>
      </Flex>
      <Flex
        width={isMobile ? "auto" : "70%"}
        justifyContent={isMobile ? "flex-end" : "center"}
        paddingLeft={isMobile ? "0" : "15%"}
      >
        {rightItems}
      </Flex>
    </Flex>
  );
}
