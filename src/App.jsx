import { useState, useEffect } from 'react';
import { COLORS } from './constants/colors';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import EtchingBackground from './components/EtchingBackground';

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
    <div style={{ minHeight: '100vh', background: COLORS.bgDark, position: 'relative' }}>
      {page !== 'Home' && <Navbar page={page} setPage={setPage} />}

      {page === 'Home' && <HomePage setPage={setPage} />}
      {page === 'Projects' && <ProjectsPage />}
      {page === 'About' && <AboutPage />}
      {page === 'Contact' && <ContactPage />}

      <EtchingBackground />
    </div>
  );
}
