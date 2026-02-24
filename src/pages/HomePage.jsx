import { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AnatomySection from '../components/AnatomySection';
import FeaturesSection from '../components/FeaturesSection';
import SpecsSection from '../components/SpecsSection';
import ComparisonTable from '../components/ComparisonTable';
import CTASection from '../components/CTASection';
import { useLocation } from 'react-router-dom';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <main>
      <HeroSection />
      <AnatomySection />
      <FeaturesSection />
      <SpecsSection />
      <ComparisonTable />
      <CTASection />
    </main>
  );
}
