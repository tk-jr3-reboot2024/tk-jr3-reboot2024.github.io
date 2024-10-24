import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import toplogo from "./img/PamphletLogo.jpg";
import theme from "./theme";

export default function Content() {
    return (
        <div>
            <ThemeProvider theme={theme}>
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
                <main>
                    <p>
                        日常には、小さなデスゲームがいくつも潜んでいる。
                        <br />
                        ここは、月見大学附属かまぼこ中学校。
                        <br />
                        課題やテストなど、様々な試練が生徒達を待ち受ける。
                        <br />
                        間違えてはいけない、バレてはいけない。
                        <br />
                        誰が味方で、誰が敵かもわからない。
                        <br />
                        デスゲームは、きっとあなたのそばにも。
                        <br />
                    </p>
                </main>
            </ThemeProvider>
        </div>
    );
}
