import React from 'react';
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 lg:gap-8 items-end min-h-[600px] mt-24">
          {/* Team Member 1 */}
          <div className="flex flex-col relative w-full h-[500px] rounded-t-full bg-secondary/80 text-background overflow-hidden group md:mb-12">
            <div className="pt-12 px-6 text-center z-20">
              <h3 className="font-headline-md font-bold uppercase tracking-wider mb-1 text-on-secondary">Bright Yaw Habada</h3>
              <p className="font-label-md text-on-secondary/80 mb-4">Co-Founder · Product &amp; Strategy</p>
              <p className="font-body-sm text-on-secondary/90 leading-snug">
                Architect of the ten-product interconnected financial OS.
              </p>
            </div>

            <div className="absolute bottom-0 w-full h-2/3 mt-auto">
              <img
                alt="Bright Yaw Habada"
                className="w-full h-full object-cover object-top grayscale contrast-125 mix-blend-multiply"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop"
              />
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col relative w-full h-[550px] rounded-t-full bg-[#cbd5e1] text-background overflow-hidden group">
            <div className="pt-16 px-6 text-center z-20">
              <h3 className="font-headline-md font-bold uppercase tracking-wider mb-1 text-slate-900">Derrick Debrah</h3>
              <p className="font-label-md text-slate-700 mb-4">Co-Founder · Engineering</p>
              <p className="font-body-sm text-slate-800 leading-snug">
                Leads all technical architecture across the Finly shared backend.
              </p>
            </div>

            <div className="absolute bottom-0 w-full h-2/3 mt-auto">
              <img
                alt="Derrick Debrah"
                className="w-full h-full object-cover object-top grayscale contrast-125 mix-blend-multiply"
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop"
              />
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col relative w-full h-[450px] rounded-t-full bg-[#fcd34d] text-background overflow-hidden group md:mb-24">
            <div className="pt-10 px-6 text-center z-20">
              <h3 className="font-headline-md font-bold uppercase tracking-wider mb-1 text-amber-900">Iyad-Deen Fuseini</h3>
              <p className="font-label-md text-amber-800 mb-4">Co-Founder · Development</p>
              <p className="font-body-sm text-amber-900 leading-snug">
                Drives full-stack development and systems integration.
              </p>
            </div>

            <div className="absolute bottom-0 w-full h-2/3 mt-auto">
              <img
                alt="Iyad-Deen Fuseini"
                className="w-full h-full object-cover object-top grayscale contrast-125 mix-blend-multiply"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Founders;