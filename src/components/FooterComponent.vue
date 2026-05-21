<template>
  <footer class="footer">
    <div class="footer-top">
      <div>
        <div class="footer-brand-name">Las Piedras</div>
        <p class="footer-brand-desc">{{ lang === 'es' ? 'Un hospedaje artesanal donde cada piedra cuenta una historia de amor por la naturaleza.' : 'A handmade lodge where each stone tells a love story for nature.' }}</p>
      </div>
      <div>
        <p class="footer-col-title">{{ lang === 'es' ? 'Explorar' : 'Explore' }}</p>
        <ul class="footer-links">
          <li><a href="#about">{{ lang === 'es' ? 'Nuestra historia' : 'Our story' }}</a></li>
          <li><a href="#spaces">{{ lang === 'es' ? 'Espacios' : 'Spaces' }}</a></li>
          <li><a href="#experiences">{{ lang === 'es' ? 'Experiencias' : 'Experiences' }}</a></li>
          <li><a href="#booking">{{ lang === 'es' ? 'Reservas' : 'Bookings' }}</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-col-title">{{ lang === 'es' ? 'Información' : 'Info' }}</p>
        <ul class="footer-links">
          <li><a href="#">{{ lang === 'es' ? 'Política de cancelación' : 'Cancellation policy' }}</a></li>
          <li><a href="#">{{ lang === 'es' ? 'Cómo llegar' : 'How to get there' }}</a></li>
          <li><a href="#">{{ lang === 'es' ? 'Qué traer' : 'What to bring' }}</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>{{ lang === 'es' ? '© 2025 Las Piedras · Todos los derechos reservados' : '© 2025 Las Piedras · All rights reserved' }}</span>
      <div class="social-row">
        <a href="#" class="social-btn" title="Instagram">ig</a>
        <a href="#" class="social-btn" title="WhatsApp">wa</a>
        <a href="#" class="social-btn" title="Facebook">fb</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineProps({
  lang: String
})
</script>

<style lang="scss" scoped>
.footer {
  background: var(--dark);
  color: var(--cream);
  padding: clamp(2.5rem, 6vw, 4rem) clamp(1.2rem, 4vw, 3rem) clamp(1.5rem, 3vw, 2rem);
  padding-bottom: calc(clamp(1.5rem, 3vw, 2rem) + var(--safe-bottom));
  border-top: 1px solid rgba(201, 168, 76, 0.1);
  text-align: left;
}

.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: clamp(1.8rem, 4vw, 4rem);
  margin-bottom: clamp(2rem, 4vw, 3rem);
}

.footer-brand-name {
  font-family: 'IM Fell English', serif;
  font-size: clamp(1.5rem, 4vw, 1.8rem);
  color: var(--gold);
  margin-bottom: 0.8rem;
  line-height: 1.2;
}

.footer-brand-desc {
  font-size: clamp(0.88rem, 2.3vw, 0.95rem);
  font-weight: 300;
  line-height: 1.75;
  color: rgba(245, 239, 230, 0.55);
  text-wrap: pretty;
}

.footer-col-title {
  font-size: 0.78rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1rem;
}

.footer-links {
  list-style: none;

  li { margin-bottom: 0.1rem; }

  a {
    display: inline-block;
    padding: 0.5rem 0;
    font-size: clamp(0.88rem, 2.3vw, 0.92rem);
    font-weight: 300;
    color: rgba(245, 239, 230, 0.6);
    text-decoration: none;
    transition: color 0.2s;
    min-height: 36px;

    &:hover, &:focus-visible { color: var(--cream); }
    &:active { color: var(--gold); }
  }
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding-top: clamp(1.4rem, 3vw, 2rem);
  border-top: 1px solid rgba(245, 239, 230, 0.07);
  font-size: clamp(0.74rem, 2vw, 0.82rem);
  color: rgba(245, 239, 230, 0.35);
}

.social-row {
  display: flex;
  gap: 0.75rem;
}

.social-btn {
  width: 44px;
  height: 44px;
  border: 1px solid rgba(201, 168, 76, 0.3);
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--gold);
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.2s;

  &:hover, &:focus-visible {
    background: rgba(201, 168, 76, 0.15);
    border-color: var(--gold);
    transform: translateY(-2px);
  }
}

@media (max-width: 900px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 560px) {
  .footer-top {
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>
