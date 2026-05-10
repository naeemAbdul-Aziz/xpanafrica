import React from 'react';
import GlassPanel from '../components/GlassPanel';
import KenteDivider from '../components/KenteDivider';

const Products = () => {
  return (
    <main className="flex-grow z-10 w-full max-w-container-max mx-auto px-gutter pt-32 pb-margin-desktop">
      {/* Header Section */}
      <div className="mb-16 md:mb-24 relative">
        <div className="absolute -left-gutter w-1 h-full bg-secondary hidden md:block"></div>
        <div className="md:pl-8">
          <div className="font-label-md text-secondary uppercase tracking-[0.2em] mb-4">The X-Ecosystem</div>
          <h1 className="font-headline-xl text-on-background mb-6">
            Ten Products. <br/><span className="text-secondary/80 italic">One Architecture.</span>
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-3xl">
            Each product is independently viable. Together they form a closed-loop economic engine — every transaction, every user, every data point multiplies the value of every other node in the network.
          </p>
        </div>
      </div>

      <KenteDivider className="mb-16" opacity={30} />

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-32">

        {/* P-Levy */}
        <GlassPanel className="p-6 relative overflow-hidden group hover:border-secondary/40 transition-colors duration-500">
          <div className="flex justify-between items-start mb-4">
            <span className="font-label-md text-on-surface-variant bg-surface-container-high px-3 py-1 rounded">P-01</span>
            <span className="font-label-md text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded">Live · Hackathon Winner</span>
          </div>
          <h3 className="font-headline-md text-on-surface mb-2">P-Levy</h3>
          <p className="font-body-md text-on-surface-variant mb-6">
            Silent automated wealth-building for every Ghanaian. Routes a micro-percentage of every MoMo transaction into structured savings and micro-investments. The E-Levy mechanism reversed — serving the people who fund it.
          </p>
          <div className="mt-auto border-t border-outline/20 pt-4">
            <p className="font-label-md text-sm text-secondary/80 italic">Target: ₵2.4B/year at 5% MoMo penetration · 17M+ users in reach</p>
          </div>
        </GlassPanel>

        {/* Fin-Wrapped */}
        <GlassPanel className="p-6 relative overflow-hidden group hover:border-secondary/40 transition-colors duration-500 lg:col-span-2">
          <div className="flex justify-between items-start mb-4">
            <span className="font-label-md text-on-surface-variant bg-surface-container-high px-3 py-1 rounded">P-02</span>
            <span className="font-label-md text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded">Live · Award-Winning SDK</span>
          </div>
          <h3 className="font-headline-md text-on-surface mb-2">Fin-Wrapped</h3>
          <p className="font-body-md text-on-surface-variant mb-6 max-w-2xl">
            Spotify Wrapped for your finances. AI-driven financial intelligence as a white-label SDK — integrates into banks and MoMo providers to deliver hyper-personalised insights at scale.
          </p>
          <div className="mt-auto border-t border-outline/20 pt-4">
            <p className="font-label-md text-sm text-secondary/80 italic">B2B pipeline: GCB · Absa Ghana · Fidelity · MTN</p>
          </div>
        </GlassPanel>

        {/* Finly */}
        <GlassPanel className="p-6 relative overflow-hidden group hover:border-secondary/40 transition-colors duration-500">
          <div className="flex justify-between items-start mb-4">
            <span className="font-label-md text-on-surface-variant bg-surface-container-high px-3 py-1 rounded">P-03</span>
            <span className="font-label-md text-amber-500 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded">In Development</span>
          </div>
          <h3 className="font-headline-md text-on-surface mb-2">Finly</h3>
          <p className="font-body-md text-on-surface-variant mb-6">
            The financial brain of Ghana's informal economy. Inventory, sales, and AI analytics for 2.8M+ informal SMEs that power 80% of Ghana's GDP — offline-first, MoMo-native, built to scale across Africa.
          </p>
          <div className="mt-auto border-t border-outline/20 pt-4">
            <p className="font-label-md text-sm text-secondary/80 italic">TAM: 2.8M+ Ghanaian informal SMEs · Continent-wide expansion architecture</p>
          </div>
        </GlassPanel>

        {/* Xcommerce */}
        <GlassPanel className="p-6 relative overflow-hidden group hover:border-secondary/40 transition-colors duration-500">
          <div className="flex justify-between items-start mb-4">
            <span className="font-label-md text-on-surface-variant bg-surface-container-high px-3 py-1 rounded">P-04</span>
            <span className="font-label-md text-amber-500 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded">In Development</span>
          </div>
          <h3 className="font-headline-md text-on-surface mb-2">Xcommerce</h3>
          <p className="font-body-md text-on-surface-variant mb-6">
            Ghana's organic-first marketplace where every purchase simultaneously builds equity in GSE-listed Ghanaian companies. Commerce as wealth creation — not extraction.
          </p>
          <div className="mt-auto border-t border-outline/20 pt-4">
            <p className="font-label-md text-sm text-secondary/80 italic">Integration: Xlevy pipeline · Xvends physical network · Finly seller tools</p>
          </div>
        </GlassPanel>

        {/* Xlevy */}
        <GlassPanel className="p-6 relative overflow-hidden group hover:border-secondary/40 transition-colors duration-500">
          <div className="flex justify-between items-start mb-4">
            <span className="font-label-md text-on-surface-variant bg-surface-container-high px-3 py-1 rounded">P-05</span>
            <span className="font-label-md text-amber-500 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded">In Development</span>
          </div>
          <h3 className="font-headline-md text-on-surface mb-2">Xlevy</h3>
          <p className="font-body-md text-on-surface-variant mb-6">
            Every purchase, an investment in Ghana. Micro-investment infrastructure that pipelines consumer spending directly to Ghana Stock Exchange-listed companies. Every Ghanaian becomes a shareholder.
          </p>
          <div className="mt-auto border-t border-outline/20 pt-4">
            <p className="font-label-md text-sm text-secondary/80 italic">GSE listing prep active · Regulatory engagement underway</p>
          </div>
        </GlassPanel>

        {/* Expogen */}
        <GlassPanel className="p-6 relative overflow-hidden group hover:border-secondary/40 transition-colors duration-500">
          <div className="flex justify-between items-start mb-4">
            <span className="font-label-md text-on-surface-variant bg-surface-container-high px-3 py-1 rounded">P-06</span>
            <span className="font-label-md text-on-surface bg-surface-variant/50 border border-outline/30 px-3 py-1 rounded">Design Phase</span>
          </div>
          <h3 className="font-headline-md text-on-surface mb-2">Expogen</h3>
          <p className="font-body-md text-on-surface-variant mb-6">
            Ghana's products in every African market. AfCFTA-compliant export facilitation connecting Ghanaian producers across all 54 countries — the trade infrastructure the continent was promised under AfCFTA.
          </p>
          <div className="mt-auto border-t border-outline/20 pt-4">
            <p className="font-label-md text-sm text-secondary/80 italic">TAM: $8.2T under AfCFTA · First-mover in compliant pan-African export tech</p>
          </div>
        </GlassPanel>

        {/* Xhomes */}
        <GlassPanel className="p-6 relative overflow-hidden group hover:border-secondary/40 transition-colors duration-500">
          <div className="flex justify-between items-start mb-4">
            <span className="font-label-md text-on-surface-variant bg-surface-container-high px-3 py-1 rounded">P-07</span>
            <span className="font-label-md text-on-surface bg-surface-variant/50 border border-outline/30 px-3 py-1 rounded">Design Phase</span>
          </div>
          <h3 className="font-headline-md text-on-surface mb-2">Xhomes</h3>
          <p className="font-body-md text-on-surface-variant mb-6">
            Diaspora capital, redirected. Premium AI-designed homes where every purchase funds a new XLABS learning centre. 3M+ Ghanaians abroad building wealth at home instead of abroad.
          </p>
          <div className="mt-auto border-t border-outline/20 pt-4">
            <p className="font-label-md text-sm text-secondary/80 italic">Diaspora pipeline: 3M+ Ghanaians · $4B+ annual remittances to redirect</p>
          </div>
        </GlassPanel>

        {/* X Shorts */}
        <GlassPanel className="p-6 relative overflow-hidden group hover:border-secondary/40 transition-colors duration-500">
          <div className="flex justify-between items-start mb-4">
            <span className="font-label-md text-on-surface-variant bg-surface-container-high px-3 py-1 rounded">P-08</span>
            <span className="font-label-md text-on-surface bg-surface-variant/50 border border-outline/30 px-3 py-1 rounded">Design Phase</span>
          </div>
          <h3 className="font-headline-md text-on-surface mb-2">X Shorts</h3>
          <p className="font-body-md text-on-surface-variant mb-6">
            TikTok meets Pinterest, built for African commerce. The first commerce-native short-form video platform on the continent — where watching becomes buying and buying builds community equity.
          </p>
          <div className="mt-auto border-t border-outline/20 pt-4">
            <p className="font-label-md text-sm text-secondary/80 italic">Integration: Xcommerce checkout · Creator monetisation via Xlevy</p>
          </div>
        </GlassPanel>

        {/* Xvends */}
        <GlassPanel className="p-6 relative overflow-hidden group hover:border-secondary/40 transition-colors duration-500">
          <div className="flex justify-between items-start mb-4">
            <span className="font-label-md text-on-surface-variant bg-surface-container-high px-3 py-1 rounded">P-09</span>
            <span className="font-label-md text-on-surface bg-surface-variant/50 border border-outline/30 px-3 py-1 rounded">Design Phase</span>
          </div>
          <h3 className="font-headline-md text-on-surface mb-2">Xvends</h3>
          <p className="font-body-md text-on-surface-variant mb-6">
            Organic Ghanaian vending machines in every XLABS school, university, hospital, and corporate campus. The physical retail arm of Xcommerce — bringing the digital flywheel into the real world.
          </p>
          <div className="mt-auto border-t border-outline/20 pt-4">
            <p className="font-label-md text-sm text-secondary/80 italic">Pilot: 10 units · Scale target: every XLABS-partnered institution</p>
          </div>
        </GlassPanel>

        {/* DiscreetKit */}
        <GlassPanel className="p-6 relative overflow-hidden group hover:border-secondary/40 transition-colors duration-500">
          <div className="flex justify-between items-start mb-4">
            <span className="font-label-md text-on-surface-variant bg-surface-container-high px-3 py-1 rounded">P-10</span>
            <span className="font-label-md text-on-surface-variant bg-surface-container-highest px-3 py-1 rounded border border-outline/30">Concept Architecture</span>
          </div>
          <h3 className="font-headline-md text-on-surface mb-2">DiscreetKit</h3>
          <p className="font-body-md text-on-surface-variant mb-6">
            Ghana's first AI-powered pharmacy. Computer vision medication verification for OTC access — addressing the structural crisis of 1 pharmacist per 12,000 Ghanaians with software, not headcount.
          </p>
          <div className="mt-auto border-t border-outline/20 pt-4">
            <p className="font-label-md text-sm text-secondary/80 italic">Ghana pharmacist ratio: 1:12,000 · AI verification pipeline in architecture</p>
          </div>
        </GlassPanel>

      </div>
    </main>
  );
};

export default Products;