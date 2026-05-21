<template>
  <section id="spaces" class="spaces">
    <p class="section-tag">{{ lang === 'es' ? 'Nuestros espacios' : 'Our spaces' }}</p>
    <h2 class="section-title">{{ lang === 'es' ? 'Cada rincón,' : 'Every corner,' }}<br>{{ lang === 'es' ? 'una experiencia' : 'an experience' }}</h2>
    <div class="divider"></div>

    <div class="spaces-grid">
      <div v-for="space in spaces" :key="space.id" class="space-card">
        <img :src="space.image" :alt="lang === 'es' ? space.nameEs : space.nameEn" class="space-image" loading="lazy" decoding="async">
        <div class="space-overlay">
          <div class="space-icon">{{ space.icon }}</div>
          <div class="space-name">{{ lang === 'es' ? space.nameEs : space.nameEn }}</div>
          <div class="space-desc">{{ lang === 'es' ? space.descEs : space.descEn }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  lang: String
})

const spaces = computed(() => [
  { id: 1, image: '/IMG_9853.JPG', icon: '🌙', nameEs: 'La Habitación de Piedra', nameEn: 'The Stone Room', descEs: 'Cama doble en plataforma de roca', descEn: 'Double bed on rock platform' },
  { id: 2, image: '/IMG_9835.JPG', icon: '🌿', nameEs: 'El Salón de la Hamaca', nameEn: 'The Hammock Lounge', descEs: 'Sofás de piedra y hamaca tradicional', descEn: 'Stone sofas and traditional hammock' },
  { id: 3, image: '/IMG_9867.JPG', icon: '🌅', nameEs: 'La Terraza del Río', nameEn: 'The River Terrace', descEs: 'Sala acristalada sobre la corriente', descEn: 'Glazed lounge over the current' },
  { id: 4, image: '/IMG_9872.JPG', icon: '💧', nameEs: 'La Piscina de Mosaico', nameEn: 'The Mosaic Pool', descEs: 'Jacuzzi con bordes de mosaico multicolor', descEn: 'Jacuzzi with colorful mosaic edges' },
  { id: 5, image: '/IMG_9890.JPG', icon: '🔥', nameEs: 'Zona de Fogata', nameEn: 'Bonfire Area', descEs: 'Encuentro bajo las estrellas', descEn: 'Gathering under the stars' },
  { id: 6, image: '/IMG_9848.JPG', icon: '☀️', nameEs: 'El Gazebo Sol & Luna', nameEn: 'The Sun & Moon Gazebo', descEs: 'Espacio con techo traslúcido', descEn: 'Space with translucent roof' }
])
</script>

<style lang="scss" scoped>
.spaces {
  padding: clamp(3rem, 7vw, 5rem) clamp(1.2rem, 4vw, 3rem);
  background: linear-gradient(180deg, #f5efe6 0%, #f0e6d6 100%);
  text-align: center;

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
    color: var(--dark);
    margin-bottom: 1.5rem;
    line-height: 1.15;
    text-wrap: balance;
  }

  .divider {
    width: 60px;
    height: 2px;
    background: linear-gradient(to right, var(--gold), transparent);
    margin: 0 auto clamp(2rem, 5vw, 3rem);
  }
}

.spaces-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: clamp(1rem, 2.5vw, 2rem);
  margin-top: 2rem;
}

.space-card {
  position: relative;
  height: clamp(260px, 32vw, 380px);
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);

  &:hover, &:focus-within {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.22);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(26, 19, 13, 0.15) 0%, rgba(26, 19, 13, 0.65) 100%);
    transition: background 0.3s ease;
    z-index: 1;
  }

  &:hover::before {
    background: linear-gradient(180deg, rgba(26, 19, 13, 0.3) 0%, rgba(26, 19, 13, 0.8) 100%);
  }
}

.space-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.space-card:hover .space-image {
  transform: scale(1.06);
}

.space-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  text-align: center;
  color: var(--cream);
  padding: clamp(1rem, 3vw, 1.8rem);
  z-index: 2;
}

.space-icon {
  font-size: clamp(1.6rem, 4vw, 2rem);
  margin-bottom: 0.4rem;
  filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.5));
}

.space-name {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.2rem, 3vw, 1.7rem);
  margin-bottom: 0.4rem;
  line-height: 1.2;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
}

.space-desc {
  font-size: clamp(0.85rem, 2vw, 0.95rem);
  opacity: 1; /* always visible on touch */
  transition: opacity 0.3s ease;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);
  line-height: 1.4;
  max-width: 90%;
}

/* Only hide-on-hover on real hover devices (desktop) */
@media (hover: hover) and (pointer: fine) {
  .space-desc {
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  .space-card:hover .space-desc {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 900px) {
  .spaces-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .spaces-grid {
    grid-template-columns: 1fr;
    gap: 1.1rem;
  }
  .space-card {
    height: 260px;
  }
}
</style>
