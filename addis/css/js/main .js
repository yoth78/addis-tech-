// Product data shared across pages
const products = [
  { name: "AddisHearing", desc: "Digital hearing aid with embedded DSP processing, designed for accessibility." },
  { name: "BlindStick", desc: "Ultrasonic navigation device with real‑time vibration feedback." },
  { name: "AddisMeter", desc: "Smart energy monitor (voltage, current, power) with cellular reporting." },
  { name: "AddisAPV (Smart Router)", desc: "Secure embedded networking for optimized connectivity." },
  { name: "AddisCam", desc: "PoE smart camera with edge streaming for institutional security." },
  { name: "AddisLight", desc: "Intelligent lighting with motion sensing and IoT automation." },
  { name: "AddisNFC", desc: "NFC‑based access control with relay automation." },
  { name: "AutoBell", desc: "Centralized scheduling and bell management for schools/factories." },
  { name: "AddisAudioMeter", desc: "Precision tone generator for lab calibration and training." }
];

// Optional: highlight current page in navigation
document.addEventListener('DOMContentLoaded', function() {
  const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentLocation) {
      link.classList.add('active');
    }
  });
});