<template>
  <section id="experiences" class="experiences">
    <p class="section-tag">{{ lang === 'es' ? 'Tu día aquí' : 'Your day here' }}</p>
    <h2 class="section-title">{{ lang === 'es' ? 'Una jornada que no olvidarás' : 'A day you won\'t forget' }}</h2>
    <div class="divider"></div>

    <div class="experience-grid">
      <div class="experience-card">
        <img :src="'/IMG_9894.JPG'" alt="Amanecer junto al río en Las Piedras Minca, hospedaje natural en Santa Marta" class="exp-img" loading="lazy" decoding="async">
        <h3>{{ lang === 'es' ? 'Despierta al sonido del río' : 'Wake to the river' }}</h3>
        <p>{{ lang === 'es' ? 'La corriente llega antes que cualquier alarma. Observa cómo la luz de la mañana atraviesa el dosel de la selva.' : 'The current arrives before any alarm. Watch morning light pierce the jungle canopy.' }}</p>
      </div>
      
      <div class="experience-card">
        <img :src="'/IMG_9872.JPG'" alt="Piscina artesanal de mosaico en cabañas Las Piedras Minca" class="exp-img" loading="lazy" decoding="async">
        <h3>{{ lang === 'es' ? 'Sumérgete en el mosaico' : 'Immerse in the mosaic' }}</h3>
        <p>{{ lang === 'es' ? 'La piscina artesanal te espera. Sus bordes de cerámica reflejan la selva.' : 'The handmade pool awaits. Ceramic edges reflect the jungle.' }}</p>
      </div>
      
      <div class="experience-card">
        <img :src="'/IMG_9890.JPG'" alt="Noche estrellada en hospedaje ecológico de Minca, Sierra Nevada" class="exp-img" loading="lazy" decoding="async">
        <h3>{{ lang === 'es' ? 'Encuentro nocturno' : 'Night gathering' }}</h3>
        <p>{{ lang === 'es' ? 'Alrededor de la fogata, las historias cobran vida. Conversaciones profundas bajo un cielo de infinitas estrellas.' : 'Around the bonfire, stories come to life. Deep conversations under an infinite sky of stars.' }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  lang: String
})

</script>

<style lang="scss" scoped>
.experiences {
  padding: clamp(3rem, 7vw, 5rem) clamp(1.2rem, 4vw, 3rem);
  background: linear-gradient(180deg, #f5efe6 0%, #e8dccf 100%);
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

.experience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: clamp(1.2rem, 3vw, 2rem);
  margin-top: 2rem;
}

.experience-card {
  background: var(--cream);
  padding: clamp(1.2rem, 3vw, 2rem);
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border-left: 4px solid var(--gold);
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }

  .exp-img {
    width: 100%;
    height: clamp(180px, 28vw, 220px);
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1rem;
  }

  h3 {
    font-family: 'Playfair Display', serif;
    font-size: var(--fs-h3);
    color: var(--stone);
    margin-bottom: 0.8rem;
    line-height: 1.25;
  }

  p {
    color: var(--dark);
    line-height: 1.65;
    font-size: var(--fs-small);
    text-wrap: pretty;
  }
}

@media (max-width: 640px) {
  .experience-grid {
    grid-template-columns: 1fr;
  }
}
</style>
