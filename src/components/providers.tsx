"use client";
import { PaletteOptions, ThemeProvider, createTheme } from "@mui/material";
import React from "react";

function Provider({ children }: { children: React.ReactNode }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#50ade4",
      },
      secondary: {
        main: "#ee068f",
      },
      warning: {
        main: "#f17027",
      },
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Provider;
