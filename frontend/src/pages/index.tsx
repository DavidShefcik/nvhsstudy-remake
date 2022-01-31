import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Flex,
  Heading,
  Text,
  Button,
  Link,
  Box,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";

import sessionContext, { Session } from "~/context/session";
import useIsMobile from "~/hooks/useIsMobile";
import HomeBox, { LINE_DIRECTION } from "~/components/HomeBox";

export default function Home() {
  const { loggedIn } = useContext<Session>(sessionContext);
  const router = useRouter();
  const isMobile = useIsMobile();

  useEffect(() => {
    if (loggedIn) {
      router.replace("/feed");
    }
  }, [loggedIn]);

  return (
    <Flex flexDirection="column" width="100%">
      <Flex flex="1">
        <HomeBox backgroundColor="brand.100">
          <Flex width="100%" flexDirection={isMobile ? "column" : "row"}>
            <Flex
              width={isMobile ? "100%" : "55%"}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Text
                fontSize="2xl"
                color="gray.100"
                padding={isMobile ? "20px 10px" : "10px"}
              >
                Welcome to Neuqua Study
              </Text>
              <Text
                fontSize="lg"
                color="gray.100"
                textAlign="center"
                padding="0 50px"
              >
                Neuqua Study is a tool designed to make your studying easier
              </Text>
            </Flex>
            <Flex
              width={isMobile ? "100%" : "45%"}
              justifyContent="center"
              alignItems="center"
            >
              <Text
                fontSize="lg"
                textAlign="center"
                color="gray.100"
                padding="50px"
              >
                Organize study groups and share studying materials, all with
                only a few clicks
              </Text>
            </Flex>
          </Flex>
        </HomeBox>
      </Flex>
      <Flex flex="1">
        <HomeBox>
          <VStack spacing="25px">
            <Text fontSize="2xl">Get Started</Text>
            <Link as={NextLink} href="/login" title="Log in with Google">
              <Button colorScheme="brand">Log in with Google</Button>
            </Link>
          </VStack>
        </HomeBox>
      </Flex>
    </Flex>
  );
}

Home.getInitialProps = () => {
  return {
    title: "Welcome",
  };
};
