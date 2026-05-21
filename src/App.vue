<template>
  <div class="app">
    <nav-bar :lang="currentLang" @toggle-lang="toggleLang" />
    
    <hero-section :lang="currentLang" />
    
    <stats-bar :lang="currentLang" />
    
    <about-section :lang="currentLang" />
    
    <spaces-section :lang="currentLang" />
    
    <gallery-strip :lang="currentLang" />
    
    <experiences-section :lang="currentLang" />
    
    <amenities-section :lang="currentLang" />
    
    <booking-section :lang="currentLang" />
    
    <map-section :lang="currentLang" />
    
    <footer-component :lang="currentLang" />
    
    <whatsapp-float :lang="currentLang" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import StatsBar from './components/StatsBar.vue'
import AboutSection from './components/AboutSection.vue'
import SpacesSection from './components/SpacesSection.vue'
import GalleryStrip from './components/GalleryStrip.vue'
import ExperiencesSection from './components/ExperiencesSection.vue'
import AmenitiesSection from './components/AmenitiesSection.vue'
import BookingSection from './components/BookingSection.vue'
import MapSection from './components/MapSection.vue'
import FooterComponent from './components/FooterComponent.vue'
import WhatsappFloat from './components/WhatsappFloat.vue'

const currentLang = ref('es')

const toggleLang = (lang) => {
  currentLang.value = lang
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  text-size-adjust: 100%;
}

:root {
  --stone: #3b3128;
  --gold: #c9a84c;
  --cream: #f5efe6;
  --dark: #1a130d;
  --moss: #4a5d42;
  --river: #3d5a80;
  --indigo: #2c3e50;

  /* Safe area helpers (iPhone notch, etc.) */
  --safe-top: env(safe-area-inset-top, 0px);
  --safe-bottom: env(safe-area-inset-bottom, 0px);
  --safe-left: env(safe-area-inset-left, 0px);
  --safe-right: env(safe-area-inset-right, 0px);

  /* Fluid font sizes (mobile-first responsive typography) */
  --fs-h1: clamp(2.1rem, 8vw, 6rem);
  --fs-h2: clamp(1.7rem, 5.5vw, 2.8rem);
  --fs-h3: clamp(1.15rem, 3.5vw, 1.5rem);
  --fs-body: clamp(0.95rem, 2.4vw, 1.1rem);
  --fs-small: clamp(0.78rem, 2vw, 0.95rem);
}

body {
  font-family: 'Cormorant Garamond', serif;
  background-color: var(--cream);
  color: var(--dark);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  overscroll-behavior-y: none; /* prevents pull-to-refresh weirdness */
}

.app {
  overflow-x: clip;
  width: 100%;
  max-width: 100vw;
}

/* Make every interactive element a comfy tap target */
a, button {
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}

/* Avoid zooming on input focus on iOS */
input, select, textarea {
  font-size: 16px;
}

/* Prevent any image from spilling outside its container */
img {
  max-width: 100%;
  height: auto;
  display: block;
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>
