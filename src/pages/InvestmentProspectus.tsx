import React from 'react';
import GlassPanel from '../components/GlassPanel';
import Button from '../components/Button';

const InvestmentProspectus = () => {
  return (
    <main className="flex-grow pt-32 pb-margin-desktop px-gutter max-w-container-max mx-auto w-full">
      {/* Hero Section */}
      <section className="mb-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 to-transparent pointer-events-none rounded-xl blur-3xl"></div>
        <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-surface-container-high/50 backdrop-blur-sm">
              <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
              <span className="font-label-md text-secondary uppercase">Series A — $1B Investment Prospectus · 2026</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
              XLABS Financial OS
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              Building the foundational infrastructure for the next generation of African finance. We are engineering a sovereign-grade operating system to unify fragmented markets and deploy capital at institutional scale.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button variant="secondary" size="lg">Access Data Room</Button>
              <Button variant="outline" size="lg">Executive Summary</Button>
            </div>
          </div>

          <div className="flex-1 w-full grid grid-cols-2 gap-4">
            <GlassPanel className="p-6 flex flex-col justify-between h-40 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="font-label-md text-on-surface-variant uppercase tracking-wider relative z-10">Target Raise</span>
              <div className="font-headline-lg text-headline-lg text-secondary relative z-10">$1B</div>
            </GlassPanel>

            <GlassPanel className="p-6 flex flex-col justify-between h-40 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="font-label-md text-on-surface-variant uppercase tracking-wider relative z-10">Core Products</span>
              <div className="font-headline-lg text-headline-lg text-primary relative z-10">10×</div>
            </GlassPanel>

            <GlassPanel className="p-6 flex flex-col justify-between h-40 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="font-label-md text-on-surface-variant uppercase tracking-wider relative z-10">Target Markets</span>
              <div className="font-headline-lg text-headline-lg text-tertiary relative z-10">54</div>
            </GlassPanel>

            <GlassPanel className="p-6 flex flex-col justify-between h-40 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="font-label-md text-on-surface-variant uppercase tracking-wider relative z-10">AfCFTA TAM</span>
              <div className="font-headline-lg text-headline-lg text-secondary relative z-10">$8.2T</div>
            </GlassPanel>
          </div>
        </div>
      </section>

      {/* Financial Divider */}
      <div className="w-full h-[2px] flex mb-32">
        <div className="w-1/2 bg-[repeating-linear-gradient(90deg,var(--tw-colors-secondary)_0px,var(--tw-colors-secondary)_2px,transparent_2px,transparent_4px)] opacity-30"></div>
        <div className="w-1/2 bg-[repeating-linear-gradient(90deg,var(--tw-colors-primary-container)_0px,var(--tw-colors-primary-container)_2px,transparent_2px,transparent_4px)] opacity-30"></div>
      </div>

      {/* Investment Thesis Section */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <span className="font-label-md text-secondary uppercase tracking-widest mb-4 block">The Moat</span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface">Why XLABS beats Y Combinator</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto mt-6">
            A comparative analysis of operational models. Traditional accelerators fragment capital across disparate entities. XLABS unifies it within a single, compounding operating system.
          </p>
        </div>

        <GlassPanel className="overflow-hidden border-outline-variant/30">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-surface-container-high/50 p-6 border-b border-outline-variant/30">
            <div className="font-label-md text-on-surface-variant uppercase tracking-wider hidden md:block">Dimension</div>
            <div className="font-label-md text-on-surface-variant uppercase tracking-wider hidden md:block">Y Combinator Model</div>
            <div className="font-label-md text-secondary uppercase tracking-wider hidden md:block">XLABS Operating System</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 p-6 border-b border-outline-variant/10 hover:bg-surface-container-lowest/50 transition-colors gap-2 md:gap-0">
            <div className="font-body-md text-body-md text-on-surface font-medium md:mb-0 mb-1"><span className="md:hidden font-label-md text-on-surface-variant uppercase mr-2">Dimension:</span>Geography</div>
            <div className="font-body-md text-body-md text-on-surface-variant md:mb-0 mb-1"><span className="md:hidden font-label-md text-on-surface-variant uppercase mr-2">YC Model:</span>Silicon Valley Centric, Global Intake</div>
            <div className="font-body-md text-body-md text-on-surface"><span className="md:hidden font-label-md text-secondary uppercase mr-2">XLABS:</span>Pan-African, Deep Regional Integration</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 p-6 border-b border-outline-variant/10 hover:bg-surface-container-lowest/50 transition-colors gap-2 md:gap-0">
            <div className="font-body-md text-body-md text-on-surface font-medium md:mb-0 mb-1"><span className="md:hidden font-label-md text-on-surface-variant uppercase mr-2">Dimension:</span>Equity Model</div>
            <div className="font-body-md text-body-md text-on-surface-variant md:mb-0 mb-1"><span className="md:hidden font-label-md text-on-surface-variant uppercase mr-2">YC Model:</span>Standard 7% (Isolated Cap Tables)</div>
            <div className="font-body-md text-body-md text-on-surface"><span className="md:hidden font-label-md text-secondary uppercase mr-2">XLABS:</span>Shared Infrastructure, Compounding Equity Value</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 p-6 border-b border-outline-variant/10 hover:bg-surface-container-lowest/50 transition-colors gap-2 md:gap-0">
            <div className="font-body-md text-body-md text-on-surface font-medium md:mb-0 mb-1"><span className="md:hidden font-label-md text-on-surface-variant uppercase mr-2">Dimension:</span>Infrastructure</div>
            <div className="font-body-md text-body-md text-on-surface-variant md:mb-0 mb-1"><span className="md:hidden font-label-md text-on-surface-variant uppercase mr-2">YC Model:</span>Advice &amp; Network Driven</div>
            <div className="font-body-md text-body-md text-on-surface"><span className="md:hidden font-label-md text-secondary uppercase mr-2">XLABS:</span>Proprietary FinTech Stack, Shared Codebase</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 p-6 border-b border-outline-variant/10 hover:bg-surface-container-lowest/50 transition-colors gap-2 md:gap-0">
            <div className="font-body-md text-body-md text-on-surface font-medium md:mb-0 mb-1"><span className="md:hidden font-label-md text-on-surface-variant uppercase mr-2">Dimension:</span>Moat</div>
            <div className="font-body-md text-body-md text-on-surface-variant md:mb-0 mb-1"><span className="md:hidden font-label-md text-on-surface-variant uppercase mr-2">YC Model:</span>Brand &amp; Alumni Network</div>
            <div className="font-body-md text-body-md text-on-surface"><span className="md:hidden font-label-md text-secondary uppercase mr-2">XLABS:</span>Regulatory Licenses &amp; Deep Tech Integration</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 p-6 border-b border-outline-variant/10 hover:bg-surface-container-lowest/50 transition-colors gap-2 md:gap-0">
            <div className="font-body-md text-body-md text-on-surface font-medium md:mb-0 mb-1"><span className="md:hidden font-label-md text-on-surface-variant uppercase mr-2">Dimension:</span>Compounding</div>
            <div className="font-body-md text-body-md text-on-surface-variant md:mb-0 mb-1"><span className="md:hidden font-label-md text-on-surface-variant uppercase mr-2">YC Model:</span>Linear Portfolio Growth</div>
            <div className="font-body-md text-body-md text-on-surface"><span className="md:hidden font-label-md text-secondary uppercase mr-2">XLABS:</span>Exponential Platform Synergy</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 p-6 hover:bg-surface-container-lowest/50 transition-colors gap-2 md:gap-0">
            <div className="font-body-md text-body-md text-on-surface font-medium md:mb-0 mb-1"><span className="md:hidden font-label-md text-on-surface-variant uppercase mr-2">Dimension:</span>Market Access</div>
            <div className="font-body-md text-body-md text-on-surface-variant md:mb-0 mb-1"><span className="md:hidden font-label-md text-on-surface-variant uppercase mr-2">YC Model:</span>Independent Startup GTM</div>
            <div className="font-body-md text-body-md text-on-surface"><span className="md:hidden font-label-md text-secondary uppercase mr-2">XLABS:</span>Unified AfCFTA Deployment Strategy</div>
          </div>
        </GlassPanel>

        <GlassPanel className="mt-16 p-12 text-center relative overflow-hidden">
          <div className="absolute -top-6 -left-6 text-9xl text-primary-container/20 font-serif leading-none">"</div>
          <blockquote className="font-headline-md text-headline-md text-on-surface relative z-10 italic">
            We are not building a portfolio of disconnected startups. We are engineering an operating system built in Africa, for Africa.
          </blockquote>
        </GlassPanel>
      </section>
    </main>
  );
};

export default InvestmentProspectus;