import React, { ReactNode } from "react";
import { Flex, VStack, Text, Box } from "@chakra-ui/react";

interface Props {
  title: string;
  children: ReactNode;
}

export default function InfoPage({ title, children }: Props) {
  return (
    <Flex
      width="100%"
      minHeight="100%"
      flexDirection="column"
      padding="20px 10px"
    >
      <VStack spacing="10px">
        <Text
          fontSize="2xl"
          color="brand.100"
          borderBottomWidth="2px"
          borderBottomColor="brand.100"
          padding="2px 30px"
          textAlign="center"
        >
          {title}
        </Text>
        <Box>{children}</Box>
      </VStack>
    </Flex>
  );
}
