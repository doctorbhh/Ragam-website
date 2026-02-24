import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Force HMR update
export default function CTASection() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const btn1Ref = useRef(null);
  const btn2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        scale: 0.85, opacity: 0, y: 80,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'top 30%', scrub: 1 },
      });
      gsap.fromTo([btn1Ref.current, btn2Ref.current], 
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, stagger: 0.2,
          scrollTrigger: { trigger: cardRef.current, start: 'top 60%', toggleActions: 'play none none reverse' },
          duration: 0.8, ease: 'power3.out',
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="cta"
      ref={sectionRef}
      className="grid-line-glow"
      style={{
        padding: '192px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'var(--bg)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        ref={cardRef}
        className="neo-brutal-shadow-lg"
        style={{
          maxWidth: '64rem',
          width: '100%',
          border: '3px solid var(--border)',
          padding: '64px',
          backgroundColor: 'var(--card-bg)',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: 'var(--hero-card-shadow)',
        }}
      >
        {/* Sensor icon */}
        <div style={{ position: 'absolute', top: '-40px', right: '-40px', pointerEvents: 'none' }}>
          <span className="material-symbols-outlined" style={{ fontSize: '20rem', color: 'var(--ghost)', transform: 'rotate(12deg)' }}>sensors</span>
        </div>

        <div style={{ position: 'relative', zIndex: 10 }}>
          <h2 style={{
            fontSize: 'clamp(3rem, 7vw, 6rem)',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '-0.05em',
            lineHeight: 1,
            marginBottom: '40px',
            color: 'var(--text)',
          }}>
            Ready to <br /> 
            <span className="text-gradient" style={{ filter: 'drop-shadow(0 0 15px rgba(0, 240, 255, 0.3))' }}>
               Switch?
            </span>
          </h2>
          <p style={{
            fontSize: '1.5rem',
            fontWeight: 500,
            marginBottom: '64px',
            maxWidth: '42rem',
            margin: '0 auto 64px auto',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            fontStyle: 'italic',
          }}>
            Beautifully crafted. High fidelity. Zero cost.
            <br />
            <span style={{ color: 'var(--text)', fontWeight: 700 }}>No account required.</span>
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', justifyContent: 'center' }}>
            <button
              ref={btn1Ref}
              className="neo-brutal-shadow bg-neon-gradient"
              style={{
                color: '#000',
                padding: '20px 40px',
                fontSize: '1.25rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                border: '3px solid var(--border)',
                fontFamily: 'inherit',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--text)';
                e.currentTarget.style.color = '#000';
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '';
                e.currentTarget.style.color = '#000';
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 240, 255, 0.4)';
              }}
            >
              <span className="material-icons">android</span>
              Download for Android
            </button>
            <button
              ref={btn2Ref}
              className="neo-brutal-shadow"
              style={{
                backgroundColor: 'transparent',
                color: 'var(--text)',
                padding: '20px 40px',
                fontSize: '1.25rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                border: '3px solid var(--border)',
                fontFamily: 'inherit',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--text)';
                e.currentTarget.style.color = 'var(--bg)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'var(--text)';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <span className="material-symbols-outlined">desktop_windows</span>
              Download for Windows
            </button>
          </div>
        </div>
      </div>

      <div 
        className="discovery-hint" 
        style={{ marginTop: '128px', cursor: 'pointer' }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '3.75rem', color: 'var(--primary)', filter: 'drop-shadow(0 0 10px rgba(0, 240, 255, 0.8))' }}>
          expand_less
        </span>
      </div>
    </section>
  );
}
