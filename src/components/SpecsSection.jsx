import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const specs = [
  {
    num: '01',
    title: 'Spotify Sync',
    desc: 'Love your Spotify playlists? Keep them. Sync your entire Spotify library, playlists, and liked songs — then listen for free via YouTube or JioSaavn.',
    icon: 'sync',
    tagline: 'Best of Both Worlds',
    isInverted: false,
  },
  {
    num: '02',
    title: 'YT Music Login',
    desc: 'Sign in with your YouTube Music account to access your personal playlists, liked songs, and recommendations — all within Ragam, completely ad-free.',
    icon: 'login',
    tagline: 'Your Library, Unlocked',
    isInverted: false,
  },
  {
    num: '03',
    title: 'Guest Mode',
    desc: 'No Account? No Problem. Install and start listening immediately. Zero data tracking, no email spam, no sign-up walls. Your data stays yours.',
    icon: 'visibility_off',
    tagline: 'Privacy First',
    isInverted: false,
  },
  {
    num: '04',
    title: 'Synced Lyrics',
    desc: 'Never miss a beat. Real-time synced lyrics for millions of songs via LRCLIB — no proprietary lock-in, open-source lyrics for everyone.',
    icon: 'lyrics',
    tagline: 'Sing Along',
    isInverted: true,
  },
];

export default function SpecsSection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.from(card, {
          y: 120, opacity: 0, scale: 0.95,
          scrollTrigger: { trigger: card, start: 'top 85%', end: 'top 55%', scrub: 1 },
        });
        const numEl = card.querySelector('.spec-number');
        if (numEl) {
          gsap.from(numEl, {
            y: 30, opacity: 0,
            scrollTrigger: { trigger: card, start: 'top 80%', toggleActions: 'play none none reverse' },
            duration: 0.8, ease: 'power3.out', delay: i * 0.15,
          });
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="specs"
      ref={sectionRef}
      style={{
        borderBottom: '3px solid var(--border-subtle)',
        backgroundColor: 'var(--bg)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div className="md-grid-1" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', height: '100%', minHeight: '100vh' }}>
        {specs.map((spec, i) => {
          const accentColor = i % 2 === 0 ? 'var(--primary)' : 'var(--magenta)';
          const bgColor = i % 2 === 0 ? 'var(--bg)' : 'var(--bg-dark-accent)';
          
          return (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="group"
              style={{
                padding: '64px',
                borderRight: i % 2 === 0 ? '3px solid var(--border-subtle)' : 'none',
                borderBottom: i < 2 ? '3px solid var(--border-subtle)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                backgroundColor: bgColor,
                color: 'var(--text)',
                position: 'relative',
                overflow: 'hidden',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--bg-secondary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = bgColor;
              }}
            >
              {/* Background Icon replacing number */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.03, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '30rem', color: accentColor, transition: 'transform 1s', transform: 'scale(1)' }}>
                  {spec.icon}
                </span>
              </div>

              {/* Icon */}
              {spec.icon && (
                <div style={{ position: 'absolute', bottom: 16, left: 16, opacity: 0.1 }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '8rem', color: accentColor }}>{spec.icon}</span>
                </div>
              )}

              <div style={{ position: 'relative' }}>
                {/* Tagline */}
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: accentColor,
                  marginBottom: '16px',
                }}>
                  {spec.tagline}
                </div>
                <div
                  className="spec-number text-gradient"
                  style={{
                    fontSize: '4.5rem',
                    fontWeight: 700,
                    marginBottom: '32px',
                    fontStyle: 'italic',
                    borderBottom: `4px solid ${accentColor}`,
                    display: 'inline-block',
                    WebkitTextFillColor: 'transparent',
                    background: `linear-gradient(90deg, ${accentColor} 0%, #fff 100%)`,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                  }}
                >
                  {spec.num}.
                </div>
                <h3 className="md-text-3xl" style={{ fontSize: '2.5rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '24px', letterSpacing: '-0.02em' }}>
                  {spec.title}
                </h3>
                <p style={{ fontSize: '1.125rem', fontWeight: 500, lineHeight: 1.6, opacity: 0.8 }}>
                  {spec.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
