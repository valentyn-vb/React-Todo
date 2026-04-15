import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    background: {
      default: "#f6f3ee",
      paper: "rgba(255, 255, 255, 0.82)"
    },
    primary: {
      main: "#8a4b2f"
    },
    secondary: {
      main: "#2f5d62"
    }
  },
  shape: {
    borderRadius: 18
  },
  typography: {
    fontFamily: "\"Avenir Next\", \"Segoe UI\", Arial, sans-serif",
    h3: {
      fontWeight: 700,
      lineHeight: 1.1
    },
    button: {
      fontWeight: 700,
      textTransform: "none"
    }
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backdropFilter: "blur(12px)"
        }
      }
    }
  }
});
