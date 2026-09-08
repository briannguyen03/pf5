import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import RacingLineBackground from './components/RacingLineBackground';

const PAGES = ['Home', 'About', 'Projects', 'Contact'];

const initialPage = PAGES.includes(new URLSearchParams(window.location.search).get('page'))
  ? new URLSearchParams(window.location.search).get('page')
  : 'Home';

export default function App() {
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/*
        Layer order (bottom → top):
        1. body background (#252525, set in index.css) — the page background
        2. RacingLineBackground (fixed canvas, z-index 1) — the racing line,
           lives above the flat background but below ALL page content
        3. page content (z-index 2)
      */}
      <RacingLineBackground />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {page !== 'Home' && <Navbar page={page} setPage={setPage} />}

        {page === 'Home' && <HomePage setPage={setPage} />}
        {page === 'Projects' && <ProjectsPage />}
        {page === 'About' && <AboutPage />}
        {page === 'Contact' && <ContactPage />}
      </div>
    </div>
  );
}
