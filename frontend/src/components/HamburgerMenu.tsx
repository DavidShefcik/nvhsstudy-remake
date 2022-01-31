import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";

interface Props {
  onClick(): void;
}

export default function HamburgerMenu({ onClick }: Props) {
  return (
    <HamburgerIcon
      w="8"
      h="8"
      color="gray.100"
      cursor="pointer"
      onClick={onClick}
    />
  );
}
