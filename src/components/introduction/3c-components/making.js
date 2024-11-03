import React from 'react';
import { Typography, Box, CssBaseline, Card, CardActionArea, CardContent, Link, Chip, Divider, ThemeProvider, CardActions, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { grey } from '@mui/material/colors';
import theme from "./theme";
import making130 from './img/making130.jpg';
import making055 from './img/making055.jpg';
import making035 from './img/making035.jpg';
import making030 from './img/making030.jpg';
import making025 from './img/making025.jpg';
import making015 from './img/making015.jpg';
import making007 from './img/making007.jpg';
import making004 from './img/making004.jpg';
import making002 from './img/making002.jpg';
import making001a from './img/making001a.jpg';
import making001b from './img/making001b.jpg';


function News1() {
	return (
		<div >
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Box sx={{ padding: '2vw', box_width: '100%', background: grey[50], borderRadius: '4px' }}>
					<Typography variant="h5" component="div">
						<b>映画制作の裏側!</b>
					</Typography>
					<Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
						<i>Behind the Scenes</i>
					</Typography>
					<Divider sx={{ margin: '8px' }} />
					<Typography variant="p">
						【文化祭まで残り130日】
						<br />
						1学期の学活ではクラスでとにかくいろいろな案を出し、デコで何をするか絞り込んでいく。
						<br />
						<Box
							component="img"
							src={making130}
							sx={{
								width: { xs: '100%', md: '750px' },
								height: '100%',
								objectFit: 'cover',
								margin: 0,
								padding: 0,
								maxwidth: '500px'
							}}
						/>
						<br />
						【文化祭まで残り100日】
						<br />
						　投票の結果映画の案が概ね好調で、その中で最も人気の「翔んで筑駒」に決定！
						<br />
						【文化祭まで残り90日】
						<br />
						　幹部で班分けを決定。
						<br />
						【文化祭まで残り75日】
						<br />
						　夏休みの間、脚本班で「翔んで筑駒」の原稿を執筆。原案者の麻生麗が主に書いてくれた。
						<br />
						【文化祭まで残り55日】
						<br />
						　筑駒文化祭名物、カウントダウンが登場。今年はRED館-BLUE館間の2階休憩所で展示中。
						<br />
						　また、デコ責は夏休み明けのこの時期に大量の書類の締め切りに追われる。
						<br />
						<Box
							component="img"
							src={making055}
							sx={{
								width: { xs: '100%', md: '750px' },
								height: '100%',
								objectFit: 'cover',
								margin: 0,
								padding: 0,
								maxwidth: '500px'
							}}
						/>
						<br />
						【文化祭まで残り35日】
						<br />
						　少し遅れて装飾作業がスタート。近所の木材店から小割とベニヤを買ってきて、この日のうちに木材を全て切り終わった。
						<br />
						<Box
							component="img"
							src={making035}
							sx={{
								width: { xs: '100%', md: '750px' },
								height: '100%',
								objectFit: 'cover',
								margin: 0,
								padding: 0,
								maxwidth: '500px'
							}}
						/>
						<br />
						【文化祭まで残り30日】
						<br />
						　撮影班は出演者がなかなか集まらず大幅に遅れて撮影スタート。最初は生徒会のシーンを生徒会室で撮影。
						<br />
						<Box
							component="img"
							src={making030}
							sx={{
								width: { xs: '100%', md: '750px' },
								height: '100%',
								objectFit: 'cover',
								margin: 0,
								padding: 0,
								maxwidth: '500px'
							}}
						/>
						<br />
						【文化祭まで残り25日】
						<br />
						　先生が板書をし、全員が集まる最初のシーンを撮影。
						<br />
						<Box
							component="img"
							src={making030}
							sx={{
								width: { xs: '100%', md: '750px' },
								height: '100%',
								objectFit: 'cover',
								margin: 0,
								padding: 0,
								maxwidth: '500px'
							}}
						/>
						<br />
						【文化祭まで残り20日】
						<br />
						　この辺りで脚本の再検討に入った。後半部分があいまいなままで、特にクライマックスをどのように撮るかを議論した。
						<br />
						【文化祭まで残り15日】
						<br />
						　学校紹介のシーンをプールや図書室などで撮影した。しかし、このシーンは尺の都合でのちに没になった。
						<br />
						<Box
							component="img"
							src={making015}
							sx={{
								width: { xs: '100%', md: '750px' },
								height: '100%',
								objectFit: 'cover',
								margin: 0,
								padding: 0,
								maxwidth: '500px'
							}}
						/>
						<br />
						【文化祭まで残り10日】
						<br />
						　広報班でビラやポスターのデザインを着々と作成。なお作っていたのは全て一人。
						<br />
						　また、裏で撮影班が映画の編集を進めている最中。なお作っていたのは全て一人。
						【文化祭まで残り7日】
						<br />
						　文化祭の装飾がまだ全然できておらず、危機感を持った人達で装飾作業を進めた。画像は立て看板の作成風景。
						　また、生成AIを用いてクライマックスの案出しを行い、方針を決定した。
						<br />
						<Box
							component="img"
							src={making007}
							sx={{
								width: { xs: '100%', md: '750px' },
								height: '100%',
								objectFit: 'cover',
								margin: 0,
								padding: 0,
								maxwidth: '500px'
							}}
						/>
						<br />
						【文化祭まで残り5日】
						<br />
						　この日の学活で全員が集まるシーンを撮影して、撮影が終了！ここからは編集担当者がひたすら編集に尽力した。
						<br />
						【文化祭まで残り4日】
						<br />
						　外装デザインの追加案が決定し、ステンドグラス風窓を作り始めた。
						<br />
						<Box
							component="img"
							src={making004}
							sx={{
								width: { xs: '100%', md: '750px' },
								height: '100%',
								objectFit: 'cover',
								margin: 0,
								padding: 0,
								maxwidth: '500px'
							}}
						/>
						<br />
						【文化祭まで残り2日】
						<br />
						　ついに放課後、前々日準備が解禁され、机椅子の移動や外装の設置が行われた。
						<br />
						<Box
							component="img"
							src={making002}
							sx={{
								width: { xs: '100%', md: '750px' },
								height: '100%',
								objectFit: 'cover',
								margin: 0,
								padding: 0,
								maxwidth: '500px'
							}}
						/>
						<br />
						【文化祭まで残り1日】
						　全日準備と呼ばれる文化祭準備のみに割り当てられた日、外装の装飾追加や内装の暗幕貼りなどが行われた。
						<br />
						　また、ついに映像が完成し、試写会が開かれた。編集者にはとにかく感謝の限りである。
						<br />
						<Box
							component="img"
							src={making001b}
							sx={{
								width: { xs: '100%', md: '750px' },
								height: '100%',
								objectFit: 'cover',
								margin: 0,
								padding: 0,
								maxwidth: '500px'
							}}
						/>
					</Typography>
				</Box>
			</ThemeProvider>
		</div>
	);
}

export default News1
