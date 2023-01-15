import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function Background() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const options = {
    particles: {
      number: {
        value: 488,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#F3f3f3",
      },
      shape: {
        type: "star",
        stroke: {
          width: 0,
          color: "#f3f3f3",
        },
        polygon: {
          nb_sides: 4,
        },
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 4,
          opacity_min: 0,
          sync: false,
        },
      },
      size: {
        value: 1.4,
        random: true,
        anim: {
          enable: true,
          speed: 4,
          size_min: 0.3,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "bubble",
        },
        onclick: {
          enable: false,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 250,
          size: 0,
          duration: 2,
          opacity: 0,
          speed: 3,
        },
        repulse: {
          distance: 438.52169464272635,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
  };
  return <Particles options={options} init={particlesInit} />;
}
