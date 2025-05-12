import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#FF69B4", // Rose vif
      light: "#FFB6C1", // Rose clair
      dark: "#C71585", // Rose foncé
    },
    secondary: {
      main: "#FFC0CB", // Rose pâle
      light: "#FFE4E1", // Rose très pâle
      dark: "#DB7093", // Rose moyen
    },
    background: {
      default: "#FFF0F5", // Rose très clair
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      color: "#C71585",
      fontWeight: 600,
      letterSpacing: "0.5px",
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      color: "#FF746C",
      fontWeight: 600,
      letterSpacing: "0.5px",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      letterSpacing: "0.3px",
    },
    button: {
      fontWeight: 500,
      letterSpacing: "0.3px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          textTransform: "none",
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 15,
          boxShadow: "0 4px 8px rgba(255, 105, 180, 0.2)",
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#E6B3FF", // Violet clair
      light: "#F2D9FF", // Violet très clair
      dark: "#B366FF", // Violet foncé
    },
    secondary: {
      main: "#CC99FF", // Violet moyen
      light: "#E6CCFF", // Violet pâle
      dark: "#9933FF", // Violet profond
    },
    background: {
      default: "#1A1A2E", // Noir profond avec une teinte bleue
      paper: "#2D2D44", // Noir plus clair avec une teinte violette
    },
    text: {
      primary: "#E6E6FF", // Texte principal en blanc cassé
      secondary: "#B3B3FF", // Texte secondaire en violet clair
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      color: "#E6B3FF",
      fontWeight: 600,
      letterSpacing: "0.5px",
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      color: "#CC99FF",
      fontWeight: 600,
      letterSpacing: "0.5px",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      letterSpacing: "0.3px",
    },
    button: {
      fontWeight: 500,
      letterSpacing: "0.3px",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          textTransform: "none",
          fontFamily: '"Poppins", sans-serif',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 15,
          boxShadow: "0 4px 8px rgba(179, 102, 255, 0.2)",
          backgroundColor: "#2D2D44",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1A1A2E",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#B366FF",
            },
            "&:hover fieldset": {
              borderColor: "#CC99FF",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#E6B3FF",
            },
          },
        },
      },
    },
  },
});
