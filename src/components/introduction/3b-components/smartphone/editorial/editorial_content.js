import React from 'react'
import {CssBaseline, Box, Typography} from '@mui/material';
import Themesmartphone from './theme';
import { ThemeProvider } from '@mui/material/styles';
import Epilogue from './img/epilogue.jpg';
import Kanseisyo from './img/kanseisyo.png';
import Moyou from './img/moyou.png';
import Mozaiku from './img/mozaiku.jpg';
import Paneru from './img/paneru.png';
import Pazuru from './img/pazuru.jpg';
import Problem_one from './img/problem_one.png';
import Problem_two from './img/problem_two.png';
import Problem_three from './img/problem_three.png';
import Problem_four from './img/problem_four.png';
import Sashigane from './img/sashigane.png';
import Shiyousyo from './img/shiyousyo.png';
import Shiyousyo_zero from './img/shiyousyo_zero.png';
import Uramen from './img/uramen.png';
import Kokuban from './img/kokuban.jpg';

function EditorialContent() {
	return (
		<div>
			<ThemeProvider theme={Themesmartphone}>
				<CssBaseline />
				<Box
				sx={{
					display: 'flex',
					color: '#fff',
					flexDirection: 'column',
					gap: 2,
					width: 'auto',
					padding: '10px'
				}}
				>
					<Box sx={{
						alignItems: 'center',
						justifyContent: 'center',
						display: 'flex'
					}}>
					<Typography variant="h4" sx={{fontFamily: 'serif'}}>
						解説とエピローグ
					</Typography>
					</Box>
					<Box sx={{
						alignItems: 'center',
						justifyContent: 'center',
						display: 'flex'
					}}>
					<Typography variant="h5" sx={{fontFamily: 'serif'}}>
						Step 1
					</Typography>
					</Box>
					<Box>
						
				<Box sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 2
				}}>
					<img src={Problem_one} alt="problem" style={{width: '60%', height: 'auto'}} />
					<img src={Sashigane} alt="problem" style={{width: '30%', height: 'auto'}} />
				</Box>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						さしがねを直角に合わせて3cmのところにある文字を拾いましょう。
						<br />
						「く」も直角であることに気を付けて文字を拾うと「こたえははっぴ」と出てくるため、答えは「はっぴ」。
					</Typography>
					<Box sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 2
				}}>
					<img src={Problem_two} alt="problem" style={{width: '40%', height: 'auto'}} />
					<img src={Mozaiku} alt="problem" style={{width: '40%', height: 'auto'}} />
				</Box>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						モザイクアートを1マスずつ五十音表に対応させ、示された色の順に読みましょう。
						<br />
						黄色は「や」、赤は「く」、緑は「し」にそれぞれ対応しているため、答えは「やくし」。
					</Typography>
					<Box sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
					gap: 2
				}}>
					<img src={Problem_three} alt="problem" style={{width: '80%', height: 'auto'}} />
					<img src={Kokuban} alt="problem" style={{width: '80%', height: 'auto'}} />
				</Box>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						黒板にかかれた枠だけを見ると言葉になっています。
						<br />
						左の枠は「中古」、右の枠は「自由」と書いてあるので答えは「じゆう」。
					</Typography>
					<Box sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 2
				}}>
					
					<img src={Problem_four} alt="problem" style={{width: '60%', height: 'auto'}} />
					<img src={Paneru} alt="problem" style={{width: '30%', height: 'auto'}} />
				</Box>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						パネルから、当てはまる文字を抜き出しましょう。
						<br />
						モザイクアートの歴史から「位」が、制作の手順から「置」が拾えるので、答えは「いち」。
					</Typography>
					<Box sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 2
				}}>
					<img src={Uramen} alt="problem" style={{width: '80%', height: 'auto'}} />
				</Box>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						問1~4の答えを繋げると、「はっぴやくしじゆういち」となります。
						<br />
						適切に大文字を小文字に直して読むことで、「はっぴゃくしじゅういち」
						<br />
						つまり「841」という答えが導かれます。
					</Typography>
					</Box>
					<Box sx={{
						alignItems: 'center',
						justifyContent: 'center',
						display: 'flex'
					}}>
					<Typography variant="h5" sx={{fontFamily: 'serif'}}>
						Step2
					</Typography>
					</Box>
					<Box>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						この4問の謎を解く必要があるようです。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						それぞれの問題には他の問題の模様が含まれていますが、これはその模様に対応する色を表しています。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						この問題に入っている模様の問題を先に解こう、と考えていくと
						<br />
						ループしてしまうので、情報が足りなくても解けそうな問題から考えていきましょう。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						左下の謎のイラストはCMを表しています。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						矢印はアルファベット順でひとつ進めるという法則のようです。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						CMをひとつ戻すとBL、もうひとつ戻すとAKになることから、
						<br />
						右下の謎の答えはAKA、左下の謎の答えはBL??となることがわかります。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						BL??という色を考えるとBLUEが思いつきます。
						<br />
						BLを19個ずらすとUEになり条件にもあうため、左下の答えはBLUEです。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						左上の謎に青を入れて考えると、
						<br />
						十二月が青になることから縦に押し潰す法則だとわかります。
						<br />
						点と日をくっつけると白になるので、左上の答えは白です。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						右上の謎に白を入れて考えると、上の行には白の対義語
						<br />
						下の行にはうしろの同義語が入ることが分かります。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						白の対義語はblack、後ろはbackなので、答えはblackです。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						右下の謎に黒を入れて考えると
						<br />
						黒の上部分は田ですが下部分は何？という問題になります。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						実際に日記の3日目の黒という字を見ると下部分は赤に見えるので、
						<br />
						無事左下の謎との整合性も取れ、右下の答えは赤です。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						では、この4つの答えを表に書いて文実本部に提出しましょう。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						すると、このような紙がもらえました。
					</Typography>
					<Box sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 2
				}}>
					<img src={Shiyousyo} alt="problem" style={{width: '80%', height: 'auto'}} />
				</Box>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						設計図にあった面積を足し算して記入し、提出しましょう。
					</Typography>
					</Box>
					<Box sx={{
						alignItems: 'center',
						justifyContent: 'center',
						display: 'flex'
					}}>
					<Typography variant="h5" sx={{fontFamily: 'serif'}}>
						Step3
					</Typography>
					</Box>
					<Box>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						文実から渡されたパズルにピースをはめていくと、下図のようになりました。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						これで、埋めるべきはあと14マスになりました。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						しかし、手元には1×7のピースが4つ、つまり合計28マスのピースがあります。
						<br />
						これでは余ってしまいます。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						ここであなたが気づくべきだったのは、ピースは立体であるということでした。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						1×7のピース4つを全て立てて埋めることで、このように全てのピースを隙間なく敷き詰めることができました。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						しかし、このまま文実に提出すると、
						<br />
						「これはどうやら不完全のようです。どこか塗り忘れている場所はありませんか？」
						<br />
						と言われ、受理してくれません。
						<br />
						どうすればよいのでしょうか。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						そういえば、制作日記では模様ごとに塗る色が指定されていましたね。
						<br />
						模様のどれかがこの展示品にも隠れてないでしょうか。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						ピースの境目を見ると、この模様が隠れていました。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						つまり、ここは(ほげほげ)色で塗る必要がありそうです。
						<br />
						面積はさしがねで測ると2×7=14cmとわかります。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						では、ペイン太使用書に(ほげほげ)色、"風にのせて"、14cmと書き、一緒に提出してみましょう。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						すると、展示品の完成カードをもらうことができ、このデコを完成させることができました！
					</Typography>
					<Box sx={{
						alignItems: 'center',
						justifyContent: 'center',
						display: 'flex'
					}}>
					<Typography variant="h6" sx={{fontFamily: 'serif'}}>
						<br />
						<br />
						<br />
						しかし、本当にそれでよかったのでしょうか？
						<br />
						<br />
						<br />
					</Typography>
					</Box>
					</Box>
					<Box sx={{
						alignItems: 'center',
						justifyContent: 'center',
						display: 'flex'
					}}>
					<Typography variant="h5" sx={{fontFamily: 'serif'}}>
						Final Step
					</Typography>
					</Box>
					<Box>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						展示品を作り終えたあとにもらった完成カードにはこう書かれていました。
					</Typography>
					<Box sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 2
				}}>
					<img src={Kanseisyo} alt="problem" style={{width: '80%', height: 'auto'}} />
				</Box>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						「やり残したこと、塗り残したものがないか確認しながら待とう。」
						<br />
						確認してみましょう。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
					塗り残したもの、といえば日記に書かれていた模様が思い浮かびます。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
					この模様がまだ教室のどこかにあったとしたら、それは塗らなければデコが完成したことにはならないでしょう。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
					日記に書かれた模様は、この4種類でした。
					</Typography>
					<Box sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 2
				}}>
					<img src={Moyou} alt="problem" style={{width: '80%', height: 'auto'}} />
				</Box>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
					このうちどれかに、見覚えはないでしょうか。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
					あなたの身近にあった、例えば公演中もずっとあなたの視界に入っていたような…
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
					そうです。左から(ほげほげ)番目の模様は、<Typography component="span" variant="h6" sx={{ fontSize: '1.5rem', display: 'inline', fontFamily: 'serif' }}>教室の床の模様と一致していた</Typography>のです。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						ということは、この教室の床全体を(ほげほげ)色に塗らなければなりません。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						早速ペイン太に記入していきましょう。
						<br />
						色は(ほげほげ)色、塗る場所は床、面積はストーリーシートに書かれていたMAPを用いると
						<br />
						6×10=60㎡=600000㎠と求めることができます。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						しかし、ここで問題が起きます。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						塗る面積の枠が足りません。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						ペイン太使用書をよく見てみましょう。
					</Typography>
					<Box sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 2
				}}>
					<img src={Shiyousyo} alt="problem" style={{width: '80%', height: 'auto'}} />
				</Box>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						㎠のcに少し違和感がありますね。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						ここにこう足せば、0にできそうです。
					</Typography>
					<Box sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					gap: 2
				}}>
					<img src={Shiyousyo_zero} alt="problem" style={{width: '80%', height: 'auto'}} />
				</Box>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						ここを0にすれば、60㎡と書いて提出することができたのです！
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						つまり！今回の公演"Re:create~文化祭準備からの脱出"においては、
						<br />
						5問の謎を解いて日記を手に入れ、
						<br />
						4問の謎を解いて模様と色の対応を導き出し、
						<br />
						外装内装立て看を塗る面積を計算し、
						<br />
						モザイクアートのパズルを組み立て、
						<br />
						ピースを立てることでアートが過不足なく完成することと
						<br />
						境目が模様のひとつになっていることに気づき、
						<br />
						MAPを見て教室の床のサイズを計算し、
						<br />
						ペイン太使用書の違和感に気づき、
						<br />
						正しく記入して提出したチームこそが、真の成功チームとなったわけです。
					</Typography>
					<Typography variant="body1" sx={{fontFamily: 'serif', fontSize: '15px'}}>
						日記の最後のページをめくると、次の内容が書かれていました―
					</Typography>
					</Box>
				</Box>
				<Box sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					flexDirection: 'column',
				}}>
					<img src={Epilogue} alt="Epilogue" style={{width: '85%', height: 'auto'}} />
				</Box>
			</ThemeProvider>
		</div>
	);
}

export default EditorialContent
