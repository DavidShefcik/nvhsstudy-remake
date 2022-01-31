import React, { useContext, useEffect } from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  Flex,
  VStack,
  DrawerCloseButton,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

import sessionContext, { Session } from "~/context/session";
import uiContext, { UI } from "~/context/ui";

export default function MobileMenu() {
  const { loggedIn } = useContext<Session>(sessionContext);
  const { mobileMenuOpen, setMobileMenuOpen } = useContext<UI>(uiContext);
  const { route } = useRouter();

  useEffect(() => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [route]);

  let drawerContent = null;
  if (loggedIn) {
    drawerContent = (
      <VStack spacing="10px">
        <p>Logged in</p>
      </VStack>
    );
  } else {
    drawerContent = (
      <VStack spacing="10px">
        <Link
          as={NextLink}
          href="/login"
          title="Log in with Google"
          colorScheme="brand"
        >
          Log in with Google
        </Link>
      </VStack>
    );
  }

  return (
    <Drawer
      isOpen={mobileMenuOpen}
      placement="right"
      onClose={() => setMobileMenuOpen(false)}
      orientation="vertical"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          width="100%"
          height="100%"
          padding="50px 20px"
        >
          {drawerContent}
        </Flex>
      </DrawerContent>
    </Drawer>
  );
}
