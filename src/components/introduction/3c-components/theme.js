import { createTheme } from "@mui/material";

const theme = createTheme({
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

export default theme;
