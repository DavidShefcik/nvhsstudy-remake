import { useMediaQuery } from "@chakra-ui/react";

export default function useIsMobile(): boolean {
  const [isSmallerThan769] = useMediaQuery("(max-width: 769px)");

  return isSmallerThan769;
}
