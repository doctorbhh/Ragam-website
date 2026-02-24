import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { name: 'Ad-Free Listening', spotify: false, ragam: true },
  { name: 'Audio Quality', spotify: '160kbps', ragam: '320kbps' },
  { name: 'Downloads', spotify: false, ragam: 'Real Files (.m4a)' },
  { name: 'Spotify Playlists', spotify: true, ragam: 'Synced' },
  { name: 'Skip Limit', spotify: '6 / hour', ragam: 'Unlimited' },
  { name: 'Lyrics', spotify: true, ragam: 'Synced (LRCLIB)' },
  { name: 'Account Required', spotify: true, ragam: false },
];

export default function ComparisonTable() {
  const sectionRef = useRef(null);
  const rowsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      rowsRef.current.forEach((row, i) => {
        if (!row) return;
        gsap.from(row, {
          y: 30,
          opacity: 0,
          duration: 0.5,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="comparison"
      ref={sectionRef}
      style={{
        padding: '128px 24px',
        backgroundColor: 'var(--bg)',
        borderBottom: '3px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div style={{ maxWidth: '1000px', width: '100%' }}>
        <h2
          className="md-text-4xl md-mb-8"
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 700,
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: '64px',
            color: 'var(--text)',
            letterSpacing: '-0.02em',
          }}
        >
          Why Switch?
        </h2>

        <div style={{ overflowX: 'auto', width: '100%' }}>
          <div className="neo-brutal-shadow-lg" style={{ minWidth: '600px', border: '3px solid var(--border)', backgroundColor: 'var(--card-bg)' }}>
          {/* Header */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', borderBottom: '3px solid var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
            <div style={{ padding: '24px', fontWeight: 700, fontSize: '1.25rem', color: 'var(--text)' }}>FEATURE</div>
            <div style={{ padding: '24px', fontWeight: 700, fontSize: '1.25rem', color: 'var(--text-muted)', textAlign: 'center', borderLeft: '3px solid var(--border)' }}>SPOTIFY FREE</div>
            <div style={{ padding: '24px', fontWeight: 900, fontSize: '1.25rem', color: '#000', textAlign: 'center', borderLeft: '3px solid var(--border)', backgroundColor: 'var(--primary)' }}>RAGAM</div>
          </div>

          {/* Rows */}
          {features.map((item, i) => (
            <div
              key={i}
              ref={(el) => (rowsRef.current[i] = el)}
              style={{
                display: 'grid',
                gridTemplateColumns: '1.5fr 1fr 1fr',
                borderBottom: i === features.length - 1 ? 'none' : '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ padding: '24px', fontWeight: 600, color: 'var(--text)' }}>{item.name}</div>

              <div style={{
                padding: '24px', textAlign: 'center', borderLeft: '3px solid var(--border)',
                color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {item.spotify === false ? <span className="material-icons" style={{ color: '#ef4444' }}>close</span> :
                  item.spotify === true ? <span className="material-icons" style={{ color: '#22c55e' }}>check</span> :
                    item.spotify}
              </div>

              <div style={{
                padding: '24px', textAlign: 'center', borderLeft: '3px solid var(--border)', backgroundColor: 'rgba(242,242,13,0.05)',
                fontWeight: 700, color: 'var(--text)', display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                {item.ragam === false ? <span className="material-icons" style={{ color: '#ef4444' }}>close</span> :
                  item.ragam === true ? <span className="material-icons" style={{ color: '#22c55e', fontSize: '1.5rem', fontWeight: 900 }}>check</span> :
                    item.ragam}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
