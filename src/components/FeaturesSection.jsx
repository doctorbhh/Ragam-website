import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const iconLeftRef = useRef(null);
  const iconRightRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
        x: -300, opacity: 0,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'top 30%', scrub: 1 },
      });
      gsap.from(rightRef.current, {
        x: 300, opacity: 0,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%', end: 'top 30%', scrub: 1 },
      });
      gsap.to(iconLeftRef.current, {
        rotation: 360,
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 2 },
      });
      gsap.to(iconRightRef.current, {
        rotation: -360,
        scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', end: 'bottom top', scrub: 2 },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="features"
      ref={sectionRef}
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        borderBottom: '3px solid var(--border-subtle)',
        overflow: 'hidden',
        minHeight: '100vh',
      }}
    >
      {/* TRUE DOWNLOADS - Left */}
      <div
        ref={leftRef}
        className="group"
        style={{
          backgroundColor: 'var(--bg)',
          padding: '64px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderRight: '3px solid var(--border-subtle)',
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.05, pointerEvents: 'none' }}>
          <span className="material-symbols-outlined" style={{ fontSize: '30rem', color: 'var(--primary)', transition: 'transform 1s', transform: 'scale(1)' }}>download</span>
        </div>
        <div style={{ position: 'relative' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 7vw, 7rem)',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '-0.05em',
            lineHeight: 1,
            fontStyle: 'italic',
            marginBottom: '48px',
            transform: 'translateX(-4%)',
            color: 'var(--text)',
            textShadow: '0 0 10px rgba(0, 240, 255, 0.2)'
          }}>Real Downloads</h2>
          <div style={{ maxWidth: '24rem', marginLeft: 'auto', textAlign: 'right', borderRight: '4px solid var(--primary)', paddingRight: '24px' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 700, lineHeight: 1.4, color: 'var(--text)' }}>
              Don't just rent your music. Download tracks as real .m4a audio files directly to your device storage.
            </p>
          </div>
          <div style={{
            marginTop: '32px',
            maxWidth: '24rem',
            marginLeft: 'auto',
            textAlign: 'right',
            paddingRight: '24px',
          }}>
            <p style={{ fontSize: '1rem', lineHeight: 1.5, color: 'var(--text-secondary)' }}>
              Share them, copy to PC, play in any app. Your files, your rules. Saved to /Music/Ragam on Android.
            </p>
          </div>
        </div>
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div
            ref={iconLeftRef}
            className="neo-brutal-shadow"
            style={{
              height: 96, width: 96, border: '3px solid var(--primary)', backgroundColor: 'var(--bg)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(6deg)',
            }}
          >
            <span className="material-icons" style={{ fontSize: '3rem', color: 'var(--primary)' }}>save_alt</span>
          </div>
          <div style={{ fontSize: '0.875rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', transform: 'rotate(90deg)', transformOrigin: 'right center', whiteSpace: 'nowrap', color: 'var(--primary)' }}>
            Own Your Music
          </div>
        </div>
      </div>

      {/* AD-FREE 320kbps - Right */}
      <div
        ref={rightRef}
        className="group"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          padding: '64px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '100vh',
          color: 'var(--text)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.05, pointerEvents: 'none' }}>
          <span className="material-symbols-outlined" style={{ fontSize: '30rem', color: 'var(--magenta)', transition: 'transform 1s', transform: 'scale(1)' }}>headphones</span>
        </div>
        <div style={{ position: 'relative', textAlign: 'right' }}>
          <h2 style={{
            fontSize: 'clamp(2.5rem, 7vw, 7rem)',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '-0.05em',
            lineHeight: 1,
            fontStyle: 'italic',
            marginBottom: '48px',
            transform: 'translateX(4%)',
            color: 'var(--text)',
            textShadow: '0 0 10px rgba(255, 0, 255, 0.2)'
          }}>320kbps Free</h2>
          <div style={{ maxWidth: '24rem', borderLeft: '4px solid var(--magenta)', paddingLeft: '24px', textAlign: 'left' }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 700, lineHeight: 1.4, color: 'var(--text-secondary)' }}>
              Experience music the way it was meant to be heard. Free High-Fidelity 320kbps streaming — no subscription.
            </p>
          </div>
          <div style={{
            marginTop: '32px',
            maxWidth: '24rem',
            borderLeft: '4px solid transparent',
            paddingLeft: '24px',
            textAlign: 'left',
          }}>
            <p style={{ fontSize: '1rem', lineHeight: 1.5, opacity: 0.6, color: 'var(--text-muted)' }}>
              Most free apps cap quality at 128kbps. Ragam leverages JioSaavn to offer premium audio quality with zero ads, zero interruptions.
            </p>
          </div>
        </div>
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', transform: 'rotate(-90deg)', transformOrigin: 'left center', whiteSpace: 'nowrap', color: 'var(--magenta)' }}>
            Zero Ads • Zero Cost
          </div>
          <div
            ref={iconRightRef}
            className="neo-brutal-shadow"
            style={{
              height: 96, width: 96, border: '3px solid var(--magenta)', backgroundColor: 'var(--bg)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'rotate(-6deg)',
              boxShadow: '6px 6px 0px 0px var(--magenta)',
            }}
          >
            <span className="material-icons" style={{ fontSize: '3rem', color: 'var(--magenta)' }}>volume_up</span>
          </div>
        </div>
      </div>
    </section>
  );
}
