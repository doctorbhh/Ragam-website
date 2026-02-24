import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnatomySection() {
  const sectionRef = useRef(null);
  const bgTextRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const isoTopRef = useRef(null);
  const isoMidRef = useRef(null);
  const isoBotRef = useRef(null);
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgTextRef.current, {
        x: -300,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.from(card1Ref.current, {
        x: 200, opacity: 0, rotation: 5,
        scrollTrigger: { trigger: card1Ref.current, start: 'top 80%', end: 'top 50%', scrub: 1 },
      });

      gsap.from(card2Ref.current, {
        x: -200, opacity: 0, rotation: -5,
        scrollTrigger: { trigger: card2Ref.current, start: 'top 80%', end: 'top 50%', scrub: 1 },
      });

      // Left image parallax
      gsap.fromTo(leftImgRef.current,
        { y: 80, opacity: 0 },
        {
          y: -40, opacity: 1,
          scrollTrigger: { trigger: leftImgRef.current, start: 'top 90%', end: 'top 30%', scrub: 1 },
        }
      );

      // Right image parallax
      gsap.fromTo(rightImgRef.current,
        { y: 120, opacity: 0 },
        {
          y: -60, opacity: 1,
          scrollTrigger: { trigger: rightImgRef.current, start: 'top 90%', end: 'top 30%', scrub: 1 },
        }
      );

      // Isometric Layers EXPANSION Animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#iso-container',
          start: 'top 70%',
          end: 'bottom 40%',
          scrub: 1.5,
        }
      });

      tl.fromTo(isoTopRef.current, 
        { y: -80, x: -10, opacity: 0 },
        { y: -200, x: -30, opacity: 1, ease: 'none', duration: 1 }
      );
      
      tl.fromTo(isoMidRef.current,
        { y: 0, x: 0, opacity: 0 },
        { y: -40, x: 20, opacity: 1, ease: 'none', duration: 1 },
        "<"
      );

      tl.fromTo(isoBotRef.current,
        { y: 80, x: 10, opacity: 0 },
        { y: 120, x: 60, opacity: 1, ease: 'none', duration: 1 },
        "<"
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="anatomy"
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '160vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '192px',
        paddingBottom: '192px',
        borderBottom: '3px solid var(--border-subtle)',
        backgroundColor: 'var(--bg)',
        overflow: 'hidden',
      }}
    >
      {/* Background text */}
      <div
        ref={bgTextRef}
        style={{
          position: 'absolute',
          top: '50%',
          left: '30%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          opacity: 0.03,
          pointerEvents: 'none',
          transform: 'translateY(-50%)',
        }}
      >
        <h2
          style={{
            fontSize: '15vw',
            fontWeight: 900,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            whiteSpace: 'nowrap',
            color: 'var(--text)',
          }}
        >
          HYBRID ENGINE
        </h2>
      </div>

      {/* ── LEFT SIDE IMAGE (Desktop Frame) ── */}
      <div
        ref={leftImgRef}
        className="neo-brutal-shadow md-hide"
        style={{
          position: 'absolute',
          left: '80px',
          top: '10%',
          width: '420px',
          height: '260px',
          border: '3px solid var(--border)',
          backgroundColor: 'var(--card-bg)',
          zIndex: 5,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '8px',
          transformOrigin: 'top left',
          pointerEvents: 'auto',
        }}
        onMouseEnter={(e) => {
          gsap.to(e.currentTarget, {
            scale: 1.8,
            zIndex: 100,
            boxShadow: '0 25px 80px rgba(0,0,0,0.5)',
            duration: 0.5,
            ease: 'back.out(1.4)',
          });
        }}
        onMouseLeave={(e) => {
          gsap.to(e.currentTarget, {
            scale: 1,
            zIndex: 5,
            boxShadow: '6px 6px 0px 0px var(--shadow-color)',
            duration: 0.4,
            ease: 'power3.inOut',
          });
        }}
      >
        {/* Window chrome titlebar */}
        <div style={{
          height: '32px', backgroundColor: 'var(--bg-dark-accent)',
          borderBottom: '2px solid var(--border-subtle)',
          display: 'flex', alignItems: 'center', padding: '0 12px', gap: '6px', flexShrink: 0,
        }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ff5f57' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#febc2e' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#28c840' }} />
          <span style={{ marginLeft: 'auto', fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.05em' }}>Ragam Desktop</span>
        </div>
        <img src="/sr1.png" alt="Ragam Desktop Screenshot 1" style={{ width: '100%', flex: 1, objectFit: 'cover' }} />
      </div>

      {/* ── RIGHT SIDE IMAGE (Desktop Frame) ── */}
      <div
        ref={rightImgRef}
        className="neo-brutal-shadow md-hide"
        style={{
          position: 'absolute',
          right: '24px',
          top: '80%',
          width: '420px',
          height: '260px',
          border: '3px solid var(--border)',
          backgroundColor: 'var(--card-bg)',
          zIndex: 5,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '8px',
          transformOrigin: 'top right',
          pointerEvents: 'auto',
        }}
        onMouseEnter={(e) => {
          gsap.to(e.currentTarget, {
            scale: 1.8,
            zIndex: 100,
            boxShadow: '0 25px 80px rgba(0,0,0,0.5)',
            duration: 0.5,
            ease: 'back.out(1.4)',
          });
        }}
        onMouseLeave={(e) => {
          gsap.to(e.currentTarget, {
            scale: 1,
            zIndex: 5,
            boxShadow: '6px 6px 0px 0px var(--shadow-color)',
            duration: 0.4,
            ease: 'power3.inOut',
          });
        }}
      >
        {/* Window chrome titlebar */}
        <div style={{
          height: '32px', backgroundColor: 'var(--bg-dark-accent)',
          borderBottom: '2px solid var(--border-subtle)',
          display: 'flex', alignItems: 'center', padding: '0 12px', gap: '6px', flexShrink: 0,
        }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#ff5f57' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#febc2e' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: '#28c840' }} />
          <span style={{ marginLeft: 'auto', fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.05em' }}>Ragam Desktop</span>
        </div>
        <img src="/sr2.png" alt="Ragam Desktop Screenshot 2" style={{ width: '100%', flex: 1, objectFit: 'cover' }} />
      </div>

      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
          zIndex: 10,
        }}
      >
        {/* Card 01 - Multi-Source Engine */}
        <div
          ref={card1Ref}
          className="neo-brutal-shadow md-p-8"
          style={{
            maxWidth: '30rem',
            marginLeft: 'auto',
            border: '3px solid var(--border)',
            padding: '24px',
            backgroundColor: 'var(--card-bg)',
            marginBottom: '64px',
            transform: 'rotate(1deg) translateX(48px)',
            position: 'relative',
            zIndex: 40,
          }}
        >
          <h3
            className="md-text-xl"
            style={{
              fontSize: '1.875rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: '8px',
              color: 'var(--primary)',
            }}
          >
            01. Multi-Source Engine
          </h3>
          <p className="md-text-sm" style={{ fontSize: '1rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
            Unlike Spotify which relies on its own catalog, Ragam aggregates YouTube Music, YouTube, and JioSaavn.
            If a song is missing or low quality on one platform, Ragam finds it elsewhere — automatically.
          </p>
        </div>

        {/* Isometric layers showing 3 sources */}
        <div
          id="iso-container"
          style={{
            position: 'relative',
            height: '800px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            perspective: '1000px',
          }}
        >
          {/* Top - YouTube Music */}
          <div
            ref={isoTopRef}
            className="isometric-layer shadow-neon-cyan"
            style={{
              position: 'absolute',
              width: 320,
              height: 320,
              border: '3px solid var(--border)',
              backgroundColor: 'var(--iso-top-bg)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 30,
              transform: 'rotateX(51deg) rotateZ(43deg)',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '4rem', color: 'var(--primary)', marginBottom: '12px' }}>
              play_circle
            </span>
            <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              YouTube Music
            </span>
            <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', marginTop: '4px' }}>
              Primary Source
            </span>
          </div>

          {/* Mid - JioSaavn */}
          <div
            ref={isoMidRef}
            className="isometric-layer shadow-neon-magenta"
            style={{
              position: 'absolute',
              width: 320,
              height: 320,
              border: '3px solid var(--border)',
              backgroundColor: 'var(--iso-mid-bg)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 20,
              transform: 'rotateX(51deg) rotateZ(43deg)',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '4rem', color: 'var(--magenta)', marginBottom: '12px' }}>
              graphic_eq
            </span>
            <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              JioSaavn
            </span>
            <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', marginTop: '4px' }}>
              High Quality Audio
            </span>
          </div>

          {/* Bottom - YouTube Video */}
          <div
            ref={isoBotRef}
            className="isometric-layer"
            style={{
              position: 'absolute',
              width: 320,
              height: 320,
              border: '3px solid var(--border)',
              backgroundColor: 'var(--iso-bot-bg)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 10,
              transform: 'rotateX(51deg) rotateZ(43deg)',
              boxShadow: 'var(--iso-bot-shadow)',
            }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '4rem', color: 'var(--text)', marginBottom: '12px' }}>
              video_library
            </span>
            <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              YouTube Text/Video
            </span>
            <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--text-secondary)', marginTop: '4px' }}>
              Fallback Library
            </span>
          </div>
        </div>

        {/* Card 02 - The Advantage */}
        <div
          ref={card2Ref}
          className="neo-brutal-shadow-alt md-p-8"
          style={{
            maxWidth: '30rem',
            marginRight: 'auto',
            border: '3px solid #000',
            padding: '24px',
            backgroundColor: 'var(--primary)',
            marginTop: '0px',
            transform: 'rotate(-2deg) translateX(-48px)',
            position: 'relative',
            zIndex: 40,
          }}
        >
          <h3
            className="md-text-xl"
            style={{
              fontSize: '1.875rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: '8px',
              color: '#000',
            }}
          >
            02. The Hybrid Advantage
          </h3>
          <p className="md-text-sm" style={{ fontSize: '1rem', lineHeight: 1.6, color: 'rgba(0,0,0,0.8)' }}>
            Three sources. One unified stream. Every song finds its best quality match automatically —
            no gaps, no compromises, no missing tracks.
          </p>
        </div>
      </div>

      {/* Side arrows */}
      <div
        className="md-hide"
        style={{
          position: 'absolute',
          right: '40px',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          opacity: 0.15,
          zIndex: 2,
        }}
      >
        {[0, 1, 2].map((i) => (
          <span key={i} className="material-symbols-outlined" style={{ fontSize: '2.5rem', color: 'var(--text)' }}>
            north_east
          </span>
        ))}
      </div>
    </section>
  );
}
