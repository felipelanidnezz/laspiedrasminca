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
  padding: clamp(2.5rem, 6vw, 4rem) clamp(1rem, 4vw, 3rem);
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: clamp(1rem, 3vw, 2rem);
  text-align: center;
  color: var(--cream);
}

.stat-item {
  flex: 1 1 0;
  min-width: 0;

  h3 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(1.8rem, 6vw, 2.8rem);
    color: var(--gold);
    margin-bottom: 0.5rem;
    line-height: 1;
  }

  p {
    font-size: clamp(0.7rem, 2vw, 0.9rem);
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 1.3;
  }
}

.separator {
  background: rgba(245, 239, 230, 0.25);
  height: 60px;
  width: 1px;
  flex-shrink: 0;
}

@media (max-width: 900px) {
  .stats-bar {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.8rem 1rem;
  }
  .stat-item { flex: unset; }
  .separator { display: none; }
}

@media (max-width: 360px) {
  .stats-bar {
    grid-template-columns: 1fr 1fr;
    gap: 1.4rem 0.6rem;
    padding: 2rem 0.8rem;
  }
}
</style>
