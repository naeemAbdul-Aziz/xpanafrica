import React from 'react';
import GlassPanel from '../components/GlassPanel';
import KenteDivider from '../components/KenteDivider';
import Button from '../components/Button';

const RoadmapTeam = () => {
  return (
    <main className="flex-grow pt-32 px-gutter max-w-container-max mx-auto w-full">
      {/* Roadmap Section */}
      <section className="py-margin-desktop relative">
        <div className="mb-16">
          <h2 className="font-headline-xl text-on-surface mb-4">Strategic Horizon</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl">A 36-month projection of institutional development, product deployment, and ecosystem integration.</p>
          <KenteDivider className="mt-8" altStyle />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* NOW */}
          <GlassPanel className="p-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>
            <h3 className="font-label-md text-secondary uppercase mb-2">NOW</h3>
            <h4 className="font-headline-md text-on-surface mb-4">Foundation</h4>
            <ul className="space-y-4 font-body-md text-on-surface-variant z-10 relative">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-2 text-sm mt-1">check_circle</span>
                <span>Core Infrastructure Deployment</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-secondary mr-2 text-sm mt-1">check_circle</span>
                <span>Initial Capital Formation</span>
              </li>
            </ul>
            <span className="material-symbols-outlined absolute bottom-2 right-2 text-6xl text-white/5 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">account_balance</span>
          </GlassPanel>

          {/* Phase I */}
          <GlassPanel className="p-6 relative overflow-hidden group">
            <h3 className="font-label-md text-tertiary uppercase mb-2">Phase I</h3>
            <h4 className="font-headline-md text-on-surface mb-4">Acceleration</h4>
            <ul className="space-y-4 font-body-md text-on-surface-variant z-10 relative">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-tertiary mr-2 text-sm mt-1">radio_button_unchecked</span>
                <span>Beta Product Release</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-tertiary mr-2 text-sm mt-1">radio_button_unchecked</span>
                <span>Strategic Partnerships</span>
              </li>
            </ul>
            <span className="material-symbols-outlined absolute bottom-2 right-2 text-6xl text-white/5 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">rocket_launch</span>
          </GlassPanel>

          {/* Phase II */}
          <GlassPanel className="p-6 relative overflow-hidden group">
            <h3 className="font-label-md text-on-surface-variant uppercase mb-2">Phase II</h3>
            <h4 className="font-headline-md text-on-surface mb-4">Expansion</h4>
            <ul className="space-y-4 font-body-md text-on-surface-variant z-10 relative">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-outline mr-2 text-sm mt-1">radio_button_unchecked</span>
                <span>Global Market Entry</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-outline mr-2 text-sm mt-1">radio_button_unchecked</span>
                <span>Advanced AI Integration</span>
              </li>
            </ul>
            <span className="material-symbols-outlined absolute bottom-2 right-2 text-6xl text-white/5 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">public</span>
          </GlassPanel>

          {/* Phase III */}
          <GlassPanel className="p-6 relative overflow-hidden group">
            <h3 className="font-label-md text-on-surface-variant uppercase mb-2">Phase III</h3>
            <h4 className="font-headline-md text-on-surface mb-4">Dominance</h4>
            <ul className="space-y-4 font-body-md text-on-surface-variant z-10 relative">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-outline mr-2 text-sm mt-1">radio_button_unchecked</span>
                <span>Ecosystem Maturation</span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-outline mr-2 text-sm mt-1">radio_button_unchecked</span>
                <span>Decentralized Governance</span>
              </li>
            </ul>
            <span className="material-symbols-outlined absolute bottom-2 right-2 text-6xl text-white/5 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">account_tree</span>
          </GlassPanel>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-margin-desktop">
        <div className="mb-16">
          <h2 className="font-headline-xl text-on-surface mb-4">Architects</h2>
          <KenteDivider className="mt-8" altStyle />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <GlassPanel className="p-6 flex flex-col bg-surface-container/60 backdrop-blur-sm border-white/5 rounded-xl">
            <div className="w-full h-48 bg-surface-container-high rounded-lg mb-6 overflow-hidden">
              <img
                alt="Bright Yaw Habada"
                className="w-full h-full object-cover grayscale opacity-80"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
              />
            </div>
            <h3 className="font-headline-md text-on-surface">Bright Yaw Habada</h3>
            <p className="font-label-md text-secondary uppercase tracking-widest mb-4">Chief Executive Officer</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-2 py-1 bg-primary-container border border-white/10 rounded font-label-md text-xs text-on-surface-variant">Strategic Vision</span>
              <span className="px-2 py-1 bg-primary-container border border-white/10 rounded font-label-md text-xs text-on-surface-variant">Capital Markets</span>
            </div>
          </GlassPanel>

          {/* Team Member 2 */}
          <GlassPanel className="p-6 flex flex-col bg-surface-container/60 backdrop-blur-sm border-white/5 rounded-xl">
            <div className="w-full h-48 bg-surface-container-high rounded-lg mb-6 overflow-hidden">
              <img
                alt="Derrick Debrah"
                className="w-full h-full object-cover grayscale opacity-80"
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop"
              />
            </div>
            <h3 className="font-headline-md text-on-surface">Derrick Debrah</h3>
            <p className="font-label-md text-secondary uppercase tracking-widest mb-4">Chief Technology Officer</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-2 py-1 bg-primary-container border border-white/10 rounded font-label-md text-xs text-on-surface-variant">Systems Architecture</span>
              <span className="px-2 py-1 bg-primary-container border border-white/10 rounded font-label-md text-xs text-on-surface-variant">Cryptography</span>
            </div>
          </GlassPanel>

          {/* Team Member 3 */}
          <GlassPanel className="p-6 flex flex-col bg-surface-container/60 backdrop-blur-sm border-white/5 rounded-xl">
            <div className="w-full h-48 bg-surface-container-high rounded-lg mb-6 overflow-hidden">
              <img
                alt="Iyad-Deen Fuseini"
                className="w-full h-full object-cover grayscale opacity-80"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
              />
            </div>
            <h3 className="font-headline-md text-on-surface">Iyad-Deen Fuseini</h3>
            <p className="font-label-md text-secondary uppercase tracking-widest mb-4">Chief Operating Officer</p>
            <div className="flex flex-wrap gap-2 mt-auto">
              <span className="px-2 py-1 bg-primary-container border border-white/10 rounded font-label-md text-xs text-on-surface-variant">Operations Scaling</span>
              <span className="px-2 py-1 bg-primary-container border border-white/10 rounded font-label-md text-xs text-on-surface-variant">Risk Management</span>
            </div>
          </GlassPanel>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-margin-desktop text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-secondary/5 blur-[100px] rounded-full pointer-events-none"></div>
        <h2 className="font-headline-xl text-on-surface mb-6 relative z-10">This is not a startup.<br/><span className="text-secondary">This is a civilization.</span></h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12 relative z-10">
          <Button variant="primary" size="lg">Request Full Prospectus</Button>
          <Button variant="outline" size="lg">View Live Products</Button>
        </div>
      </section>
    </main>
  );
};

export default RoadmapTeam;