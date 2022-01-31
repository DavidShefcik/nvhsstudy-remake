import React, { ReactNode } from "react";
import { Flex } from "@chakra-ui/layout";

interface Props {
  children: ReactNode;
  backgroundColor?: string;
}

export default function HomeBox({
  backgroundColor = "gray.100",
  children,
}: Props) {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
      minHeight="100%"
      backgroundColor={backgroundColor}
      overflow="hidden"
      position="relative"
    >
      {children}
    </Flex>
  );
}
