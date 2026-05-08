import AnimatedHeading from './AnimatedHeading';
import FadeIn from './FadeIn';

const VIDEO_URL = `${import.meta.env.BASE_URL}hero.mp4`;

export default function HeroSection() {
  return (
    <section className="min-h-screen relative flex flex-col text-white">
      {/* Background video — no overlay */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={VIDEO_URL} type="video/mp4" />
      </video>

      {/* Content pinned to bottom */}
      <div className="px-6 md:px-12 lg:px-16 flex flex-col flex-1 justify-end pb-12 lg:pb-16 relative z-10 lg:grid lg:grid-cols-2 lg:items-end">
        {/* Left column */}
        <div>
          <div style={{ letterSpacing: '-0.04em' }}>
            <AnimatedHeading
              text={"Des débuts de vie\nremplis de douceur."}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4"
            />
          </div>

          <FadeIn delay={800}>
            <p className="text-base md:text-lg text-gray-300 mb-5">
              Nous sélectionnons les plus belles marques pour accompagner chaque premier instant de votre enfant.
            </p>
          </FadeIn>

          <FadeIn delay={1200}>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                Nous contacter
              </button>
              <button className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-colors duration-200">
                Explorer
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Right column */}
        <div className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0">
          <FadeIn delay={1400}>
            <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
              <p className="text-lg md:text-xl lg:text-2xl font-light">
                Poussettes.&nbsp;Vêtements.&nbsp;Accessoires.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
