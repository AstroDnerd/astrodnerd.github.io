/*
  My Personal Website Scripts
  Handles the typing animation and any interactive elements.
*/

// Initialize Typed.js for the Hero Section
// I want to cycle through my core professional identities.
var typed = new Typed(".var-text", {
    strings: [
        "Machine Learning Researcher.",
        "Data Analyst.",
        "High Performance Computing Engineer.",
        "Problem Solver.",
        "Computational Astrophysicist."
    ],
    typeSpeed: 60,   // How fast I type
    backSpeed: 40,   // How fast I delete
    backDelay: 1500, // Pause before deleting
    loop: true       // Keep it going
});

/* Future TODO: 
  - Add ScrollReveal for fading in elements.
  - Add a particle.js background for the hero section (maybe stars?).
*/
console.log("Welcome to the console. If you are looking here, you probably want to hire me. Email me!");