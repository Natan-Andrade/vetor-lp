import React, { useEffect, Suspense, lazy } from 'react';

// Eagerly loaded components (Above the fold)
import Header from './components/Header';
import Hero from './components/Hero';

// Lazy loaded components (Below the fold)
const Problem = lazy(() => import('./components/Problem'));
const Solution = lazy(() => import('./components/Solution'));
const Demo = lazy(() => import('./components/Demo'));
const Benefits = lazy(() => import('./components/Benefits'));
const SocialProof = lazy(() => import('./components/SocialProof'));
const CTASection = lazy(() => import('./components/CTASection'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  useEffect(() => {
    // Analytics is loaded lazily via dynamic import to avoid blocking the main thread during initial load
    const loadAnalytics = async () => {
      const { initGA, logPageView } = await import('./utils/analytics');
      initGA('G-XXXXXXXXXX');
      logPageView();
    };

    // Request idle callback ensures it only loads when the browser is completely free
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => loadAnalytics());
    } else {
      setTimeout(loadAnalytics, 2000);
    }
  }, []);

  return (
    <div className="font-sans antialiased text-zinc-900 selection:bg-brand-100 selection:text-brand-900 min-h-screen flex justify-center px-0 sm:px-6 lg:px-8 bg-transparent">
      <div className="w-full max-w-[85rem] bg-white/90 sm:border-x border-grid min-h-screen relative shadow-none sm:shadow-[0_0_60px_rgba(0,0,0,0.03)] flex flex-col">
        <Header />

        <main className="flex-1 pt-16 flex flex-col gap-12 sm:gap-0 pb-12 sm:pb-0">
          <Hero />

          <Suspense fallback={<div className="h-32 flex items-center justify-center text-zinc-300 text-xs text-center p-20">Carregando experiência...</div>}>
            <div id="problema" className="section-optimize">
              <Problem />
            </div>
            <div id="solucao" className="section-optimize">
              <Solution />
            </div>
            <div className="section-optimize">
              <Demo />
            </div>
            <div id="benefits" className="section-optimize">
              <Benefits />
            </div>
            {/* <div className="section-optimize"><SocialProof /></div> */}
            <div className="section-optimize">
              <CTASection />
            </div>
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
}

export default App;
