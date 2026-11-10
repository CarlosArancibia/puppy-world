'use client'

import { DogScene } from '@/components/3d/DogScene';
import { useScrollActivity } from '@/hooks/useScrollActivity';
import { useRef } from 'react';

export function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { isScrolling, direction } = useScrollActivity(sectionRef);

  console.log({ direction });


  return (
    <section ref={sectionRef} className="story" id="inicio">
      <div className="story-sticky">
        {/* Horizontal content */}
        <div className="story-track">
          {/* Scene 1 - Hero */}
          <section className="story-panel bg-[#FAE8DD]">
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="select-none text-[31vw] leading-none font-black tracking-[-0.09em] text-[#F1492F]">
                BARK
              </h1>
            </div>

            <p className="absolute top-[15%] left-1/2 -translate-x-1/2 text-center text-xs font-semibold tracking-[0.2em] text-[#624A42] uppercase md:text-sm">
              Educación canina amable y respetuosa
            </p>

            <p className="absolute bottom-10 left-8 text-sm font-medium text-[#624A42]">
              Scroll para descubrir
              <span className="ml-2" aria-hidden="true">↓</span>
            </p>
          </section>

          {/* Scene 2 - Services */}
          <section
            id="servicios"
            className="story-panel bg-[#F2C5B4]"
          >
            <div className="flex h-full max-w-xl flex-col justify-center px-8 md:ml-[12vw]">
              <span className="mb-4 text-sm font-bold tracking-widest text-[#9D3929] uppercase">
                Nuestros servicios
              </span>

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

        <div className="pointer-events-none absolute inset-0 z-10">
          <DogScene
            animation={isScrolling ? 'Walk' : 'Idle'}
            isMoving={isScrolling}
            direction={direction}
          />
        </div>
      </div>
    </section>
  );
}
