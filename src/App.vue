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
}

:root {
  --stone: #3b3128;
  --gold: #c9a84c;
  --cream: #f5efe6;
  --dark: #1a130d;
  --moss: #4a5d42;
  --river: #3d5a80;
  --indigo: #2c3e50;
}

body {
  font-family: 'Cormorant Garamond', serif;
  background-color: var(--cream);
  color: var(--dark);
  line-height: 1.6;
}

.app {
  overflow-x: hidden;
}
</style>
