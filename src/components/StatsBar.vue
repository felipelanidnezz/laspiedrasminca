<template>
  <div class="stats-bar">
    <div class="stat-item">
      <h3>∞</h3>
      <p>{{ lang === 'es' ? 'Naturaleza viva' : 'Living nature' }}</p>
    </div>
    <div class="separator"></div>
    <div class="stat-item">
      <h3>6</h3>
      <p>{{ lang === 'es' ? 'Espacios únicos' : 'Unique spaces' }}</p>
    </div>
    <div class="separator"></div>
    <div class="stat-item">
      <h3>1</h3>
      <p>{{ lang === 'es' ? 'Río a tu puerta' : 'River at your door' }}</p>
    </div>
    <div class="separator"></div>
    <div class="stat-item">
      <h3>0</h3>
      <p>{{ lang === 'es' ? 'Días iguales' : 'Identical days' }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  lang: String
})
</script>

<style lang="scss" scoped>
.stats-bar {
  background: linear-gradient(135deg, var(--indigo) 0%, var(--river) 50%, var(--moss) 100%);
  padding: 4rem 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  text-align: center;
  color: var(--cream);
}

.stat-item {
  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    color: var(--gold);
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
}

.separator {
  background: rgba(245, 239, 230, 0.25);
  height: 60px;
  width: 1px;
}

@media (max-width: 900px) {
  .stats-bar {
    padding: 2rem;
  }
  
  .separator {
    display: none;
  }
}
</style>
