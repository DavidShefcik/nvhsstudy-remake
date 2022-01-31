import React, { useState } from "react";
import { Flex, Text, Button, Link } from "@chakra-ui/react";
import NextLink from "next/link";

interface Props {
  title: string;
  subtitle: string;
}

export default function ErrorPage({ title, subtitle }: Props) {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100vh"
      overflow="hidden"
    >
      <Text fontSize="3xl">{title}</Text>
      <Text fontSize="md" margin="20px 0" textAlign="center" padding="0 10px">
        {subtitle}
      </Text>
      <Link as={NextLink} href="/" title="Go Back">
        <Button colorScheme="brand">Go Back</Button>
      </Link>
    </Flex>
  );
}
