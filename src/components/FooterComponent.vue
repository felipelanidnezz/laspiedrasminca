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
  padding: 4rem 3rem 2rem;
  border-top: 1px solid rgba(201, 168, 76, 0.1);
  text-align: left;
}

.footer-top {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 4rem;
  margin-bottom: 3rem;
}

.footer-brand-name {
  font-family: 'IM Fell English', serif;
  font-size: 1.8rem;
  color: var(--gold);
  margin-bottom: 0.8rem;
}

.footer-brand-desc {
  font-size: 0.95rem;
  font-weight: 300;
  line-height: 1.8;
  color: rgba(245, 239, 230, 0.5);
}

.footer-col-title {
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 1rem;
}

.footer-links {
  list-style: none;
  
  li {
    margin-bottom: 0.6rem;
  }
  
  a {
    font-size: 0.9rem;
    font-weight: 300;
    color: rgba(245, 239, 230, 0.55);
    text-decoration: none;
    transition: color 0.2s;
    
    &:hover {
      color: var(--cream);
    }
  }
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(245, 239, 230, 0.07);
  font-size: 0.8rem;
  color: rgba(245, 239, 230, 0.3);
}

.social-row {
  display: flex;
  gap: 1rem;
}

.social-btn {
  width: 36px;
  height: 36px;
  border: 1px solid rgba(201, 168, 76, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gold);
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.2s;
  
  &:hover {
    background: rgba(201, 168, 76, 0.12);
    border-color: var(--gold);
  }
}

@media (max-width: 900px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}

@media (max-width: 600px) {
  .footer {
    padding: 2rem 1.5rem;
  }
  
  .footer-top {
    grid-template-columns: 1fr;
  }
  
  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
