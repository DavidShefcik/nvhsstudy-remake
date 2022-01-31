import React, { useEffect } from "react";
import { Flex, Text, Spinner, VStack } from "@chakra-ui/react";

export default function Login() {
  return (
    <Flex
      flexDirection="column"
      width="100%"
      flex="1"
      justifyContent="center"
      alignItems="center"
    >
      <VStack spacing="20px">
        <Text fontSize="xl">Log in with your Google account</Text>
        <Spinner color="brand.100" />
      </VStack>
    </Flex>
  );
}

Login.getInitialProps = () => {
  return {
    title: "Login",
  };
};
