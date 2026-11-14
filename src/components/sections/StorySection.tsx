'use client'

import { DogScene } from '@/components/3d/DogScene';
import { useScrollActivity } from '@/hooks/useScrollActivity';
import { useRef } from 'react';
import { BrandLogo } from '../ui/BrandLogo';

export function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { isScrolling, direction, isAtStart } = useScrollActivity(sectionRef);

  return (
    <section ref={sectionRef} className="story" id="inicio">
      <div className="story-sticky">
        {/* Horizontal content */}
        <div className="story-track">
          {/* Scene 1 - Hero */}
          <section className="story-panel bg-[#FAE8DD]">
            {/* Header */}
            <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-6 md:px-12 md:py-8">
              <a
                href="#inicio"
                className="font-display text-3xl font-bold tracking-tight text-[#29211F]"
              >
                <BrandLogo variant="dark" />
              </a>

              <span className="font-sans hidden text-xs font-semibold tracking-[0.2em] text-[#624A42] uppercase md:block">
                Educación canina respetuosa
              </span>

              <a
                href="https://www.instagram.com/bark.bolivia/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#29211F]/20 px-5 py-2 text-sm font-semibold text-[#29211F] transition-colors hover:bg-[#29211F] hover:text-white"
              >
                Hablemos ↗
              </a>
            </header>

            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="hero-title font-accent select-none text-[31vw] leading-none font-bold tracking-[-0.07em] text-[#F1492F]">
                BARK
              </h1>
            </div>

            <div className="absolute top-[23%] left-6 md:left-[8%]">
              <span className="font-accent inline-flex -rotate-6 rounded-full bg-[#F1492F] px-5 py-3 text-sm font-semibold text-white shadow-lg md:text-lg">
                ¡Guau! 🐾
              </span>
            </div>

            <div className="absolute right-6 bottom-[5%] max-w-45 text-right md:right-[8%] md:max-w-70">
              <p className="font-display text-lg leading-tight font-semibold text-[#29211F] md:text-3xl">
                Grandes vínculos,
                pequeños pasos.
              </p>

              <p className="mt-3 text-xs text-[#624A42] md:text-sm">
                Aprende a comprender mejor a tu mejor amigo.
              </p>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-6 flex items-center gap-3 md:left-12">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#624A42]/40 text-[#624A42]">
                ↓
              </span>

              <span className="text-xs font-semibold tracking-widest text-[#624A42] uppercase">
                Desliza para explorar
              </span>
            </div>

            {/* Decoration */}
            <div className="absolute bottom-[14%] left-[15%] h-4 w-4 rounded-full bg-[#F1492F]/50 md:h-6 md:w-6" />
            <div className="absolute top-[28%] right-[15%] h-3 w-3 rounded-full bg-[#E9AA64]" />
          </section>


          <section
            id="servicios"
            className="story-panel bg-[#F2C5B4]"
          >
            <div className="flex h-full max-w-xl flex-col justify-center px-8 md:ml-[12vw]">
              <h2 className="font-display mb-4 text-sm font-bold tracking-widest text-[#9D3929] uppercase">
                Nuestros servicios
              </h2>

              <h2 className="text-5xl leading-tight font-black text-[#382621] md:text-7xl">
                Aprender juntos
                es mejor.
              </h2>

              <p className="mt-6 max-w-sm text-lg text-[#624A42]">
                Educación y acompañamiento para construir
                una relación de confianza con tu perro.
              </p>
            </div>
          </section>

          {/* Scene 3 - Contact */}
          <section
            id="contacto"
            className="story-panel bg-[#C9E4D7]"
          >
            <div className="flex h-full max-w-xl flex-col justify-center px-8 md:ml-[12vw]">
              <span className="mb-4 text-sm font-bold tracking-widest text-[#436B59] uppercase">
                Hablemos
              </span>

              <h2 className="text-5xl leading-tight font-black text-[#253C2E] md:text-7xl">
                Tu mejor amigo
                merece lo mejor.
              </h2>

              <p className="mt-6 max-w-sm text-lg text-[#426447]">
                Comienza una nueva etapa junto a tu perro.
              </p>

              <a
                href="https://www.instagram.com/bark.bolivia/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-fit rounded-full bg-[#253C2E] px-7 py-4 font-semibold text-white transition-colors hover:bg-[#426447]"
              >
                Contáctanos ↗
              </a>
            </div>
          </section>
        </div>

        <div className="dog-layer pointer-events-none absolute inset-0 z-10">
          <DogScene
            animation={isScrolling ? 'Walk' : 'Idle'}
            isMoving={isScrolling}
            direction={direction}
            isAtStart={isAtStart}
          />
        </div>
      </div>
    </section>
  );
}
