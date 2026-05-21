<template>
  <section id="experiences" class="experiences">
    <p class="section-tag">{{ lang === 'es' ? 'Tu día aquí' : 'Your day here' }}</p>
    <h2 class="section-title">{{ lang === 'es' ? 'Una jornada que no olvidarás' : 'A day you won\'t forget' }}</h2>
    <div class="divider"></div>

    <div class="experience-grid">
      <div class="experience-card">
        <img :src="'/IMG_9894.JPG'" alt="Morning" class="exp-img" loading="lazy" decoding="async">
        <h3>{{ lang === 'es' ? 'Despierta al sonido del río' : 'Wake to the river' }}</h3>
        <p>{{ lang === 'es' ? 'La corriente llega antes que cualquier alarma. Observa cómo la luz de la mañana atraviesa el dosel de la selva.' : 'The current arrives before any alarm. Watch morning light pierce the jungle canopy.' }}</p>
      </div>
      
      <div class="experience-card">
        <img :src="'/IMG_9872.JPG'" alt="Afternoon" class="exp-img" loading="lazy" decoding="async">
        <h3>{{ lang === 'es' ? 'Sumérgete en el mosaico' : 'Immerse in the mosaic' }}</h3>
        <p>{{ lang === 'es' ? 'La piscina artesanal te espera. Sus bordes de cerámica reflejan la selva.' : 'The handmade pool awaits. Ceramic edges reflect the jungle.' }}</p>
      </div>
      
      <div class="experience-card">
        <img :src="'/IMG_9890.JPG'" alt="Night" class="exp-img" loading="lazy" decoding="async">
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
  padding: 5rem 3rem;
  background: linear-gradient(180deg, #f5efe6 0%, #e8dccf 100%);
  text-align: center;
  
  .section-tag {
    font-size: 0.75rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1rem;
  }
  
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    color: var(--dark);
    margin-bottom: 1.5rem;
  }
  
  .divider {
    width: 60px;
    height: 2px;
    background: linear-gradient(to right, var(--gold), transparent);
    margin: 0 auto 3rem;
  }
}

.experience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.experience-card {
  background: var(--cream);
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border-left: 4px solid var(--gold);
  text-align: left;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  .exp-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 1rem;
  }
  
  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem;
    color: var(--stone);
    margin-bottom: 0.8rem;
  }
  
  p {
    color: var(--dark);
    line-height: 1.7;
    font-size: 0.95rem;
  }
}

@media (max-width: 900px) {
  .experiences {
    padding: 3rem 1.5rem;
  }
  
  .experience-grid {
    grid-template-columns: 1fr;
  }
}
</style>
