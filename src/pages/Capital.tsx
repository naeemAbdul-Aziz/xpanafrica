import React from 'react';
import GlassPanel from '../components/GlassPanel';
import KenteDivider from '../components/KenteDivider';

const Capital = () => {
  return (
    <main className="flex-grow pt-[100px] pb-margin-desktop md:pt-[120px] px-gutter max-w-container-max mx-auto w-full">
      {/* Capital Allocation Section */}
      <section>
        <div className="mb-12 text-center md:text-left">
          <span className="font-label-md text-secondary uppercase tracking-[0.2em] mb-4 block">Capital Allocation</span>
          <h1 className="font-headline-xl text-on-surface mb-4">$1 Billion. <span className="italic text-secondary/90">Deployed with precision.</span></h1>
          <p className="font-body-lg text-on-surface-variant max-w-3xl">
            This is not a grant. This is a Series A raise to build the definitive financial infrastructure layer for a continent of 1.4 billion people. The allocation below reflects an institution-building mandate.
          </p>
        </div>

        <KenteDivider className="mb-12" altStyle />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Table */}
          <div className="lg:col-span-8 space-y-4">
            <GlassPanel className="p-6 overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline/20 pb-4 mb-4">
                <div className="font-headline-md text-on-surface md:w-1/3">Product Engineering &amp; AI Infrastructure</div>
                <div className="font-headline-lg text-secondary">$300M</div>
                <div className="font-body-sm text-on-surface-variant md:w-1/2">World-class engineering across all 10 products. AI/ML pipelines, cloud infrastructure scaled for 100M users. Competitive with the best fintech engineering organisations globally.</div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline/20 pb-4 mb-4">
                <div className="font-headline-md text-on-surface md:w-1/3">Pan-African Market Expansion</div>
                <div className="font-headline-lg text-primary">$200M</div>
                <div className="font-body-sm text-on-surface-variant md:w-1/2">Structured rollout across all 54 African markets. Local GTM teams, partnerships, and product localisation for every major language and regulatory environment on the continent.</div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline/20 pb-4 mb-4">
                <div className="font-headline-md text-on-surface md:w-1/3">XLABS Accelerator Fund</div>
                <div className="font-headline-lg text-tertiary">$200M</div>
                <div className="font-body-sm text-on-surface-variant md:w-1/2">Direct investment into 100+ African startups building on X-Ecosystem rails. The Y Combinator beater: we fund founders and hand them live infrastructure — not just capital and a demo day.</div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline/20 pb-4 mb-4">
                <div className="font-headline-md text-on-surface md:w-1/3">Regulatory Licensing &amp; Compliance</div>
                <div className="font-headline-lg text-[#10b981]">$100M</div>
                <div className="font-body-sm text-on-surface-variant md:w-1/2">Bank of Ghana sandbox. SEC Ghana. FDA Ghana pilot. GSE listing for Xlevy. Replicated across 54 jurisdictions. Regulatory moat is the product — and no one can buy it after us.</div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline/20 pb-4 mb-4">
                <div className="font-headline-md text-on-surface md:w-1/3">Data Centres &amp; African Infrastructure</div>
                <div className="font-headline-lg text-[#f59e0b]">$100M</div>
                <div className="font-body-sm text-on-surface-variant md:w-1/2">XLABS-owned sovereign compute across Ghana, Nigeria, Kenya, and South Africa. Data sovereignty is non-negotiable and a competitive advantage in every government contract we sign.</div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-outline/20 pb-4 mb-4">
                <div className="font-headline-md text-on-surface md:w-1/3">Operations, Talent &amp; Learning Centres</div>
                <div className="font-headline-lg text-[#6366f1]">$100M</div>
                <div className="font-body-sm text-on-surface-variant md:w-1/2">Executive hiring. XLABS physical hubs in 10 African cities. The student-to-employee pipeline — 200+ students already enrolled, all future XLABS users, employees, and shareholders.</div>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-4 bg-surface-container/50 -mx-6 -mb-6 px-6 pb-6 rounded-b-lg">
                <div className="font-headline-md text-secondary font-bold md:w-1/3 uppercase tracking-wider">Total Series A</div>
                <div className="font-headline-xl text-secondary font-bold">$1,000,000,000</div>
                <div className="font-body-md text-secondary/80 md:w-1/2 italic">Full ecosystem buildout. Continental scale in 36 months. The financial operating system Africa has been waiting for.</div>
              </div>
            </GlassPanel>
          </div>

          {/* Info Strip Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <GlassPanel variant="modal" className="p-6">
              <h4 className="font-headline-md text-secondary border-b border-outline/30 pb-3 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined">gavel</span> Regulatory Path
              </h4>
              <ul className="space-y-3 font-body-md text-on-surface-variant">
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm mt-1">check_circle</span>
                  BoG Sandbox
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm mt-1">radio_button_unchecked</span>
                  SEC Ghana
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm mt-1">radio_button_unchecked</span>
                  FDA Ghana
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm mt-1">radio_button_unchecked</span>
                  GSE
                </li>
              </ul>
            </GlassPanel>

            <GlassPanel variant="modal" className="p-6">
              <h4 className="font-headline-md text-secondary border-b border-outline/30 pb-3 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined">school</span> Academic Partners
              </h4>
              <div className="flex flex-col gap-3 font-body-md text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm">auto_awesome</span> MIT RAISE
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm">auto_awesome</span> COMPSSA
                </div>
              </div>
            </GlassPanel>

            <GlassPanel variant="modal" className="p-6">
              <h4 className="font-headline-md text-secondary border-b border-outline/30 pb-3 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined">rocket_launch</span> Live Products
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-body-md text-on-surface-variant">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span> P-Levy
                </div>
                <div className="flex items-center gap-2 font-body-md text-on-surface-variant">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span> Fin-Wrapped
                </div>
                <div className="mt-4 pt-4 border-t border-outline/20 font-label-md text-secondary uppercase text-sm tracking-wider">
                  🏆 2× Hackathon Wins
                </div>
              </div>
            </GlassPanel>

            <GlassPanel variant="modal" className="p-6 bg-secondary/10 border-secondary/30">
              <h4 className="font-headline-md text-secondary border-b border-secondary/30 pb-3 mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined">mail</span> Contact
              </h4>
              <a href="mailto:info@xlabsghana.com" className="font-body-md text-on-surface hover:text-secondary underline decoration-secondary/50 break-all">
                info@xlabsghana.com
              </a>
            </GlassPanel>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Capital;