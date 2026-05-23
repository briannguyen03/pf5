import { useState, useEffect } from 'react';
import { COLORS } from './constants/colors';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';

export default function App() {
  const [page, setPage] = useState('Home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div style={{ minHeight: '100vh', background: COLORS.bgDark }}>
      {page !== 'Home' && <Navbar page={page} setPage={setPage} />}

      {page === 'Home' && <HomePage setPage={setPage} />}
      {page === 'Projects' && <ProjectsPage />}
      {page === 'About' && <AboutPage />}
      {page === 'Contact' && <ContactPage />}
    </div>
  );
}
