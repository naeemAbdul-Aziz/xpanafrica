import React from 'react';
import KenteDivider from '../components/KenteDivider';

const Roadmap = () => {
  return (
    <main className="flex-grow pt-[100px] pb-margin-desktop md:pt-[120px] px-gutter max-w-container-max mx-auto w-full">
      <section className="py-margin-desktop relative">
        <div className="mb-16">
          <span className="font-label-md text-secondary uppercase tracking-[0.2em] mb-4 block">Execution Plan</span>
          <h2 className="font-headline-xl text-on-surface mb-4">36 Months. Continental Scale.</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl">
            We are not planning to build this. We have already started. P-Levy and Fin-Wrapped are live. Two hackathons won. The roadmap below takes what exists and scales it into a continent-defining institution.
          </p>

          <KenteDivider className="mb-16 mt-12" altStyle />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* NOW */}
          <div className="bg-surface-container/60 backdrop-blur-md border border-secondary/30 rounded-lg p-8 relative overflow-hidden group shadow-[0_0_30px_rgba(254,183,0,0.05)]">
            <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>
            <h3 className="font-label-md text-secondary uppercase mb-2 tracking-widest">NOW — Q2 2026</h3>
            <h4 className="font-headline-md text-on-surface mb-4">Foundation proved — Series A underway</h4>
            <p className="font-body-md text-on-surface-variant mb-6">
              P-Levy hackathon winner. Fin-Wrapped award-winning SDK. PRD complete. Regulatory dialogue initiated. $1B raise launched.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-2 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded font-label-md text-xs">P-Levy MVP Live</span>
              <span className="px-2 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded font-label-md text-xs">Fin-Wrapped SDK Live</span>
              <span className="px-2 py-1 bg-surface-variant text-on-surface border border-outline/30 rounded font-label-md text-xs">2× Hackathon Wins</span>
              <span className="px-2 py-1 bg-surface-variant text-on-surface border border-outline/30 rounded font-label-md text-xs">MIT RAISE Partner</span>
            </div>
            <span className="material-symbols-outlined absolute bottom-4 right-4 text-8xl text-secondary/5 group-hover:text-secondary/10 transition-colors">flag</span>
          </div>

          {/* Phase I */}
          <div className="bg-surface-container/40 backdrop-blur-md border border-outline/20 rounded-lg p-8 relative overflow-hidden group hover:border-primary/30 transition-colors">
            <h3 className="font-label-md text-primary uppercase mb-2 tracking-widest">Phase I — Months 1–6</h3>
            <h4 className="font-headline-md text-on-surface mb-4">Core infrastructure: regulatory, product, and first 10,000 users</h4>
            <p className="font-body-md text-on-surface-variant mb-6">
              BoG sandbox approval. Finly and Xcommerce public launch. Xvends in first 5 institutions. First bank integrations live. 10,000 active users across the ecosystem.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-2 py-1 bg-surface-variant text-on-surface border border-outline/30 rounded font-label-md text-xs">BoG Sandbox</span>
              <span className="px-2 py-1 bg-surface-variant text-on-surface border border-outline/30 rounded font-label-md text-xs">Finly Beta</span>
              <span className="px-2 py-1 bg-surface-variant text-on-surface border border-outline/30 rounded font-label-md text-xs">Xcommerce 100 Sellers</span>
              <span className="px-2 py-1 bg-surface-variant text-on-surface border border-outline/30 rounded font-label-md text-xs">Xvends Pilot</span>
              <span className="px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded font-label-md text-xs">10K Users</span>
            </div>
            <span className="material-symbols-outlined absolute bottom-4 right-4 text-8xl text-primary/5 group-hover:text-primary/10 transition-colors">rocket_launch</span>
          </div>

          {/* Phase II */}
          <div className="bg-surface-container/40 backdrop-blur-md border border-outline/20 rounded-lg p-8 relative overflow-hidden group hover:border-tertiary/30 transition-colors">
            <h3 className="font-label-md text-tertiary uppercase mb-2 tracking-widest">Phase II — Months 7–18</h3>
            <h4 className="font-headline-md text-on-surface mb-4">Flywheel activated: investment rails and XLABS Accelerator launch</h4>
            <p className="font-body-md text-on-surface-variant mb-6">
              Xlevy infrastructure live. GSE pipeline active. XLABS Accelerator Fund launches — first 10 startups onboarded. X Shorts beta. 500,000 active users across the ecosystem.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-2 py-1 bg-surface-variant text-on-surface border border-outline/30 rounded font-label-md text-xs">Xlevy Live</span>
              <span className="px-2 py-1 bg-surface-variant text-on-surface border border-outline/30 rounded font-label-md text-xs">GSE Pipeline</span>
              <span className="px-2 py-1 bg-surface-variant text-on-surface border border-outline/30 rounded font-label-md text-xs">Accelerator Cohort 1</span>
              <span className="px-2 py-1 bg-surface-variant text-on-surface border border-outline/30 rounded font-label-md text-xs">X Shorts Beta</span>
              <span className="px-2 py-1 bg-tertiary/10 text-tertiary border border-tertiary/20 rounded font-label-md text-xs">500K Users</span>
            </div>
            <span className="material-symbols-outlined absolute bottom-4 right-4 text-8xl text-tertiary/5 group-hover:text-tertiary/10 transition-colors">autorenew</span>
          </div>

          {/* Phase III */}
          <div className="bg-surface-container/40 backdrop-blur-md border border-outline/20 rounded-lg p-8 relative overflow-hidden group hover:border-secondary/30 transition-colors lg:col-span-1 md:col-span-2">
            <h3 className="font-label-md text-on-surface-variant uppercase mb-2 tracking-widest">Phase III — Months 19–36</h3>
            <h4 className="font-headline-md text-on-surface mb-4">Continental expansion: 54 markets, 10M users, first African unicorn pipeline</h4>
            <p className="font-body-md text-on-surface-variant mb-6">
              Full ecosystem at continental scale. Expogen live across 20+ African markets. Xhomes pilot complete. 100 startups funded through XLABS Accelerator. 10M+ users. Series B launch.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-2 py-1 bg-surface-variant text-on-surface border border-outline/30 rounded font-label-md text-xs">54-Market Rollout</span>
              <span className="px-2 py-1 bg-surface-variant text-on-surface border border-outline/30 rounded font-label-md text-xs">Expogen Live</span>
              <span className="px-2 py-1 bg-surface-variant text-on-surface border border-outline/30 rounded font-label-md text-xs">Xhomes Pilot</span>
              <span className="px-2 py-1 bg-surface-variant text-on-surface border border-outline/30 rounded font-label-md text-xs">100 Startups Funded</span>
              <span className="px-2 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded font-label-md text-xs">10M+ Users</span>
              <span className="px-2 py-1 bg-secondary/10 text-secondary border border-secondary/20 rounded font-label-md text-xs">Series B</span>
            </div>
            <span className="material-symbols-outlined absolute bottom-4 right-4 text-8xl text-on-surface/5 group-hover:text-secondary/10 transition-colors">public</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Roadmap;
