import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#1976d2",
            contrastText: "#795548",
        },
        background: {
            default: "#ffffff",
        },
        text: { primary: "#000000" },
    },
});

export default theme;
