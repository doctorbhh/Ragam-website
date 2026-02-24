import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useTheme } from '../context/ThemeContext';
import { useLocation, useNavigate, Link } from 'react-router-dom';

export default function Navbar() {
  const navRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
    );
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '16px 24px',
        borderBottom: '3px solid var(--border)',
        backgroundColor: scrolled ? 'var(--nav-bg-scrolled)' : 'var(--nav-bg)',
        backdropFilter: 'blur(12px)',
        transition: 'background-color 0.3s ease',
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
        <img src="/icon.png" alt="Ragam Logo" style={{ width: 40, height: 40, objectFit: 'contain' }} />
        <span
          style={{
            fontSize: '1.5rem',
            fontWeight: 700,
            letterSpacing: '-0.05em',
            textTransform: 'uppercase',
            color: 'var(--text)',
          }}
        >
          Ragam
        </span>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <a
          onClick={() => scrollToSection('anatomy')}
          style={{
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            padding: '0 8px',
            textDecoration: 'none',
            color: 'var(--text)',
            cursor: 'pointer',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.target.style.color = 'var(--primary)')}
          onMouseLeave={(e) => (e.target.style.color = 'var(--text)')}
        >
          Journey
        </a>
        <a
          onClick={() => scrollToSection('specs')}
          style={{
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            padding: '0 8px',
            textDecoration: 'none',
            color: 'var(--text)',
            cursor: 'pointer',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.target.style.color = 'var(--magenta)')}
          onMouseLeave={(e) => (e.target.style.color = 'var(--text)')}
        >
          Nodes
        </a>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="theme-toggle"
          title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '1.2rem' }}>
            {isDark ? 'light_mode' : 'dark_mode'}
          </span>
        </button>

        <a
          onClick={() => scrollToSection('cta')}
          className="neo-brutal-shadow-alt magnetic-btn bg-neon-gradient"
          style={{
            border: '2px solid var(--border)',
            padding: '8px 24px',
            fontWeight: 700,
            textTransform: 'uppercase',
            textDecoration: 'none',
            color: '#000',
            cursor: 'pointer',
          }}
        >
          Download
        </a>
      </div>
    </nav>
  );
}
