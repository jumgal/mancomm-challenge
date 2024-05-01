import { createTheme, ThemeOptions } from "@mui/material/styles";

// Augment the palette to include a violet color
declare module "@mui/material/styles" {
  interface Palette {
    mainColor: Palette["primary"];
  }

  interface PaletteOptions {
    mainColor?: PaletteOptions["primary"];
  }
}

// Update the Button's color options to include a mainColor option
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    mainColor: true;
  }
}

const bgColor: string = "#b3d9e3";
const lightColor: string = "#e0f2f1"

const theme: ThemeOptions = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: lightColor,
          color: "#009688"
        },
      },
    },
  },
  palette: {
    background: {
      default: bgColor
    },
    mainColor: {
      dark: "#009688",
      main: "#b2dfdb",
      light: lightColor,
      contrastText: "#00c9c3",
    },
  },
});

export default theme;
