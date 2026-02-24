import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

export default function Footer() {
  const footerRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(footerRef.current.children, {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    }, footerRef);
    return () => ctx.revert();
  }, []);

  const linkStyle = {
    color: 'var(--footer-muted)',
    textDecoration: 'none',
    fontSize: '1.125rem',
    transition: 'color 0.2s',
    cursor: 'pointer',
  };

  return (
    <footer
      ref={footerRef}
      className="md-p-8"
      style={{
        backgroundColor: 'var(--footer-bg)',
        color: 'var(--footer-text)',
        padding: '64px',
        position: 'relative',
        zIndex: 100,
        borderTop: '3px solid var(--border-subtle)',
      }}
    >
      <div className="md-flex-col" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '48px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
            <img src="/icon.png" alt="Ragam Logo" style={{ width: 40, height: 40, objectFit: 'contain' }} />
            <span className="md-text-3xl" style={{ fontSize: '2.5rem', fontWeight: 700, letterSpacing: '-0.05em', textTransform: 'uppercase' }}>Ragam</span>
          </div>
          <p style={{ color: 'var(--footer-muted)', fontWeight: 500, fontSize: '1.25rem', maxWidth: '20rem' }}>
            Sound architecture for the curious explorer.
          </p>
        </div>

        <div className="md-grid-1 md-gap-8" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '96px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <span style={{
              textTransform: 'uppercase', fontWeight: 700, color: 'var(--primary)',
              letterSpacing: '0.2em', fontSize: '0.875rem', borderBottom: '1px solid rgba(0,240,255,0.3)', paddingBottom: '8px',
            }}>Legal</span>
            <Link to="/privacy" style={linkStyle} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--footer-muted)'}>Privacy</Link>
            <Link to="/terms" style={linkStyle} onMouseEnter={(e) => e.target.style.color = 'var(--primary)'} onMouseLeave={(e) => e.target.style.color = 'var(--footer-muted)'}>Terms</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <span style={{
              textTransform: 'uppercase', fontWeight: 700, color: 'var(--magenta)',
              letterSpacing: '0.2em', fontSize: '0.875rem', borderBottom: '1px solid rgba(255,0,255,0.3)', paddingBottom: '8px',
            }}>Social</span>
            <a href="https://github.com/doctorbhh" style={linkStyle} onMouseEnter={(e) => e.target.style.color = 'var(--magenta)'} onMouseLeave={(e) => e.target.style.color = 'var(--footer-muted)'}>Github</a>
            
          </div>
        </div>
      </div>

      <div className="md-flex-col md-mt-8" style={{
        marginTop: '128px', paddingTop: '48px', borderTop: '1px solid var(--footer-border)',
        display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '24px',
        fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.3em',
      }}>
        <span style={{ opacity: 0.3 }}>© 2026 Ragam.</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{
            backgroundColor: 'var(--footer-badge-bg)', padding: '8px 16px', border: '1px solid var(--footer-badge-border)',
            color: 'var(--footer-muted)',
          }}>V1.0.0 -STABLE</span>
          
        </div>
      </div>
    </footer>
  );
}
