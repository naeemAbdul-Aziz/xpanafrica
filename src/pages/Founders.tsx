import React from 'react';
import GlassPanel from '../components/GlassPanel';
import KenteDivider from '../components/KenteDivider';

const Founders = () => {
  return (
    <main className="flex-grow pt-[100px] pb-margin-desktop md:pt-[120px] px-gutter max-w-container-max mx-auto w-full">
      {/* Team Section */}
      <section className="mb-margin-desktop">
        <div className="mb-12 text-center md:text-left">
          <span className="font-label-md text-secondary uppercase tracking-[0.2em] mb-4 block">The Founders</span>
          <h1 className="font-headline-xl text-on-surface mb-4">Built by Ghana. <span className="italic text-secondary/90">For Africa.</span></h1>
          <p className="font-body-lg text-on-surface-variant max-w-3xl">
            Three founders who did not wait for permission. Two live products. Two hackathon wins. A shared architecture that scales to a continent. This is what execution looks like before the billion.
          </p>
        </div>

        <KenteDivider className="mb-16" altStyle />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <GlassPanel className="p-8 flex flex-col relative overflow-hidden group border-outline/20 hover:border-secondary/30 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container-lowest/80 z-10"></div>
            <div className="w-full h-64 bg-surface-container-high rounded-lg mb-6 overflow-hidden absolute top-0 left-0">
              <img
                alt="Bright Yaw Habada"
                className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105 transform"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
              />
            </div>

            <div className="relative z-20 mt-48 flex-grow flex flex-col">
              <h3 className="font-headline-lg text-on-surface mb-1">Bright Yaw Habada</h3>
              <p className="font-label-md text-secondary uppercase tracking-widest mb-4">Co-Founder · Product &amp; Strategy</p>

              <p className="font-body-md text-on-surface-variant mb-6 flex-grow">
                Architect of the ten-product interconnected financial OS. Leads product vision and go-to-market strategy for the entire X-Ecosystem across 54 markets.
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 bg-surface-container-lowest border border-outline/20 rounded font-label-md text-xs text-on-surface-variant">Product</span>
                <span className="px-3 py-1 bg-surface-container-lowest border border-outline/20 rounded font-label-md text-xs text-on-surface-variant">Strategy</span>
                <span className="px-3 py-1 bg-surface-container-lowest border border-outline/20 rounded font-label-md text-xs text-on-surface-variant">Vision</span>
              </div>
            </div>
          </GlassPanel>

          {/* Team Member 2 */}
          <GlassPanel className="p-8 flex flex-col relative overflow-hidden group border-outline/20 hover:border-secondary/30 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container-lowest/80 z-10"></div>
            <div className="w-full h-64 bg-surface-container-high rounded-lg mb-6 overflow-hidden absolute top-0 left-0">
              <img
                alt="Derrick Debrah"
                className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105 transform"
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop"
              />
            </div>

            <div className="relative z-20 mt-48 flex-grow flex flex-col">
              <h3 className="font-headline-lg text-on-surface mb-1">Derrick Debrah</h3>
              <p className="font-label-md text-secondary uppercase tracking-widest mb-4">Co-Founder · Engineering</p>

              <p className="font-body-md text-on-surface-variant mb-6 flex-grow">
                Leads all technical architecture across the Finly shared backend. Built the award-winning P-Levy MVP and Fin-Wrapped SDK — both live, both winning, both scaling.
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 bg-surface-container-lowest border border-outline/20 rounded font-label-md text-xs text-on-surface-variant">Engineering</span>
                <span className="px-3 py-1 bg-surface-container-lowest border border-outline/20 rounded font-label-md text-xs text-on-surface-variant">Architecture</span>
                <span className="px-3 py-1 bg-surface-container-lowest border border-outline/20 rounded font-label-md text-xs text-on-surface-variant">Backend</span>
              </div>
            </div>
          </GlassPanel>

          {/* Team Member 3 */}
          <GlassPanel className="p-8 flex flex-col relative overflow-hidden group border-outline/20 hover:border-secondary/30 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container-lowest/80 z-10"></div>
            <div className="w-full h-64 bg-surface-container-high rounded-lg mb-6 overflow-hidden absolute top-0 left-0">
              <img
                alt="Iyad-Deen Fuseini"
                className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105 transform"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
              />
            </div>

            <div className="relative z-20 mt-48 flex-grow flex flex-col">
              <h3 className="font-headline-lg text-on-surface mb-1">Iyad-Deen Fuseini</h3>
              <p className="font-label-md text-secondary uppercase tracking-widest mb-4">Co-Founder · Development</p>

              <p className="font-body-md text-on-surface-variant mb-6 flex-grow">
                Drives full-stack development and systems integration. Ensures offline-first, AI-native principles are embedded in every X-product from the ground up — not patched in after.
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                <span className="px-3 py-1 bg-surface-container-lowest border border-outline/20 rounded font-label-md text-xs text-on-surface-variant">Full-Stack</span>
                <span className="px-3 py-1 bg-surface-container-lowest border border-outline/20 rounded font-label-md text-xs text-on-surface-variant">Integration</span>
                <span className="px-3 py-1 bg-surface-container-lowest border border-outline/20 rounded font-label-md text-xs text-on-surface-variant">AI Systems</span>
              </div>
            </div>
          </GlassPanel>
        </div>
      </section>
    </main>
  );
};

export default Founders;