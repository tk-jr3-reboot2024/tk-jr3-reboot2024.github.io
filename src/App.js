import React, { useState } from 'react';
import Header from './components/Header';
import Sitemap from './components/Sitemap';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import A from './components/introduction/3A';
import B from './components/introduction/3B';
import C from './components/introduction/3C';
import './App.css';
import Content from './components/Content';
import Pictures from './components/pictures';
import Time from './components/time';
import News from './components/news';
import Googlecheck from './components/googlecheck';
import Bphoto from './components/introduction/3b-components/photo';
import Bnews from './components/introduction/3b-components/News';
import BLayout from './components/introduction/3b-components/layout';
import BLayout2 from './components/introduction/3b-components/layout2';
import Bnazotoki from './components/introduction/3b-components/nazotoki';
import Beditorial_form from './components/introduction/3b-components/smartphone/editorial/editorial_form';
import Beditorial from './components/introduction/3b-components/smartphone/editorial/editorial_content';
import Layoutdefault from './components/layout';
import CLayout from './components/introduction/3c-components/layout';
import CAbout from './components/introduction/3c-components/about';
import CStory from './components/introduction/3c-components/story';
import CTsukukoma from './components/introduction/3c-components/tsukukoma';
import CMaking from './components/introduction/3c-components/making';
import CAccess from './components/introduction/3c-components/access';
import CNews from './components/introduction/3c-components/News';
import CNews1 from './components/introduction/3c-components/news/1';
import CNews2 from './components/introduction/3c-components/news/2';

const Introduction = () => {
	return (
		<Routes>
			<Route path="a" element={<A />} />
		</Routes>
	);
};

function App() {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [isIntroductionOpensub, setIsIntroductionOpensub] = useState(false);
	const handleIntroductionClick = () => {
		setIsIntroductionOpensub(true); // サブメニューを表示
	};
	const handleBackClick = () => {
		setIsIntroductionOpensub(false);
	};
	const toggleDrawer = (open) => (event) => {
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
			return;
		}
		setIsDrawerOpen(open);
		if (!open) {
			setTimeout(function () {
				handleBackClick();
			}, 100);
		}
	};
	return (
		<Router>
			<Header toggleDrawer={toggleDrawer} />
			<Sitemap toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} isIntroductionOpensub={isIntroductionOpensub} handleIntroductionClick={handleIntroductionClick} handleBackClick={handleBackClick} />
			<Routes>
				<Route path="/time" element={<Layoutdefault><Time /></Layoutdefault>} />
				<Route path="/photos" element={<Layoutdefault><Pictures /></Layoutdefault>} />
				<Route path="/" element={<Layoutdefault><Content /></Layoutdefault>} />
				<Route parh="/news" element={<Layoutdefault><News /></Layoutdefault>} />
				<Route path="/google2f0d70d16e373356.txt" element={<Googlecheck />} />
			</Routes>
			<Routes>
				<Route path="introduction/b" element={<BLayout2><B /></BLayout2>} />
				<Route path="introduction/b/photo" element={<BLayout><Bphoto /></BLayout>} />
				<Route path="introduction/b/news" element={<BLayout><Bnews box_width='96%' /></BLayout>} />
				<Route path="introduction/b/editorial_form" element={<BLayout><Beditorial_form /></BLayout>} />
				<Route path="introduction/b/editorial" element={<BLayout2><Beditorial /></BLayout2>} />
			</Routes>
			<Routes>
				<Route path="/introduction/*" element={<Introduction />} />
			</Routes>
			<Routes>
				<Route path="introduction/c" element={<CLayout><C /></CLayout>} />
				<Route path="introduction/c/about" element={<CLayout><CAbout /></CLayout>} />
				<Route path="introduction/c/story" element={<CLayout><CStory /></CLayout>} />
				<Route path="introduction/c/tsukukoma" element={<CLayout><CTsukukoma /></CLayout>} />
				<Route path="introduction/c/making" element={<CLayout><CMaking /></CLayout>} />
				<Route path="introduction/c/access" element={<CLayout><CAccess /></CLayout>} />
				<Route path="introduction/c/news" element={<CLayout><CNews /></CLayout>} />
				<Route path="introduction/c/news/1" element={<CLayout><CNews1 /></CLayout>} />
				<Route path="introduction/c/news/2" element={<CLayout><CNews2 /></CLayout>} />
			</Routes>
		</Router>
	);
}

export default App;
