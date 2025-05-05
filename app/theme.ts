import { createTheme } from "@mui/material/styles"

// Simple sketch-like theme with straight lines
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000", // Black for sketch-like appearance
      light: "#333333",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#333333",
      light: "#555555",
      dark: "#111111",
      contrastText: "#ffffff",
    },
    error: {
      main: "#000000",
      light: "#333333",
      dark: "#000000",
      contrastText: "#ffffff",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "#000000",
      secondary: "#333333",
      disabled: "#777777",
    },
    divider: "#000000",
  },
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: "-0.01562em",
      fontFamily: '"Montserrat", sans-serif',
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
      fontFamily: '"Montserrat", sans-serif',
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: "0em",
      fontFamily: '"Montserrat", sans-serif',
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: "0.00735em",
      fontFamily: '"Montserrat", sans-serif',
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "0em",
      fontFamily: '"Montserrat", sans-serif',
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "0.0075em",
      fontFamily: '"Montserrat", sans-serif',
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
      fontFamily: '"Montserrat", sans-serif',
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: "0.00714em",
      fontFamily: '"Montserrat", sans-serif',
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
      fontFamily: '"Montserrat", sans-serif',
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.01071em",
      fontFamily: '"Montserrat", sans-serif',
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: "0.02857em",
      textTransform: "none",
      fontFamily: '"Montserrat", sans-serif',
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.03333em",
      fontFamily: '"Montserrat", sans-serif',
    },
    overline: {
      fontSize: "0.625rem",
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
      fontFamily: '"Montserrat", sans-serif',
    },
  },
  shape: {
    borderRadius: 0, // No border radius for sketch-like appearance
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: "none",
          padding: "8px 24px",
          boxShadow: "none",
          fontFamily: '"Montserrat", sans-serif',
          border: "1px solid #000000",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          borderRadius: 0,
          border: "1px solid #000000",
        },
        elevation1: {
          boxShadow: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: 16,
          border: "1px solid #000000",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 0,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#000000",
          borderRadius: 0,
          border: "1px solid #000000",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Montserrat", sans-serif',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#000000",
        },
      },
    },
  },
})

// Dark theme with sketch-like appearance
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffffff", // White for sketch-like appearance in dark mode
      light: "#ffffff",
      dark: "#cccccc",
      contrastText: "#000000",
    },
    secondary: {
      main: "#cccccc",
      light: "#ffffff",
      dark: "#999999",
      contrastText: "#000000",
    },
    error: {
      main: "#ffffff",
      light: "#ffffff",
      dark: "#cccccc",
      contrastText: "#000000",
    },
    background: {
      default: "#0A0A0F", // Darker background
      paper: "#0F0F14", // Slightly lighter for surfaces
    },
    text: {
      primary: "#ffffff",
      secondary: "#cccccc",
      disabled: "#999999",
    },
    divider: "#ffffff",
  },
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
    // Same typography settings as light theme with Montserrat
    h1: {
      fontSize: "2.5rem",
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: "-0.01562em",
      fontFamily: '"Montserrat", sans-serif',
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: "-0.00833em",
      fontFamily: '"Montserrat", sans-serif',
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: "0em",
      fontFamily: '"Montserrat", sans-serif',
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: "0.00735em",
      fontFamily: '"Montserrat", sans-serif',
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "0em",
      fontFamily: '"Montserrat", sans-serif',
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.2,
      letterSpacing: "0.0075em",
      fontFamily: '"Montserrat", sans-serif',
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
      fontFamily: '"Montserrat", sans-serif',
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: "0.00714em",
      fontFamily: '"Montserrat", sans-serif',
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
      fontFamily: '"Montserrat", sans-serif',
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.01071em",
      fontFamily: '"Montserrat", sans-serif',
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: "0.02857em",
      textTransform: "none",
      fontFamily: '"Montserrat", sans-serif',
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: "0.03333em",
      fontFamily: '"Montserrat", sans-serif',
    },
    overline: {
      fontSize: "0.625rem",
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: "0.08333em",
      textTransform: "uppercase",
      fontFamily: '"Montserrat", sans-serif',
    },
  },
  shape: {
    borderRadius: 0,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          textTransform: "none",
          padding: "8px 24px",
          boxShadow: "none",
          fontFamily: '"Montserrat", sans-serif',
          border: "1px solid #ffffff",
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          borderRadius: 0,
          border: "1px solid #ffffff",
        },
        elevation1: {
          boxShadow: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: 16,
          border: "1px solid #ffffff",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 0,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          backgroundColor: "#1e1e1e",
          color: "#ffffff",
          borderRadius: 0,
          border: "1px solid #ffffff",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#0A0A0F",
          backgroundImage: "none",
          borderBottom: "1px solid #ffffff",
          boxShadow: "none",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Montserrat", sans-serif',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: "#ffffff",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontFamily: '"Montserrat", sans-serif',
        },
      },
    },
  },
})
