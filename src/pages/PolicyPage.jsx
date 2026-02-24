import { useEffect } from 'react';

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ padding: '128px 24px', maxWidth: '800px', margin: '0 auto', minHeight: '100vh', color: 'var(--text)' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '-0.02em', color: 'var(--primary)', textShadow: '0 0 10px rgba(0, 240, 255, 0.2)' }}>Privacy Policy</h1>
      <div style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
        <p style={{ marginBottom: '24px' }}>Last updated: February 2026</p>
        
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: 'var(--text)' }}>1. Introduction</h2>
        <p style={{ marginBottom: '24px' }}>Welcome to Ragam. This Privacy Policy outlines how we handle your personal data when you use our application. As a privacy-first music application, we design our software to minimize data collection.</p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: 'var(--text)' }}>2. Data We Collect (Or Don't)</h2>
        <p style={{ marginBottom: '24px' }}>Ragam is designed with "Guest Mode" as a core feature. When using Guest Mode:</p>
        <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
          <li>We do not collect any personal identifying information.</li>
          <li>Your listening history and downloaded files stay purely on your local device storage.</li>
          <li>We do not track your behavior across other apps or websites.</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: 'var(--text)' }}>3. Third-Party Integrations</h2>
        <p style={{ marginBottom: '24px' }}>If you choose to log in via YouTube Music or sync your Spotify library, you agree to their respective privacy policies. Ragam only acts as a pass-through client to fetch and synchronize your playlists and data directly to your device. We do not store your Spotify or Google account credentials on any external servers—they are kept securely on your local device.</p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: 'var(--text)' }}>4. Changes to This Policy</h2>
        <p style={{ marginBottom: '24px' }}>We may update this Privacy Policy from time to time depending on changes to our features or regulatory requirements. Continued use of Ragam implies your consent to any updated terms.</p>
      </div>
    </main>
  );
}
