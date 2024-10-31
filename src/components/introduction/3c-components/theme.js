import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
            contrastText: "#795548",
        },
        background: {
            default: "#222222",
        },
        text: { primary: "#000000" },
        typography: {
            fontFamily: 'Raleway, Arial',
          },
    },
});

theme = responsiveFontSizes(theme);
export default theme;
