import React from 'react';
import GlassPanel from '../components/GlassPanel';
import KenteDivider from '../components/KenteDivider';
import { Globe } from '@/components/ui/globe';

const Products = () => {
  return (
    <main className="flex-grow z-10 w-full max-w-container-max mx-auto px-gutter pt-32 pb-margin-desktop">
      {/* Header Section */}
      <div className="mb-16 md:mb-24 relative flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 relative">
          <div className="absolute -left-gutter w-1 h-full bg-secondary hidden md:block"></div>
          <div className="md:pl-8">
            <div className="font-label-md text-secondary uppercase tracking-[0.2em] mb-4">The Ecosystem</div>
            <h1 className="font-headline-xl text-on-background mb-6 leading-tight">
              One Architecture. <br/><span className="text-secondary/80">Infinite Scale.</span>
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-xl">
              Our product suite represents a unified financial operating system, meticulously engineered to resolve systemic friction across emerging markets. Each protocol is a standalone powerhouse; together, they form an unbreakable architecture.
            </p>
          </div>
        </div>

        {/* Globe Visualization */}
        <div className="flex-1 w-full relative flex items-center justify-center overflow-hidden min-h-[400px] h-[400px] md:h-[600px] lg:h-[700px] rounded-lg">
          <Globe className="top-8 md:top-16 opacity-80" />
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(16,20,21,0.2),rgba(16,20,21,0.8))]" />
        </div>
      </div>

      <KenteDivider className="mb-16" opacity={30} />

      {/* Ecosystem Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

        {/* P-Levy */}
        <GlassPanel className="group relative p-6 hover:border-secondary/40 transition-all duration-500 flex flex-col h-full overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-secondary/5 rounded-full blur-2xl group-hover:bg-secondary/10 transition-colors duration-500"></div>
          <div className="flex justify-between items-start mb-6 z-10">
            <div className="font-label-md text-on-surface-variant bg-surface-container-high px-3 py-1 rounded">P-01</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
              <span className="font-label-md text-on-surface uppercase text-xs">Live</span>
            </div>
          </div>
          <h3 className="font-headline-md text-on-surface mb-2 z-10">P-Levy</h3>
          <p className="font-body-md text-on-surface-variant mb-8 flex-grow z-10">Automated institutional tax reconciliation and compliance engine for decentralized ledger systems.</p>
          <div className="border-t border-outline-variant/30 pt-4 z-10">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="font-label-md text-on-surface-variant uppercase text-xs mb-1">Target TAM</div>
                <div className="font-body-lg text-secondary">$4.2B</div>
              </div>
              <div>
                <div className="font-label-md text-on-surface-variant uppercase text-xs mb-1">Integration</div>
                <div className="font-body-md text-on-surface">Core OS</div>
              </div>
            </div>
          </div>
          <span className="material-symbols-outlined absolute bottom-4 right-4 text-9xl text-on-surface/5 -rotate-12 pointer-events-none">account_balance</span>
        </GlassPanel>

        {/* Fin-Wrapped */}
        <GlassPanel className="group relative p-6 hover:border-secondary/40 transition-all duration-500 flex flex-col h-full overflow-hidden lg:col-span-2">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent"></div>
          <div className="flex justify-between items-start mb-6 z-10">
            <div className="font-label-md text-on-surface-variant bg-surface-container-high px-3 py-1 rounded">P-02</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]"></span>
              <span className="font-label-md text-on-surface uppercase text-xs">In Development</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 h-full z-10">
            <div className="flex flex-col">
              <h3 className="font-headline-md text-on-surface mb-2">Fin-Wrapped</h3>
              <p className="font-body-md text-on-surface-variant mb-8 flex-grow">Cross-border synthetic asset protocol enabling seamless fiat-to-digital representations with provable 1:1 state-backed reserves.</p>
              <div className="border-t border-outline-variant/30 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="font-label-md text-on-surface-variant uppercase text-xs mb-1">Target TAM</div>
                    <div className="font-body-lg text-secondary">$12.8B</div>
                  </div>
                  <div>
                    <div className="font-label-md text-on-surface-variant uppercase text-xs mb-1">Integration</div>
                    <div className="font-body-md text-on-surface">Xcommerce</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center bg-surface-container-low rounded border border-outline-variant/20 p-4 relative overflow-hidden">
              {/* Abstract Visualization */}
              <div className="w-full h-full flex items-center justify-center relative">
                <div className="absolute w-32 h-32 border border-secondary/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute w-24 h-24 border border-primary/30 rounded-full animate-[spin_8s_linear_infinite_reverse]"></div>
                <span className="material-symbols-outlined text-4xl text-secondary">sync_alt</span>
              </div>
            </div>
          </div>
        </GlassPanel>

        {/* Finly */}
        <GlassPanel className="group relative p-6 hover:border-secondary/40 transition-all duration-500 flex flex-col h-full overflow-hidden">
          <div className="flex justify-between items-start mb-6 z-10">
            <div className="font-label-md text-on-surface-variant bg-surface-container-high px-3 py-1 rounded">P-03</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
              <span className="font-label-md text-on-surface uppercase text-xs">Live</span>
            </div>
          </div>
          <h3 className="font-headline-md text-on-surface mb-2 z-10">Finly</h3>
          <p className="font-body-md text-on-surface-variant mb-8 flex-grow z-10">Micro-lending infrastructure utilizing alternative data modeling to underwrite underserved SME segments.</p>
          <div className="border-t border-outline-variant/30 pt-4 z-10">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="font-label-md text-on-surface-variant uppercase text-xs mb-1">Target TAM</div>
                <div className="font-body-lg text-secondary">$1.5B</div>
              </div>
              <div>
                <div className="font-label-md text-on-surface-variant uppercase text-xs mb-1">Integration</div>
                <div className="font-body-md text-on-surface">P-Levy</div>
              </div>
            </div>
          </div>
          <span className="material-symbols-outlined absolute bottom-4 right-4 text-9xl text-on-surface/5 -rotate-12 pointer-events-none">trending_up</span>
        </GlassPanel>

        {/* Xcommerce */}
        <GlassPanel className="group relative p-6 hover:border-secondary/40 transition-all duration-500 flex flex-col h-full overflow-hidden">
          <div className="flex justify-between items-start mb-6 z-10">
            <div className="font-label-md text-on-surface-variant bg-surface-container-high px-3 py-1 rounded">P-04</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></span>
              <span className="font-label-md text-on-surface uppercase text-xs">Design Phase</span>
            </div>
          </div>
          <h3 className="font-headline-md text-on-surface mb-2 z-10">Xcommerce</h3>
          <p className="font-body-md text-on-surface-variant mb-8 flex-grow z-10">B2B institutional trading gateway specifically architected for cross-continental supply chain liquidity.</p>
          <div className="border-t border-outline-variant/30 pt-4 z-10">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="font-label-md text-on-surface-variant uppercase text-xs mb-1">Target TAM</div>
                <div className="font-body-lg text-secondary">$22.4B</div>
              </div>
              <div>
                <div className="font-label-md text-on-surface-variant uppercase text-xs mb-1">Integration</div>
                <div className="font-body-md text-on-surface">Fin-Wrapped</div>
              </div>
            </div>
          </div>
          <span className="material-symbols-outlined absolute bottom-4 right-4 text-9xl text-on-surface/5 -rotate-12 pointer-events-none">local_shipping</span>
        </GlassPanel>

        {/* Xlevy */}
        <GlassPanel className="group relative p-6 hover:border-secondary/40 transition-all duration-500 flex flex-col h-full overflow-hidden">
          <div className="flex justify-between items-start mb-6 z-10">
            <div className="font-label-md text-on-surface-variant bg-surface-container-high px-3 py-1 rounded">P-05</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]"></span>
              <span className="font-label-md text-on-surface uppercase text-xs">In Development</span>
            </div>
          </div>
          <h3 className="font-headline-md text-on-surface mb-2 z-10">Xlevy</h3>
          <p className="font-body-md text-on-surface-variant mb-8 flex-grow z-10">Every purchase, an investment in Ghana. Micro-investment infrastructure that pipelines consumer spending directly to Ghana Stock Exchange-listed companies. Every Ghanaian becomes a shareholder.</p>
          <div className="border-t border-outline-variant/30 pt-4 z-10">
            <p className="font-label-md text-sm text-secondary/80 italic">GSE listing prep active · Regulatory engagement underway</p>
          </div>
          <span className="material-symbols-outlined absolute bottom-4 right-4 text-9xl text-on-surface/5 -rotate-12 pointer-events-none">gavel</span>
        </GlassPanel>

        {/* Expogen */}
        <GlassPanel className="group relative p-6 hover:border-secondary/40 transition-all duration-500 flex flex-col h-full overflow-hidden">
          <div className="flex justify-between items-start mb-6 z-10">
            <div className="font-label-md text-on-surface-variant bg-surface-container-high px-3 py-1 rounded">P-06</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-surface-variant shadow-[0_0_8px_rgba(255,255,255,0.2)]"></span>
              <span className="font-label-md text-on-surface uppercase text-xs">Design Phase</span>
            </div>
          </div>
          <h3 className="font-headline-md text-on-surface mb-2 z-10">Expogen</h3>
          <p className="font-body-md text-on-surface-variant mb-8 flex-grow z-10">Ghana's products in every African market. AfCFTA-compliant export facilitation connecting Ghanaian producers across all 54 countries — the trade infrastructure the continent was promised under AfCFTA.</p>
          <div className="border-t border-outline-variant/30 pt-4 z-10">
            <p className="font-label-md text-sm text-secondary/80 italic">TAM: $8.2T under AfCFTA · First-mover in compliant pan-African export tech</p>
          </div>
          <span className="material-symbols-outlined absolute bottom-4 right-4 text-9xl text-on-surface/5 -rotate-12 pointer-events-none">memory</span>
        </GlassPanel>

        {/* Xhomes */}
        <GlassPanel className="group relative p-6 hover:border-secondary/40 transition-all duration-500 flex flex-col h-full overflow-hidden">
          <div className="flex justify-between items-start mb-6 z-10">
            <div className="font-label-md text-on-surface-variant bg-surface-container-high px-3 py-1 rounded">P-07</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-surface-variant shadow-[0_0_8px_rgba(255,255,255,0.2)]"></span>
              <span className="font-label-md text-on-surface uppercase text-xs">Design Phase</span>
            </div>
          </div>
          <h3 className="font-headline-md text-on-surface mb-2 z-10">Xhomes</h3>
          <p className="font-body-md text-on-surface-variant mb-8 flex-grow z-10">Diaspora capital, redirected. Premium AI-designed homes where every purchase funds a new XLABS learning centre. 3M+ Ghanaians abroad building wealth at home instead of abroad.</p>
          <div className="border-t border-outline-variant/30 pt-4 z-10">
            <p className="font-label-md text-sm text-secondary/80 italic">Diaspora pipeline: 3M+ Ghanaians · $4B+ annual remittances to redirect</p>
          </div>
          <span className="material-symbols-outlined absolute bottom-4 right-4 text-9xl text-on-surface/5 -rotate-12 pointer-events-none">real_estate_agent</span>
        </GlassPanel>

        {/* X Shorts */}
        <GlassPanel className="group relative p-6 hover:border-secondary/40 transition-all duration-500 flex flex-col h-full overflow-hidden">
          <div className="flex justify-between items-start mb-6 z-10">
            <div className="font-label-md text-on-surface-variant bg-surface-container-high px-3 py-1 rounded">P-08</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-surface-variant shadow-[0_0_8px_rgba(255,255,255,0.2)]"></span>
              <span className="font-label-md text-on-surface uppercase text-xs">Design Phase</span>
            </div>
          </div>
          <h3 className="font-headline-md text-on-surface mb-2 z-10">X Shorts</h3>
          <p className="font-body-md text-on-surface-variant mb-8 flex-grow z-10">TikTok meets Pinterest, built for African commerce. The first commerce-native short-form video platform on the continent — where watching becomes buying and buying builds community equity.</p>
          <div className="border-t border-outline-variant/30 pt-4 z-10">
            <p className="font-label-md text-sm text-secondary/80 italic">Integration: Xcommerce checkout · Creator monetisation via Xlevy</p>
          </div>
          <span className="material-symbols-outlined absolute bottom-4 right-4 text-9xl text-on-surface/5 -rotate-12 pointer-events-none">movie</span>
        </GlassPanel>

        {/* Xvends */}
        <GlassPanel className="group relative p-6 hover:border-secondary/40 transition-all duration-500 flex flex-col h-full overflow-hidden">
          <div className="flex justify-between items-start mb-6 z-10">
            <div className="font-label-md text-on-surface-variant bg-surface-container-high px-3 py-1 rounded">P-09</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-surface-variant shadow-[0_0_8px_rgba(255,255,255,0.2)]"></span>
              <span className="font-label-md text-on-surface uppercase text-xs">Design Phase</span>
            </div>
          </div>
          <h3 className="font-headline-md text-on-surface mb-2 z-10">Xvends</h3>
          <p className="font-body-md text-on-surface-variant mb-8 flex-grow z-10">Organic Ghanaian vending machines in every XLABS school, university, hospital, and corporate campus. The physical retail arm of Xcommerce — bringing the digital flywheel into the real world.</p>
          <div className="border-t border-outline-variant/30 pt-4 z-10">
            <p className="font-label-md text-sm text-secondary/80 italic">Pilot: 10 units · Scale target: every XLABS-partnered institution</p>
          </div>
          <span className="material-symbols-outlined absolute bottom-4 right-4 text-9xl text-on-surface/5 -rotate-12 pointer-events-none">kitchen</span>
        </GlassPanel>

        {/* DiscreetKit */}
        <GlassPanel className="group relative p-6 hover:border-secondary/40 transition-all duration-500 flex flex-col h-full overflow-hidden">
          <div className="flex justify-between items-start mb-6 z-10">
            <div className="font-label-md text-on-surface-variant bg-surface-container-high px-3 py-1 rounded">P-10</div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-surface-variant shadow-[0_0_8px_rgba(255,255,255,0.2)]"></span>
              <span className="font-label-md text-on-surface uppercase text-xs">Concept Architecture</span>
            </div>
          </div>
          <h3 className="font-headline-md text-on-surface mb-2 z-10">DiscreetKit</h3>
          <p className="font-body-md text-on-surface-variant mb-8 flex-grow z-10">Ghana's first AI-powered pharmacy. Computer vision medication verification for OTC access — addressing the structural crisis of 1 pharmacist per 12,000 Ghanaians with software, not headcount.</p>
          <div className="border-t border-outline-variant/30 pt-4 z-10">
            <p className="font-label-md text-sm text-secondary/80 italic">Ghana pharmacist ratio: 1:12,000 · AI verification pipeline in architecture</p>
          </div>
          <span className="material-symbols-outlined absolute bottom-4 right-4 text-9xl text-on-surface/5 -rotate-12 pointer-events-none">local_pharmacy</span>
        </GlassPanel>

      </div>
    </main>
  );
};

export default Products;