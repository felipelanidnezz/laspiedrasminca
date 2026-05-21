<template>
  <section id="booking" class="booking">
    <div class="booking-left">
      <p class="section-tag">{{ lang === 'es' ? 'Reservas' : 'Bookings' }}</p>
      <h2 class="section-title">{{ lang === 'es' ? '¿Listo para desconectarte?' : 'Ready to disconnect?' }}</h2>
      <div class="divider"></div>
      <p class="booking-desc">
        {{ lang === 'es' 
          ? 'Para ofrecerte la mejor experiencia y garantizar una estadía segura y confiable, gestionamos todas nuestras reservas de forma directa a través de Airbnb o mediante atención personalizada por WhatsApp.' 
          : 'To offer you the best experience and guarantee a secure and reliable stay, we manage all our bookings directly through Airbnb or via personalized support on WhatsApp.' 
        }}
      </p>
      
      <div class="contact-details">
        <div class="contact-line">
          <span class="icon">📍</span>
          <span>Cabaña Las Piedras — Sector Milagro Verde, Minca, Colombia</span>
        </div>
        <div class="contact-line">
          <span class="icon">📱</span>
          <a href="https://wa.me/573152814134" target="_blank" rel="noopener" class="contact-link">
            {{ lang === 'es' ? 'WhatsApp: +57 315 281 4134' : 'WhatsApp: +57 315 281 4134' }}
          </a>
        </div>
        <div class="contact-line">
          <span class="icon">✉️</span>
          <span>lasantini@yahoo.com</span>
        </div>
      </div>
    </div>
    
    <div class="booking-right">
      <!-- Premium Integrated Booking Card -->
      <div class="booking-card">
        <h3 class="card-title">{{ lang === 'es' ? 'Reserva tu Estadía' : 'Book Your Stay' }}</h3>
        <p class="card-subtitle">
          {{ lang === 'es' ? 'Elige tu plataforma preferida para asegurar tu reserva de forma inmediata:' : 'Choose your preferred platform to secure your reservation instantly:' }}
        </p>
        
        <div class="booking-actions">
          <!-- Airbnb Button -->
          <a 
            href="https://www.airbnb.com.co/rooms/49293031?source_impression_id=p3_1779129070_P37xB5T5HATsp5_Y&check_in=2026-06-16&guests=1&adults=1&check_out=2026-06-18" 
            target="_blank" 
            rel="noopener" 
            class="booking-btn airbnb"
          >
            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor" d="M224 373.1c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm128-40c0-48.6-23.7-93.1-64.2-120.7L224 81.3 160.2 212.4C119.7 240 96 284.5 96 333.1c0 70.7 57.3 128 128 128s128-57.3 128-128zm-128 88c-48.6 0-88-39.4-88-88 0-33.1 16.2-63.5 44-82.3l44-90.8 44 90.8c27.8 18.8 44 49.2 44 82.3 0 48.6-39.4 88-88 88z"/>
            </svg>
            <span>{{ lang === 'es' ? 'Reservar en Airbnb' : 'Book on Airbnb' }}</span>
          </a>

          <!-- Instagram Button -->
          <a 
            href="https://www.instagram.com/laspiedrasminca2026?igsh=N2Y0bnhwbGJxOG9j" 
            target="_blank" 
            rel="noopener" 
            class="booking-btn instagram"
          >
            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
            </svg>
            <span>{{ lang === 'es' ? 'Seguir en Instagram' : 'Follow on Instagram' }}</span>
          </a>
          
          <!-- WhatsApp Button -->
          <a 
            href="https://wa.me/573152814134" 
            target="_blank" 
            rel="noopener" 
            class="booking-btn whatsapp"
          >
            <svg class="btn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-117zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
            </svg>
            <span>{{ lang === 'es' ? 'Consultar por WhatsApp' : 'Inquire via WhatsApp' }}</span>
          </a>
        </div>
        
        <div class="card-footer-note">
          <p>🛡️ {{ lang === 'es' ? 'Reservación 100% Protegida y Tarifas Garantizadas' : '100% Protected Booking & Guaranteed Rates' }}</p>
        </div>
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
.booking {
  padding: 6rem 4rem;
  background: linear-gradient(135deg, #1a130d 0%, #1e1711 100%);
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 5rem;
  color: var(--cream);
  align-items: center;
  border-bottom: 1px solid rgba(201, 168, 76, 0.1);
}

.booking-left {
  .section-tag {
    font-size: 0.75rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 1rem;
  }
  
  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: 2.8rem;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }
  
  .divider {
    width: 60px;
    height: 2px;
    background: linear-gradient(to right, var(--gold), transparent);
    margin-bottom: 2rem;
  }
  
  .booking-desc {
    font-size: 1.05rem;
    line-height: 1.8;
    color: rgba(245, 239, 230, 0.75);
    margin-bottom: 2.5rem;
  }
}

