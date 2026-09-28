"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export function ParticlesBackground() {
  const [init, setInit] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [particleCount, setParticleCount] = useState(50);
  const [pushOnClick, setPushOnClick] = useState(true);

  useEffect(() => {
    setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    // Less motion + fewer particles on small / touch devices (battery + perf).
    setParticleCount(window.innerWidth < 768 ? 25 : 50);
    setPushOnClick(!window.matchMedia("(pointer: coarse)").matches);
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: pushOnClick,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 2,
          },
          repulse: {
            distance: 150,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#a78bfa",
        },
        links: {
          color: "#a78bfa",
          distance: 150,
          enable: true,
          opacity: 0.25,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: 1.2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: particleCount,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      detectRetina: true,
    }),
    [particleCount, pushOnClick],
  );

  if (reducedMotion) {
    // Static brand glow when motion is not wanted — no canvas, no animation loop.
    return (
      <div
        aria-hidden="true"
        className="h-full w-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15),transparent_65%)]"
      />
    );
  }

  if (!init) {
    return null;
  }

  return <Particles id="tsparticles" className="h-full w-full" options={options} />;
}
