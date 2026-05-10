import React from 'react';
import GlassPanel from '../components/GlassPanel';
import KenteDivider from '../components/KenteDivider';

const Architecture = () => {
  return (
    <main className="flex-grow pt-[100px] pb-margin-desktop md:pt-[120px] px-gutter max-w-container-max mx-auto w-full">
      {/* Architecture Section */}
      <section className="mb-margin-desktop">
        <div className="mb-12 text-center md:text-left">
          <span className="font-label-md text-secondary uppercase tracking-[0.2em] mb-4 block">Shared Infrastructure</span>
          <h1 className="font-headline-xl text-on-surface mb-4">One Backend. <span className="italic text-secondary/90">Compounding Returns.</span></h1>
          <p className="font-body-lg text-on-surface-variant max-w-3xl">
            The Finly core is not a product — it is the infrastructure all ten products run on. Every new product added to the ecosystem multiplies the value of every existing one. This is how XLABS compounds, and why YC cannot replicate it.
          </p>
        </div>

        <KenteDivider className="mb-12" altStyle />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <GlassPanel className="p-6 relative overflow-hidden group">
            <span className="material-symbols-outlined absolute top-4 right-4 text-6xl text-secondary/10 pointer-events-none">wifi_off</span>
            <h3 className="font-headline-md text-secondary mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">database</span> Offline-First
            </h3>
            <p className="font-body-md text-on-surface-variant">All ten products function without consistent connectivity. Ghana's infrastructure reality, solved at the architecture level.</p>
          </GlassPanel>

          {/* Pillar 2 */}
          <GlassPanel className="p-6 relative overflow-hidden group">
            <span className="material-symbols-outlined absolute top-4 right-4 text-6xl text-secondary/10 pointer-events-none">fingerprint</span>
            <h3 className="font-headline-md text-secondary mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">badge</span> Shared Identity
            </h3>
            <p className="font-body-md text-on-surface-variant">One account across the entire X-Ecosystem. Every user acquired by any product is immediately a user of all products.</p>
          </GlassPanel>

          {/* Pillar 3 */}
          <GlassPanel className="p-6 relative overflow-hidden group">
            <span className="material-symbols-outlined absolute top-4 right-4 text-6xl text-secondary/10 pointer-events-none">sync_alt</span>
            <h3 className="font-headline-md text-secondary mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">all_inclusive</span> Closed-Loop Economics
            </h3>
            <p className="font-body-md text-on-surface-variant">Xcommerce spending flows to Xlevy. P-Levy savings fund Xhomes. Commerce data trains Finly AI. Value never leaks out of the ecosystem.</p>
          </GlassPanel>

          {/* Pillar 4 */}
          <GlassPanel className="p-6 relative overflow-hidden group">
            <span className="material-symbols-outlined absolute top-4 right-4 text-6xl text-secondary/10 pointer-events-none">psychology</span>
            <h3 className="font-headline-md text-secondary mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">memory</span> AI-Native Architecture
            </h3>
            <p className="font-body-md text-on-surface-variant">Machine learning at every layer — credit scoring, financial intelligence, medication verification — baked into the architecture, not bolted on as a feature.</p>
          </GlassPanel>

          {/* Pillar 5 */}
          <GlassPanel className="p-6 relative overflow-hidden group">
            <span className="material-symbols-outlined absolute top-4 right-4 text-6xl text-secondary/10 pointer-events-none">security</span>
            <h3 className="font-headline-md text-secondary mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">policy</span> Data Sovereignty
            </h3>
            <p className="font-body-md text-on-surface-variant">All data hosted on Ghanaian and African infrastructure. Regulatory compliance and national interest alignment built into the stack.</p>
          </GlassPanel>

          {/* Pillar 6 */}
          <GlassPanel className="p-6 relative overflow-hidden group">
            <span className="material-symbols-outlined absolute top-4 right-4 text-6xl text-secondary/10 pointer-events-none">payments</span>
            <h3 className="font-headline-md text-secondary mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">account_balance_wallet</span> MoMo-Native Rails
            </h3>
            <p className="font-body-md text-on-surface-variant">Built on mobile money from day one — not retrofitted onto card infrastructure. Reaches every person on the continent with a SIM card.</p>
          </GlassPanel>
        </div>
      </section>
    </main>
  );
};

export default Architecture;