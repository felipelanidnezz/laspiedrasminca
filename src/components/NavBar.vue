<template>
  <nav class="navbar" :class="{ scrolled: isScrolled }">
    <div class="nav-container">
      <a href="#" class="nav-logo" @click.prevent="scroll('body')">
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
import { ref, onMounted, onBeforeUnmount } from 'vue'

defineProps({ lang: String })
defineEmits(['toggle-lang'])

const menuOpen = ref(false)
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 80
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})

const scroll = (selector) => {
  if (selector === 'body') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    return
  }
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
  z-index: 200;
  isolation: isolate;
  transition: background 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
  border-bottom: 1px solid transparent;

  /* Subtle dark gradient so text is always readable over the hero image */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(26, 19, 13, 0.55) 0%, rgba(26, 19, 13, 0.25) 60%, rgba(26, 19, 13, 0) 100%);
    pointer-events: none;
    transition: opacity 0.4s ease;
    z-index: -1;
  }

  &.scrolled {
    background: rgba(26, 19, 13, 0.85);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border-bottom-color: rgba(201, 168, 76, 0.15);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);

    &::before { opacity: 0; }
  }
}

.nav-container {
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0.9rem 3rem;
}

.nav-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
  padding: 0;
  background: transparent;
  box-shadow: none;
}

.logo-img {
  height: 48px;
  width: auto;
  object-fit: contain;
  border-radius: 12px;
  transition: transform 0.3s ease, filter 0.3s ease, box-shadow 0.3s ease;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.35));
  &:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.45));
  }
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2.5rem;
  flex: 1;
  justify-content: center;

  a {
    color: #f5efe6;
    text-decoration: none;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-weight: 500;
    font-family: 'Cormorant Garamond', serif;
    position: relative;
    transition: color 0.3s ease;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.45);

    &::after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 1px;
      background: var(--gold);
      transition: width 0.3s ease;
    }
    &:hover {
      color: var(--gold);
      &::after { width: 100%; }
    }
  }
}

.lang-selector {
  display: flex;
  gap: 0.4rem;
  flex-shrink: 0;
}

.lang-btn {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(245, 239, 230, 0.35);
  color: #f5efe6;
  padding: 0.35rem 0.7rem;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Cormorant Garamond', serif;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-weight: 600;
  border-radius: 4px;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);

  &:hover {
    border-color: var(--gold);
    color: var(--gold);
    background: rgba(201, 168, 76, 0.1);
  }
  &.active {
    background: var(--gold);
    color: var(--dark);
    border-color: var(--gold);
    box-shadow: 0 2px 8px rgba(201, 168, 76, 0.4);
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
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);

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
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid rgba(201, 168, 76, 0.15);

  &.active {
    max-height: 320px;
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
  .logo-img { height: 42px; }
  .nav-links { gap: 1.5rem; a { font-size: 0.8rem; letter-spacing: 1.2px; } }
}

@media (max-width: 640px) {
  .nav-links { display: none; }
  .hamburger { display: flex; }
  .mobile-menu { display: block; }

  .nav-container {
    padding: 0.75rem 1.2rem;
  }
  .logo-img { height: 38px; }

  .lang-selector { margin-left: auto; margin-right: 0.5rem; }
}
</style>
