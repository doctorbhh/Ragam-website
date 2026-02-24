import { useEffect } from 'react';

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ padding: '128px 24px', maxWidth: '800px', margin: '0 auto', minHeight: '100vh', color: 'var(--text)' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '-0.02em', color: 'var(--magenta)', textShadow: '0 0 10px rgba(255, 0, 255, 0.2)' }}>Terms of Service</h1>
      <div style={{ fontSize: '1.125rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
        <p style={{ marginBottom: '24px' }}>Last updated: February 2026</p>
        
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: 'var(--text)' }}>1. Acceptance of Terms</h2>
        <p style={{ marginBottom: '24px' }}>By downloading, installing, or using the Ragam application, you agree to comply with and be bound by these Terms of Service. If you do not agree, please do not use the application.</p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: 'var(--text)' }}>2. Use of the Application</h2>
        <p style={{ marginBottom: '24px' }}>Ragam is an independent music client. It aggregates public audio streams and APIs provided by third parties (like YouTube and JioSaavn).</p>
        <ul style={{ marginBottom: '24px', paddingLeft: '24px' }}>
          <li>You are solely responsible for ensuring that your use of the application complies with the local laws of your jurisdiction regarding copyright and digital media.</li>
          <li>Ragam does not host any copyrighted media on its own servers. All content is streamed directly from third-party platforms.</li>
          <li>The downloaded `.m4a` files are intended strictly for personal, offline, non-commercial use.</li>
        </ul>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: 'var(--text)' }}>3. Disclaimer of Warranties</h2>
        <p style={{ marginBottom: '24px' }}>Ragam is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that the application will always be available, secure, or free from bugs.</p>

        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginTop: '48px', marginBottom: '16px', color: 'var(--text)' }}>4. Limitation of Liability</h2>
        <p style={{ marginBottom: '24px' }}>To the maximum extent permitted by law, the creators of Ragam shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use the application.</p>
      </div>
    </main>
  );
}