.contact-details {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.contact-line {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  
  .icon {
    font-size: 1.3rem;
    min-width: 32px;
  }
  
  span:last-child {
    color: rgba(245, 239, 230, 0.9);
  }

  .contact-link {
    color: rgba(245, 239, 230, 0.9);
    text-decoration: none;
    transition: color 0.2s ease;
    border-bottom: 1px dashed rgba(201, 168, 76, 0.35);
    padding-bottom: 1px;

    &:hover {
      color: var(--gold);
      border-bottom-color: var(--gold);
    }
  }
}

.booking-card {
  background: rgba(26, 19, 13, 0.4);
  border: 1px solid rgba(201, 168, 76, 0.2);
  padding: 3.5rem 2.5rem;
  border-radius: 16px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.35);
  text-align: center;
  backdrop-filter: blur(10px);
  
  .card-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    color: var(--cream);
    margin-bottom: 0.6rem;
  }
  
  .card-subtitle {
    font-size: 0.95rem;
    color: rgba(245, 239, 230, 0.6);
    margin-bottom: 2.5rem;
    line-height: 1.5;
  }
}

.booking-actions {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 2rem;
}

.booking-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-weight: 700;
  font-size: 1.05rem;
  padding: 1rem 2rem;
  border-radius: 8px;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 100%;
  box-sizing: border-box;
  
  .btn-icon {
    width: 20px;
    height: 20px;
  }
  
  &.airbnb {
    background: linear-gradient(135deg, #FF5A5F 0%, #FF385C 100%);
    color: white !important;
    box-shadow: 0 4px 15px rgba(255, 56, 92, 0.2);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(255, 56, 92, 0.4);
      background: linear-gradient(135deg, #ff6b70 0%, #ff4d6e 100%);
    }
  }
  
  &.instagram {
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
    color: white !important;
    box-shadow: 0 4px 15px rgba(214, 36, 159, 0.2);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(214, 36, 159, 0.4);
      filter: brightness(1.1);
    }
  }
  
  &.whatsapp {
    background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
    color: white !important;
    box-shadow: 0 4px 15px rgba(37, 211, 102, 0.2);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
      background: linear-gradient(135deg, #30e374 0%, #159c8c 100%);
    }
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: none;
  }
}

.card-footer-note {
  font-size: 0.8rem;
  color: rgba(201, 168, 76, 0.6);
  line-height: 1.4;
  margin: 0;
}

@media (max-width: 900px) {
  .booking {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 4rem 1.5rem;
  }
  
  .booking-left {
    .section-title { font-size: 2.2rem; }
  }
  
  .booking-card {
    padding: 2.5rem 1.8rem;
  }
}

@media (max-width: 640px) {
  .booking {
    padding: 3rem 1.2rem;
    gap: 2rem;
  }
  .booking-left {
    .section-title { font-size: 1.8rem; }
    .booking-desc { font-size: 0.95rem; }
  }
  .booking-card {
    padding: 2rem 1.2rem;
    .card-title { font-size: 1.5rem; }
  }
  .booking-btn {
    font-size: 0.95rem;
    padding: 0.9rem 1.2rem;
  }
}
</style>
