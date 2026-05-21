<template>
  <section id="about" class="about">
    <div class="about-text">
      <p class="section-tag">{{ lang === 'es' ? 'Nuestra historia' : 'Our story' }}</p>
      <h2 class="section-title">{{ lang === 'es' ? 'Construido con' : 'Built with' }}<br>{{ lang === 'es' ? 'manos y alma' : 'hands and soul' }}</h2>
      <div class="divider"></div>
      <p v-if="lang === 'es'">Cada piedra fue colocada a mano. Cada mosaico cuenta una historia. Este hospedaje nació del deseo de crear un espacio donde el arte, la naturaleza y el descanso existen en perfecta armonía.</p>
      <p v-else>Each stone was placed by hand. Each mosaic tells a story. This lodge was born from the desire to create a space where art, nature and rest exist in perfect harmony.</p>
      <p v-if="lang === 'es'">El río no está cerca — está aquí, como protagonista. Sus cascadas limpian el ruido del mundo y devuelven el tiempo a su ritmo natural.</p>
      <p v-else>The river is not nearby — it is here, as the protagonist. Its waterfalls clean away the noise of the world and return time to its natural rhythm.</p>
      <p v-if="lang === 'es'">Bienvenido a un lugar que no se parece a ningún otro.</p>
      <p v-else>Welcome to a place like no other.</p>
    </div>
    <div class="about-images">
      <div class="about-img"><img :src="'/IMG_9853.JPG'" alt="Habitación artesanal de cabaña en Las Piedras Minca, Sierra Nevada de Santa Marta" loading="lazy" decoding="async"></div>
      <div class="about-img"><img :src="'/IMG_9865.JPG'" alt="Piscina natural de mosaico junto al río en Minca, Colombia" loading="lazy" decoding="async"></div>
      <div class="about-img"><img :src="'/IMG_9840.JPG'" alt="Cocina rústica de cabaña ecológica en Minca" loading="lazy" decoding="async"></div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  lang: String
})
</script>

<style lang="scss" scoped>
.about {
  padding: clamp(3rem, 7vw, 5rem) clamp(1.2rem, 4vw, 3rem);
  background: linear-gradient(135deg, #1a130d 0%, #221810 50%, #1e1a0f 100%);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(2.5rem, 6vw, 5rem);
  align-items: center;
  color: var(--cream);

  .about-text {
    p {
      font-size: var(--fs-body);
      font-weight: 300;
      line-height: 1.75;
      color: rgba(245, 239, 230, 0.82);
      margin-bottom: 1rem;
      text-wrap: pretty;
    }
  }

  .section-tag {
    font-size: clamp(0.7rem, 1.8vw, 0.78rem);
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1rem;
  }

  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: var(--fs-h2);
    color: var(--cream);
    margin-bottom: 1.5rem;
    line-height: 1.15;
    text-wrap: balance;
  }

  .divider {
    width: 60px;
    height: 2px;
    background: linear-gradient(to right, var(--gold), transparent);
    margin-bottom: 1.5rem;
  }

  .about-images {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 220px 220px;
    gap: 15px;
  }

  .about-img {
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }

    &:hover img {
      transform: scale(1.07);
    }

    &:first-child {
      grid-row: span 2;
    }
  }
}

@media (max-width: 900px) {
  .about {
    grid-template-columns: 1fr;
    .about-images {
      grid-template-rows: 200px 200px;
    }
  }
}

@media (max-width: 640px) {
  .about {
    gap: 2rem;
    .about-images {
      gap: 10px;
      grid-template-rows: 150px 150px;
    }
  }
}

@media (max-width: 380px) {
  .about .about-images {
    grid-template-rows: 130px 130px;
  }
}
</style>
