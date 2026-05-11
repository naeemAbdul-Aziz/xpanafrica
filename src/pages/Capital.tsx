import React from 'react';
import KenteDivider from '../components/KenteDivider';
import GlassPanel from '../components/GlassPanel';

const Capital = () => {
  return (
    <main className="flex-grow pt-[100px] pb-margin-desktop md:pt-[120px] px-gutter max-w-container-max mx-auto w-full">
      <section>
        <div className="mb-12 text-center md:text-left">
          <span className="font-label-md text-secondary uppercase tracking-[0.2em] mb-4 block">Capital Allocation</span>
          <h2 className="font-headline-xl text-on-surface mb-4">$1 Billion. Deployed with precision.</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl">
            This is not a grant. This is a Series A raise to build the definitive financial infrastructure layer for a continent of 1.4 billion people. The allocation below reflects an institution-building mandate.
          </p>
        </div>

        <KenteDivider className="mb-12" altStyle />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Breakdown List Area */}
          <div className="lg:col-span-8 flex flex-col gap-6">

            <GlassPanel className="p-6 rounded-lg relative overflow-hidden group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="font-headline-md text-on-surface">Product Engineering &amp; AI Infrastructure</h3>
                <span className="font-headline-lg text-secondary mt-2 md:mt-0">$300M</span>
              </div>
              <p className="font-body-md text-on-surface-variant max-w-2xl">
                World-class engineering across all 10 products. AI/ML pipelines, cloud infrastructure scaled for 100M users. Competitive with the best fintech engineering organisations globally.
              </p>
              <div className="w-full bg-surface-container-high h-2 mt-6 rounded overflow-hidden">
                <div className="bg-[#0ea5e9] h-full w-[30%] shadow-[0_0_10px_#0ea5e9]"></div>
              </div>
            </GlassPanel>

            <GlassPanel className="p-6 rounded-lg relative overflow-hidden group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="font-headline-md text-on-surface">Pan-African Market Expansion</h3>
                <span className="font-headline-lg text-[#10b981] mt-2 md:mt-0">$200M</span>
              </div>
              <p className="font-body-md text-on-surface-variant max-w-2xl">
                Structured rollout across all 54 African markets. Local GTM teams, partnerships, and product localisation for every major language and regulatory environment on the continent.
              </p>
              <div className="w-full bg-surface-container-high h-2 mt-6 rounded overflow-hidden">
                <div className="bg-[#10b981] h-full w-[20%] shadow-[0_0_10px_#10b981]"></div>
              </div>
            </GlassPanel>

            <GlassPanel className="p-6 rounded-lg relative overflow-hidden group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="font-headline-md text-on-surface">XLABS Accelerator Fund</h3>
                <span className="font-headline-lg text-secondary mt-2 md:mt-0">$200M</span>
              </div>
              <p className="font-body-md text-on-surface-variant max-w-2xl">
                Direct investment into 100+ African startups building on X-Ecosystem rails. The Y Combinator beater: we fund founders and hand them live infrastructure — not just capital and a demo day.
              </p>
              <div className="w-full bg-surface-container-high h-2 mt-6 rounded overflow-hidden">
                <div className="bg-secondary h-full w-[20%] shadow-[0_0_10px_#f59e0b]"></div>
              </div>
            </GlassPanel>

            <GlassPanel className="p-6 rounded-lg relative overflow-hidden group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="font-headline-md text-on-surface">Regulatory Licensing &amp; Compliance</h3>
                <span className="font-headline-lg text-[#6366f1] mt-2 md:mt-0">$100M</span>
              </div>
              <p className="font-body-md text-on-surface-variant max-w-2xl">
                Bank of Ghana sandbox. SEC Ghana. FDA Ghana pilot. GSE listing for Xlevy. Replicated across 54 jurisdictions. Regulatory moat is the product — and no one can buy it after us.
              </p>
              <div className="w-full bg-surface-container-high h-2 mt-6 rounded overflow-hidden">
                <div className="bg-[#6366f1] h-full w-[10%] shadow-[0_0_10px_#6366f1]"></div>
              </div>
            </GlassPanel>

            <GlassPanel className="p-6 rounded-lg relative overflow-hidden group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="font-headline-md text-on-surface">Data Centres &amp; African Infrastructure</h3>
                <span className="font-headline-lg text-[#8b5cf6] mt-2 md:mt-0">$100M</span>
              </div>
              <p className="font-body-md text-on-surface-variant max-w-2xl">
                XLABS-owned sovereign compute across Ghana, Nigeria, Kenya, and South Africa. Data sovereignty is non-negotiable and a competitive advantage in every government contract we sign.
              </p>
              <div className="w-full bg-surface-container-high h-2 mt-6 rounded overflow-hidden">
                <div className="bg-[#8b5cf6] h-full w-[10%] shadow-[0_0_10px_#8b5cf6]"></div>
              </div>
            </GlassPanel>

            <GlassPanel className="p-6 rounded-lg relative overflow-hidden group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="font-headline-md text-on-surface">Operations, Talent &amp; Learning Centres</h3>
                <span className="font-headline-lg text-[#ec4899] mt-2 md:mt-0">$100M</span>
              </div>
              <p className="font-body-md text-on-surface-variant max-w-2xl">
                Executive hiring. XLABS physical hubs in 10 African cities. The student-to-employee pipeline — 200+ students already enrolled, all future XLABS users, employees, and shareholders.
              </p>
              <div className="w-full bg-surface-container-high h-2 mt-6 rounded overflow-hidden">
                <div className="bg-[#ec4899] h-full w-[10%] shadow-[0_0_10px_#ec4899]"></div>
              </div>
            </GlassPanel>

          </div>

          {/* Info Strip Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="sticky top-32 flex flex-col gap-6">

              <div className="bg-surface-container-high/50 border border-secondary/30 p-8 rounded-xl text-center mb-4">
                <span className="font-label-md text-on-surface-variant uppercase tracking-wider block mb-2">Total Series A</span>
                <div className="font-headline-xl text-secondary">$1,000,000,000</div>
                <p className="font-body-sm text-on-surface-variant mt-4">Full ecosystem buildout. Continental scale in 36 months. The financial operating system Africa has been waiting for.</p>
              </div>

              <GlassPanel className="p-6 rounded-xl">
                <h4 className="font-headline-md text-secondary border-b border-outline-variant/30 pb-3 mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">gavel</span> Regulatory Path
                </h4>
                <ul className="space-y-3 font-body-md text-on-surface-variant">
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    BoG Sandbox
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    SEC Ghana
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    FDA Ghana
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    GSE
                  </li>
                </ul>
              </GlassPanel>

              <GlassPanel className="p-6 rounded-xl">
                <h4 className="font-headline-md text-secondary border-b border-outline-variant/30 pb-3 mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">school</span> Academic Partners
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-surface-container px-3 py-1 rounded text-label-md text-on-surface border border-outline-variant/50">MIT RAISE</span>
                  <span className="bg-surface-container px-3 py-1 rounded text-label-md text-on-surface border border-outline-variant/50">COMPSSA</span>
                </div>
              </GlassPanel>

              <GlassPanel className="p-6 rounded-xl">
                <h4 className="font-headline-md text-secondary border-b border-outline-variant/30 pb-3 mb-4 flex items-center gap-2">
                  <span className="material-symbols-outlined">rocket_launch</span> Live Products
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center bg-surface-container/50 p-2 rounded border border-outline/10">
                    <span className="font-label-md text-on-surface uppercase">P-Levy</span>
                    <span className="bg-[#10b981]/20 text-[#10b981] px-2 py-0.5 rounded text-xs font-bold">LIVE</span>
                  </div>
                  <div className="flex justify-between items-center bg-surface-container/50 p-2 rounded border border-outline/10">
                    <span className="font-label-md text-on-surface uppercase">Fin-Wrapped</span>
                    <span className="bg-[#10b981]/20 text-[#10b981] px-2 py-0.5 rounded text-xs font-bold">LIVE</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-outline/10">
                    <span className="font-label-md text-secondary flex items-center gap-2">
                      <span className="material-symbols-outlined text-base">emoji_events</span> 2× Hackathon Wins
                    </span>
                  </div>
                </div>
              </GlassPanel>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Capital;
