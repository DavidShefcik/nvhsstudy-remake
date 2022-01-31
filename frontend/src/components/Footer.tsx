import React from "react";
import { Flex, Link, HStack } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

import styles from "./css/footer.module.css";
import useIsMobile from "~/hooks/useIsMobile";

interface FooterItem {
  text: string;
  link: string;
  external?: boolean;
}

const footerItems: FooterItem[] = [
  {
    text: "About",
    link: "/about",
  },
  {
    text: "FAQ",
    link: "/faq",
  },
  {
    text: "GitHub",
    link: "https://github.com/DavidShefcik/nvhsstudy-remake",
    external: true,
  },
];

export default function Footer() {
  const isMobile = useIsMobile();

  return (
    <Flex
      flexDirection={isMobile ? "column" : "row"}
      justifyContent="center"
      alignItems="center"
      width="100%"
      minHeight="50px"
      padding={isMobile ? "10px 5px" : "0px 10px"}
      backgroundColor="gray.200"
      borderTopColor="gray.300"
      borderTopWidth="1px"
      className={styles.footer}
    >
      <HStack spacing="10px">
        {footerItems.map(({ text, link, external }) => {
          let linkProps = { href: link, title: text };
          if (!external) {
            Object.assign(linkProps, { as: NextLink });
          } else {
            Object.assign(linkProps, { isExternal: true });
          }

          return (
            <Link key={link} {...linkProps}>
              {external ? (
                <>
                  {text}
                  <ExternalLinkIcon mx="2px" />
                </>
              ) : (
                text
              )}
            </Link>
          );
        })}
      </HStack>
    </Flex>
  );
}
