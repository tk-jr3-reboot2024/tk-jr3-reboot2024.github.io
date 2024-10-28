import React, {useState} from 'react';
import Header from './components/Header';
import Sitemap from './components/Sitemap';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import A from './components/introduction/3A';
import B from './components/introduction/3B';
import C from './components/introduction/3C';
import './App.css';
import Content from './components/Content';
import Pictures from './components/pictures';
import Time from './components/time';
import News from './components/news';
import Bphoto from './components/introduction/3b-components/photo';
import Bnews from './components/introduction/3b-components/News';
import BLayout from './components/introduction/3b-components/layout';
import BLayout2 from './components/introduction/3b-components/layout2';
import Bnazotoki from './components/introduction/3b-components/nazotoki';
import Layoutdefault from './components/layout';
import CNews from './components/introduction/3c-components/News';

const Introduction = () => {
	return (
			<Routes>
				<Route path="a" element={<A />} />
				<Route path="c" element={<C />} />
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
		if(!open){
			setTimeout(function(){
				handleBackClick();
			},100);
		}
	};
	return (
		<Router>
			<Header toggleDrawer={toggleDrawer} />
			<Sitemap toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} isIntroductionOpensub={isIntroductionOpensub} handleIntroductionClick={handleIntroductionClick} handleBackClick={handleBackClick}/>
			<Routes>
				<Route path="/time" element={<Layoutdefault><Time /></Layoutdefault>} />
				<Route path="/photos" element={<Layoutdefault><Pictures /></Layoutdefault>} />
				<Route path="/" element={<Layoutdefault><Content /></Layoutdefault>} />
				<Route parh="/news" element={<Layoutdefault><News /></Layoutdefault>} />
			</Routes>
			<Routes>
				<Route path="introduction/b" element={<BLayout2><B /></BLayout2>} />
				<Route path="introduction/b/photo" element={<BLayout><Bphoto /></BLayout>} />
				<Route path="introduction/b/news" element={<BLayout><Bnews box_width='96%' /></BLayout>} />
				<Route path="introduction/b/nazotoki" element={<BLayout><Bnazotoki /></BLayout>} />
			</Routes>
			<Routes>
				<Route path="/introduction/*" element={<Introduction />} />
				<Route path="/introduction/c/news" element={<CNews />}/>
			</Routes>
		</Router>
	);
}

export default App;
