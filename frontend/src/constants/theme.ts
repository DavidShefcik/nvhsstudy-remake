import { extendTheme } from "@chakra-ui/react";

enum COLORS {
  BRADNING_LIGHT_BLUE = "#0855a1",
  BRANDING_MEDIUM_BLUE = "#0e4378",
  BRANDING_DARK_BLUE = "#08325c",
}

const theme = extendTheme({
  colors: {
    brand: {
      50: COLORS.BRADNING_LIGHT_BLUE,
      100: COLORS.BRADNING_LIGHT_BLUE,
      200: COLORS.BRADNING_LIGHT_BLUE,
      300: COLORS.BRADNING_LIGHT_BLUE,
      400: COLORS.BRADNING_LIGHT_BLUE,
      500: COLORS.BRADNING_LIGHT_BLUE,
      600: COLORS.BRANDING_MEDIUM_BLUE,
      700: COLORS.BRANDING_DARK_BLUE,
      800: COLORS.BRANDING_DARK_BLUE,
      900: COLORS.BRANDING_DARK_BLUE,
    },
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
      },
      a: {
        color: "brand.100",
        textDeocration: "none",
        transition: "color 0.02s liner",
        _hover: {
          color: "brand.600",
        },
      },
    },
  },
});

export { COLORS, theme };
