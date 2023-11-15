import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import BasicMenu from "./dropdown";
import AdBanner from "./adbanner";
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#ffa500"
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f"
    }
  }
});
export default function Top() {
  return (
    <ThemeProvider theme={theme}>
      <div className="top">
        <h3>Haye Bonda</h3>
        <BasicMenu className="menu" />
        <Divider />
        {/* <AdBanner /> */}
        {/* <CarouselComp className="carousel" /> */}
      </div>
    </ThemeProvider>
  );
}
