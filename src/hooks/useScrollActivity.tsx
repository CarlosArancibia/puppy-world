
'use client';

import { useEffect, useState } from 'react';
import type { RefObject } from 'react';

type ScrollDirection = 'forward' | 'backward' | null;

interface ScrollActivity {
  isScrolling: boolean;
  direction: ScrollDirection;
}

export function useScrollActivity(sectionRef: RefObject<HTMLElement | null>): ScrollActivity {
  const [activity, setActivity] = useState<ScrollActivity>({
    isScrolling: false,
    direction: null,
  });

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      lastScrollY = currentScrollY;

      const section = sectionRef.current;

      if (!section) return;

      const { top, bottom } = section.getBoundingClientRect();

      const isActive = top <= 0 && bottom > window.innerHeight;

      if (!isActive || Math.abs(delta) < 1) {
        clearTimeout(timeoutId);
        setActivity((prev) =>
          prev.isScrolling
            ? { ...prev, isScrolling: false }
            : prev,
        );
        return;
      }

      const direction = delta > 0 ? 'forward' : 'backward';

      setActivity((prev) =>
        prev.isScrolling && prev.direction === direction
          ? prev
          : { isScrolling: true, direction },
      );

      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        setActivity((prev) => ({
          ...prev,
          isScrolling: false,
        }));
      }, 180);
    };

    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [sectionRef]);

  return activity;
}
