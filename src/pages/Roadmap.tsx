import React from 'react';
import GlassPanel from '../components/GlassPanel';
import KenteDivider from '../components/KenteDivider';

const Roadmap = () => {
  return (
    <main className="flex-grow pt-[100px] pb-margin-desktop md:pt-[120px] px-gutter max-w-container-max mx-auto w-full">
      {/* Roadmap Section */}
      <section className="mb-margin-desktop relative">
        <div className="mb-12 text-center md:text-left">
          <span className="font-label-md text-secondary uppercase tracking-[0.2em] mb-4 block">Execution Plan</span>
          <h1 className="font-headline-xl text-on-surface mb-4">36 Months. <span className="italic text-secondary/90">Continental Scale.</span></h1>
          <p className="font-body-lg text-on-surface-variant max-w-3xl">
            We are not planning to build this. We have already started. P-Levy and Fin-Wrapped are live. Two hackathons won. The roadmap below takes what exists and scales it into a continent-defining institution.
          </p>
        </div>

        <KenteDivider className="mb-16" altStyle />

        <div className="space-y-8">
          {/* NOW */}
          <GlassPanel className="p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
            <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
              <div className="md:w-1/3">
                <h3 className="font-label-md text-secondary uppercase mb-2 tracking-widest">NOW — Q2 2026</h3>
                <h4 className="font-headline-lg text-on-surface mb-2">Foundation proved — Series A underway</h4>
              </div>
              <div className="md:w-2/3">
                <p className="font-body-md text-on-surface-variant mb-4">
                  P-Levy hackathon winner. Fin-Wrapped award-winning SDK. PRD complete. Regulatory dialogue initiated. $1B raise launched.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-surface-container border border-outline/30 rounded font-label-md text-xs text-on-surface uppercase tracking-wider">P-Levy MVP Live</span>
                  <span className="px-3 py-1 bg-surface-container border border-outline/30 rounded font-label-md text-xs text-on-surface uppercase tracking-wider">Fin-Wrapped SDK Live</span>
                  <span className="px-3 py-1 bg-surface-container border border-outline/30 rounded font-label-md text-xs text-on-surface uppercase tracking-wider">2× Hackathon Wins</span>
                  <span className="px-3 py-1 bg-surface-container border border-outline/30 rounded font-label-md text-xs text-on-surface uppercase tracking-wider">MIT RAISE Partner</span>
                </div>
              </div>
            </div>
            <span className="material-symbols-outlined absolute bottom-4 right-4 text-9xl text-white/5 opacity-10 pointer-events-none -rotate-12">play_arrow</span>
          </GlassPanel>

          {/* Phase I */}
          <GlassPanel className="p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-70"></div>
            <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
              <div className="md:w-1/3">
                <h3 className="font-label-md text-primary uppercase mb-2 tracking-widest">Phase I — Months 1–6</h3>
                <h4 className="font-headline-lg text-on-surface mb-2">Core infrastructure</h4>
              </div>
              <div className="md:w-2/3">
                <p className="font-body-md text-on-surface-variant mb-4">
                  Regulatory, product, and first 10,000 users. BoG sandbox approval. Finly and Xcommerce public launch. Xvends in first 5 institutions. First bank integrations live. 10,000 active users across the ecosystem.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-surface-container border border-outline/30 rounded font-label-md text-xs text-on-surface-variant uppercase tracking-wider">BoG Sandbox</span>
                  <span className="px-3 py-1 bg-surface-container border border-outline/30 rounded font-label-md text-xs text-on-surface-variant uppercase tracking-wider">Finly Beta</span>
                  <span className="px-3 py-1 bg-surface-container border border-outline/30 rounded font-label-md text-xs text-on-surface-variant uppercase tracking-wider">Xcommerce 100 Sellers</span>
                  <span className="px-3 py-1 bg-surface-container border border-outline/30 rounded font-label-md text-xs text-on-surface-variant uppercase tracking-wider">Xvends Pilot</span>
                  <span className="px-3 py-1 bg-surface-container border border-outline/30 rounded font-label-md text-xs text-on-surface-variant uppercase tracking-wider">10K Users</span>
                </div>
              </div>
            </div>
            <span className="material-symbols-outlined absolute bottom-4 right-4 text-9xl text-white/5 opacity-10 pointer-events-none -rotate-12">rocket_launch</span>
          </GlassPanel>

          {/* Phase II */}
          <GlassPanel className="p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-tertiary opacity-50"></div>
            <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
              <div className="md:w-1/3">
                <h3 className="font-label-md text-tertiary uppercase mb-2 tracking-widest">Phase II — Months 7–18</h3>
                <h4 className="font-headline-lg text-on-surface mb-2">Flywheel activated</h4>
              </div>
              <div className="md:w-2/3">
                <p className="font-body-md text-on-surface-variant mb-4">
                  Investment rails and XLABS Accelerator launch. Xlevy infrastructure live. GSE pipeline active. XLABS Accelerator Fund launches — first 10 startups onboarded. X Shorts beta. 500,000 active users across the ecosystem.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-surface-container border border-outline/30 rounded font-label-md text-xs text-on-surface-variant uppercase tracking-wider">Xlevy Live</span>
                  <span className="px-3 py-1 bg-surface-container border border-outline/30 rounded font-label-md text-xs text-on-surface-variant uppercase tracking-wider">GSE Pipeline</span>
                  <span className="px-3 py-1 bg-surface-container border border-outline/30 rounded font-label-md text-xs text-on-surface-variant uppercase tracking-wider">Accelerator Cohort 1</span>
                  <span className="px-3 py-1 bg-surface-container border border-outline/30 rounded font-label-md text-xs text-on-surface-variant uppercase tracking-wider">X Shorts Beta</span>
                  <span className="px-3 py-1 bg-surface-container border border-outline/30 rounded font-label-md text-xs text-on-surface-variant uppercase tracking-wider">500K Users</span>
                </div>
              </div>
            </div>
            <span className="material-symbols-outlined absolute bottom-4 right-4 text-9xl text-white/5 opacity-10 pointer-events-none -rotate-12">loop</span>
          </GlassPanel>

          {/* Phase III */}
          <GlassPanel className="p-8 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-outline opacity-30"></div>
            <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between">
              <div className="md:w-1/3">
                <h3 className="font-label-md text-outline uppercase mb-2 tracking-widest">Phase III — Months 19–36</h3>
                <h4 className="font-headline-lg text-on-surface mb-2">Continental expansion</h4>
              </div>
              <div className="md:w-2/3">
                <p className="font-body-md text-on-surface-variant mb-4">
                  54 markets, 10M users, first African unicorn pipeline. Full ecosystem at continental scale. Expogen live across 20+ African markets. Xhomes pilot complete. 100 startups funded through XLABS Accelerator. 10M+ users. Series B launch.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-surface-container border border-outline/30 rounded font-label-md text-xs text-on-surface-variant uppercase tracking-wider">54-Market Rollout</span>
                  <span className="px-3 py-1 bg-surface-container border border-outline/30 rounded font-label-md text-xs text-on-surface-variant uppercase tracking-wider">Expogen Live</span>
                  <span className="px-3 py-1 bg-surface-container border border-outline/30 rounded font-label-md text-xs text-on-surface-variant uppercase tracking-wider">Xhomes Pilot</span>
                  <span className="px-3 py-1 bg-surface-container border border-outline/30 rounded font-label-md text-xs text-on-surface-variant uppercase tracking-wider">100 Startups Funded</span>
                  <span className="px-3 py-1 bg-surface-container border border-outline/30 rounded font-label-md text-xs text-on-surface-variant uppercase tracking-wider">10M+ Users</span>
                  <span className="px-3 py-1 bg-surface-container border border-outline/30 rounded font-label-md text-xs text-on-surface-variant uppercase tracking-wider">Series B</span>
                </div>
              </div>
            </div>
            <span className="material-symbols-outlined absolute bottom-4 right-4 text-9xl text-white/5 opacity-10 pointer-events-none -rotate-12">public</span>
          </GlassPanel>
        </div>
      </section>
    </main>
  );
};

export default Roadmap;