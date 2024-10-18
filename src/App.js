import React, {useState} from 'react';
import Header from './components/Header';
import Sitemap from './components/Sitemap';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import A from './components/introduction/3A';
import B from './components/introduction/3B';
import C from './components/introduction/3C';
import './App.css';
import Content from './components/Content';
import Pictures from './components/pictures';
import Time from './components/time';

const Introduction = () => {
  return (
      <Routes>
        <Route path="a" element={<A />} />
        <Route path="b" element={<B />} />
        <Route path="c" element={<C />} />
      </Routes>
  );
};

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };
  return (
    <Router>
      <Header toggleDrawer={toggleDrawer} />
      <Sitemap toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />
      <main style={{ padding: '24px', marginTop: '64px' }}>
        <Routes>
          <Route path="/introduction/*" element={<Introduction />} />
          <Route path="/time" element={<Time />} />
          <Route path="/pictures" element={<Pictures />} />
          <Route path="/" element={<Content />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;