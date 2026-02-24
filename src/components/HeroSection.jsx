import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const ghostRef = useRef(null);
  const headlineRef = useRef(null);
  const cardRef = useRef(null);
  const shape1Ref = useRef(null);
  const shape2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(ghostRef.current, {
        y: -200,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.from(headlineRef.current.children, {
        y: 100,
        opacity: 0,
        rotationX: 15,
        stagger: 0.15,
        duration: 1.2,
        ease: 'power4.out',
        delay: 0.5,
      });

      gsap.from(cardRef.current, {
        y: 80,
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: 'power3.out',
        delay: 1,
      });

      gsap.to(shape1Ref.current, {
        y: -150,
        rotation: 45,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 2,
        },
      });

      gsap.to(shape2Ref.current, {
        y: -100,
        rotation: -30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="grid-line-glow"
      style={{
        position: 'relative',
        minHeight: '100vh',
        paddingTop: '140px',
        paddingBottom: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '3px solid var(--border)',
        overflow: 'hidden',
        backgroundColor: 'var(--bg)',
      }}
    >
      {/* Ghost text */}
      <div
        ref={ghostRef}
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <span
          className="ghost-text"
          style={{ 
            fontSize: '30vw', 
            fontWeight: 700, 
            lineHeight: 1, 
            userSelect: 'none',
            color: 'var(--ghost-text-color)',
            textShadow: 'var(--ghost-text-shadow)'
          }}
        >
          RAGAM
        </span>
      </div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px', width: '100%' }}>
        <h1
          ref={headlineRef}
          style={{
            fontSize: 'clamp(3rem, 9vw, 8rem)',
            fontWeight: 700,
            lineHeight: 0.9,
            textTransform: 'uppercase',
            letterSpacing: '-0.05em',
            fontStyle: 'italic',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <span style={{ transform: 'translateX(-4%)', marginBottom: '16px', color: 'var(--text)', textShadow: 'var(--hero-text-shadow)' }}>
            Music
          </span>
          <span
            className="bg-neon-gradient"
            style={{
              padding: '8px 40px',
              border: '3px solid var(--border)',
              transform: 'translateX(4%) rotate(2deg)',
              display: 'inline-block',
              color: '#000',
              boxShadow: 'var(--hero-text-shadow)'
            }}
          >
            Liberated
          </span>
        </h1>

        <div
          ref={cardRef}
          className="neo-brutal-shadow-lg"
          style={{
            marginTop: '64px',
            maxWidth: '38rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            border: '3px solid var(--border)',
            padding: '32px',
            backgroundColor: 'var(--card-bg)',
            position: 'relative',
            overflow: 'hidden',
            textAlign: 'left',
            boxShadow: 'var(--hero-card-shadow)',
          }}
        >
          <div style={{ position: 'absolute', top: '12px', right: '12px', opacity: 0.3, color: 'var(--text)' }}>
            <span className="material-symbols-outlined">south_east</span>
          </div>
          <p style={{ fontSize: '1.2rem', fontWeight: 500, lineHeight: 1.6, color: '#d4d4d8' }}>
            The entire music internet, combined. Stream from YouTube Music, YouTube, or JioSaavn instantly.
            No ads. No subscription. Real downloads. Premium quality — free forever.
          </p>
        </div>

        <div
          className="discovery-hint"
          style={{
            marginTop: '80px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            style={{
              fontSize: '0.875rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              opacity: 0.5,
              color: 'var(--text)',
            }}
          >
            Discover
          </span>
          <span className="material-symbols-outlined" style={{ 
            fontSize: '3rem', 
            color: 'var(--primary)',
            filter: 'drop-shadow(0 0 10px rgba(0,240,255,0.8))'
          }}>
            expand_more
          </span>
        </div>
      </div>

      {/* Floating shapes */}
      <div ref={shape1Ref} style={{ position: 'absolute', top: '25%', left: '25%' }}>
        <div
          style={{
            width: 128,
            height: 128,
            border: '3px solid var(--border-subtle)',
            transform: 'rotate(12deg)',
          }}
        />
      </div>
      <div ref={shape2Ref} style={{ position: 'absolute', bottom: '25%', right: '25%' }}>
        <div
          style={{
            width: 192,
            height: 192,
            border: '3px solid var(--border-faint)',
            transform: 'rotate(-45deg)',
            borderRadius: '50%',
          }}
        />
      </div>
    </section>
  );
}
