<template>
  <nav class="navbar">
    <div class="nav-container">
      <a href="#" class="nav-logo">
        <img src="/logo_laspiedrasminca.png" alt="Las Piedras Minca Logo" class="logo-img">
      </a>

      <!-- Desktop nav links -->
      <ul class="nav-links">
        <li><a href="#about" @click.prevent="scroll('#about')">{{ lang === 'es' ? 'Nosotros' : 'About' }}</a></li>
        <li><a href="#spaces" @click.prevent="scroll('#spaces')">{{ lang === 'es' ? 'Espacios' : 'Spaces' }}</a></li>
        <li><a href="#experiences" @click.prevent="scroll('#experiences')">{{ lang === 'es' ? 'Experiencias' : 'Experiences' }}</a></li>
        <li><a href="#booking" @click.prevent="scroll('#booking')">{{ lang === 'es' ? 'Reservar' : 'Book' }}</a></li>
      </ul>

      <div class="lang-selector">
        <button :class="{ active: lang === 'es' }" @click="$emit('toggle-lang', 'es')" class="lang-btn">ES</button>
        <button :class="{ active: lang === 'en' }" @click="$emit('toggle-lang', 'en')" class="lang-btn">EN</button>
      </div>

      <!-- Hamburger button (mobile only) -->
      <button class="hamburger" @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-label="Toggle menu">
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>

    <!-- Mobile dropdown menu -->
    <div class="mobile-menu" :class="{ active: menuOpen }">
      <ul>
        <li><a href="#about" @click.prevent="mobileNav('#about')">{{ lang === 'es' ? 'Nosotros' : 'About' }}</a></li>
        <li><a href="#spaces" @click.prevent="mobileNav('#spaces')">{{ lang === 'es' ? 'Espacios' : 'Spaces' }}</a></li>
        <li><a href="#experiences" @click.prevent="mobileNav('#experiences')">{{ lang === 'es' ? 'Experiencias' : 'Experiences' }}</a></li>
        <li><a href="#booking" @click.prevent="mobileNav('#booking')">{{ lang === 'es' ? 'Reservar' : 'Book' }}</a></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

defineProps({ lang: String })
defineEmits(['toggle-lang'])

const menuOpen = ref(false)

const scroll = (selector) => {
  const el = document.querySelector(selector)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const mobileNav = (selector) => {
  menuOpen.value = false
  setTimeout(() => scroll(selector), 300)
}
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: transparent;
  backdrop-filter: blur(6px);
  z-index: 200;
  isolation: isolate;
}

.nav-container {
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.9rem 3rem;
}

.nav-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-img {
  height: 44px;
  width: auto;
  object-fit: contain;
  transition: transform 0.3s ease;
  border-radius: 6px;
  overflow: hidden;
  &:hover { transform: scale(1.05); }
}

/* remove extra container background so only the image shows */
.nav-logo {
  padding: 0;
  border-radius: 0;
  background: transparent;
  box-shadow: none;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2.5rem;
  flex: 1;

  a {
    color: #ffffff;
    mix-blend-mode: difference;
    text-decoration: none;
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    transition: color 0.3s ease;

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 1px;
      background: var(--gold);
      transition: width 0.3s ease;
    }
    &:hover {
      mix-blend-mode: normal;
      color: var(--gold);
      &::after { width: 100%; background: var(--gold); mix-blend-mode: normal; }
    }
  }
}

.lang-selector {
  margin-left: auto;
  display: flex;
  gap: 0.4rem;
  flex-shrink: 0;
}

.lang-btn {
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(201, 168, 76, 0.25);
  color: #ffffff;
  mix-blend-mode: difference;
  padding: 0.3rem 0.6rem;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Cormorant Garamond', serif;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 6px;

  &:hover {
    mix-blend-mode: normal;
    border-color: var(--gold);
    color: var(--gold);
  }
  &.active {
    background: var(--gold);
    color: var(--dark);
    border-color: var(--gold);
  }
}

// ─── Hamburger button ────────────────────────────────────────────────────────
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  flex-shrink: 0;

  span {
    display: block;
    height: 2px;
    background: var(--cream);
    border-radius: 2px;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    transform-origin: center;

    &.open:nth-child(1) { transform: translateY(9px) rotate(45deg); }
    &.open:nth-child(2) { opacity: 0; transform: scaleX(0); }
    &.open:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }
  }
}

// ─── Mobile dropdown ─────────────────────────────────────────────────────────
.mobile-menu {
  display: none;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(26, 19, 13, 0.98);
  border-top: 1px solid rgba(201, 168, 76, 0.1);

  &.active {
    max-height: 300px;
  }

  ul {
    list-style: none;
    padding: 1rem 2rem 1.5rem;
  }

  li {
    border-bottom: 1px solid rgba(201, 168, 76, 0.08);
    &:last-child { border-bottom: none; }
  }

  a {
    display: block;
    padding: 1rem 0;
    color: var(--cream);
    text-decoration: none;
    font-size: 1.1rem;
    font-family: 'Playfair Display', serif;
    letter-spacing: 0.5px;
    transition: color 0.2s ease;

    &:hover { color: var(--gold); }
  }
}

// ─── Responsive ──────────────────────────────────────────────────────────────
@media (max-width: 900px) {
  .nav-container {
    padding: 0.8rem 1.5rem;
    gap: 1rem;
  }
  .logo-img { height: 38px; }
  .nav-links { gap: 1.5rem; a { font-size: 0.82rem; } }
}

@media (max-width: 640px) {
  .nav-links { display: none; }
  .hamburger { display: flex; }
  .mobile-menu { display: block; }

  .nav-container {
    padding: 0.75rem 1.2rem;
  }
  .logo-img { height: 36px; }
}
</style>
