import React from 'react';

const Thesis = () => {
  return (
    <main className="flex-grow z-10 w-full max-w-container-max mx-auto px-gutter pt-32 pb-margin-desktop">
      {/* Investment Thesis Section */}
      <section className="mb-32">
        <div className="text-center mb-16">
          <span className="font-label-md text-secondary uppercase tracking-widest mb-4 block">Investment Thesis</span>
          <h2 className="font-headline-xl text-on-surface">Why XLABS <span className="italic text-secondary/90">beats</span> Y Combinator</h2>

          <div className="font-body-lg text-on-surface-variant max-w-4xl mx-auto mt-8 space-y-6 text-left md:text-center">
            <p>
              Y Combinator has produced more than $600 billion in portfolio value — from a single city, a single model, and a market that was already built. <strong>Africa is different.</strong> 1.4 billion people. A $3T+ GDP. Mobile-money infrastructure with no Western equivalent. And zero platform that owns the financial rails African founders must build on.
            </p>
            <p>
              XLABS is not a YC clone. It is structurally superior: we do not just fund companies — we build the infrastructure they run on. Every startup that joins the X-Ecosystem plugs into live MoMo rails, a shared identity layer, AI credit scoring, and a closed-loop economic flywheel that YC cannot replicate from San Francisco.
            </p>
          </div>
        </div>

        <div className="glass-panel overflow-hidden border-outline/30 rounded-xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 bg-surface-container-high/50 p-6 border-b border-outline/30">
            <div className="font-label-md text-on-surface-variant uppercase tracking-wider hidden md:block">Category</div>
            <div className="font-label-md text-on-surface-variant uppercase tracking-wider hidden md:block">Y Combinator</div>
            <div className="font-label-md text-secondary uppercase tracking-wider hidden md:block">XLABS</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 p-6 border-b border-outline/10 hover:bg-surface-container-lowest/50 transition-colors gap-2 md:gap-4">
            <div className="font-body-md text-on-surface font-medium md:mb-0 mb-1"><span className="md:hidden font-label-md text-on-surface-variant uppercase mr-2">Category:</span>Geography</div>
            <div className="font-body-md text-on-surface-variant md:mb-0 mb-1"><span className="md:hidden font-label-md text-on-surface-variant uppercase mr-2">YC:</span>San Francisco-centric. African founders must relocate, assimilate, pitch American VCs.</div>
            <div className="font-body-md text-on-surface"><span className="md:hidden font-label-md text-secondary uppercase mr-2">XLABS:</span>Ghana-headquartered. 54 African markets from day one. Founders stay home and build for their people.</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 p-6 border-b border-outline/10 hover:bg-surface-container-lowest/50 transition-colors gap-2 md:gap-4">
            <div className="font-body-md text-on-surface font-medium md:mb-0 mb-1"><span className="md:hidden font-label-md text-on-surface-variant uppercase mr-2">Category:</span>Equity model</div>
            <div className="font-body-md text-on-surface-variant md:mb-0 mb-1"><span className="md:hidden font-label-md text-on-surface-variant uppercase mr-2">YC:</span>7% equity per batch. Capital only.</div>
            <div className="font-body-md text-on-surface"><span className="md:hidden font-label-md text-secondary uppercase mr-2">XLABS:</span>Shared financial OS. Founders plug into live infrastructure — capital plus rails plus data plus users.</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 p-6 border-b border-outline/10 hover:bg-surface-container-lowest/50 transition-colors gap-2 md:gap-4">
            <div className="font-body-md text-on-surface font-medium md:mb-0 mb-1"><span className="md:hidden font-label-md text-on-surface-variant uppercase mr-2">Category:</span>Infrastructure</div>
            <div className="font-body-md text-on-surface-variant md:mb-0 mb-1"><span className="md:hidden font-label-md text-on-surface-variant uppercase mr-2">YC:</span>Batch cohorts and a Slack. No shared financial rails.</div>
            <div className="font-body-md text-on-surface"><span className="md:hidden font-label-md text-secondary uppercase mr-2">XLABS:</span>Finly backend. P-Levy MoMo rails. Xcommerce channels. AI credit scoring. Live from launch.</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 p-6 border-b border-outline/10 hover:bg-surface-container-lowest/50 transition-colors gap-2 md:gap-4">
            <div className="font-body-md text-on-surface font-medium md:mb-0 mb-1"><span className="md:hidden font-label-md text-on-surface-variant uppercase mr-2">Category:</span>Moat</div>
            <div className="font-body-md text-on-surface-variant md:mb-0 mb-1"><span className="md:hidden font-label-md text-on-surface-variant uppercase mr-2">YC:</span>Brand and alumni network. Reputational, not structural.</div>
            <div className="font-body-md text-on-surface"><span className="md:hidden font-label-md text-secondary uppercase mr-2">XLABS:</span>Regulatory relationships + live MoMo integrations + GSE pipeline. Structural, compounding, defensible.</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 p-6 border-b border-outline/10 hover:bg-surface-container-lowest/50 transition-colors gap-2 md:gap-4">
            <div className="font-body-md text-on-surface font-medium md:mb-0 mb-1"><span className="md:hidden font-label-md text-on-surface-variant uppercase mr-2">Category:</span>Compounding</div>
            <div className="font-body-md text-on-surface-variant md:mb-0 mb-1"><span className="md:hidden font-label-md text-on-surface-variant uppercase mr-2">YC:</span>Each company stands alone. No economic interdependence.</div>
            <div className="font-body-md text-on-surface"><span className="md:hidden font-label-md text-secondary uppercase mr-2">XLABS:</span>Every product feeds every other. Data, users, and revenue multiply across the ecosystem.</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 p-6 hover:bg-surface-container-lowest/50 transition-colors gap-2 md:gap-4">
            <div className="font-body-md text-on-surface font-medium md:mb-0 mb-1"><span className="md:hidden font-label-md text-on-surface-variant uppercase mr-2">Category:</span>Market access</div>
            <div className="font-body-md text-on-surface-variant md:mb-0 mb-1"><span className="md:hidden font-label-md text-on-surface-variant uppercase mr-2">YC:</span>US-first. Africa is an afterthought.</div>
            <div className="font-body-md text-on-surface"><span className="md:hidden font-label-md text-secondary uppercase mr-2">XLABS:</span>AfCFTA-native. Every product crosses all 54 African borders by design.</div>
          </div>
        </div>

        <div className="p-12 text-center relative overflow-hidden glass-panel rounded-2xl border-outline/20">
          <div className="absolute -top-6 -left-6 text-9xl text-primary-container/40 font-serif leading-none">"</div>
          <blockquote className="font-headline-md text-on-surface relative z-10 italic max-w-4xl mx-auto">
            "The next Silicon Valley will not be a valley. It will be an operating system — and it will be built in Africa."
            <footer className="mt-6 font-body-md text-sm text-secondary uppercase tracking-widest not-italic">
              — XLABS Fintech Hub · Investment Prospectus 2026
            </footer>
          </blockquote>
        </div>
      </section>
    </main>
  );
};

export default Thesis;