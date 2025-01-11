// "use client";
// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// // import { loadSlim } from "tsparticles-slim"

// const ParticlesBackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     console.log(engine);

//     await loadFull(engine);
//   }, []);

//   const particlesLoaded = useCallback(async (container) => {
//     console.log(container);
//   }, []);

//   return (
//     <div>
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         loaded={particlesLoaded}
//         options={{
//           background: {
//             // color: {
//             //   value: "#580c4b",
//             // },
//           },
//           fpsLimit: 60,
//           interactivity: {
//             events: {
//               onClick: {
//                 enable: true,
//                 mode: "push",
//               },
//               onHover: {
//                 enable: true,
//                 mode: "repulse",
//                 // mode: 'grab',
//               },
//               resize: true,
//             },
//             modes: {
//               push: {
//                 quantity: 4,
//               },
//               repulse: {
//                 distance: 150,
//                 duration: 0.4,
//               },
//             //   grab: {
//             //     distance: 300,
//             //     link_linked: {
//             //         opacity: 1
//             //     }
//             //   }
//             },
//           },
//           particles: {
//             color: {
//               value: "#ffffff",
//             },
//             links: {
//               color: "#ffffff",
//               distance: 150,
//               enable: true,
//               opacity: 0.5,
//               width: 0.5,
//             },
//             move: {
//               direction: "none",
//               enable: true,
//               outModes: {
//                 default: "bounce",
//               },
//               random: false,
//               speed: 2,
//               straight: false,
//             },
//             number: {
//               density: {
//                 enable: true,
//                 area: 1200,
//               },
//               value: 80,
//             },
//             opacity: {
//               value: 0.5,
//             },
//             shape: {
//               type: "circle",
//             },
//             size: {
//               value: { min: 1, max: 2 },
//             },
//           },
//           detectRetina: true,
//         }}
//       />
//     </div>
//   );
// };

// export default ParticlesBackground;



// "use client";
// import { useCallback } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSnowPreset } from "tsparticles-preset-snow"; // Import the snow preset

// const ParticlesBackground = () => {
//   const particlesInit = useCallback(async (engine) => {
//     console.log(engine);

//     // Load the full engine and the snow preset
//     await loadFull(engine);
//     await loadSnowPreset(engine);
//   }, []);

//   const particlesLoaded = useCallback(async (container) => {
//     console.log(container);
//   }, []);

//   return (
//     <div style={{ position: "relative" }}>
//       <Particles
//         id="tsparticles"
//         init={particlesInit}
//         loaded={particlesLoaded}
//         options={{
//           preset: "nasa", // Using the snow preset for simplicity
//           particles: {
//             number: {
//               value: 50, // Fewer snow particles
//               density: {
//                 enable: true,
//                 area: 1000, // Adjust density
//               },
//             },
//             move: {
//               enable: true,
//               speed: 0.2, // Slower falling snow
//               direction: "bottom", // Snow falling downwards
//               straight: false,
//               random: false,
//             },
//             opacity: {
//               value: 0.7, // Slightly more opaque snowflakes
//             },
//             size: {
//               value: { min: 1, max: 3 }, // Small size variations
//             },
//           },
//           background: {
//             color: {
//               value: "transparent", // Transparent background
//             },
//           },
//           detectRetina: true, // Retina support for better visuals
//         }}
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           zIndex: -1, // Ensures particles stay in the background
//         }}
//       />
//     </div>
//   );
// };

// export default ParticlesBackground;


"use client";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; // Import the full tsparticles package
import { loadStarsPreset } from "tsparticles-preset-stars"; // Import the NASA stars preset

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    // Load the full engine and the stars preset
    await loadFull(engine);
    await loadStarsPreset(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          preset: "stars", // Use the NASA stars preset
          background: {
            color: {
              value: "black", // Black background for the space effect
            },
          },
          particles: {
            number: {
              value: 80, // Number of stars
              density: {
                enable: true,
                area: 800, // Adjust density for better spacing
              },
            },
            move: {
              enable: true,
              speed: 1, // Slow star movement for a calming effect
              direction: "none",
              random: true,
              outModes: {
                default: "out", // Stars "disappear" as they move out of bounds
              },
            },
            size: {
              value: { min: 1, max: 3 }, // Star size variations
              random: true,
            },
            opacity: {
              value: 0.8, // Slightly brighter stars
              random: true, // Random opacity for a twinkling effect
            },
            twinkle: {
              particles: {
                enable: true, // Enable twinkle effect
                frequency: 0.05, // Frequency of twinkling
                opacity: 1, // Twinkle to full brightness
              },
            },
            shape: {
              type: "circle", // Stars as circular particles
            },
          },
          detectRetina: true, // Retina support for better visuals
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, // Ensure particles stay in the background
        }}
      />
    </div>
  );
};

export default ParticlesBackground;

