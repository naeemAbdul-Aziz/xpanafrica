import React from 'react';
import GlassPanel from '../components/GlassPanel';
import KenteDivider from '../components/KenteDivider';

const ArchitectureCapital = () => {
  return (
    <main className="flex-grow pt-[100px] pb-margin-desktop md:pt-[120px] px-gutter max-w-container-max mx-auto w-full">
      {/* Architecture Section */}
      <section className="mb-margin-desktop">
        <div className="mb-12 text-center md:text-left">
          <h1 className="font-headline-xl text-on-surface mb-4">Architecture</h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl">The Finly Core operating system is designed for state-level resilience, integrating six foundational pillars to ensure continuous, secure financial operations.</p>
        </div>

        <KenteDivider className="mb-12" altStyle />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <GlassPanel className="p-6 relative overflow-hidden group">
            <span className="material-symbols-outlined absolute top-4 right-4 text-6xl text-secondary/10 pointer-events-none">wifi_off</span>
            <h3 className="font-headline-md text-secondary mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">database</span> Offline-First
            </h3>
            <p className="font-body-md text-on-surface-variant">Distributed ledger technology ensures seamless transaction capability even during infrastructure disruptions, syncing upon reconnection.</p>
          </GlassPanel>

          {/* Pillar 2 */}
          <GlassPanel className="p-6 relative overflow-hidden group">
            <span className="material-symbols-outlined absolute top-4 right-4 text-6xl text-secondary/10 pointer-events-none">fingerprint</span>
            <h3 className="font-headline-md text-secondary mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">badge</span> Shared Identity
            </h3>
            <p className="font-body-md text-on-surface-variant">Unified cryptographic identity protocol across all ecosystem products, reducing friction and enhancing state-level KYC/AML compliance.</p>
          </GlassPanel>

          {/* Pillar 3 */}
          <GlassPanel className="p-6 relative overflow-hidden group">
            <span className="material-symbols-outlined absolute top-4 right-4 text-6xl text-secondary/10 pointer-events-none">sync_alt</span>
            <h3 className="font-headline-md text-secondary mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">all_inclusive</span> Closed-Loop Economics
            </h3>
            <p className="font-body-md text-on-surface-variant">Internal settlement rails drastically reduce external dependency and fees, keeping capital velocity high within the institutional ecosystem.</p>
          </GlassPanel>

          {/* Pillar 4 */}
          <GlassPanel className="p-6 relative overflow-hidden group">
            <span className="material-symbols-outlined absolute top-4 right-4 text-6xl text-secondary/10 pointer-events-none">psychology</span>
            <h3 className="font-headline-md text-secondary mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">memory</span> AI-Native
            </h3>
            <p className="font-body-md text-on-surface-variant">Predictive analytics and automated risk assessment built directly into the core, continuously learning from ecosystem transaction flows.</p>
          </GlassPanel>

          {/* Pillar 5 */}
          <GlassPanel className="p-6 relative overflow-hidden group">
            <span className="material-symbols-outlined absolute top-4 right-4 text-6xl text-secondary/10 pointer-events-none">security</span>
            <h3 className="font-headline-md text-secondary mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">policy</span> Data Sovereignty
            </h3>
            <p className="font-body-md text-on-surface-variant">Localized data centers and encryption standards ensure all financial data remains under institutional control, adhering to regional mandates.</p>
          </GlassPanel>

          {/* Pillar 6 */}
          <GlassPanel className="p-6 relative overflow-hidden group">
            <span className="material-symbols-outlined absolute top-4 right-4 text-6xl text-secondary/10 pointer-events-none">payments</span>
            <h3 className="font-headline-md text-secondary mb-2 flex items-center gap-2">
              <span className="material-symbols-outlined text-xl">account_balance_wallet</span> MoMo-Native Rails
            </h3>
            <p className="font-body-md text-on-surface-variant">Deep integration with existing Mobile Money networks, acting as a high-fidelity layer 2 for instant interoperability.</p>
          </GlassPanel>
        </div>
      </section>

      {/* Capital Allocation Section */}
      <section>
        <div className="mb-12 text-center md:text-left">
          <h2 className="font-headline-xl text-on-surface mb-4">Capital Allocation</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl">A strategic $1 Billion deployment plan designed to build robust infrastructure, ensure regulatory compliance, and dominate regional markets.</p>
        </div>

        <KenteDivider className="mb-12" altStyle />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Breakdown Chart Area (Bento Style) */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <GlassPanel className="p-6 flex flex-col justify-between min-h-[160px]">
              <div>
                <div className="font-label-md text-secondary uppercase tracking-wider mb-1">Engineering &amp; Core Tech</div>
                <div className="font-headline-xl text-on-surface">35%</div>
              </div>
              <div className="w-full bg-surface-container-high h-2 mt-4 rounded overflow-hidden">
                <div className="bg-[#0ea5e9] h-full w-[35%] shadow-[0_0_10px_#0ea5e9]"></div>
              </div>
            </GlassPanel>

            <GlassPanel className="p-6 flex flex-col justify-between min-h-[160px]">
              <div>
                <div className="font-label-md text-secondary uppercase tracking-wider mb-1">Market Expansion</div>
                <div className="font-headline-xl text-on-surface">25%</div>
              </div>
              <div className="w-full bg-surface-container-high h-2 mt-4 rounded overflow-hidden">
                <div className="bg-[#10b981] h-full w-[25%] shadow-[0_0_10px_#10b981]"></div>
              </div>
            </GlassPanel>

            <GlassPanel className="p-6 flex flex-col justify-between min-h-[160px]">
              <div>
                <div className="font-label-md text-secondary uppercase tracking-wider mb-1">Accelerator Ecosystem</div>
                <div className="font-headline-xl text-on-surface">15%</div>
              </div>
              <div className="w-full bg-surface-container-high h-2 mt-4 rounded overflow-hidden">
                <div className="bg-[#f59e0b] h-full w-[15%] shadow-[0_0_10px_#f59e0b]"></div>
              </div>
            </GlassPanel>

            <GlassPanel className="p-6 flex flex-col justify-between min-h-[160px]">
              <div>
                <div className="font-label-md text-secondary uppercase tracking-wider mb-1">Data Centres &amp; Infra</div>
                <div className="font-headline-xl text-on-surface">15%</div>
              </div>
              <div className="w-full bg-surface-container-high h-2 mt-4 rounded overflow-hidden">
                <div className="bg-[#6366f1] h-full w-[15%] shadow-[0_0_10px_#6366f1]"></div>
              </div>
            </GlassPanel>

            <GlassPanel className="p-6 flex flex-col justify-between min-h-[160px] md:col-span-2 flex-row items-center">
              <div className="flex-grow">
                <div className="font-label-md text-secondary uppercase tracking-wider mb-1">Regulatory &amp; Operations</div>
                <div className="font-headline-lg text-on-surface">10% <span className="font-body-md text-on-surface-variant ml-2">Reserved for compliance frameworks and operational scaling.</span></div>
              </div>
            </GlassPanel>
          </div>

          {/* Info Strip Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <GlassPanel variant="modal" className="p-6">
              <h4 className="font-headline-md text-secondary border-b border-outline-variant/30 pb-3 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined">gavel</span> Regulatory Path
              </h4>
              <ul className="space-y-3 font-body-md text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm mt-1">check_circle</span>
                  Phase 1: Sandbox Approval (Completed)
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm mt-1">radio_button_unchecked</span>
                  Phase 2: Full Operating License (Q3 2024)
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm mt-1">radio_button_unchecked</span>
                  Phase 3: Cross-Border Sovereignty Accord
                </li>
              </ul>
            </GlassPanel>

            <GlassPanel variant="modal" className="p-6">
              <h4 className="font-headline-md text-secondary border-b border-outline-variant/30 pb-3 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined">handshake</span> Key Partners
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-surface-container px-3 py-1 rounded text-label-md text-on-surface border border-outline-variant/50">Central Bank</span>
                <span className="bg-surface-container px-3 py-1 rounded text-label-md text-on-surface border border-outline-variant/50">MTN Group</span>
                <span className="bg-surface-container px-3 py-1 rounded text-label-md text-on-surface border border-outline-variant/50">AWS Outposts</span>
              </div>
            </GlassPanel>

            <GlassPanel variant="modal" className="p-6">
              <h4 className="font-headline-md text-secondary border-b border-outline-variant/30 pb-3 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined">rocket_launch</span> Live Products
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center bg-surface-container/50 p-2 rounded">
                  <span className="font-label-md text-on-surface uppercase">Finly Pay</span>
                  <span className="bg-[#10b981]/20 text-[#10b981] px-2 py-0.5 rounded text-xs font-bold">LIVE</span>
                </div>
                <div className="flex justify-between items-center bg-surface-container/50 p-2 rounded">
                  <span className="font-label-md text-on-surface uppercase">Finly Identity</span>
                  <span className="bg-secondary/20 text-secondary px-2 py-0.5 rounded text-xs font-bold">BETA</span>
                </div>
              </div>
            </GlassPanel>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ArchitectureCapital;