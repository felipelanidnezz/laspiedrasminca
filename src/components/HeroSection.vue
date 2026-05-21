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
  min-height: 600px;
  background: linear-gradient(135deg, rgba(26, 19, 13, 0.4), rgba(58, 90, 64, 0.3)), url('/IMG_9894.JPG') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--cream);
  overflow: hidden;
  
  .hero-bg {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(26, 19, 13, 0.4), rgba(58, 90, 64, 0.3)), url('/IMG_9894.JPG') center/cover no-repeat;
    animation: subtle-zoom 20s ease-in-out infinite;
  }
  
  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 720px;
    animation: fade-up 1s ease-out 0.2s both;
  }
  
  .hero-tag {
    font-size: 0.8rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1rem;
  }
  
  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(3rem, 7vw, 6rem);
    line-height: 1.05;
    margin-bottom: 1rem;
    letter-spacing: 1px;
    
    em {
      color: var(--gold);
      font-style: italic;
    }
  }
  
  .hero-sub {
    font-size: 1.2rem;
    font-weight: 300;
    line-height: 1.7;
    margin-bottom: 2rem;
    opacity: 0.9;
  }
  
  .hero-cta {
    display: inline-block;
    padding: 1rem 2.5rem;
    border: 2px solid var(--gold);
    color: var(--gold);
    font-family: 'Cormorant Garamond', serif;
    font-size: 1rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    
    &:hover {
      background: var(--gold);
      color: var(--dark);
    }
  }
  
  .scroll-hint {
    position: absolute;
    bottom: 2rem;
    right: 3rem;
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
    .hero-title { font-size: 2.8rem; }
    .hero-sub { font-size: 1rem; }
    .scroll-hint { display: none; }
  }
}

@media (max-width: 640px) {
  .hero {
    .hero-content { padding: 0 1.2rem; }
    .hero-tag { font-size: 0.7rem; letter-spacing: 1.5px; }
    .hero-title { font-size: 2.1rem; letter-spacing: 0; }
    .hero-sub { font-size: 0.95rem; margin-bottom: 1.5rem; }
    .hero-cta { padding: 0.8rem 1.8rem; font-size: 0.85rem; }
  }
}
</style>
