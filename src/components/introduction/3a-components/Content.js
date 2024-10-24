import React from "react";
import { Box, CssBaseline } from "@mui/material";
import toplogo from "./img/PamphletLogo.jpg";

export default function Content() {
    return (
        <div>
            <CssBaseline /> {/* CSSリセット */}
            <main style={{ padding: 0, marginTop: 0 }}>
                <Box
                    component="img"
                    src={toplogo}
                    alt="toplogo"
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        margin: 0,
                        padding: 0,
                    }}
                ></Box>
            </main>
        </div>
    );
}
