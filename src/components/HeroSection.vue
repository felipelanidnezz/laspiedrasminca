<template>
  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-mosaic-accent"></div>
    
    <div class="hero-content">
      <p class="hero-tag">{{ lang === 'es' ? 'Hospedaje — Naturaleza — Arte' : 'Lodge — Nature — Art' }}</p>
      <h1 class="hero-title">{{ lang === 'es' ? 'Donde la' : 'Where the' }} <em>{{ lang === 'es' ? 'selva' : 'jungle' }}</em><br>{{ lang === 'es' ? 'abraza la piedra' : 'embraces the stone' }}</h1>
      <p class="hero-sub">{{ lang === 'es' ? 'Un refugio único tallado en roca viva, mosaico y madera antigua, con el río como banda sonora perpetua.' : 'A unique refuge carved in live rock, mosaic and ancient wood, with the river as its perpetual soundtrack.' }}</p>
      <a href="#booking" class="hero-cta" @click.prevent="scroll('#booking')">{{ lang === 'es' ? 'Reserva tu estancia' : 'Book your stay' }}</a>
    </div>
    
    <div class="scroll-hint">
      <span>{{ lang === 'es' ? 'Descubre' : 'Discover' }}</span>
      <div class="scroll-line"></div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  lang: String
})

const scroll = (selector) => {
  const element = document.querySelector(selector)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  height: 100vh;
  height: 100dvh; /* dynamic viewport height fixes iOS Safari address bar */
  min-height: 540px;
  background: linear-gradient(135deg, rgba(26, 19, 13, 0.4), rgba(58, 90, 64, 0.3)), url('/IMG_9894.JPG') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--cream);
  overflow: hidden;
  padding-top: var(--safe-top);

  .hero-bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(26, 19, 13, 0.45), rgba(58, 90, 64, 0.35)), url('/IMG_9894.JPG') center/cover no-repeat;
    animation: subtle-zoom 20s ease-in-out infinite;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 720px;
    padding: 0 clamp(1rem, 4vw, 2rem);
    animation: fade-up 1s ease-out 0.2s both;
  }

  .hero-tag {
    font-size: clamp(0.7rem, 1.8vw, 0.85rem);
    letter-spacing: clamp(1.2px, 0.4vw, 2.5px);
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: clamp(0.75rem, 2vw, 1.2rem);
  }

  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: var(--fs-h1);
    line-height: 1.05;
    margin-bottom: clamp(0.75rem, 2vw, 1.2rem);
    letter-spacing: clamp(0px, 0.2vw, 1px);
    text-wrap: balance;

    em {
      color: var(--gold);
      font-style: italic;
    }
  }

  .hero-sub {
    font-size: clamp(0.95rem, 2.6vw, 1.2rem);
    font-weight: 300;
    line-height: 1.6;
    margin-bottom: clamp(1.5rem, 4vw, 2.2rem);
    opacity: 0.92;
    text-wrap: pretty;
  }

  .hero-cta {
    display: inline-block;
    padding: clamp(0.85rem, 2.5vw, 1.05rem) clamp(1.6rem, 5vw, 2.6rem);
    border: 2px solid var(--gold);
    color: var(--gold);
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(0.85rem, 2.3vw, 1rem);
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
    background: rgba(26, 19, 13, 0.25);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    transition: all 0.3s ease;
    cursor: pointer;
    min-height: 48px; /* WCAG tap target */
    line-height: 1.2;

    &:hover, &:focus-visible {
      background: var(--gold);
      color: var(--dark);
    }
  }

  .scroll-hint {
    position: absolute;
    bottom: clamp(1.2rem, 3vh, 2rem);
    right: clamp(1.5rem, 5vw, 3rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    opacity: 0.5;
    font-size: 0.7rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: var(--cream);
  }

  .scroll-line {
    width: 1px;
    height: 50px;
    background: linear-gradient(to bottom, var(--gold), transparent);
    animation: scroll-pulse 2s ease-in-out infinite;
  }
}

@keyframes subtle-zoom {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes scroll-pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}

@media (max-width: 900px) {
  .hero {
    .scroll-hint { display: none; }
  }
}

/* On very short landscape mobile, lock to viewport so content always fits */
@media (max-height: 520px) and (orientation: landscape) {
  .hero {
    min-height: 100dvh;
    .hero-title { font-size: clamp(1.6rem, 5vh, 2.5rem); }
    .hero-sub { font-size: 0.85rem; margin-bottom: 1rem; }
  }
}
</style>
