import React, { useState } from "react";
import { Flex, Image, Spinner, Text, VStack } from "@chakra-ui/react";

export default function FullScreenLoading() {
  const [imageError, setImageError] = useState(false);

  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh"
      overflow="hidden"
      backgroundColor="brand.600"
    >
      <VStack spacing="25px">
        {!imageError && (
          <Image
            src="/icon.png"
            alt=""
            onError={() => setImageError(true)}
            height="125px"
          />
        )}
        <Spinner color="gray.100" size="lg" />
      </VStack>
    </Flex>
  );
}
