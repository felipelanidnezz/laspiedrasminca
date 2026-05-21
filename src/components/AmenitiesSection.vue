<template>
  <section class="amenities">
    <h2>{{ lang === 'es' ? 'Comodidades' : 'Amenities' }}</h2>
    <div class="divider"></div>
    
    <div class="amenities-grid">
      <div v-for="amenity in amenities" :key="amenity.id" class="amenity-item">
        <div class="amenity-icon">{{ amenity.icon }}</div>
        <h3>{{ lang === 'es' ? amenity.nameEs : amenity.nameEn }}</h3>
        <p>{{ lang === 'es' ? amenity.descEs : amenity.descEn }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  lang: String
})

const amenities = [
  { id: 1, icon: '🏞️', nameEs: 'Río privado', nameEn: 'Private river', descEs: 'Acceso exclusivo a cascadas', descEn: 'Exclusive access to waterfalls' },
  { id: 2, icon: '🎨', nameEs: 'Arte en cada rincón', nameEn: 'Art everywhere', descEs: 'Mosaicos y murales', descEn: 'Mosaics and murals' },
  { id: 3, icon: '🍳', nameEs: 'Cocina equipada', nameEn: 'Full kitchen', descEs: 'Isla artesanal completa', descEn: 'Handmade island' },
  { id: 4, icon: '💆', nameEs: 'Piscina de mosaico', nameEn: 'Mosaic pool', descEs: 'Rodeada de vegetación', descEn: 'Surrounded by plants' }
]
</script>

<style lang="scss" scoped>
.amenities {
  padding: clamp(3rem, 7vw, 5rem) clamp(1.2rem, 4vw, 3rem);
  background: var(--dark);
  color: var(--cream);
  text-align: center;

  h2 {
    font-family: 'Playfair Display', serif;
    font-size: var(--fs-h2);
    margin-bottom: 1.5rem;
    color: var(--gold);
    line-height: 1.15;
  }

  .divider {
    width: 60px;
    height: 2px;
    background: linear-gradient(to right, var(--gold), transparent);
    margin: 0 auto clamp(2rem, 5vw, 3rem);
  }
}

.amenities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: clamp(1rem, 2.5vw, 2rem);
  margin-top: 2rem;
}

.amenity-item {
  padding: clamp(1.2rem, 3vw, 2rem);
  border: 1px solid rgba(201, 168, 76, 0.3);
  border-radius: 12px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover, &:focus-within {
    background: rgba(201, 168, 76, 0.1);
    border-color: var(--gold);
    transform: translateY(-5px);
  }

  .amenity-icon {
    font-size: clamp(1.6rem, 4vw, 2rem);
    margin-bottom: 0.8rem;
  }

  h3 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1rem, 2.6vw, 1.15rem);
    margin-bottom: 0.5rem;
    color: var(--gold);
    line-height: 1.25;
  }

  p {
    font-size: clamp(0.82rem, 2.2vw, 0.92rem);
    color: rgba(245, 239, 230, 0.6);
    line-height: 1.55;
    text-wrap: pretty;
  }
}

@media (max-width: 900px) {
  .amenities-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 380px) {
  .amenities-grid {
    grid-template-columns: 1fr;
  }
}
</style>
