import React from 'react';
import { Globe } from '@/components/ui/globe';

const Home = () => {
  return (
    <main className="flex-grow z-10 w-full max-w-container-max mx-auto px-gutter pt-32 pb-margin-desktop">
      {/* Hero Section */}
      <section className="mb-24 relative flex flex-col lg:flex-row items-center gap-12">
        <div className="relative lg:w-1/2">
          <div className="absolute -left-gutter w-1 h-full bg-secondary hidden md:block"></div>
          <div className="md:pl-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-secondary/30 bg-surface-container-high/50 backdrop-blur-sm mb-6">
              <span className="material-symbols-outlined text-[16px] text-secondary">verified</span>
              <span className="font-label-md text-secondary uppercase">Series A — $1B Investment Prospectus · 2026</span>
            </div>
            <h1 className="font-headline-xl text-on-background mb-6 leading-none">
              XLABS <br/>
              Financial <br/>
              <span className="text-secondary/80">OS</span>
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-3xl mb-8">
              Ten interconnected products. One shared architecture. One mission: to build <strong>Africa's sovereign financial operating system</strong> — and the accelerator that makes Y Combinator irrelevant to every African founder.
            </p>
          </div>
        </div>

        {/* Globe Visualization */}
        <div className="relative flex w-full lg:w-1/2 items-center justify-center overflow-hidden rounded-lg min-h-[400px] h-[400px] md:h-[600px] lg:h-[700px]">
          <Globe className="top-8 md:top-28 opacity-80" />
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(16,20,21,0.2),rgba(16,20,21,0.8))]" />
        </div>
      </section>

      {/* Hero Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
        <div className="bg-surface-container/40 border border-outline/20 p-6 flex flex-col justify-between h-40 relative overflow-hidden group rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="font-label-md text-on-surface-variant uppercase tracking-wider relative z-10">Series A Target</span>
          <div className="font-headline-lg text-secondary relative z-10">$1B</div>
        </div>

        <div className="bg-surface-container/40 border border-outline/20 p-6 flex flex-col justify-between h-40 relative overflow-hidden group rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="font-label-md text-on-surface-variant uppercase tracking-wider relative z-10">Interconnected Products</span>
          <div className="font-headline-lg text-primary relative z-10">10×</div>
        </div>

        <div className="bg-surface-container/40 border border-outline/20 p-6 flex flex-col justify-between h-40 relative overflow-hidden group rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="font-label-md text-on-surface-variant uppercase tracking-wider relative z-10">African Markets in Scope</span>
          <div className="font-headline-lg text-tertiary relative z-10">54</div>
        </div>

        <div className="bg-surface-container/40 border border-outline/20 p-6 flex flex-col justify-between h-40 relative overflow-hidden group rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="font-label-md text-on-surface-variant uppercase tracking-wider relative z-10">AfCFTA Addressable Market</span>
          <div className="font-headline-lg text-secondary relative z-10">$8.2T</div>
        </div>
      </section>

      {/* Financial Divider */}
      <div className="w-full h-[2px] flex mb-32">
        <div className="w-1/2 bg-[repeating-linear-gradient(90deg,var(--tw-colors-secondary)_0px,var(--tw-colors-secondary)_2px,transparent_2px,transparent_4px)] opacity-30"></div>
        <div className="w-1/2 bg-[repeating-linear-gradient(90deg,var(--tw-colors-primary-container)_0px,var(--tw-colors-primary-container)_2px,transparent_2px,transparent_4px)] opacity-30"></div>
      </div>

      {/* CTA Section */}
      <section className="text-center relative overflow-hidden bg-surface-container/40 p-16 rounded-2xl border border-outline/20 shadow-xl">
        <div className="absolute inset-0 bg-secondary/5 blur-[100px] rounded-full pointer-events-none"></div>
        <span className="font-label-md text-secondary uppercase tracking-[0.2em] mb-4 block relative z-10">The Ask</span>
        <h2 className="font-headline-xl text-on-surface mb-6 relative z-10 leading-tight">
          This is not a startup.<br/>
          <span className="text-secondary italic">This is a civilization.</span>
        </h2>
        <p className="font-body-lg text-on-surface-variant max-w-3xl mx-auto mb-12 relative z-10">
          XLABS Ghana already operates education programs for 200+ students. Those students become the first users, first employees, and first shareholders of the X-Ecosystem. The infrastructure is live. The vision is clear. We are raising $1 billion to make every Ghanaian — and every African — a shareholder in their own future.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
          <a href="mailto:info@xlabsghana.com" className="bg-secondary text-primary-container px-8 py-4 rounded font-label-md uppercase tracking-wider shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] hover:bg-secondary-fixed transition-colors">
            Request Full Prospectus →
          </a>
          <a href="https://www.xpanafrica.com" target="_blank" rel="noopener noreferrer" className="bg-transparent text-on-surface border border-outline/50 hover:bg-surface-variant/50 hover:border-outline/80 px-8 py-4 rounded font-label-md uppercase tracking-wider backdrop-blur-sm transition-all duration-300">
            View Live Products →
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
